"use client";

import React from "react";
import KakaoIcon from "public/icons/ic_kakao.png";
import Image from "next/image";
import Link from "next/link";
const Float = () => {
  const onClickLink = () => {};
  return (
    <div
      className={
        "fixed bottom-8 right-4 md:right-8 xl:right-96 flex justify-end"
      }
    >
      <Link
        href={"https://open.kakao.com/o/s93LYp7e"}
        type={"button"}
        className={
          "w-16 h-16 bg-white items-center flex justify-center rounded-full shadow-2xl overflow-hidden"
        }
      >
        <Image
          className={"w-auto h-auto"}
          src={KakaoIcon}
          alt={"kakao"}
          width={48}
          height={48}
        />
      </Link>
    </div>
  );
};

export default Float;
