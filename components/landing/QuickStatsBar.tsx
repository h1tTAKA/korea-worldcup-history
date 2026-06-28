"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "총 참가 횟수", value: 12, suffix: "회", color: "text-white" },
  { label: "통산 승", value: 17, suffix: "승", color: "text-green-400" },
  { label: "통산 무", value: 11, suffix: "무", color: "text-yellow-400" },
  { label: "통산 패", value: 22, suffix: "패", color: "text-red-400" },
  { label: "최고 성적", value: 4, suffix: "강", color: "text-[#C8102E]" },
];

function AnimatedStat({
  value,
  suffix,
  label,
  color,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      let startTime: number | null = null;
      const duration = 1500;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [inView, value, delay]);

  return (
    <motion.div
      ref={ref}
      className="text-center flex-1 min-w-[100px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <div className={`text-3xl md:text-4xl font-black tabular-nums ${color}`}>
        {count}
        <span className="text-lg ml-0.5">{suffix}</span>
      </div>
      <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

export default function QuickStatsBar() {
  return (
    <section className="bg-[#001a4d] border-y border-white/10 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-around gap-6">
          {stats.map((s, i) => (
            <AnimatedStat key={s.label} {...s} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
