"use client";

import React from "react";
import { CAREER } from "@/app/constants/career";
import Image from "next/image";
import { RxDot } from "react-icons/rx";
import { motion } from "framer-motion";
const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
    },
  }),
};
const Career = () => {
  return (
    <section className={"flex flex-col pt-10"}>
      <div className={"flex gap-4 px-4"}>
        <div className={"flex flex-col gap-2"}>
          <Image
            className={"rounded-3xl min-h-350"}
            src={"/images/hs_main.jpeg"}
            priority
            alt={"hs"}
            width={180}
            height={300}
          />
          {/*<h2 className={"text-l font-semibold tracking-wide text-center"}>*/}
          {/*  나현석*/}
          {/*</h2>*/}
        </div>
        <ul className={"flex flex-col gap-3.5 justify-center"}>
          {CAREER.map((item, index) => (
            <motion.li
              variants={fadeInAnimation}
              initial={"initial"}
              animate={"animate"}
              whileInView={"animate"}
              viewport={{ once: true }}
              key={item}
              custom={index}
              className={`flex gap-1 items-center justify-center}`}
            >
              <RxDot />
              <span
                className={
                  "font-medium text-xs mobile:text-s text-neutral-800 font-sans"
                }
              >
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Career;
