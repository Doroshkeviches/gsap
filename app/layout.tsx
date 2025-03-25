import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "Gsap demos",
};
const eurostileExt = localFont({
  src: '../public/fonts/MajorMonoDisplay-Regular.ttf', // путь до нашего файла
  variable: '--font-major', // название нашей css-переменной
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${eurostileExt.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
