import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ViewLayout from "@/components/ViewLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "树深时见鹿 | 旅游日志",
  authors: [{ name: "树深时见鹿", url: "https://liucy.cn" }],
  keywords: "Text, Blog, Chat, ACG, Travel log, Travel, 旅行, 旅游",
  description:
    "如果可以，真想和你一起旅行。或许是在某个古朴的小镇，或许是在某座灿烂辉煌的大都市。我们可以沿途用镜头记录彼此的笑脸，和属于我们的风景。一起吃早餐，午餐，晚餐。或许吃得不好，可是却依旧为对方擦去嘴角的油渍。风景如何，其实并不重要。重要的是，有你在我的身边。",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ViewLayout>{children}</ViewLayout>
      </body>
    </html>
  );
}
