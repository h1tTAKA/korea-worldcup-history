import type { Metadata } from "next";
import TimelineContent from "./TimelineContent";

export const metadata: Metadata = {
  title: "실패 역사 타임라인 — 대한민국 월드컵",
  description:
    "1954년부터 2026년까지 대한민국 월드컵 참가 역사. 영광의 순간과 아픔의 기록을 연도별로 돌아봅니다.",
};

export default function TimelinePage() {
  return <TimelineContent />;
}
