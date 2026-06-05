import {
  Archive,
  BookOpen,
  Feather,
  Mail,
  Heart,
  Sparkles,
  TrendingUp,
  Clock3,
  Compass,
  Lightbulb,
  Users,
  Home,
  Briefcase,
  GraduationCap,
  Mountain,
  Camera,
  Music,
  Plane,
  Baby,
  HandHeart,
  LucideIcon,
} from "lucide-react";

/* ==========================================================
   TYPES
========================================================== */

export interface ArchiveCategory {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  color: string;
  featured: boolean;
  stories: number;
  tagline: string;
}

export interface ArchiveCollection {
  id: number;
  title: string;
  slug: string;
  description: string;
  storyCount: number;
}

/* ==========================================================
   MAIN HUMAN ARCHIVE CATEGORIES
========================================================== */

export const categories: ArchiveCategory[] = [
  {
    id: 1,
    slug: "letters-never-sent",
    title: "Letters Never Sent",
    shortTitle: "Letters",
    description:
      "Messages written but never delivered.",

    longDescription:
      "A collection of letters people never sent to loved ones, former partners, parents, children, friends, and even themselves. These are words that remained unsaid but still carry emotional weight and meaning.",

    icon: Mail,

    color: "amber",

    featured: true,

    stories: 542,

    tagline:
      "Some letters arrive years after they were written.",
  },

  {
    id: 2,
    slug: "before-i-became-me",
    title: "Before I Became Me",
    shortTitle: "Transformation",

    description:
      "Stories about identity, healing, and growth.",

    longDescription:
      "Personal journeys documenting transformation, self-discovery, resilience, recovery, and the experiences that shaped who people eventually became.",

    icon: Sparkles,

    color: "purple",

    featured: true,

    stories: 312,

    tagline:
      "Every version of ourselves deserves remembrance.",
  },

  {
    id: 3,
    slug: "turning-points",
    title: "Turning Points",
    shortTitle: "Turning Point",

    description:
      "Moments that changed everything.",

    longDescription:
      "Stories about decisions, encounters, opportunities, accidents, conversations, and events that dramatically altered the direction of a life.",

    icon: TrendingUp,

    color: "orange",

    featured: true,

    stories: 287,

    tagline:
      "One moment can rewrite an entire future.",
  },

  {
    id: 4,
    slug: "regrets-lessons",
    title: "Regrets & Lessons",
    shortTitle: "Regrets",

    description:
      "Wisdom gained through experience.",

    longDescription:
      "Reflections on mistakes, missed opportunities, difficult decisions, and the lessons people learned along the way.",

    icon: Heart,

    color: "rose",

    featured: true,

    stories: 411,

    tagline:
      "Regret often becomes our greatest teacher.",
  },

  {
    id: 5,
    slug: "memories",
    title: "Memories Worth Keeping",
    shortTitle: "Memory",

    description:
      "Moments people never want forgotten.",

    longDescription:
      "A collection of treasured memories preserved for future generations and curious readers.",

    icon: Camera,

    color: "cyan",

    featured: false,

    stories: 624,

    tagline:
      "A memory survives when it is shared.",
  },

  {
    id: 6,
    slug: "life-lessons",
    title: "Life Lessons",
    shortTitle: "Lessons",

    description:
      "Hard-earned wisdom from lived experience.",

    longDescription:
      "Insights gained through careers, relationships, failures, adventures, risks, and everyday life.",

    icon: Lightbulb,

    color: "yellow",

    featured: false,

    stories: 721,

    tagline:
      "The best lessons are rarely learned in classrooms.",
  },

  {
    id: 7,
    slug: "lost-connections",
    title: "Lost Connections",
    shortTitle: "Connections",

    description:
      "People who left a lasting impact.",

    longDescription:
      "Stories about strangers, friends, mentors, and loved ones who unexpectedly changed someone's life.",

    icon: Users,

    color: "blue",

    featured: false,

    stories: 188,

    tagline:
      "Some people stay with us long after they leave.",
  },

  {
    id: 8,
    slug: "childhood",
    title: "Childhood Memories",
    shortTitle: "Childhood",

    description:
      "Stories from the earliest chapters of life.",

    longDescription:
      "Moments from childhood that shaped values, dreams, fears, and identity.",

    icon: Baby,

    color: "pink",

    featured: false,

    stories: 253,

    tagline:
      "The past often explains the present.",
  },

  {
    id: 9,
    slug: "family",
    title: "Family Stories",
    shortTitle: "Family",

    description:
      "Experiences that define families.",

    longDescription:
      "Generational stories, traditions, relationships, and family memories preserved across time.",

    icon: Home,

    color: "green",

    featured: false,

    stories: 374,

    tagline:
      "Families carry stories longer than names.",
  },

  {
    id: 10,
    slug: "career-journeys",
    title: "Career Journeys",
    shortTitle: "Career",

    description:
      "Professional successes, failures, and lessons.",

    longDescription:
      "Career transitions, entrepreneurship, workplace lessons, and professional turning points.",

    icon: Briefcase,

    color: "slate",

    featured: false,

    stories: 298,

    tagline:
      "Work shapes more than income.",
  },

  {
    id: 11,
    slug: "education",
    title: "Learning Experiences",
    shortTitle: "Education",

    description:
      "Stories about learning and growth.",

    longDescription:
      "Experiences from schools, universities, mentors, books, and lifelong learning.",

    icon: GraduationCap,

    color: "indigo",

    featured: false,

    stories: 191,

    tagline:
      "Education happens everywhere.",
  },

  {
    id: 12,
    slug: "adventures",
    title: "Adventures",
    shortTitle: "Adventure",

    description:
      "Journeys beyond comfort zones.",

    longDescription:
      "Travel, exploration, risk-taking, and unexpected experiences from around the world.",

    icon: Plane,

    color: "sky",

    featured: false,

    stories: 167,

    tagline:
      "Adventure changes people in unexpected ways.",
  },
];

/* ==========================================================
   FEATURED COLLECTIONS
========================================================== */

export const featuredCollections: ArchiveCollection[] =
  [
    {
      id: 1,

      title: "Letters Never Sent",

      slug: "letters-never-sent",

      description:
        "Messages written but never delivered.",

      storyCount: 542,
    },

    {
      id: 2,

      title: "Before I Became Me",

      slug: "before-i-became-me",

      description:
        "Stories of transformation and growth.",

      storyCount: 312,
    },

    {
      id: 3,

      title: "Turning Points",

      slug: "turning-points",

      description:
        "Moments that changed everything.",

      storyCount: 287,
    },

    {
      id: 4,

      title: "Regrets & Lessons",

      slug: "regrets-lessons",

      description:
        "Wisdom born from experience.",

      storyCount: 411,
    },
  ];

/* ==========================================================
   QUICK CATEGORY LOOKUP
========================================================== */

export const categoryLookup = categories.reduce(
  (acc, category) => {
    acc[category.slug] = category;
    return acc;
  },
  {} as Record<string, ArchiveCategory>
);

/* ==========================================================
   POPULAR TAGS
========================================================== */

export const popularTags = [
  "Love",
  "Marriage",
  "Family",
  "Friendship",
  "Childhood",
  "Loss",
  "Hope",
  "Transformation",
  "Healing",
  "Travel",
  "Purpose",
  "Career",
  "Regret",
  "Second Chances",
  "Destiny",
  "Letters",
  "Memory",
  "Growth",
  "Faith",
  "Courage",
];

/* ==========================================================
   HUMAN ARCHIVE STATISTICS
========================================================== */

export const archiveStats = {
  totalStories: 4368,

  totalCollections: 12,

  countriesRepresented: 42,

  activeContributors: 1894,

  anonymousStories: 2781,

  publishedLetters: 542,

  preservedMemories: 624,

  turningPoints: 287,

  transformations: 312,

  regretsAndLessons: 411,
};

/* ==========================================================
   COLLECTION ICONS MAP
========================================================== */

export const collectionIcons = {
  archive: Archive,
  stories: BookOpen,
  letters: Mail,
  memory: Feather,
  regrets: Heart,
  transformation: Sparkles,
  turningPoint: TrendingUp,
  time: Clock3,
  journey: Compass,
  lesson: Lightbulb,
  family: Home,
  people: Users,
  adventure: Mountain,
  kindness: HandHeart,
  music: Music,
};