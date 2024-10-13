import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HavePLANs",
  description: "HavePLANs는 사람들 끼리 약속을 만들어 공유하는 플랫폼입니다.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${notoSansKr.className} font-SandolGoSik`}>
        {children}
      </body>
    </html>
  );
}
