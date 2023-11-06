"use client";
import { FaCheck } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const MENU = [
  {
    id: 1,
    content: "돈을 벌기 시작했지만 어떻게 관리해야 할지 모른다",
  },
  {
    id: 2,
    content: "돈을 벌고는 있지만 모이지 않고 자산분배가 어렵다",
  },
  {
    id: 3,
    content: "효율적인 돈 관리 시스템을 갖추고싶다",
  },
  {
    id: 4,
    content: "연금준비의 중요성은 알겠지만 내게 맞는 상품을 모르겠다",
  },
  {
    id: 5,
    content: "내 보험을 점검받고 걱정을 덜고싶다",
  },
];
const MenuItem = ({ content }: { content: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <div
      className={"relative h-16  flex items-center max-w-720 overflow-hidden"}
      ref={ref}
    >
      <motion.div
        className={"pb-1 border-b-2 flex items-center gap-2"}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 1 },
        }}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <FaCheck />
        <p className={"text-lg text-gray-900"}>{content}</p>
      </motion.div>
    </div>
  );
};

const AnimatedBox = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section className={"py-12 px-4 relative"} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 0.5 },
          visible: { opacity: 1, x: 1 },
        }}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className={" text-2xl"}>
          💡 이런분들, 상담을 통해 큰 도움이 됩니다
        </h2>
      </motion.div>
      <div className={"flex flex-col gap-6 mt-8"}>
        {MENU.map((item) => (
          <MenuItem key={item.id} content={item.content} />
        ))}
      </div>
    </section>
  );
};

export default AnimatedBox;
