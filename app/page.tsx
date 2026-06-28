import HeroSection from "@/components/landing/HeroSection";
import QuickStatsBar from "@/components/landing/QuickStatsBar";
import FunFactCarousel from "@/components/stats/FunFactCarousel";
import TimelinePreview from "@/components/landing/TimelinePreview";
import tournamentsData from "@/data/tournaments.json";
import funfactsData from "@/data/funfacts.json";
import type { Tournament, FunFact } from "@/lib/types";

export default function HomePage() {
  const tournaments = tournamentsData as Tournament[];
  const funFacts = funfactsData as FunFact[];

  return (
    <>
      <HeroSection />
      <QuickStatsBar />
      <FunFactCarousel facts={funFacts} />
      <TimelinePreview tournaments={tournaments} />
    </>
  );
}
