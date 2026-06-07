"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Calendar,
  Clock3,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Star,
} from "lucide-react";

const stories = [
  {
    id: 1,
    title: "The Last Letter Never Sent",
    excerpt:
      "A forgotten letter hidden inside an old book reveals a story that waited decades to be discovered.",
    image: "/images/stories/story-1.jpg",
    category: "Human Stories",
    date: "June 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Echoes of a Silent Village",
    excerpt:
      "In a place almost erased by time, memories survive through the voices of its last residents.",
    image: "/images/stories/story-2.jpg",
    category: "History",
    date: "May 2026",
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "The Stranger Who Changed Everything",
    excerpt:
      "One unexpected encounter transformed an ordinary day into a life-changing moment.",
    image: "/images/stories/story-3.jpg",
    category: "Inspiration",
    date: "May 2026",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Footprints Across Generations",
    excerpt:
      "A family journey through time reveals how dreams travel from one generation to the next.",
    image: "/images/stories/story-4.jpg",
    category: "Family",
    date: "April 2026",
    readTime: "12 min read",
  },
  {
    id: 5,
    title: "The Human Archive Project",
    excerpt:
      "Why preserving overlooked stories may become one of the most important acts of our era.",
    image: "/images/stories/story-5.jpg",
    category: "Archive",
    date: "April 2026",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "When Memories Become History",
    excerpt:
      "Every memory holds a fragment of history waiting to be recorded and remembered.",
    image: "/images/stories/story-6.jpg",
    category: "History",
    date: "March 2026",
    readTime: "9 min read",
  },
];

const categories = [
  "All",
  "Human Stories",
  "History",
  "Inspiration",
  "Family",
  "Archive",
];

export default function StoriesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const matchesSearch =
        story.title.toLowerCase().includes(search.toLowerCase()) ||
        story.excerpt.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || story.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const featuredStory = stories.find((story) => story.featured);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/stories/hero.jpg"
            alt="The Human Archive"
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              The Human Archive
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Stories Worth
              <span className="block bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Remembering
              </span>
            </h1>

            <p className="max-w-2xl text-lg text-zinc-300 md:text-xl">
              A collection of forgotten voices, hidden histories, personal
              journeys, and extraordinary human experiences preserved for future
              generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED STORY */}
      {featuredStory && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-amber-400">
            <Star className="h-5 w-5 fill-current" />
            <span className="font-medium">Featured Story</span>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-[400px]">
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-10">
                <div className="mb-4 inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-sm">
                  {featuredStory.category}
                </div>

                <h2 className="mb-5 text-4xl font-bold">
                  {featuredStory.title}
                </h2>

                <p className="mb-6 text-zinc-400">
                  {featuredStory.excerpt}
                </p>

                <div className="mb-8 flex gap-5 text-sm text-zinc-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {featuredStory.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={16} />
                    {featuredStory.readTime}
                  </span>
                </div>

                <Link
                  href="#"
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105"
                >
                  Read Story
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* SEARCH */}
      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Search stories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 py-4 pl-12 pr-4 outline-none focus:border-zinc-600"
          />
        </div>
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 transition ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "border border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-zinc-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <BookOpen className="mb-4 h-8 w-8 text-white" />
            <h3 className="text-3xl font-bold">{stories.length}</h3>
            <p className="text-zinc-400">Published Stories</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <TrendingUp className="mb-4 h-8 w-8 text-white" />
            <h3 className="text-3xl font-bold">50K+</h3>
            <p className="text-zinc-400">Monthly Readers</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <Sparkles className="mb-4 h-8 w-8 text-white" />
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-zinc-400">Human Experiences</p>
          </div>
        </div>
      </section>

      {/* STORIES GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mb-10">
          <h2 className="text-4xl font-bold">Latest Stories</h2>
          <p className="mt-2 text-zinc-400">
            Discover remarkable stories from around the world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredStories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  {story.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold transition group-hover:text-zinc-300">
                  {story.title}
                </h3>

                <p className="mt-3 text-zinc-400">{story.excerpt}</p>

                <div className="mt-5 flex justify-between text-sm text-zinc-500">
                  <span>{story.date}</span>
                  <span>{story.readTime}</span>
                </div>

                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 font-medium text-white"
                >
                  Read More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}