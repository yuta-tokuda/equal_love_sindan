import type { Metadata } from "next";
import { Mochiy_Pop_One, Zen_Maru_Gothic } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
  display: "swap",
});

const mochiy = Mochiy_Pop_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mochiy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "=LOVE 推し診断",
  description: "質問に答えるだけで相性の良いメンバーを診断できるサービス",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ja" className={`${zenMaru.variable} ${mochiy.variable}`}>
      <body className="bg-app-shell flex min-h-screen flex-col text-foreground">
        <Header />
        <main className="mx-auto w-full max-w-md flex-1 px-4 py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
