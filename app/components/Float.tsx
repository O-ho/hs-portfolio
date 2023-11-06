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
        "fixed bottom-12 right-4 md:right-8 xl:right-96 flex justify-end"
      }
    >
      <Link
        href={"https://open.kakao.com/o/s93LYp7e"}
        type={"button"}
        className={
          "w-20 h-20 bg-white items-center flex justify-center rounded-full shadow-2xl"
        }
      >
        <Image src={KakaoIcon} alt={"kakao"} width={56} height={56} />
      </Link>
    </div>
  );
};

export default Float;
