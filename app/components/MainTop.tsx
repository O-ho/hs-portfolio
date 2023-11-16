import React from "react";
import Image from "next/image";

const MainTop = () => {
  return (
    <section className={"flex flex-1"}>
      <div className={"w-full relative h-80 overflow-hidden"}>
        <Image
          src={"/images/main.jpeg"}
          alt={"main"}
          fill
          sizes={"100%"}
          priority
        />
      </div>
    </section>
  );
};

export default MainTop;
