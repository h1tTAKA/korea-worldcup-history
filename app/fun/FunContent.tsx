"use client";

import { useState } from "react";
import funfactsData from "@/data/funfacts.json";
import type { FunFact } from "@/lib/types";

const categoryLabels: Record<string, string> = {
  all: "전체",
  goal: "⚽ 골",
  record: "📊 기록",
  player: "🌟 선수",
  moment: "🎉 순간",
};

const categoryColors: Record<string, string> = {
  goal: "bg-green-500/20 text-green-300 border-green-500/30",
  record: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  player: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  moment: "bg-orange-500/20 text-orange-300 border-orange-500/30",
};

export default function FunContent() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [modalFact, setModalFact] = useState<FunFact | null>(null);

  const facts = funfactsData as FunFact[];
  const filtered =
    activeCategory === "all"
      ? facts
      : facts.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-b from-[#003087]/60 to-transparent text-white py-12 px-4 text-center">
        <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
          역사 속 명장면
        </p>
        <h1 className="text-3xl md:text-5xl font-black mb-4">
          ⚡ 재미있는 역사
        </h1>
        <p className="text-blue-200 max-w-xl mx-auto text-sm md:text-base">
          대한민국 월드컵 역사 속 잊지 못할 순간들과 기록들을 만나보세요.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={[
                "px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200",
                activeCategory === key
                  ? "bg-[#C8102E] text-white border-[#C8102E] scale-105"
                  : "bg-white/5 text-white/60 border-white/20 hover:border-white/50 hover:text-white",
              ].join(" ")}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((fact) => (
            <button
              key={fact.id}
              onClick={() => setModalFact(fact)}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 text-left hover:scale-[1.02] hover:border-[#C8102E]/40 hover:bg-white/8 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-4xl">{fact.emoji}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full border font-medium ${
                    categoryColors[fact.category] ?? "bg-gray-500/20 text-gray-300"
                  }`}
                >
                  {categoryLabels[fact.category]}
                </span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{fact.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                  {fact.body}
                </p>
              </div>
              {fact.year && (
                <div className="mt-auto text-[#C8102E] text-sm font-semibold">
                  {fact.year}년
                </div>
              )}
              <div className="text-white/30 text-xs">탭하면 자세히 보기 →</div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/40">
            해당 카테고리에 에피소드가 없습니다.
          </div>
        )}

        {/* Bottom link */}
        <div className="mt-12 text-center">
          <a
            href="/analysis"
            className="inline-flex items-center gap-2 bg-[#C8102E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#a00d25] transition-colors text-sm"
          >
            🔍 2026 실패 원인 분석 보기 →
          </a>
        </div>
      </div>

      {/* Modal */}
      {modalFact && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setModalFact(null)}
        >
          <div
            className="bg-[#111827] border border-white/20 rounded-2xl max-w-lg w-full p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <span className="text-5xl">{modalFact.emoji}</span>
              <button
                onClick={() => setModalFact(null)}
                className="text-white/40 hover:text-white text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <h2 className="text-white text-2xl font-black mb-3">{modalFact.title}</h2>
            {modalFact.year && (
              <div className="text-[#C8102E] font-semibold text-sm mb-4">
                {modalFact.year}년
              </div>
            )}
            <p className="text-white/75 text-base leading-relaxed">{modalFact.body}</p>
            <div className="mt-6 flex gap-3">
              <span
                className={`text-xs px-3 py-1.5 rounded-full border font-medium ${
                  categoryColors[modalFact.category] ?? ""
                }`}
              >
                {categoryLabels[modalFact.category]}
              </span>
              <button
                onClick={() => setModalFact(null)}
                className="ml-auto text-sm text-white/50 hover:text-white"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
