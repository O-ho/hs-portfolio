import React from "react";
import Image from "next/image";

const MainTop = () => {
  return (
    <section className={"flex flex-1"}>
      <div className={"w-full relative h-64 overflow-hidden"}>
        <img
          className={"w-full h-full"}
          src={"/images/main.jpeg"}
          alt={"main"}
          sizes={"100%"}
        />
      </div>
    </section>
  );
};

export default MainTop;
