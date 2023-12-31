import React from "react";
import AnimateTitle from "@/app/components/AnimateTitle";
import Image from "next/image";
import Bulb from "*.png";
import AnimatedParallel from "@/app/components/AnimatedParallel";

const ProgressOrder = () => {
  return (
    <section>
      <AnimateTitle>
        <h2 className={"text-xl flex items-center text-black pl-4"}>
          상담은 이런식으로 진행 됩니다.
        </h2>
      </AnimateTitle>
      <ul className={"flex flex-col w-full gap-6 p-4"}>
        <AnimatedParallel direction={"vertical"}>
          <li
            className={
              "flex items-center h-64 bg-gray-100 justify-center rounded-2xl w-full"
            }
          >
            1번
          </li>
        </AnimatedParallel>
        <div className={"flex items-center justify-center"}>하단 애로우</div>
        <AnimatedParallel direction={"vertical"}>
          <li
            className={
              "flex items-center h-64 bg-gray-100 justify-center rounded-2xl w-full"
            }
          >
            2번
          </li>
        </AnimatedParallel>

        <div className={"flex items-center justify-center"}>하단 애로우</div>

        <AnimatedParallel direction={"vertical"}>
          <li
            className={
              "flex items-center h-64 bg-gray-100 justify-center rounded-2xl w-full"
            }
          >
            3번
          </li>
        </AnimatedParallel>
        <div className={"flex items-center justify-center"}>하단 애로우</div>
        <AnimatedParallel direction={"vertical"}>
          <li
            className={
              "flex items-center h-64 bg-gray-100 justify-center rounded-2xl w-full"
            }
          >
            4번
          </li>
        </AnimatedParallel>
      </ul>
    </section>
  );
};

export default ProgressOrder;
