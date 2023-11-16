"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimateTitle = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <div className={"w-full"} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 1 },
        }}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateTitle;
