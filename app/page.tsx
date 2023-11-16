import { AnimatedBox, MainTop } from "@/app/components";
import Example from "@/app/components/Example";
import Carousel from "@/app/components/Carousel";
import Float from "@/app/components/Float";

import React from "react";
import ApplyButton from "@/app/components/ApplyButton";
import Gap from "@/app/components/Gap";
import Career from "@/app/components/Career";
import CareerImage from "@/app/components/CareerImage";
import Last from "@/app/components/Last";
import ProgressOrder from "@/app/components/ProgressOrder";

export default function Home() {
  return (
    <div>
      <MainTop />
      <Career />
      <CareerImage />
      <Gap />
      <ProgressOrder />
      <Gap />

      <AnimatedBox />
      <Gap />
      <Example />
      <Gap />
      <Last />
      <ApplyButton />
      <Float />
    </div>
  );
}
