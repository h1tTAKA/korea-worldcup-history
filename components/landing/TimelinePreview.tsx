"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Tournament } from "@/lib/types";

function stageBadgeColor(stage: Tournament["stage"]) {
  switch (stage) {
    case "결승": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/40";
    case "4강": return "bg-[#C8102E]/20 text-red-300 border-[#C8102E]/40";
    case "8강": return "bg-orange-500/20 text-orange-300 border-orange-500/40";
    case "16강": return "bg-blue-500/20 text-blue-300 border-blue-500/40";
    default: return "bg-white/10 text-white/60 border-white/20";
  }
}

interface TimelinePreviewProps {
  tournaments: Tournament[];
}

export default function TimelinePreview({ tournaments }: TimelinePreviewProps) {
  // Show the 3 most recent tournaments
  const recent = [...tournaments]
    .sort((a, b) => b.year - a.year)
    .slice(0, 3);

  return (
    <section className="py-20 px-4 bg-[#001a4d]/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#C8102E] text-sm font-bold uppercase tracking-widest mb-2 block">
            History
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            최근 월드컵 발자취
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-px" />

          <div className="flex flex-col gap-10">
            {recent.map((t, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={t.id}
                  className={`relative flex items-center gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row pl-10 md:pl-0`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#C8102E] border-4 border-[#001a4d] flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Card */}
                  <div className={`md:w-5/12 ${isLeft ? "md:ml-auto md:mr-8" : "md:mr-auto md:ml-8"} w-full`}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <span className="text-[#C8102E] font-black text-2xl">{t.year}</span>
                          <span className="text-white/50 text-sm ml-2">{t.host}</span>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full border font-semibold ${stageBadgeColor(t.stage)}`}
                        >
                          {t.stage}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {t.highlight}
                      </p>
                      {t.year !== 2026 && (
                        <div className="flex gap-3 mt-3 text-xs text-white/40">
                          <span className="text-green-400">{t.wins}승</span>
                          <span className="text-yellow-400">{t.draws}무</span>
                          <span className="text-red-400">{t.losses}패</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/timeline"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-bold px-8 py-4 rounded-full transition-colors text-sm uppercase tracking-wider"
          >
            전체 타임라인 보기 (1954~2026)
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
