"use client";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import Cheer from "public/icons/cheer.png";
import Question from "public/icons/question.png";
import System from "public/icons/money-system.png";
import Difficulty from "public/icons/difficulty.png";
import Confuse from "public/icons/confused.png";
import Bulb from "public/icons/bulb.png";

const MENU = [
  {
    id: 1,
    content: "돈을 벌기 시작했지만 어떻게 관리해야 할지 모른다",
    icon: Confuse,
  },
  {
    id: 2,
    content: "돈을 벌고는 있지만 모이지 않고 자산분배가 어렵다",
    icon: Difficulty,
  },
  {
    id: 3,
    content: "효율적인 돈 관리 시스템을 갖추고싶다",
    icon: System,
  },
  {
    id: 4,
    content: "연금준비의 중요성은 알겠지만 내게 맞는 상품을 모르겠다",
    icon: Question,
  },
  {
    id: 5,
    content: "내 보험을 점검받고 걱정을 덜고싶다",
    icon: Cheer,
    source:
      "https://kr.freepik.com/icon/cheer_6454516#fromView=search&term=%ED%96%89%EB%B3%B5&page=1&position=76&track=ais",
  },
];
type Item = {
  id: number;
  content: string;
  icon: StaticImageData;
  source?: string;
};
const MenuItem = ({ content }: { content: Item }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      className={"relative h-32 flex items-center max-w-720 overflow-hidden"}
      ref={ref}
    >
      <motion.div
        className={"flex items-center gap-8 border-b-2 pb-4 w-full"}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 1 },
        }}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Image
          src={content.icon}
          width={48}
          height={48}
          alt={content.content}
        />

        <p className={"text-gray-600 text-lg"}>{content.content}</p>
      </motion.div>
    </div>
  );
};

const AnimatedBox = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section className={"px-4 relative"} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 0.5 },
          visible: { opacity: 1, x: 1 },
        }}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className={"text-xl flex items-center gap-4 mb-16"}>
          <Image src={Bulb} alt={"good"} width={56} height={56} />
          <a
            className={"hidden"}
            href="https://kr.freepik.com/icon/idea-bulb_4797596#fromView=search&term=%EC%A0%84%EA%B5%AC&page=1&position=17&track=ais"
          >
            rsetiawan 제작 아이콘
          </a>
          이런분들, 상담을 통해 큰 도움이 됩니다
        </h2>
      </motion.div>
      <div className={"flex flex-col gap-6"}>
        {MENU.map((item) => (
          <MenuItem key={item.id} content={item} />
        ))}
      </div>
    </section>
  );
};

export default AnimatedBox;
