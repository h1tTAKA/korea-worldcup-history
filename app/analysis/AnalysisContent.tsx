"use client";

import { useState } from "react";

type TabKey = "tactics" | "players" | "draw" | "manager" | "other";

interface StatBox {
  label: string;
  value: string;
  note?: string;
}

interface AnalysisPoint {
  title: string;
  description: string;
}

interface TabData {
  key: TabKey;
  label: string;
  icon: string;
  color: string;
  points: AnalysisPoint[];
  stats: StatBox[];
  summary: string;
}

const tabs: TabData[] = [
  {
    key: "tactics",
    label: "전술",
    icon: "🎯",
    color: "#C8102E",
    summary:
      "전술적 경직성은 이번 탈락의 가장 직접적인 원인이었다. 상대에 맞는 유연한 전술 변화와 현대 축구의 트렌드 반영이 시급하다.",
    points: [
      {
        title: "4-2-3-1 포메이션의 한계",
        description:
          "홍명보 감독이 고수한 4-2-3-1 포메이션은 현대 축구의 고강도 압박에 취약했다. 수비형 미드필더 라인이 쉽게 뚫리며 상대의 빠른 역습에 노출됐다.",
      },
      {
        title: "수비적 전술과 낮은 블록",
        description:
          "강팀을 상대로 지나치게 수비적인 형태를 취하며 역습 기회를 살리지 못했다. 수비 라인이 지나치게 낮아 압박 후 볼 회수가 어려웠다.",
      },
      {
        title: "세트피스 취약점",
        description:
          "코너킥과 프리킥 수비 상황에서 마크 실수가 반복됐다. 조별리그 3경기 실점 중 절반 이상이 세트피스에서 나왔다.",
      },
      {
        title: "빌드업 패턴 예측 가능",
        description:
          "측면 크로스에 의존하는 단조로운 빌드업으로 상대 수비 분석에 쉽게 노출됐다. 중앙 경유 전개나 짧은 패스 조합이 거의 없었다.",
      },
    ],
    stats: [
      { label: "조별리그 평균 볼 점유율", value: "38%", note: "상대 평균 62%" },
      { label: "경기당 평균 슈팅", value: "7.3회", note: "상대 평균 16.1회" },
      { label: "세트피스 실점 비율", value: "57%", note: "전체 실점 중" },
      { label: "압박 성공률", value: "41%", note: "리그 하위 15%" },
    ],
  },
  {
    key: "players",
    label: "선수단",
    icon: "👤",
    color: "#003087",
    summary:
      "에이스 의존도 심화와 세대교체 실패는 구조적 문제다. 다음 대회까지 새로운 스코어러와 수비 핵심을 육성해야 한다.",
    points: [
      {
        title: "손흥민 부상 영향",
        description:
          "주장이자 에이스 손흥민이 대회 직전 햄스트링 부상으로 완전한 컨디션이 아닌 채로 출전했다. 드리블 돌파와 결정적 슈팅 빈도가 평소 대비 현저히 줄었다.",
      },
      {
        title: "공격진 득점력 부재",
        description:
          "손흥민 외 득점을 기대할 수 있는 자원이 부족했다. 조별리그 전체 팀 득점이 2골에 불과해 공격 뎁스의 한계가 드러났다.",
      },
      {
        title: "세대교체 실패",
        description:
          "2002년 영광 이후 20년 넘게 체계적인 세대교체가 이뤄지지 않았다. 30대 중반 베테랑들에 대한 의존도가 높고 새로운 스타 플레이어 발굴이 미흡했다.",
      },
      {
        title: "체력 관리 문제",
        description:
          "유럽 리그 시즌 종료 직후 월드컵에 임하면서 주요 선수들의 체력 저하가 뚜렷했다. 특히 후반 45분 수비 집중력 저하가 반복됐다.",
      },
    ],
    stats: [
      { label: "손흥민 슈팅 성공률", value: "21%", note: "평소 대비 -18%p" },
      { label: "평균 연령 (선발 기준)", value: "29.4세", note: "출전국 중 상위권" },
      { label: "조별리그 총 득점", value: "2골", note: "경기당 0.67골" },
      { label: "후반 45분 실점 비율", value: "71%", note: "전체 실점 중" },
    ],
  },
  {
    key: "draw",
    label: "대진운",
    icon: "🎲",
    color: "#6B21A8",
    summary:
      "불리한 대진이 결과에 영향을 미쳤지만, 강팀을 상대로도 경쟁력을 보여준 순간이 있었다. 객관적 전력 향상이 해답이다.",
    points: [
      {
        title: "'죽음의 조' 편성",
        description:
          "브라질(FIFA 3위), 잉글랜드(FIFA 4위)와 같은 조에 편성되는 최악의 대진이었다. 두 팀 모두 전통 강호로 조별리그 통과가 사실상 힘든 구조였다.",
      },
      {
        title: "첫 경기 불리한 컨디션",
        description:
          "장거리 이동과 기후 적응 시간 부족으로 첫 경기 체력적 핸디캡이 존재했다. 상대팀 대비 이틀 짧은 휴식으로 기관지 이슈까지 겹쳤다.",
      },
      {
        title: "상대 전력 분석",
        description:
          "브라질은 비니시우스 주니오르·호드리구 등 세계 최고 공격진을 보유했고, 잉글랜드도 벨링엄·살라 라인이 건재했다. 객관적 전력 차이가 분명했다.",
      },
      {
        title: "경기 일정 불리함",
        description:
          "세 경기가 단기간에 집중 배치돼 회복 시간이 부족했다. 부상 선수 회복 없이 연속 고강도 경기를 소화해야 했다.",
      },
    ],
    stats: [
      { label: "브라질 FIFA 랭킹", value: "3위", note: "한국 대비 20계단 ↑" },
      { label: "잉글랜드 FIFA 랭킹", value: "4위", note: "한국 대비 19계단 ↑" },
      { label: "동조 평균 FIFA 랭킹", value: "12위", note: "한국 23위" },
      { label: "경기 간 평균 휴식", value: "3.1일", note: "상대 평균 4.0일" },
    ],
  },
  {
    key: "manager",
    label: "감독",
    icon: "🧑‍💼",
    color: "#B45309",
    summary:
      "감독 선임 논란은 대표팀 분위기 자체를 흔들었다. 투명한 선임 절차와 전략적 장기 비전을 가진 감독이 필요하다.",
    points: [
      {
        title: "홍명보 선임 논란",
        description:
          "정식 공모 절차 없이 특혜 논란 속에 선임됐다. 선임 과정의 투명성 문제로 대표팀 내부 분위기와 대중의 지지가 처음부터 흔들렸다.",
      },
      {
        title: "전술 변화 부재",
        description:
          "강팀을 상대해도 포메이션과 전술을 바꾸지 않아 유연성이 부족하다는 비판을 받았다. 상대 분석 대응보다 자신의 원칙을 고수했다.",
      },
      {
        title: "선수 활용 문제",
        description:
          "컨디션 좋은 선수 대신 경험 위주의 선발을 고집했다. 교체 타이밍이 늦어 흐름을 바꿀 기회를 놓치는 경우가 반복됐다.",
      },
      {
        title: "소통 부재",
        description:
          "선수단과의 소통 미흡, 언론 대응 실패 등 리더십 문제가 지적됐다. 대회 기간 내내 팀 분위기가 경직되어 있었다는 후일담이 나왔다.",
      },
    ],
    stats: [
      { label: "A매치 감독 승률", value: "48%", note: "역대 감독 평균 하회" },
      { label: "전술 교체 평균 시간", value: "74분", note: "리그 평균 61분보다 늦음" },
      { label: "선임 후 A매치 승수", value: "5승", note: "8경기 중 5승 3패" },
      { label: "팬 지지율 (대회 전)", value: "31%", note: "역대 감독 중 최저" },
    ],
  },
  {
    key: "other",
    label: "기타",
    icon: "📋",
    color: "#047857",
    summary:
      "협회 구조 개혁과 유소년 인프라 투자 없이는 2030 대회에서도 같은 결과가 반복될 수 있다. 근본적인 시스템 변화가 필요하다.",
    points: [
      {
        title: "협회 구조적 문제",
        description:
          "대한축구협회(KFA)의 불투명한 의사결정 구조가 대표팀 경쟁력에 장기적으로 악영향을 미쳤다. 감독 선임, 훈련 환경, 행정 지원 모두 선진국 대비 열악했다.",
      },
      {
        title: "K리그 수준 격차",
        description:
          "주요 선수들 대부분이 유럽 리그 출신이지만, 국내 리그 수준은 아시아 상위권에 그쳐 국내파 선수들의 국제 경쟁력이 낮다.",
      },
      {
        title: "유소년 인프라 부족",
        description:
          "세계 기준에 맞는 유소년 육성 시스템이 부재하여 차세대 스타 발굴에 한계가 있다. 학교 체육과 엘리트 체육의 이분화가 지속되고 있다.",
      },
      {
        title: "체력 관리 시스템",
        description:
          "유럽 명문 구단처럼 데이터 기반 체력 관리와 부상 예방 프로그램이 체계화되어 있지 않다. 시즌 말 주요 선수 부상이 매 대회 반복된다.",
      },
    ],
    stats: [
      { label: "KFA 연간 예산", value: "약 350억원", note: "독일 DFB의 1/20 수준" },
      { label: "K리그 FIFA 랭킹", value: "아시아 3위", note: "일본·중국 리그 하위" },
      { label: "유소년 전문 지도자 수", value: "약 2만명", note: "일본 대비 1/3" },
      { label: "유럽파 선수 비율", value: "67%", note: "2026 대표팀 기준" },
    ],
  },
];

export default function AnalysisContent() {
  const [activeTab, setActiveTab] = useState<TabKey>("tactics");
  const current = tabs.find((t) => t.key === activeTab)!;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={[
                "flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200",
                activeTab === tab.key
                  ? "text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:shadow",
              ].join(" ")}
              style={
                activeTab === tab.key ? { backgroundColor: tab.color } : undefined
              }
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Analysis Points */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span
                className="w-1 h-6 rounded-full inline-block"
                style={{ backgroundColor: current.color }}
              />
              핵심 분석
            </h2>
            {current.points.map((point, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: current.color }}
                  >
                    {i + 1}
                  </span>
                  {point.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
              <span
                className="w-1 h-6 rounded-full inline-block"
                style={{ backgroundColor: current.color }}
              />
              관련 통계
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {current.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm text-center"
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: current.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-700 mb-1">
                    {stat.label}
                  </div>
                  {stat.note && (
                    <div className="text-xs text-gray-400">{stat.note}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Summary badge */}
            <div
              className="rounded-xl p-5 text-white"
              style={{ backgroundColor: current.color }}
            >
              <div className="font-bold mb-2 text-sm">
                {current.icon} {current.label} — 종합 평가
              </div>
              <p className="opacity-90 text-sm leading-relaxed">{current.summary}</p>
            </div>

            {/* Link to history */}
            <a
              href="/timeline"
              className="mt-4 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
              ← 실패 역사 타임라인으로
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
