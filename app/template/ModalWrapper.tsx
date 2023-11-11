"use client";
import React from "react";

const ModalWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={"fixed w-screen h-full top-0 z-50 bg-opacity-60 bg-gray-700"}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;
