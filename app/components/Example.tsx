"use client";

import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { EXAMPLE } from "@/app/constants/example";
import { useOverlay } from "@toss/use-overlay";
import ModalWrapper from "@/app/template/ModalWrapper";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
type Item = {
  id: number;
  src: StaticImageData;
};
type Props = {
  isOpen: boolean;
  exit: () => void;
  id: number;
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Modal = ({ isOpen, exit, id }: Props) => {
  const ref = useRef<Carousel>(null);
  useEffect(() => {
    ref.current?.goToSlide(id);
  }, [ref, id]);

  if (!isOpen) return null;
  console.log(id);
  return (
    <ModalWrapper>
      <div className={"w-full h-full bg-opacity-40 bg-gray-300 relative"}>
        <Carousel
          responsive={responsive}
          className="relative"
          ref={ref}
          minimumTouchDrag={40}
        >
          {EXAMPLE.map(({ id, src }) => (
            <div
              key={id}
              onClick={() => exit()}
              className={"flex items-center justify-center"}
            >
              <div className={"relative scale-x-75 scale-y-90 h-mq w-mq"}>
                <Image src={src} alt={`example${id}`} fill sizes={"100%"} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </ModalWrapper>
  );
};
const Example = () => {
  const overlay = useOverlay();
  const onClickImage = (id: number) => {
    overlay.open(({ isOpen, exit }) => (
      <Modal isOpen={isOpen} exit={exit} id={id} />
    ));
  };
  return (
    <div className={"p-2"}>
      <p>클릭 확대 추가</p>
      <div className={"grid grid-cols-2 sm:grid-cols-3 gap-1.5"}>
        {EXAMPLE.map(({ id, src }) => (
          <button type={"button"} onClick={() => onClickImage(id)} key={id}>
            <div className={"relative h-72 sm:h-72 overflow-hidden rounded-xl"}>
              <Image src={src} alt={`example${id}`} fill sizes={"100%"} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Example;
