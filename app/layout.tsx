import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Serif } from "next/font/google"; 
import "./globals.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const playfairDisplayFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-next' 
});

const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter-next' 
});

const notoSerifFont = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-next' 
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
    <html lang="en" className={`${notoSerifFont.variable} ${interFont.variable} ${playfairDisplayFont.variable}`}>
      <body className="font-noto">
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
