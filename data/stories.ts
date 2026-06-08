export interface StoryAuthor {
  name: string;
  avatar?: string;
  bio?: string;
  anonymous?: boolean;
}

export interface StoryStats {
  views: number;
  likes: number;
  bookmarks: number;
  comments: number;
  shares: number;
}

export interface Story {
  id: number;

  slug: string;

  title: string;

  excerpt: string;

  category: string;

  collection:
    | "letters-never-sent"
    | "before-i-became-me"
    | "turning-points"
    | "regrets-lessons"
    | "memories"
    | "life-lessons";

  featured: boolean;

  trending: boolean;

  published: boolean;

  author: StoryAuthor;

  readTime: string;

  coverImage: string;

  publishedDate: string;

  tags: string[];

  stats: StoryStats;

  quote: string;

  content: string[];
}

/* ==========================================================
   STORIES
========================================================== */

export const stories: Story[] = [
  {
    id: 1,

    slug: "the-call-i-never-returned",

    title: "The Call I Never Returned",

    excerpt:
      "I thought there would always be another chance to call back. I was wrong.",

    category: "Regrets",

    collection: "regrets-lessons",

    featured: true,

    trending: true,

    published: true,

    author: {
      name: "Anonymous",
      anonymous: true,
    },

    readTime: "8 min read",

    coverImage:
      "/images/story1.jpg",

    publishedDate: "2026-03-18",

    tags: [
      "Regret",
      "Family",
      "Loss",
      "Reflection",
    ],

    quote:
      "Some moments only knock once.",

    stats: {
      views: 12450,
      likes: 983,
      bookmarks: 522,
      comments: 145,
      shares: 302,
    },

    content: [
      "There are moments in life that appear ordinary while they happen.",
      "A missed call. A postponed conversation. A message left unanswered.",
      "Most of the time, tomorrow arrives.",
      "Sometimes it doesn't.",
      "The phone rang while I was driving home after work.",
      "I saw the name on the screen and thought I would call back later.",
      "Hours passed.",
      "Then came the news that divided life into before and after.",
      "The call remained unanswered forever.",
      "For years I replayed that decision in my mind.",
      "Not because one conversation could change fate, but because I never got the chance to say what I thought could wait.",
      "Today, when someone important calls, I answer.",
      "Because some moments only knock once.",
    ],
  },

  {
    id: 2,

    slug: "the-letter-i-never-sent",

    title: "The Letter I Never Sent",

    excerpt:
      "The words stayed in a drawer for twelve years. The feelings never left.",

    category: "Letters",

    collection: "letters-never-sent",

    featured: true,

    trending: true,

    published: true,

    author: {
      name: "Anonymous",
      anonymous: true,
    },

    readTime: "10 min read",

    coverImage:
      "/images/stories/the-letter-i-never-sent.jpg",

    publishedDate: "2026-02-11",

    tags: [
      "Love",
      "Letters",
      "Relationships",
      "Closure",
    ],

    quote:
      "Some letters are written for the writer, not the recipient.",

    stats: {
      views: 19340,
      likes: 1432,
      bookmarks: 921,
      comments: 204,
      shares: 519,
    },

    content: [
      "I wrote the letter on a rainy evening.",
      "The intention was simple: say everything I never managed to say in person.",
      "Page after page filled with honesty.",
      "Apologies. Gratitude. Questions.",
      "Then I folded it carefully and placed it in a drawer.",
      "Days became months.",
      "Months became years.",
      "The letter remained where I left it.",
      "Twelve years later, I found it again.",
      "The paper had aged, but the emotions remained untouched.",
      "I never sent it.",
      "Yet writing it changed me.",
    ],
  },

  {
    id: 3,

    slug: "before-i-became-me",

    title: "Before I Became Me",

    excerpt:
      "The version of me everyone sees today was built from a thousand invisible battles.",

    category: "Transformation",

    collection: "before-i-became-me",

    featured: true,

    trending: true,

    published: true,

    author: {
      name: "Anonymous",
      anonymous: true,
    },

    readTime: "12 min read",

    coverImage:
      "/images/stories/before-i-became-me.jpg",

    publishedDate: "2026-01-08",

    tags: [
      "Transformation",
      "Healing",
      "Identity",
      "Growth",
    ],

    quote:
      "Becoming yourself is a lifelong process.",

    stats: {
      views: 22110,
      likes: 1821,
      bookmarks: 1192,
      comments: 260,
      shares: 801,
    },

    content: [
      "People often meet the final version and assume the journey was easy.",
      "They see confidence without witnessing uncertainty.",
      "They see strength without seeing struggle.",
      "Years ago I was a different person.",
      "Fear shaped many decisions.",
      "Self-doubt influenced every opportunity.",
      "Growth did not happen overnight.",
      "It arrived through setbacks.",
      "Through mistakes.",
      "Through healing.",
      "The person I am today exists because the person I used to be refused to give up.",
    ],
  },

  {
    id: 4,

    slug: "the-train-i-missed",

    title: "The Train I Missed",

    excerpt:
      "Missing one train unexpectedly led me toward a completely different future.",

    category: "Turning Point",

    collection: "turning-points",

    featured: true,

    trending: false,

    published: true,

    author: {
      name: "Anonymous",
      anonymous: true,
    },

    readTime: "9 min read",

    coverImage:
      "/images/stories/the-train-i-missed.jpg",

    publishedDate: "2025-12-20",

    tags: [
      "Destiny",
      "Travel",
      "Chance",
      "Turning Point",
    ],

    quote:
      "Sometimes delays are directions.",

    stats: {
      views: 11762,
      likes: 742,
      bookmarks: 404,
      comments: 82,
      shares: 241,
    },

    content: [
      "I arrived at the platform thirty seconds too late.",
      "The train doors closed.",
      "I watched it disappear.",
      "Frustration quickly replaced optimism.",
      "Then something unexpected happened.",
      "While waiting for the next train, I met someone who changed my life.",
      "One missed train became one new direction.",
    ],
  },

  {
    id: 5,

    slug: "the-photograph-in-the-drawer",

    title: "The Photograph In The Drawer",

    excerpt:
      "One forgotten photograph reopened memories I thought had disappeared forever.",

    category: "Memory",

    collection: "memories",

    featured: false,

    trending: true,

    published: true,

    author: {
      name: "Anonymous",
      anonymous: true,
    },

    readTime: "7 min read",

    coverImage:
      "/images/stories/the-photograph-in-the-drawer.jpg",

    publishedDate: "2025-11-11",

    tags: [
      "Memory",
      "Family",
      "Nostalgia",
    ],

    quote:
      "Photographs remember what people forget.",

    stats: {
      views: 9381,
      likes: 590,
      bookmarks: 276,
      comments: 61,
      shares: 121,
    },

    content: [
      "The photograph was hidden inside an old book.",
      "Dust covered its edges.",
      "Time had faded the colors.",
      "But not the memories.",
      "The image transported me back decades in an instant.",
      "Sometimes memory needs only one doorway.",
    ],
  },

  {
    id: 6,

    slug: "starting-again-at-thirty-five",

    title: "Starting Again At Thirty-Five",

    excerpt:
      "When everything collapsed, I discovered that beginnings have no age limit.",

    category: "Life Lessons",

    collection: "life-lessons",

    featured: false,

    trending: true,

    published: true,

    author: {
      name: "Anonymous",
      anonymous: true,
    },

    readTime: "11 min read",

    coverImage:
      "/images/stories/starting-again-at-thirty-five.jpg",

    publishedDate: "2025-10-03",

    tags: [
      "Career",
      "Growth",
      "Resilience",
      "Second Chances",
    ],

    quote:
      "It is never too late to begin again.",

    stats: {
      views: 15670,
      likes: 1120,
      bookmarks: 684,
      comments: 129,
      shares: 388,
    },

    content: [
      "At thirty-five, I believed I was too late.",
      "Too late to change careers.",
      "Too late to start over.",
      "Too late to dream differently.",
      "Then life forced me to reconsider.",
      "What felt like an ending became a beginning.",
      "The future was not behind me.",
      "It was waiting ahead.",
    ],
  },
];

/* ==========================================================
   HELPERS
========================================================== */

export const featuredStories = stories.filter(
  (story) => story.featured
);

export const trendingStories = stories.filter(
  (story) => story.trending
);

export const publishedStories = stories.filter(
  (story) => story.published
);

export const getStoryBySlug = (
  slug: string
) => {
  return stories.find(
    (story) => story.slug === slug
  );
};

export const getStoriesByCategory = (
  category: string
) => {
  return stories.filter(
    (story) =>
      story.category.toLowerCase() ===
      category.toLowerCase()
  );
};

export const getStoriesByCollection = (
  collection: string
) => {
  return stories.filter(
    (story) =>
      story.collection === collection
  );
};

export const getRelatedStories = (
  slug: string,
  limit = 3
) => {
  const currentStory =
    getStoryBySlug(slug);

  if (!currentStory) return [];

  return stories
    .filter(
      (story) =>
        story.slug !== slug &&
        story.collection ===
          currentStory.collection
    )
    .slice(0, limit);
};

export const archiveStatistics = {
  totalStories: stories.length,

  totalViews: stories.reduce(
    (sum, story) =>
      sum + story.stats.views,
    0
  ),

  totalLikes: stories.reduce(
    (sum, story) =>
      sum + story.stats.likes,
    0
  ),

  totalBookmarks: stories.reduce(
    (sum, story) =>
      sum + story.stats.bookmarks,
    0
  ),

  totalComments: stories.reduce(
    (sum, story) =>
      sum + story.stats.comments,
    0
  ),
};