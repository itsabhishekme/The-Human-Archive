"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  Calendar,
  Clock3,
  User,
  BookOpen,
  TrendingUp,
  Sparkles,
  Filter,
  Bookmark,
  Grid3X3,
  LayoutList,
  Heart,
  Mail,
  Feather,
  Quote,
} from "lucide-react";

type Story = {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  excerpt: string;
};

export default function StoriesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("All");
  const [gridView, setGridView] = useState(true);

  const stories: Story[] = [
    {
      id: 1,
      slug: "the-call-i-never-returned",
      title: "The Call I Never Returned",
      category: "Regrets",
      author: "Anonymous",
      date: "March 2026",
      readTime: "8 min read",
      featured: true,
      excerpt:
        "A missed phone call became one of the most important lessons of my life.",
    },
    {
      id: 2,
      slug: "the-letter-i-never-sent",
      title: "The Letter I Never Sent",
      category: "Letters",
      author: "Anonymous",
      date: "March 2026",
      readTime: "10 min read",
      excerpt:
        "Some letters never reach their destination, yet still carry meaning through time.",
    },
    {
      id: 3,
      slug: "the-train-i-missed",
      title: "The Train I Missed",
      category: "Turning Point",
      author: "Anonymous",
      date: "February 2026",
      readTime: "7 min read",
      excerpt:
        "A delayed journey unexpectedly changed the course of an entire future.",
    },
    {
      id: 4,
      slug: "before-i-became-me",
      title: "Before I Became Me",
      category: "Transformation",
      author: "Anonymous",
      date: "January 2026",
      readTime: "12 min read",
      excerpt:
        "A story about identity, growth, healing, and becoming someone new.",
    },
    {
      id: 5,
      slug: "the-photograph-in-the-drawer",
      title: "The Photograph In The Drawer",
      category: "Memory",
      author: "Anonymous",
      date: "December 2025",
      readTime: "6 min read",
      excerpt:
        "One forgotten photograph reopened memories that had slept for years.",
    },
    {
      id: 6,
      slug: "the-promise-i-couldnt-keep",
      title: "The Promise I Couldn't Keep",
      category: "Regrets",
      author: "Anonymous",
      date: "November 2025",
      readTime: "8 min read",
      excerpt:
        "A reflection on responsibility, timing, and the promises we carry.",
    },
    {
      id: 7,
      slug: "dear-younger-me",
      title: "Dear Younger Me",
      category: "Letters",
      author: "Anonymous",
      date: "October 2025",
      readTime: "9 min read",
      excerpt:
        "A message sent backward through time to a younger version of myself.",
    },
    {
      id: 8,
      slug: "starting-again-at-thirty-five",
      title: "Starting Again At Thirty-Five",
      category: "Transformation",
      author: "Anonymous",
      date: "September 2025",
      readTime: "11 min read",
      excerpt:
        "What happens when life forces you to begin again from zero.",
    },
  ];

  const categories = [
    "All",
    "Letters",
    "Transformation",
    "Regrets",
    "Turning Point",
    "Memory",
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
  }, [search, activeCategory]);

  const featuredStory = stories.find(
    (story) => story.featured
  );

  return (
    <main className="relative overflow-hidden">
      {/* HERO */}

      <section className="relative pt-40 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-300/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center"
          >
            <p className="uppercase tracking-[0.5em] text-zinc-500 mb-8">
              The Human Archive
            </p>

            <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold leading-none mb-10">
              Stories
            </h1>

            <p className="max-w-4xl mx-auto text-zinc-400 text-xl md:text-2xl leading-relaxed">
              A collection of human experiences,
              memories, lessons, transformations,
              regrets, and moments that deserve
              to be remembered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["1,248", "Stories"],
              ["542", "Letters"],
              ["312", "Life Lessons"],
              ["98", "Transformations"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="archive-card p-8 text-center"
              >
                <h3 className="text-5xl font-bold gradient-text">
                  {number}
                </h3>

                <p className="text-zinc-400 mt-3">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}

      {featuredStory && (
        <section className="pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="archive-card overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="min-h-[600px] bg-gradient-to-br from-amber-300/10 via-zinc-900 to-black" />

                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <span className="text-amber-300 uppercase tracking-[0.3em] mb-6">
                    Featured Story
                  </span>

                  <h2 className="text-5xl md:text-6xl font-bold mb-8">
                    {featuredStory.title}
                  </h2>

                  <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                    {featuredStory.excerpt}
                  </p>

                  <div className="flex gap-6 text-zinc-500 mb-10">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {featuredStory.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={16} />
                      {featuredStory.readTime}
                    </div>
                  </div>

                  <Link
                    href={`/stories/${featuredStory.slug}`}
                    className="btn-primary w-fit"
                  >
                    Read Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SEARCH */}

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" />

                <input
                  type="text"
                  placeholder="Search stories..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  className="
                    w-full
                    bg-transparent
                    border
                    border-white/10
                    rounded-2xl
                    pl-14
                    pr-4
                    py-4
                    outline-none
                    focus:border-amber-300/30
                  "
                />
              </div>

              <button className="btn-outline flex items-center gap-3">
                <Filter size={18} />
                Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  px-6 py-3 rounded-full transition-all
                  ${
                    activeCategory === category
                      ? "bg-amber-300 text-black"
                      : "border border-white/10"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VIEW SWITCH */}

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold">
              Explore Stories
            </h2>

            <p className="text-zinc-500 mt-3">
              {filteredStories.length} stories
              available
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setGridView(true)}
              className="btn-outline"
            >
              <Grid3X3 size={18} />
            </button>

            <button
              onClick={() => setGridView(false)}
              className="btn-outline"
            >
              <LayoutList size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* STORIES */}

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={
              gridView
                ? "grid md:grid-cols-2 xl:grid-cols-3 gap-8"
                : "space-y-8"
            }
          >
            {filteredStories.map(
              (story, index) => (
                <motion.article
                  key={story.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="archive-card overflow-hidden"
                >
                  <div className="h-64 bg-gradient-to-br from-amber-300/10 via-zinc-900 to-black" />

                  <div className="p-8">
                    <div className="flex justify-between items-center mb-5">
                      <span className="px-4 py-2 rounded-full bg-amber-300/10 text-amber-300 text-sm">
                        {story.category}
                      </span>

                      <Bookmark size={18} />
                    </div>

                    <h3 className="text-3xl font-bold mb-5">
                      {story.title}
                    </h3>

                    <p className="text-zinc-400 leading-relaxed mb-8">
                      {story.excerpt}
                    </p>

                    <div className="space-y-3 text-zinc-500 text-sm">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        {story.author}
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {story.date}
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock3 size={14} />
                        {story.readTime}
                      </div>
                    </div>

                    <Link
                      href={`/stories/${story.slug}`}
                      className="mt-8 flex items-center gap-2 text-amber-300"
                    >
                      Read Story
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              )
            )}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold">
              Collections
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Letters",
              },
              {
                icon: Sparkles,
                title: "Transformation",
              },
              {
                icon: Heart,
                title: "Regrets",
              },
              {
                icon: Feather,
                title: "Memory",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="archive-card p-10 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-300/10 mx-auto flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-amber-300" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTE */}

      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Quote className="w-14 h-14 text-amber-300 mx-auto mb-8" />

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            The stories we preserve today
            become the memories that guide
            tomorrow.
          </h2>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="archive-card p-16 md:p-24 text-center">
            <BookOpen className="w-16 h-16 text-amber-300 mx-auto mb-8" />

            <h2 className="text-5xl md:text-8xl font-bold mb-8">
              Share Your Story
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
              Every experience carries meaning.
              Help preserve memories, lessons,
              and human stories for future readers.
            </p>

            <button className="btn-primary text-lg px-10 py-5">
              Submit Story
              <ArrowRight className="ml-3 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}