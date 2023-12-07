"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { EXAMPLE } from "@/app/constants/example";
import { useOverlay } from "@toss/use-overlay";
import ModalWrapper from "@/app/template/ModalWrapper";
import Carousel from "react-multi-carousel";
import Close from "public/icons/ic_close_w.png";

import "react-multi-carousel/lib/styles.css";
import useLockScroll from "@/app/hooks/useLockScroll";
import AnimateTitle from "@/app/components/AnimateTitle";

type Item = {
  id: number;
  src: StaticImageData;
};
type Props = {
  isOpen: boolean;
  exit: () => void;
  id: number;
  list: Item[];
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
const Modal = ({ isOpen, exit, list }: Props) => {
  useLockScroll(true);

  return (
    <ModalWrapper>
      <div className={"w-full h-full relative z-50"}>
        <button
          type={"button"}
          onClick={() => exit()}
          className={
            "absolute right-8 top-12 w-10 h-10 flex items-center justify-center z-50"
          }
        >
          <Image src={Close} alt={"close"} width={30} height={30} />
        </button>
        <Carousel
          responsive={responsive}
          className="relative"
          minimumTouchDrag={40}
        >
          {list.map(({ id, src }) => (
            <div key={id} className={"flex items-center justify-center"}>
              <div
                className={
                  "relative scale-y-90 h-mq2 w-mq rounded-2xl overflow-hidden"
                }
              >
                <Image
                  src={src}
                  alt={`example${id}`}
                  fill
                  sizes={"100%"}
                  priority
                />
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
    const array = EXAMPLE.filter((item) => item.id === id).concat(
      EXAMPLE.filter((item) => item.id !== id),
    );
    overlay.open(({ isOpen, exit }) => (
      <Modal isOpen={isOpen} exit={exit} id={id} list={array} />
    ));
  };
  return (
    <div onDrag={(e) => e.stopPropagation()} className={"z-full px-4"}>
      <AnimateTitle>
        <h2 className={"text-xl flex items-center text-black pl-4"}>
          상담 후기
        </h2>
      </AnimateTitle>
      <div className={"grid-cols-2 gap-2 grid mt-4"}>
        {EXAMPLE.map(({ id, src }) => (
          <button
            type={"button"}
            onClick={() => {
              onClickImage(id);
            }}
            key={id}
          >
            <div
              className={
                "h-48 bg-gray-200 flex rounded-lg overflow-hidden shadow-gray-200 shadow-2xl"
              }
            >
              <img
                className={"object-cover w-full rounded-lg"}
                src={src.src}
                alt={`example${id}`}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Example;
