"use client";

import React from "react";
import { OverlayProvider } from "@toss/use-overlay";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return <OverlayProvider>{children}</OverlayProvider>;
};

export default LayoutWrapper;
