"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

const AnimatedParallel = ({
  children,
  direction = "vertical",
}: {
  children: React.ReactNode;
  direction: "vertical" | "parallel";
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const variants = () => {
    if (direction === "parallel") {
      return {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 1 },
      };
    } else {
      return {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 1 },
      };
    }
  };

  return (
    <div ref={ref} className={"w-full flex"}>
      <motion.div
        className={"flex items-center gap-8 pb-4 w-full"}
        variants={variants()}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedParallel;
