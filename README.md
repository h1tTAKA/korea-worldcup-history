# 대한민국 월드컵 역사관 ⚽🇰🇷

1954년부터 현재까지, 대한민국 축구 국가대표팀의 월드컵 역사를 인터랙티브하게 전달하는 인포테인먼트 사이트입니다.

## 주요 기능

- **타임라인** — 대회별 연대기, 클릭 시 상세 정보 패널
- **재미있는 통계 카드** — "알고 계셨나요?" 형태의 기록 카드 슬라이더
- **명장면 갤러리** — 카테고리 필터 + hover 설명 오버레이
- **인터랙티브 차트** — 대회별 승/무/패, 득실 추이 (Recharts)
- **퀴즈** *(Phase 2)* — 객관식/OX 퀴즈 + SNS 공유
- **명예의 전당** *(Phase 2)* — 레전드 선수 카드

## 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | Next.js 14 (App Router, SSG) |
| 언어 | TypeScript 5 |
| 스타일 | Tailwind CSS v3 + shadcn/ui |
| 애니메이션 | Framer Motion |
| 차트 | Recharts |
| 데이터 | 로컬 JSON (`/data/*.json`) |
| 배포 | Vercel |

## 데이터 범위

- 한국 참가 대회: 1954, 1986~2026 (총 12회)
- 전체 경기 수: 약 45경기
- 출처: FIFA 공식 기록, 대한축구협회(KFA) 공개 자료

## 개발 단계

### Phase 1 — MVP
- [ ] 프로젝트 셋업 (Next.js + Tailwind + TypeScript)
- [ ] JSON 데이터 수집 및 타입 정의
- [ ] 랜딩 페이지
- [ ] 타임라인 페이지
- [ ] 갤러리 페이지
- [ ] 통계 페이지
- [ ] Vercel 배포

### Phase 2 — 확장
- [ ] 퀴즈 페이지 + SNS 공유
- [ ] 명예의 전당 페이지
- [ ] 다크모드
- [ ] 성능 최적화 (이미지 WebP, 동적 임포트)

## 로컬 실행

```bash
npm install
npm run dev
# http://localhost:3000
```

## 디렉토리 구조

```
korea-worldcup-history/
├── app/                    # Next.js App Router 페이지
│   ├── page.tsx            # 랜딩
│   ├── timeline/
│   ├── gallery/
│   └── stats/
├── components/             # UI 컴포넌트
│   ├── layout/
│   ├── landing/
│   ├── timeline/
│   ├── gallery/
│   ├── stats/
│   └── ui/                 # shadcn/ui 기반 공통
├── data/                   # 정적 JSON 데이터
│   ├── tournaments.json
│   ├── matches.json
│   ├── players.json
│   ├── funfacts.json
│   └── quiz.json
├── lib/
│   ├── types.ts            # 공통 타입
│   └── utils.ts
└── public/
    ├── images/
    └── og/
```

## 기여

이슈 및 PR 환영합니다.
