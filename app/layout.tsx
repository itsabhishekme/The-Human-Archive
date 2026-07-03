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

    // Human Stories
    "Real Life Stories",
    "True Stories",
    "Personal Stories",
    "Stories That Matter",
    "Stories of Hope",
    "Stories of Resilience",
    "Stories of Love",
    "Stories of Loss",
    "Stories of Courage",
    "Stories of Change",
    "Stories of Healing",
    "Stories of Kindness",
    "Stories of Humanity",
    "Stories from Around the World",
    "Human Experiences",
    "Life Experiences",
    "Authentic Stories",
    "Everyday Heroes",
    "Shared Humanity",
    "Voices of People",

    // Life Stories
    "Life Journey",
    "Life Lessons",
    "Life Reflections",
    "Coming of Age Stories",
    "Memoir",
    "Autobiographical Writing",
    "Personal Narratives",
    "Biography",
    "Memoir Writing",
    "Life Chronicles",
    "Milestones",
    "Growing Up",
    "Moments That Changed My Life",
    "Life Changing Decisions",
    "Finding Purpose",
    "Self Discovery",
    "Finding Yourself",
    "Personal Evolution",
    "Life Chapters",
    "Journeys of Growth",

    // Archive
    "Story Archive",
    "Memory Archive",
    "Digital Archive",
    "Literary Archive",
    "Historical Archive",
    "Personal Archive",
    "Journal Archive",
    "Story Collection",
    "Writing Collection",
    "Essay Collection",
    "Memory Collection",
    "Archive of Stories",
    "Archive of Letters",
    "Living Archive",
    "Oral Histories",
    "Legacy Stories",
    "Preserving Memories",
    "Digital Library",
    "Community Archive",
    "Human History",

    // Letters Never Sent
    "Unsent Letters",
    "Letters from the Heart",
    "Love Letters",
    "Letters to My Future Self",
    "Letters to My Past Self",
    "Letters of Regret",
    "Letters of Gratitude",
    "Letters of Forgiveness",
    "Letters of Closure",
    "Letters to Lost Love",
    "Anonymous Letters",
    "Open Letters",
    "Heartfelt Writing",
    "Emotional Letters",
    "Healing Through Writing",
    "Goodbye Letters",
    "Letters About Life",
    "Written Memories",
    "Private Thoughts",
    "Words Left Unspoken",

    // Personal Growth
    "Self Improvement",
    "Personal Development",
    "Growth Mindset",
    "Self Awareness",
    "Self Reflection",
    "Emotional Growth",
    "Healing Journey",
    "Inner Growth",
    "Mindfulness",
    "Emotional Intelligence",
    "Resilience",
    "Authentic Living",
    "Purpose in Life",
    "Building Confidence",
    "Finding Balance",
    "Overcoming Challenges",
    "Transformation",
    "Life Transformation",
    "Becoming Your Best Self",
    "Self Acceptance",

    // Memories
    "Childhood Memories",
    "Nostalgia",
    "Remembering the Past",
    "Moments That Matter",
    "Family Memories",
    "Friendship Memories",
    "Precious Moments",
    "Life Moments",
    "Memory Journal",
    "Memory Book",
    "Shared Memories",
    "Flashbacks",
    "Time Capsule",
    "Life Reflections",
    "Meaningful Experiences",
    "Treasured Memories",
    "Moments of Joy",
    "Lessons from the Past",
    "Remembering Loved Ones",
    "Personal History",

    // Turning Points
    "Turning Point Stories",
    "Moments of Change",
    "Life Transitions",
    "Major Decisions",
    "Second Chances",
    "Fresh Starts",
    "New Beginnings",
    "Breaking Points",
    "Crossroads",
    "Life Defining Moments",
    "Personal Breakthrough",
    "Transformation Stories",
    "Resilience Stories",
    "Healing Stories",
    "Stories of Reinvention",
    "Choosing a New Path",
    "Changing Perspective",
    "Life Milestones",
    "Personal Triumph",
    "Finding Strength",

    // Storytelling
    "Creative Storytelling",
    "Narrative Writing",
    "Creative Writing",
    "Literary Writing",
    "Flash Fiction",
    "Short Stories",
    "Longform Stories",
    "Narrative Essays",
    "Creative Nonfiction",
    "Literary Fiction",
    "Character Driven Stories",
    "Story Collection",
    "Digital Storytelling",
    "Emotional Storytelling",
    "Visual Storytelling",
    "Story Journal",
    "Writing Community",
    "Independent Writers",
    "Original Stories",
    "Meaningful Narratives",

    // Literature & Writing
    "Literary Journal",
    "Contemporary Literature",
    "Modern Literature",
    "Poetry",
    "Poems About Life",
    "Reflective Essays",
    "Creative Essays",
    "Writing Inspiration",
    "Writing Prompts",
    "Essay Writing",
    "Book Lovers",
    "Reading Community",
    "Literary Blog",
    "Thoughtful Writing",
    "Expressive Writing",
    "Art of Storytelling",
    "Personal Essays",
    "Reflective Writing",
    "Original Writing",
    "Independent Literature",

    // Emotions & Relationships
    "Human Connection",
    "Empathy",
    "Compassion",
    "Love and Loss",
    "Grief",
    "Hope",
    "Forgiveness",
    "Healing",
    "Belonging",
    "Acceptance",
    "Vulnerability",
    "Emotional Wellness",
    "Mental Wellbeing",
    "Finding Peace",
    "Meaningful Relationships",
    "Acts of Kindness",
    "Shared Experiences",
    "Emotional Resilience",
    "Life Wisdom",
    "The Human Experience"
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