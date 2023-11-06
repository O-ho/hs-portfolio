import type { Metadata } from "next";
import "./globals.css";
import cn from "classnames";
import { roboto } from "@/app/font";
import Og from "public/images/main.jpeg";
export const metadata: Metadata = {
  metadataBase: new URL("https://hs-portfolio.vercel.app/"),
  title: "나현석 | 자산관리사",
  description:
    "재무설계는 단순 1회성 재무상담이나 상품판매가 아닌 고객에게 꼭 필요한 기차와 목표를 함께 의논하고 함께 달성하는 파트너쉽입니다.",
  openGraph: {
    title: "나현석 | 자산관리사",
    description:
      "재무설계는 단순 1회성 재무상담이나 상품판매가 아닌 고객에게 꼭 필요한 기차와 목표를 함께 의논하고 함께 달성하는 파트너쉽입니다.",
    images: [
      {
        url: Og.src,
      },
    ],
  },
};
console.log(Og.src);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(roboto.className, "bg-cyan-50")}>
        <main className={"max-w-720 bg-white m-auto"}>{children}</main>
      </body>
    </html>
  );
}
