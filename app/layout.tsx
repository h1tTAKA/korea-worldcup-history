import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "대한민국 월드컵 역사 | 1954 ~ 2026",
  description:
    "1954년 스위스부터 2026년 북중미까지, 대한민국 월드컵 72년의 이야기. 통산 전적, 역대 성적, 명장면을 한눈에.",
  keywords: ["한국 월드컵", "태극전사", "2002 월드컵", "FIFA", "대한축구협회"],
  openGraph: {
    title: "대한민국 월드컵 역사",
    description: "72년간의 태극전사 월드컵 도전사",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#0a0f1e", color: "white" }}
      >
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
