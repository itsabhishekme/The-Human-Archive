"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  BookOpen,
  Heart,
  Mail,
  Clock3,
  Sparkles,
  ArrowRight,
  Calendar,
  User,
  Bookmark,
  Grid3X3,
} from "lucide-react";

type Story = {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
};

export default function ArchivePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const stories: Story[] = [
    {
      id: 1,
      title: "The Call I Never Returned",
      category: "Regrets",
      author: "Anonymous",
      date: "March 2026",
      readTime: "6 min read",
      excerpt:
        "I thought there would be another chance. Another conversation. Another day. I was wrong.",
    },
    {
      id: 2,
      title: "Dear Dad, Twenty Years Later",
      category: "Letters",
      author: "Anonymous",
      date: "February 2026",
      readTime: "8 min read",
      excerpt:
        "A letter written decades after a conversation that never happened.",
    },
    {
      id: 3,
      title: "The Train I Missed",
      category: "Turning Point",
      author: "Anonymous",
      date: "January 2026",
      readTime: "5 min read",
      excerpt:
        "One missed train changed the direction of my entire life.",
    },
    {
      id: 4,
      title: "Before I Became Me",
      category: "Transformation",
      author: "Anonymous",
      date: "January 2026",
      readTime: "9 min read",
      excerpt:
        "The story of rebuilding life after losing everything that once defined me.",
    },
    {
      id: 5,
      title: "The Photograph In The Drawer",
      category: "Untold",
      author: "Anonymous",
      date: "December 2025",
      readTime: "7 min read",
      excerpt:
        "A forgotten photograph uncovered memories buried for years.",
    },
    {
      id: 6,
      title: "The Promise I Couldn't Keep",
      category: "Regrets",
      author: "Anonymous",
      date: "November 2025",
      readTime: "6 min read",
      excerpt:
        "Some promises stay with us long after the people are gone.",
    },
    {
      id: 7,
      title: "Letter To My Younger Self",
      category: "Letters",
      author: "Anonymous",
      date: "October 2025",
      readTime: "10 min read",
      excerpt:
        "The words I wish someone had told me when I needed them most.",
    },
    {
      id: 8,
      title: "A Stranger Changed Everything",
      category: "Turning Point",
      author: "Anonymous",
      date: "September 2025",
      readTime: "8 min read",
      excerpt:
        "A five-minute encounter that altered the course of an entire future.",
    },
  ];

  const categories = [
    "All",
    "Untold",
    "Letters",
    "Turning Point",
    "Transformation",
    "Regrets",
  ];

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const matchesCategory =
        activeCategory === "All" ||
        story.category === activeCategory;

      const matchesSearch =
        story.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        story.excerpt
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <main className="relative overflow-hidden">
      {/* HERO */}

      <section className="relative pt-40 pb-28">
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

            <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8">
              Story
              <br />
              Archive
            </h1>

            <p className="max-w-4xl mx-auto text-zinc-400 text-xl leading-relaxed">
              A living collection of untold stories,
              forgotten memories, life-changing moments,
              letters never sent, regrets, lessons,
              and human experiences preserved forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["1,248", "Stories"],
              ["542", "Letters"],
              ["312", "Turning Points"],
              ["98", "Time Capsules"],
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

      {/* SEARCH */}

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card p-6">
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
                  placeholder="Search stories, memories, letters..."
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
                    focus:border-amber-300/40
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

      {/* CATEGORIES */}

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
                      : "border border-white/10 hover:border-amber-300/20"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="min-h-[500px] bg-gradient-to-br from-amber-300/10 to-zinc-900" />

              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
                  Featured Story
                </p>

                <h2 className="text-5xl font-bold mb-8">
                  The Call
                  <br />
                  I Never Returned
                </h2>

                <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                  Sometimes the smallest decisions become
                  the largest regrets. A story about
                  silence, timing, and the moments
                  we never get back.
                </p>

                <button className="btn-primary w-fit">
                  Read Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES GRID */}

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-14">
            <div>
              <h2 className="text-4xl font-bold">
                Explore Stories
              </h2>

              <p className="text-zinc-500 mt-3">
                {filteredStories.length} stories found
              </p>
            </div>

            <div className="hidden md:flex items-center gap-3 text-zinc-500">
              <Grid3X3 size={18} />
              Grid View
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
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
                className="archive-card overflow-hidden group"
              >
                <div className="h-60 bg-gradient-to-br from-amber-300/10 via-zinc-900 to-black" />

                <div className="p-8">
                  <div className="flex justify-between items-center mb-5">
                    <span className="px-4 py-2 rounded-full bg-amber-300/10 text-amber-300 text-sm">
                      {story.category}
                    </span>

                    <Bookmark size={18} />
                  </div>

                  <h3 className="text-3xl font-bold mb-5 group-hover:text-amber-300 transition-colors">
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

                  <button className="mt-8 flex items-center gap-2 text-amber-300">
                    Read Story
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Collections
            </h2>

            <p className="text-zinc-400 text-lg">
              Browse stories by theme and emotion
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Untold Stories",
              },
              {
                icon: Mail,
                title: "Letters",
              },
              {
                icon: Clock3,
                title: "Turning Points",
              },
              {
                icon: Sparkles,
                title: "Transformation",
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

      {/* CTA */}

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card p-16 md:p-24 text-center">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Become Part Of The Archive
            </p>

            <h2 className="text-5xl md:text-8xl font-bold mb-8">
              Your Story
              <br />
              Matters
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
              Every life contains experiences worth
              preserving. Share your story and become
              part of a growing archive of human history.
            </p>

            <button className="btn-primary text-lg px-10 py-5">
              Submit Your Story
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}