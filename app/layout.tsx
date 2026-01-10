import type { Metadata } from "next";
import { Outfit, Space_Mono, Playwrite_IN, Fira_Code, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const code = Fira_Code({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const playwrite = Playwrite_IN({
  variable: "--font-cursive",
  weight: ["100", "200", "300", "400"],
});

export const metadata: Metadata = {
  title: "Ushaswi Nandigam | Porfolio",
  description: "Portfolio of a Computer Science student and photography hobbyist. Building software by day, capturing moments through the lens by evening.",
  keywords: ["portfolio", "computer science", "photography", "developer", "programmer", "web development"],
  authors: [{ name: "Ushaswi Nandigam | Porfolio" }],
  openGraph: {
    title: "Ushaswi Nandigam | Porfolio",
    description: "Portfolio of a Computer Science student and photography hobbyist.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
        <body
          className={`${outfit.variable} ${spaceMono.variable} ${code.variable} ${jetbrains.variable} ${playwrite.variable} antialiased bg-[#FFFDF7]`}
        >
        {children}
      </body>
    </html>
  );
}
