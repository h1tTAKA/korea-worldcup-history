import type { Metadata } from "next";
import FunContent from "./FunContent";

export const metadata: Metadata = {
  title: "재미있는 역사 — 대한민국 월드컵",
  description: "몰랐던 한국 월드컵 이야기, 재미있는 기록과 순간들을 모아봤습니다.",
};

export default function FunPage() {
  return <FunContent />;
}
