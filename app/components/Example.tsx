"use client";

import React, { useRef } from "react";
import Example1 from "public/images/example1.jpeg";
import Example2 from "public/images/example2.jpeg";
import Example3 from "public/images/example3.jpeg";
import Example4 from "public/images/example4.jpeg";
import Example5 from "public/images/example5.jpeg";
import Example6 from "public/images/example6.jpeg";
import Example7 from "public/images/example7.jpeg";
import Example8 from "public/images/example8.jpeg";
import Example9 from "public/images/example9.jpeg";
import Example10 from "public/images/example10.jpeg";
import Image, { StaticImageData } from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
const ExampleList = [
  {
    id: 1,
    array: [
      {
        id: 1,
        src: Example1,
      },
      {
        id: 2,
        src: Example2,
      },
    ],
  },
  {
    id: 2,
    array: [
      {
        id: 1,
        src: Example3,
      },
      {
        id: 2,
        src: Example4,
      },
    ],
  },
  {
    id: 3,
    array: [
      {
        id: 1,
        src: Example5,
      },
      {
        id: 2,
        src: Example6,
      },
    ],
  },
  {
    id: 4,
    array: [
      {
        id: 1,
        src: Example7,
      },
      {
        id: 2,
        src: Example8,
      },
    ],
  },
  {
    id: 5,
    array: [
      {
        id: 1,
        src: Example9,
      },
      {
        id: 2,
        src: Example10,
      },
    ],
  },
];
type Item = {
  id: number;
  src: StaticImageData;
};

const EachItem = ({ array }: { array: Item[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.45 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className={"grid grid-cols-1 md:grid-cols-2 gap-4"}
    >
      {array.map(({ src, id }) => (
        <div
          key={id}
          className={
            "relative h-96 bg-blue-300 rounded-3xl overflow-hidden hover:scale-105 cursor-pointer transition-all ease-in-out duration-500"
          }
        >
          <Image src={src} alt={`example${id}`} fill />
        </div>
      ))}
    </motion.div>
  );
};
const Example = () => {
  return (
    <ul className={"flex flex-col gap-6 px-4"}>
      {ExampleList.map(({ id, array }) => (
        <EachItem key={id} array={array} />
      ))}
    </ul>
  );
};

export default Example;
