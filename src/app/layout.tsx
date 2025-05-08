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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/images/logo.png" sizes="32x32" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-black`}>
        {children}
      </body>
    </html>
  );
}
