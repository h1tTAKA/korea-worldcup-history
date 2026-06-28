"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ko">
      <body style={{ backgroundColor: "#0a0f1e", color: "white", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: "1rem" }}>
          <div style={{ fontSize: "3rem" }}>⚠️</div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>오류가 발생했습니다</h2>
          <button
            onClick={reset}
            style={{ backgroundColor: "#C8102E", color: "white", border: "none", borderRadius: "9999px", padding: "0.75rem 2rem", cursor: "pointer", fontSize: "1rem" }}
          >
            다시 시도
          </button>
        </div>
      </body>
    </html>
  );
}
