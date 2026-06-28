"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { FunFact } from "@/lib/types";
import FunFactCard from "./FunFactCard";

interface FunFactCarouselProps {
  facts: FunFact[];
}

export default function FunFactCarousel({ facts }: FunFactCarouselProps) {
  const preview = facts.slice(0, 3);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#C8102E] text-sm font-bold uppercase tracking-widest mb-2 block">
            Fun Facts
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            몰랐던 월드컵 이야기
          </h2>
        </motion.div>

        {/* Mobile carousel */}
        <div className="md:hidden relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <FunFactCard fact={preview[activeIndex]} index={0} />
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {preview.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === activeIndex ? "bg-[#C8102E]" : "bg-white/30"
                }`}
                aria-label={`슬라이드 ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {preview.map((fact, i) => (
            <FunFactCard key={fact.id} fact={fact} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/fun"
            className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#a00d24] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm uppercase tracking-wider"
          >
            더 많은 재미있는 역사 보기
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
