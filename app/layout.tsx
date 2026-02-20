import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Serif } from "next/font/google"; // Added Inter
import "./globals.css";
import Banner from "./components/Banner";

const playfairDisplayFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfairDisplay'
});

// Added Inter configuration
const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const notoSerifFont = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-notoSerif'
});

export const metadata: Metadata = {
  title: "Bridal Wellness",
  description: "Your deserved break!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerifFont.variable} ${interFont.variable} ${playfairDisplayFont.variable} font-sans`}>
        <Banner />
        {children}
      </body>
    </html>
  );
}
