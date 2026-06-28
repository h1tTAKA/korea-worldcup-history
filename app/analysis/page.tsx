import type { Metadata } from "next";
import AnalysisContent from "./AnalysisContent";

export const metadata: Metadata = {
  title: "원인 분석 — 대한민국 2026 월드컵",
  description:
    "대한민국 2026 FIFA 월드컵 북중미 조별리그 탈락 원인을 전술, 선수단, 대진운, 감독, 기타 관점에서 심층 분석합니다.",
};

export default function AnalysisPage() {
  return <AnalysisContent />;
}
