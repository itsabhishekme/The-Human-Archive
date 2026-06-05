import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Human Archive",
    template: "%s | The Human Archive",
  },

  description:
    "Preserving the stories people never thought anyone would read. A living archive of memories, letters, regrets, turning points, and human experiences.",

  keywords: [
    "human stories",
    "life stories",
    "archive",
    "letters never sent",
    "personal growth",
    "memories",
    "turning points",
    "storytelling",
  ],

  authors: [
    {
      name: "The Human Archive",
    },
  ],

  creator: "The Human Archive",

  metadataBase: new URL(
    "https://thehumanarchive.com"
  ),

  openGraph: {
    title: "The Human Archive",

    description:
      "Preserving the stories people never thought anyone would read.",

    type: "website",

    siteName: "The Human Archive",
  },

  twitter: {
    card: "summary_large_image",

    title: "The Human Archive",

    description:
      "Preserving the stories people never thought anyone would read.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${inter.className}
          bg-black
          text-white
          antialiased
          overflow-x-hidden
          min-h-screen
        `}
      >
        {/* Background Effects */}

        <div className="fixed inset-0 pointer-events-none -z-50">
          <div
            className="
              absolute
              inset-0
              bg-black
            "
          />

          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-[1200px]
              h-[1200px]
              rounded-full
              bg-amber-400/[0.04]
              blur-[180px]
            "
          />

          <div
            className="
              absolute
              bottom-0
              right-0
              w-[700px]
              h-[700px]
              rounded-full
              bg-orange-500/[0.03]
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              top-40
              left-0
              w-[500px]
              h-[500px]
              rounded-full
              bg-white/[0.02]
              blur-[120px]
            "
          />
        </div>

        {/* Grid Overlay */}

        <div
          className="
            fixed
            inset-0
            pointer-events-none
            -z-40
            opacity-[0.03]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Navbar */}

        <Navbar />

        {/* Main Content */}

        <main
          className="
            relative
            z-10
            pt-24
          "
        >
          {children}
        </main>

        {/* Footer */}

        <Footer />

        {/* Bottom Fade */}

        <div
          className="
            fixed
            bottom-0
            left-0
            right-0
            h-32
            pointer-events-none
            bg-gradient-to-t
            from-black
            to-transparent
            z-20
          "
        />
      </body>
    </html>
  );
}