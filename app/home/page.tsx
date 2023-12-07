import React from "react";
import { AnimatedBox, MainTop } from "@/app/components";
import Career from "@/app/components/Career";
import CareerImage from "@/app/components/CareerImage";
import Gap from "@/app/components/Gap";
import ProgressOrder from "@/app/components/ProgressOrder";
import Example from "@/app/components/Example";
import Last from "@/app/components/Last";
import ApplyButton from "@/app/components/ApplyButton";
import Float from "@/app/components/Float";

const Page = () => {
  return (
    <div>
      <MainTop />
      <Career />
      <CareerImage />
      <Gap />
      <AnimatedBox />
      <Gap />
      <ProgressOrder />
      <Gap />
      <Example />
      <Gap />
      <Last />
      <ApplyButton />
      <Float />
    </div>
  );
};

export default Page;
