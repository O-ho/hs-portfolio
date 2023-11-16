"use client";

import React from "react";
import { CAREER_IMG } from "@/app/constants/career";
import Image from "next/image";

const CareerImage = () => {
  return (
    <section onClick={(e) => e.stopPropagation()} className={"mt-6"}>
      <ul className={"grid-cols-3 grid gap-2 mx-4"}>
        {CAREER_IMG.map(({ id, src }) => (
          <li
            key={id}
            className={
              "relative w-full h-0.3 max-h-52 overflow-hidden rounded-xl"
            }
          >
            <Image
              src={src}
              alt={`career-${id}`}
              fill
              className={"object-cover"}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CareerImage;
