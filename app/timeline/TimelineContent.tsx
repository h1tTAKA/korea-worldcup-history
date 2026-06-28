"use client";

import { useState } from "react";
import tournaments from "@/data/tournaments.json";

type Tournament = {
  id: string;
  year: number;
  host: string;
  stage: string;
  group?: string;
  image: string;
  summary: string;
  highlight: string;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
};

const stageColor: Record<string, string> = {
  "조별리그": "bg-gray-200 text-gray-700",
  "16강": "bg-blue-100 text-blue-700",
  "8강": "bg-orange-100 text-orange-700",
  "4강": "bg-red-100 text-red-700",
  "결승": "bg-yellow-100 text-yellow-700",
};

const stageEmoji: Record<string, string> = {
  "조별리그": "😔",
  "16강": "✅",
  "8강": "🔥",
  "4강": "🏆",
  "결승": "🥈",
};

export default function TimelineContent() {
  const [openId, setOpenId] = useState<string | null>(null);

  const data = tournaments as Tournament[];

  const totalWins = data.reduce((s, t) => s + t.wins, 0);
  const totalGoals = data.reduce((s, t) => s + t.goalsFor, 0);
  const knockoutCount = data.filter((t) => t.stage !== "조별리그").length;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-[#C8102E]/20 border-b border-white/10 text-white py-12 px-4 text-center">
        <p className="text-red-200 text-sm font-semibold uppercase tracking-widest mb-3">
          1954 ~ 2026
        </p>
        <h1 className="text-3xl md:text-5xl font-black mb-4">
          🗓️ 월드컵 역사 타임라인
        </h1>
        <p className="text-red-100 max-w-xl mx-auto text-sm md:text-base">
          첫 출전의 설렘부터 2002년의 기적, 그리고 2026년의 아픔까지.
        </p>
      </div>

      {/* Summary stats */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 divide-x divide-gray-100 text-center">
          <div className="px-4">
            <div className="text-3xl font-black text-[#C8102E]">{data.length}회</div>
            <div className="text-xs text-gray-500 mt-1">총 참가 횟수</div>
          </div>
          <div className="px-4">
            <div className="text-3xl font-black text-[#003087]">{totalWins}승</div>
            <div className="text-xs text-gray-500 mt-1">월드컵 통산 승수</div>
          </div>
          <div className="px-4">
            <div className="text-3xl font-black text-[#C8102E]">{knockoutCount}회</div>
            <div className="text-xs text-gray-500 mt-1">토너먼트 진출</div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

          <div className="space-y-4">
            {[...data].reverse().map((t) => {
              const isOpen = openId === t.id;
              const isGlory = t.stage !== "조별리그";

              return (
                <div key={t.id} className="md:pl-16 relative">
                  {/* Year dot */}
                  <div
                    className={[
                      "absolute left-3 top-4 w-6 h-6 rounded-full border-2 border-white shadow hidden md:flex items-center justify-center text-xs font-bold",
                      isGlory ? "bg-[#C8102E] text-white" : "bg-gray-300 text-gray-600",
                    ].join(" ")}
                  />

                  <div
                    className={[
                      "bg-white rounded-xl border shadow-sm overflow-hidden cursor-pointer transition-all",
                      isOpen ? "shadow-md" : "hover:shadow",
                      isGlory ? "border-red-200" : "border-gray-100",
                    ].join(" ")}
                    onClick={() => setOpenId(isOpen ? null : t.id)}
                  >
                    <div className="p-5 flex items-center gap-4">
                      {/* Year */}
                      <div className="flex-shrink-0 text-center w-14">
                        <div className={`text-xl font-black ${isGlory ? "text-[#C8102E]" : "text-gray-400"}`}>
                          {t.year}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="font-bold text-gray-900 text-sm">{t.host}</span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                              stageColor[t.stage] ?? "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {stageEmoji[t.stage]} {t.stage}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 truncate">{t.highlight}</p>
                      </div>

                      {/* Score */}
                      <div className="flex-shrink-0 text-right">
                        <div className="text-sm font-mono font-bold text-gray-700">
                          {t.wins}승 {t.draws}무 {t.losses}패
                        </div>
                        <div className="text-xs text-gray-400">
                          {t.goalsFor}득 {t.goalsAgainst}실
                        </div>
                      </div>

                      {/* Chevron */}
                      <div className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                        ▼
                      </div>
                    </div>

                    {/* Detail */}
                    {isOpen && (
                      <div className="border-t border-gray-100 px-5 py-4 bg-gray-50">
                        <p className="text-sm text-gray-700 leading-relaxed">{t.summary}</p>
                        {t.group && (
                          <p className="text-xs text-gray-400 mt-2">조 편성: {t.group}조</p>
                        )}
                        {t.stage !== "조별리그" && (
                          <div className="mt-3 inline-flex items-center gap-1.5 bg-red-50 text-red-700 text-xs px-3 py-1.5 rounded-full font-semibold">
                            🏆 토너먼트 진출 — {t.stage}
                          </div>
                        )}
                        {t.year === 2026 && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                            <p className="text-xs text-blue-700 font-semibold">
                              ← 이번 탈락의 원인을 분석해보세요
                            </p>
                            <a
                              href="/analysis"
                              className="text-xs text-blue-600 underline mt-1 block"
                            >
                              원인 분석 페이지로 →
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          총 {data.length}회 참가 · {totalWins}승 · {totalGoals}득점
        </div>
      </div>
    </div>
  );
}
