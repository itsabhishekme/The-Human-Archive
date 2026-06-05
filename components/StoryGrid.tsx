"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Grid3X3,
  LayoutList,
  Filter,
  Sparkles,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Mail,
  Heart,
  Feather,
  Clock3,
} from "lucide-react";
import StoryCard, {
  FeaturedStoryCard,
  MiniStoryCard,
} from "./StoryCard";

export interface StoryItem {
  id: number;
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
}

interface StoryGridProps {
  stories?: StoryItem[];
  title?: string;
  description?: string;
}

export default function StoryGrid({
  stories = defaultStories,
  title = "Human Stories",
  description = "A curated collection of memories, turning points, letters, regrets, lessons, and experiences preserved for future generations.",
}: StoryGridProps) {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<
    "grid" | "list"
  >("grid");

  const [activeCategory, setActiveCategory] =
    useState("All");

  const categories = [
    "All",
    "Letters",
    "Transformation",
    "Memory",
    "Regrets",
    "Turning Point",
    "Story",
  ];

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const categoryMatch =
        activeCategory === "All" ||
        story.category === activeCategory;

      const searchMatch =
        story.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        story.excerpt
          .toLowerCase()
          .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [
    stories,
    search,
    activeCategory,
  ]);

  const featuredStory =
    stories.find((story) => story.featured) ||
    stories[0];

  return (
    <section className="relative">
      {/* HEADER */}

      <div className="text-center max-w-5xl mx-auto mb-20">
        <div
          className="
            inline-flex
            items-center
            gap-3
            px-5
            py-3
            rounded-full
            bg-amber-300/10
            border
            border-amber-300/10
            mb-8
          "
        >
          <Sparkles className="w-4 h-4 text-amber-300" />

          <span className="text-sm">
            The Human Archive Collection
          </span>
        </div>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-bold
            leading-none
            mb-8
          "
        >
          {title}
        </h2>

        <p
          className="
            text-zinc-400
            text-xl
            leading-relaxed
          "
        >
          {description}
        </p>
      </div>

      {/* FEATURED */}

      {featuredStory && (
        <div className="mb-24">
          <FeaturedStoryCard
            title={featuredStory.title}
            slug={featuredStory.slug}
            excerpt={featuredStory.excerpt}
            category={featuredStory.category}
            readTime={
              featuredStory.readTime
            }
          />
        </div>
      )}

      {/* SEARCH BAR */}

      <div className="archive-card p-6 mb-12">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="relative flex-1">
            <Search
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            />

            <input
              type="text"
              placeholder="Search stories..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-full
                h-16
                pl-14
                pr-5
                rounded-2xl
                bg-white/[0.03]
                border
                border-white/10
                outline-none
                focus:border-amber-300/30
              "
            />
          </div>

          <div className="flex gap-3">
            <button className="btn-outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>

            <button
              onClick={() =>
                setView("grid")
              }
              className={`
                btn-outline

                ${
                  view === "grid"
                    ? "border-amber-300/30 text-amber-300"
                    : ""
                }
              `}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>

            <button
              onClick={() =>
                setView("list")
              }
              className={`
                btn-outline

                ${
                  view === "list"
                    ? "border-amber-300/30 text-amber-300"
                    : ""
                }
              `}
            >
              <LayoutList className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* CATEGORY FILTERS */}

      <div className="flex flex-wrap gap-4 justify-center mb-20">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              setActiveCategory(category)
            }
            className={`
              px-6
              py-3
              rounded-full
              transition-all

              ${
                activeCategory === category
                  ? "bg-amber-300 text-black"
                  : "border border-white/10 hover:border-white/20"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* RESULTS */}

      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-3xl font-bold">
            Archive Results
          </h3>

          <p className="text-zinc-500 mt-2">
            {filteredStories.length} stories
            found
          </p>
        </div>
      </div>

      {/* STORIES */}

      <AnimatePresence mode="wait">
        {view === "grid" ? (
          <motion.div
            key="grid"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
            "
          >
            {filteredStories.map(
              (story, index) => (
                <motion.div
                  key={story.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <StoryCard
                    {...story}
                  />
                </motion.div>
              )
            )}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="space-y-6"
          >
            {filteredStories.map(
              (story, index) => (
                <motion.div
                  key={story.id}
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="
                    archive-card
                    p-8
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    gap-8
                  "
                >
                  <div className="max-w-4xl">
                    <span
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-amber-300/10
                        text-amber-300
                        text-sm
                      "
                    >
                      {story.category}
                    </span>

                    <h3
                      className="
                        text-3xl
                        font-bold
                        mt-5
                        mb-4
                      "
                    >
                      {story.title}
                    </h3>

                    <p className="text-zinc-400">
                      {story.excerpt}
                    </p>
                  </div>

                  <button className="btn-primary">
                    Read Story
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </button>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* COLLECTIONS */}

      <div className="mt-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Explore Collections
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            {
              icon: Mail,
              title: "Letters Never Sent",
              count: "542 Stories",
            },
            {
              icon: Sparkles,
              title: "Before I Became Me",
              count: "312 Stories",
            },
            {
              icon: TrendingUp,
              title: "Turning Points",
              count: "287 Stories",
            },
            {
              icon: Heart,
              title: "Regrets & Lessons",
              count: "411 Stories",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                whileHover={{
                  y: -10,
                }}
                key={item.title}
                className="
                  archive-card
                  p-10
                  text-center
                "
              >
                <div
                  className="
                    w-20
                    h-20
                    rounded-3xl
                    bg-amber-300/10
                    mx-auto
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >
                  <Icon className="w-10 h-10 text-amber-300" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-500">
                  {item.count}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* TRENDING */}

      <div className="mt-32">
        <div className="flex items-center gap-4 mb-12">
          <TrendingUp className="text-amber-300 w-8 h-8" />

          <h2 className="text-4xl font-bold">
            Trending Stories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stories
            .slice(0, 6)
            .map((story) => (
              <MiniStoryCard
                key={story.id}
                title={story.title}
                slug={story.slug}
                category={story.category}
              />
            ))}
        </div>
      </div>

      {/* CTA */}

      <div className="mt-32">
        <div
          className="
            archive-card
            p-16
            md:p-24
            text-center
          "
        >
          <div
            className="
              w-24
              h-24
              rounded-3xl
              bg-amber-300/10
              mx-auto
              flex
              items-center
              justify-center
              mb-10
            "
          >
            <BookOpen className="w-12 h-12 text-amber-300" />
          </div>

          <h2
            className="
              text-5xl
              md:text-8xl
              font-bold
              leading-none
              mb-8
            "
          >
            Every Story
            <br />
            Matters
          </h2>

          <p
            className="
              max-w-3xl
              mx-auto
              text-zinc-400
              text-xl
              leading-relaxed
              mb-12
            "
          >
            Help preserve memories,
            experiences, lessons, and
            turning points for future
            generations.
          </p>

          <button className="btn-primary text-lg px-10 py-5">
            Submit Your Story
            <ArrowRight className="ml-3 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   DEMO DATA
===================================================== */

const defaultStories: StoryItem[] = [
  {
    id: 1,
    title: "The Call I Never Returned",
    slug: "the-call-i-never-returned",
    excerpt:
      "A missed phone call became one of the most important lessons of my life.",
    category: "Regrets",
    featured: true,
    views: "4.2k",
    likes: "981",
    comments: "103",
  },
  {
    id: 2,
    title: "The Letter I Never Sent",
    slug: "the-letter-i-never-sent",
    excerpt:
      "Some letters never reach their destination but still carry meaning.",
    category: "Letters",
  },
  {
    id: 3,
    title: "Before I Became Me",
    slug: "before-i-became-me",
    excerpt:
      "The story of identity, healing, and becoming someone new.",
    category: "Transformation",
  },
  {
    id: 4,
    title: "The Stranger In The Café",
    slug: "the-stranger-in-the-cafe",
    excerpt:
      "A brief encounter changed everything.",
    category: "Turning Point",
  },
  {
    id: 5,
    title: "The Photograph In The Drawer",
    slug: "the-photograph-in-the-drawer",
    excerpt:
      "One forgotten photograph reopened a lifetime of memories.",
    category: "Memory",
  },
  {
    id: 6,
    title: "Starting Again At Thirty-Five",
    slug: "starting-again-at-thirty-five",
    excerpt:
      "What happens when life forces you to begin again.",
    category: "Story",
  },
];