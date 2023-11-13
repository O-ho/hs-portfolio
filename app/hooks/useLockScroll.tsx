import { useEffect } from "react";

const useLockScroll = (when: boolean) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const body = window.document.querySelector("body");
    const pageY = window.scrollY;
    console.log(pageY);
    if (!body) return;
    if (when) {
      window.document.body.style.overflow = "hidden";
      window.document.body.style.position = "fixed";
      window.document.body.style.left = "0";
      window.document.body.style.top = `-${pageY}px`;
    } else {
      window.document.body.style.removeProperty("position");
      window.scrollTo(0, pageY);
      window.document.body.style.overflow = "unset";
    }

    return () => {
      window.document.body.style.overflow = "unset";
      window.document.body.style.removeProperty("position");
      window.scrollTo(0, pageY);
    };
  }, [when]);
};
export default useLockScroll;
