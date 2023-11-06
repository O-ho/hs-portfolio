import { AnimatedBox, MainTop } from "@/app/components";
import Example from "@/app/components/Example";
import Carousel from "@/app/components/Carousel";
import Float from "@/app/components/Float";

import React from "react";
import ApplyButton from "@/app/components/ApplyButton";

export default function Home() {
  return (
    <>
      <MainTop />
      <div
        className={
          "h-96 w-full bg-amber-100 flex items-center justify-center text-4xl"
        }
      >
        경력 자리
      </div>
      <AnimatedBox />
      <Carousel />
      <Example />
      <div className={"text-2xl h-24 flex items-center justify-center"}>
        안내 문구 자리
      </div>
      <ApplyButton />
      <Float />
    </>
  );
}
