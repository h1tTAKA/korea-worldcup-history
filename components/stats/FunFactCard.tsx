"use client";

import { motion } from "framer-motion";
import type { FunFact } from "@/lib/types";

const categoryColors: Record<FunFact["category"], string> = {
  goal: "bg-green-500/20 text-green-300 border-green-500/30",
  record: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  player: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  moment: "bg-orange-500/20 text-orange-300 border-orange-500/30",
};

const categoryLabels: Record<FunFact["category"], string> = {
  goal: "골",
  record: "기록",
  player: "선수",
  moment: "순간",
};

interface FunFactCardProps {
  fact: FunFact;
  index: number;
}

export default function FunFactCard({ fact, index }: FunFactCardProps) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, borderColor: "rgba(200,16,46,0.4)" }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-4xl">{fact.emoji}</span>
        <span
          className={`text-xs px-2 py-1 rounded-full border font-medium ${
            categoryColors[fact.category]
          }`}
        >
          {categoryLabels[fact.category]}
        </span>
      </div>
      <div>
        <h3 className="text-white font-bold text-lg mb-2">{fact.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{fact.body}</p>
      </div>
      {fact.year && (
        <div className="mt-auto text-[#C8102E] text-sm font-semibold">
          {fact.year}년
        </div>
      )}
    </motion.div>
  );
}
