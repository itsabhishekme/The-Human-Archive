import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* ==========================================================
   TAILWIND CLASS MERGER
========================================================== */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ==========================================================
   DATE UTILITIES
========================================================== */

export function formatDate(
  date: string | Date,
  locale: string = "en-US"
): string {
  const parsedDate =
    typeof date === "string"
      ? new Date(date)
      : date;

  return parsedDate.toLocaleDateString(
    locale,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
}

export function formatShortDate(
  date: string | Date
): string {
  const parsedDate =
    typeof date === "string"
      ? new Date(date)
      : date;

  return parsedDate.toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );
}

export function getRelativeTime(
  date: string | Date
): string {
  const parsedDate =
    typeof date === "string"
      ? new Date(date)
      : date;

  const now = new Date();

  const seconds = Math.floor(
    (now.getTime() -
      parsedDate.getTime()) /
      1000
  );

  const intervals = [
    {
      label: "year",
      seconds: 31536000,
    },
    {
      label: "month",
      seconds: 2592000,
    },
    {
      label: "week",
      seconds: 604800,
    },
    {
      label: "day",
      seconds: 86400,
    },
    {
      label: "hour",
      seconds: 3600,
    },
    {
      label: "minute",
      seconds: 60,
    },
  ];

  for (const interval of intervals) {
    const count = Math.floor(
      seconds / interval.seconds
    );

    if (count >= 1) {
      return `${count} ${interval.label}${
        count > 1 ? "s" : ""
      } ago`;
    }
  }

  return "Just now";
}

/* ==========================================================
   READING TIME
========================================================== */

export function calculateReadingTime(
  content:
    | string
    | string[]
): string {
  const text = Array.isArray(content)
    ? content.join(" ")
    : content;

  const words =
    text.trim().split(/\s+/).length;

  const readingTime =
    Math.ceil(words / 200);

  return `${readingTime} min read`;
}

/* ==========================================================
   TEXT UTILITIES
========================================================== */

export function truncateText(
  text: string,
  length = 150
): string {
  if (text.length <= length)
    return text;

  return (
    text.slice(0, length).trim() +
    "..."
  );
}

export function createExcerpt(
  text: string,
  length = 180
): string {
  return truncateText(text, length);
}

export function capitalize(
  text: string
): string {
  return (
    text.charAt(0).toUpperCase() +
    text.slice(1)
  );
}

export function titleCase(
  text: string
): string {
  return text.replace(
    /\w\S*/g,
    (txt) =>
      txt.charAt(0).toUpperCase() +
      txt.substr(1).toLowerCase()
  );
}

export function slugify(
  text: string
): string {
  return text
    .toLowerCase()
    .trim()
    .replace(
      /[^\w\s-]/g,
      ""
    )
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/* ==========================================================
   STORY HELPERS
========================================================== */

export function generateStoryId() {
  return `story_${Date.now()}_${Math.random()
    .toString(36)
    .substring(2, 9)}`;
}

export function estimateReadingTime(
  text: string
) {
  const words =
    text.split(/\s+/).length;

  const minutes =
    Math.ceil(words / 200);

  return minutes;
}

export function getStoryBadgeColor(
  category: string
) {
  const colors: Record<
    string,
    string
  > = {
    Letters:
      "bg-blue-500/10 text-blue-400",
    Transformation:
      "bg-purple-500/10 text-purple-400",
    Regrets:
      "bg-rose-500/10 text-rose-400",
    Memory:
      "bg-cyan-500/10 text-cyan-400",
    "Turning Point":
      "bg-orange-500/10 text-orange-400",
    "Life Lessons":
      "bg-amber-500/10 text-amber-400",
  };

  return (
    colors[category] ||
    "bg-zinc-500/10 text-zinc-400"
  );
}

/* ==========================================================
   NUMBER FORMATTING
========================================================== */

export function formatNumber(
  value: number
): string {
  return new Intl.NumberFormat(
    "en-US"
  ).format(value);
}

export function compactNumber(
  value: number
): string {
  return new Intl.NumberFormat(
    "en-US",
    {
      notation: "compact",
      maximumFractionDigits: 1,
    }
  ).format(value);
}

export function percentage(
  value: number,
  total: number
): string {
  if (!total) return "0%";

  return `${(
    (value / total) *
    100
  ).toFixed(1)}%`;
}

/* ==========================================================
   RANDOM HELPERS
========================================================== */

export function randomItem<T>(
  items: T[]
): T {
  return items[
    Math.floor(
      Math.random() *
        items.length
    )
  ];
}

export function shuffleArray<T>(
  array: T[]
): T[] {
  const shuffled = [
    ...array,
  ];

  for (
    let i =
      shuffled.length - 1;
    i > 0;
    i--
  ) {
    const j = Math.floor(
      Math.random() *
        (i + 1)
    );

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}

/* ==========================================================
   SEARCH UTILITIES
========================================================== */

export function searchStories<
  T extends {
    title: string;
    excerpt?: string;
    tags?: string[];
  }
>(
  stories: T[],
  query: string
): T[] {
  if (!query.trim())
    return stories;

  const search =
    query.toLowerCase();

  return stories.filter(
    (story) =>
      story.title
        .toLowerCase()
        .includes(search) ||
      story.excerpt
        ?.toLowerCase()
        .includes(search) ||
      story.tags?.some((tag) =>
        tag
          .toLowerCase()
          .includes(search)
      )
  );
}

/* ==========================================================
   URL HELPERS
========================================================== */

export function absoluteUrl(
  path: string
) {
  const base =
    process.env
      .NEXT_PUBLIC_SITE_URL ||
    "https://thehumanarchive.com";

  return `${base}${path}`;
}

export function storyUrl(
  slug: string
) {
  return `/stories/${slug}`;
}

/* ==========================================================
   SOCIAL SHARING
========================================================== */

export function twitterShareUrl(
  title: string,
  url: string
) {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(
    url
  )}`;
}

export function linkedinShareUrl(
  url: string
) {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;
}

export function facebookShareUrl(
  url: string
) {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
}

/* ==========================================================
   STORAGE HELPERS
========================================================== */

export function saveToStorage(
  key: string,
  value: unknown
) {
  if (
    typeof window ===
    "undefined"
  )
    return;

  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
}

export function getFromStorage<T>(
  key: string,
  defaultValue: T
): T {
  if (
    typeof window ===
    "undefined"
  ) {
    return defaultValue;
  }

  try {
    const item =
      localStorage.getItem(
        key
      );

    return item
      ? JSON.parse(item)
      : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function removeFromStorage(
  key: string
) {
  if (
    typeof window ===
    "undefined"
  )
    return;

  localStorage.removeItem(
    key
  );
}

/* ==========================================================
   COLOR UTILITIES
========================================================== */

export function categoryGradient(
  category: string
): string {
  const gradients: Record<
    string,
    string
  > = {
    Letters:
      "from-blue-500/20 via-blue-500/5 to-transparent",

    Transformation:
      "from-purple-500/20 via-purple-500/5 to-transparent",

    Regrets:
      "from-rose-500/20 via-rose-500/5 to-transparent",

    Memory:
      "from-cyan-500/20 via-cyan-500/5 to-transparent",

    "Turning Point":
      "from-orange-500/20 via-orange-500/5 to-transparent",

    "Life Lessons":
      "from-amber-500/20 via-amber-500/5 to-transparent",
  };

  return (
    gradients[category] ||
    "from-zinc-500/20 via-zinc-500/5 to-transparent"
  );
}

/* ==========================================================
   ANIMATION PRESETS
========================================================== */

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
  },

  animate: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.8,
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
  },

  transition: {
    duration: 0.8,
  },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },

  animate: {
    opacity: 1,
    scale: 1,
  },

  transition: {
    duration: 0.8,
  },
};

/* ==========================================================
   ARCHIVE METADATA
========================================================== */

export const archiveMetadata = {
  title: "The Human Archive",

  tagline:
    "Preserving the stories people never thought anyone would read.",

  description:
    "A living archive of memories, letters, turning points, regrets, lessons, and transformations from people around the world.",

  keywords: [
    "human stories",
    "life stories",
    "letters never sent",
    "personal transformation",
    "turning points",
    "memories",
    "life lessons",
    "human archive",
  ],
};

/* ==========================================================
   EXPORT DEFAULT
========================================================== */

const utils = {
  cn,
  formatDate,
  formatShortDate,
  getRelativeTime,
  calculateReadingTime,
  truncateText,
  createExcerpt,
  capitalize,
  titleCase,
  slugify,
  generateStoryId,
  estimateReadingTime,
  formatNumber,
  compactNumber,
  percentage,
  randomItem,
  shuffleArray,
  searchStories,
  absoluteUrl,
};

export default utils;