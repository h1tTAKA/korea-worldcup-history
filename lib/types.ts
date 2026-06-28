export interface Tournament {
  id: string;
  year: number;
  host: string;
  stage: "조별리그" | "16강" | "8강" | "4강" | "결승";
  group?: string;
  image: string;
  summary: string;
  highlight: string;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
}

export interface Match {
  id: string;
  tournamentId: string;
  year: number;
  round: string;
  opponent: string;
  opponentFlag: string;
  scoreKorea: number;
  scoreOpponent: number;
  result: "W" | "D" | "L";
  date: string;
  venue: string;
  note?: string;
}

export interface Player {
  id: string;
  name: string;
  nameEn: string;
  position: string;
  caps: number;
  goals: number;
  tournaments: number[];
  highlight: string;
}

export interface FunFact {
  id: string;
  emoji: string;
  title: string;
  body: string;
  year?: number;
  category: "goal" | "record" | "player" | "moment";
}

export interface GalleryItem {
  id: string;
  title: string;
  year: number;
  category: "goal" | "moment" | "sad";
  image: string;
  description: string;
}
