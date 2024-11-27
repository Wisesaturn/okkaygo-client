import localFont from 'next/font/local';

import type { Metadata } from 'next';

import './globals.css';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '돼고 : 돼지들의 고민',
  description: '돼고 : 돼지들의 고민, 가고 싶은 곳이 너무 많을 때 어디 가야 할지 모르겠다면?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>{children}</body>
    </html>
  );
}
