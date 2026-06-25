import type { Metadata } from "next";
import { Sacramento, Familjen_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "A restaurant, bar, and heated 21+ pool in the heart of Historic Tremé, New Orleans. Polished comfort food, craft cocktails, and a day-pass oasis on Esplanade Ave.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lostcoyotenola.com"),
  title: {
    default: "Lost Coyote — Restaurant, Bar & Pool | Tremé, New Orleans",
    template: "%s | Lost Coyote NOLA",
  },
  description,
  keywords: [
    "Lost Coyote",
    "New Orleans pool",
    "Tremé restaurant",
    "Esplanade Ave",
    "pool day pass New Orleans",
    "craft cocktails NOLA",
    "brunch New Orleans",
  ],
  openGraph: {
    title: "Lost Coyote — Restaurant, Bar & Pool",
    description,
    url: "https://www.lostcoyotenola.com",
    siteName: "Lost Coyote",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lost Coyote — Restaurant, Bar & Pool",
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sacramento.variable} ${familjen.variable}`}>
      <body className="grain">
        <Nav />
        {children}
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
