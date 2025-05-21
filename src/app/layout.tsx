import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/inter';
import '@fontsource/montserrat';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Van Ian Ignacio | QA Portfolio",
  description: "Professional portfolio showcasing QA automation expertise and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon-vip.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-black`}>
        {children}
      </body>
    </html>
  );
}
