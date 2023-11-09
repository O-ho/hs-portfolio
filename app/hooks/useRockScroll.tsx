import { useEffect } from "react";

const useLockScroll = (when: boolean) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const body = window.document.querySelector("body");

    if (!body) return;
    if (when) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "unset";
    }

    return () => {
      window.document.body.style.overflow = "unset";
    };
  }, [when]);
};
export default useLockScroll;
