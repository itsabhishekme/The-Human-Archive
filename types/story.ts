/* ==========================================================
   THE HUMAN ARCHIVE
   FILE:
   D:\Project\the-human-archive\types\story.ts

   Central Story Types
   Next.js 15 + TypeScript
========================================================== */

/* ==========================================================
   AUTHOR
========================================================== */

export interface StoryAuthor {
  id?: string;

  name: string;

  username?: string;

  email?: string;

  avatar?: string;

  bio?: string;

  location?: string;

  website?: string;

  verified?: boolean;

  anonymous?: boolean;

  joinedAt?: string;
}

/* ==========================================================
   STORY STATS
========================================================== */

export interface StoryStats {
  views: number;

  likes: number;

  bookmarks: number;

  comments: number;

  shares: number;

  readingTime?: number;
}

/* ==========================================================
   STORY SEO
========================================================== */

export interface StorySEO {
  metaTitle: string;

  metaDescription: string;

  keywords: string[];

  canonicalUrl?: string;

  ogImage?: string;
}

/* ==========================================================
   STORY COMMENT
========================================================== */

export interface StoryComment {
  id: string;

  author: string;

  avatar?: string;

  content: string;

  createdAt: string;

  likes?: number;

  replies?: StoryComment[];
}

/* ==========================================================
   STORY BLOCKS
========================================================== */

export type StoryBlockType =
  | "paragraph"
  | "heading"
  | "quote"
  | "image"
  | "divider"
  | "highlight"
  | "letter"
  | "timeline";

export interface StoryBlock {
  id: string;

  type: StoryBlockType;

  content: string;

  caption?: string;

  image?: string;
}

/* ==========================================================
   STORY CATEGORY
========================================================== */

export type StoryCategory =
  | "Letters"
  | "Transformation"
  | "Regrets"
  | "Memory"
  | "Turning Point"
  | "Life Lessons"
  | "Family"
  | "Childhood"
  | "Adventure"
  | "Relationships"
  | "Career"
  | "Education";

/* ==========================================================
   STORY COLLECTIONS
========================================================== */

export type StoryCollection =
  | "letters-never-sent"
  | "before-i-became-me"
  | "turning-points"
  | "regrets-lessons"
  | "memories"
  | "life-lessons"
  | "family-stories"
  | "childhood-memories"
  | "career-journeys"
  | "adventures";

/* ==========================================================
   MAIN STORY TYPE
========================================================== */

export interface Story {
  id: number;

  slug: string;

  title: string;

  subtitle?: string;

  excerpt: string;

  quote?: string;

  category: StoryCategory;

  collection: StoryCollection;

  featured: boolean;

  trending: boolean;

  published: boolean;

  archived?: boolean;

  coverImage: string;

  gallery?: string[];

  publishedDate: string;

  updatedDate?: string;

  readTime: string;

  author: StoryAuthor;

  stats: StoryStats;

  seo?: StorySEO;

  comments?: StoryComment[];

  tags: string[];

  content: string[];

  blocks?: StoryBlock[];
}

/* ==========================================================
   STORY SUBMISSION
========================================================== */

export interface StorySubmission {
  title: string;

  category: StoryCategory;

  authorName: string;

  email?: string;

  anonymous: boolean;

  story: string;

  consent: boolean;

  submittedAt?: string;
}

/* ==========================================================
   LETTERS NEVER SENT
========================================================== */

export interface LetterStory extends Story {
  recipient?: string;

  sent?: boolean;

  relationship?: string;
}

/* ==========================================================
   BEFORE I BECAME ME
========================================================== */

export interface TransformationStory
  extends Story {
  before?: string;

  after?: string;

  lesson?: string;
}

/* ==========================================================
   TURNING POINTS
========================================================== */

export interface TurningPointStory
  extends Story {
  eventDate?: string;

  turningMoment?: string;

  impact?: string;
}

/* ==========================================================
   REGRETS & LESSONS
========================================================== */

export interface RegretStory extends Story {
  regret?: string;

  lesson?: string;

  advice?: string;
}

/* ==========================================================
   MEMORY STORY
========================================================== */

export interface MemoryStory extends Story {
  year?: string;

  location?: string;

  memoryType?: string;
}

/* ==========================================================
   STORY FILTERS
========================================================== */

export interface StoryFilters {
  search?: string;

  category?: string;

  collection?: string;

  featured?: boolean;

  trending?: boolean;

  tags?: string[];
}

/* ==========================================================
   STORY RESPONSE
========================================================== */

export interface StoryResponse {
  success: boolean;

  data: Story[];

  total: number;

  page?: number;

  limit?: number;
}

/* ==========================================================
   ARCHIVE STATISTICS
========================================================== */

export interface ArchiveStatistics {
  totalStories: number;

  totalViews: number;

  totalLikes: number;

  totalComments: number;

  totalBookmarks: number;

  totalContributors: number;

  totalCollections: number;

  countriesRepresented: number;
}

/* ==========================================================
   FEATURED COLLECTION
========================================================== */

export interface FeaturedCollection {
  id: number;

  title: string;

  slug: string;

  description: string;

  coverImage?: string;

  storyCount: number;
}

/* ==========================================================
   HOMEPAGE CONTENT
========================================================== */

export interface HomepageSection {
  title: string;

  subtitle?: string;

  description?: string;

  stories?: Story[];
}

/* ==========================================================
   NAVIGATION ITEM
========================================================== */

export interface NavigationItem {
  label: string;

  href: string;

  icon?: string;
}

/* ==========================================================
   SEARCH RESULT
========================================================== */

export interface SearchResult {
  id: number;

  title: string;

  slug: string;

  excerpt: string;

  category: string;
}

/* ==========================================================
   SHARE DATA
========================================================== */

export interface ShareData {
  title: string;

  text: string;

  url: string;
}

/* ==========================================================
   STORY CARD PROPS
========================================================== */

export interface StoryCardProps {
  title: string;

  slug: string;

  excerpt: string;

  category: string;

  author?: string;

  date?: string;

  readTime?: string;

  featured?: boolean;

  views?: string;

  likes?: string;

  comments?: string;

  image?: string;
}

/* ==========================================================
   STORY PAGE PROPS
========================================================== */

export interface StoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* ==========================================================
   RELATED STORY
========================================================== */

export interface RelatedStory {
  id: number;

  title: string;

  slug: string;

  excerpt: string;

  category: string;
}

/* ==========================================================
   TRENDING STORY
========================================================== */

export interface TrendingStory {
  id: number;

  title: string;

  slug: string;

  views: number;
}

/* ==========================================================
   CONSTANT TYPES
========================================================== */

export const STORY_COLLECTIONS: StoryCollection[] =
  [
    "letters-never-sent",
    "before-i-became-me",
    "turning-points",
    "regrets-lessons",
    "memories",
    "life-lessons",
    "family-stories",
    "childhood-memories",
    "career-journeys",
    "adventures",
  ];

export const STORY_CATEGORIES: StoryCategory[] =
  [
    "Letters",
    "Transformation",
    "Regrets",
    "Memory",
    "Turning Point",
    "Life Lessons",
    "Family",
    "Childhood",
    "Adventure",
    "Relationships",
    "Career",
    "Education",
  ];

/* ==========================================================
   DEFAULT EXPORT TYPES HELPER
========================================================== */

export type StoryLike =
  | Story
  | LetterStory
  | TransformationStory
  | TurningPointStory
  | RegretStory
  | MemoryStory;