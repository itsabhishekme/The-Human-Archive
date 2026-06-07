"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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
  Eye,
  MessageCircle,
  Star,
  Users,
  Archive,
  Globe,
} from "lucide-react";

export default function StoryGridPage() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [activeCategory, setActiveCategory] = useState("All");

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
  }, [search, activeCategory]);

  const featuredStory =
    stories.find((story) => story.featured) || stories[0];

  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/human-archive-hero.jpg"
            alt="Human Archive"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-28">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-amber-400/20 bg-amber-400/10 mb-8">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>The Human Archive</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
              Humanity's Stories
              <br />
              Deserve To
              <br />
              Survive Time
            </h1>

            <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
              A living archive of memories, letters, turning points,
              transformations, regrets, dreams, and experiences preserved for
              future generations.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-16">
              {[
                ["12,000+", "Stories"],
                ["95", "Countries"],
                ["420K+", "Readers"],
                ["8 Years", "Archive"],
              ].map((item) => (
                <div
                  key={item[0]}
                  className="border border-white/10 rounded-3xl p-6 bg-white/[0.03]"
                >
                  <h3 className="text-4xl font-black text-amber-300">
                    {item[0]}
                  </h3>
                  <p className="text-zinc-500 mt-2">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED STORY */}
      <div className="container mx-auto px-6 py-20">
        <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.03]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[500px]">
              <Image
                src="/images/featured-story.jpg"
                alt={featuredStory.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-10 md:p-16 flex flex-col justify-center">
              <span className="inline-flex w-fit px-4 py-2 rounded-full bg-amber-300/10 text-amber-300 mb-6">
                Featured Story
              </span>

              <h2 className="text-5xl font-black mb-6">
                {featuredStory.title}
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                {featuredStory.excerpt}
              </p>

              <div className="flex flex-wrap gap-6 text-zinc-500 mb-10">
                <span className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {featuredStory.views}
                </span>

                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  {featuredStory.likes}
                </span>

                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  {featuredStory.comments}
                </span>
              </div>

              <button className="px-8 py-4 rounded-2xl bg-amber-300 text-black font-bold inline-flex items-center w-fit">
                Read Story
                <ArrowRight className="w-5 h-5 ml-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="container mx-auto px-6">
        <div className="border border-white/10 rounded-[32px] p-8 bg-white/[0.03]">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="relative flex-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search stories, memories, letters..."
                className="w-full h-16 rounded-2xl pl-14 pr-5 bg-black/30 border border-white/10 outline-none"
              />
            </div>

            <div className="flex gap-3">
              <button className="px-5 py-4 border border-white/10 rounded-2xl flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>

              <button
                onClick={() => setView("grid")}
                className={`p-4 rounded-2xl border ${
                  view === "grid"
                    ? "border-amber-300 text-amber-300"
                    : "border-white/10"
                }`}
              >
                <Grid3X3 />
              </button>

              <button
                onClick={() => setView("list")}
                className={`p-4 rounded-2xl border ${
                  view === "list"
                    ? "border-amber-300 text-amber-300"
                    : "border-white/10"
                }`}
              >
                <LayoutList />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === item
                  ? "bg-amber-300 text-black"
                  : "border border-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* STORIES */}
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-black">Archive Results</h2>
            <p className="text-zinc-500 mt-2">
              {filteredStories.length} stories found
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === "grid" ? (
            <motion.div
              key="grid"
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.03]"
                >
                  <div className="relative h-64">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8">
                    <span className="text-amber-300 text-sm">
                      {story.category}
                    </span>

                    <h3 className="text-2xl font-bold mt-4 mb-4">
                      {story.title}
                    </h3>

                    <p className="text-zinc-400 mb-6">
                      {story.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-zinc-500">
                        <Clock3 className="w-4 h-4" />
                        6 min read
                      </div>

                      <ArrowRight className="w-5 h-5 text-amber-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="space-y-6">
              {filteredStories.map((story) => (
                <div
                  key={story.id}
                  className="border border-white/10 rounded-[32px] p-8 bg-white/[0.03]"
                >
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="relative w-full lg:w-80 h-52 rounded-3xl overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-4">
                        {story.title}
                      </h3>

                      <p className="text-zinc-400">
                        {story.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* COLLECTIONS */}
      <div className="container mx-auto px-6 py-32">
        <h2 className="text-5xl font-black text-center mb-16">
          Explore Collections
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            {
              icon: Mail,
              title: "Letters Never Sent",
              count: "542 Stories",
            },
            {
              icon: Feather,
              title: "Transformation",
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
              <div
                key={item.title}
                className="border border-white/10 rounded-[32px] p-10 bg-white/[0.03] text-center"
              >
                <div className="w-20 h-20 rounded-3xl bg-amber-300/10 mx-auto flex items-center justify-center mb-8">
                  <Icon className="w-10 h-10 text-amber-300" />
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-zinc-500">{item.count}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* STATS */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              value: "420K+",
              label: "Readers",
            },
            {
              icon: Archive,
              value: "12K+",
              label: "Stories",
            },
            {
              icon: Globe,
              value: "95",
              label: "Countries",
            },
            {
              icon: Star,
              value: "4.9",
              label: "Rating",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="border border-white/10 rounded-[32px] p-10 text-center bg-white/[0.03]"
              >
                <Icon className="w-10 h-10 text-amber-300 mx-auto mb-5" />
                <h3 className="text-4xl font-black">{item.value}</h3>
                <p className="text-zinc-500 mt-2">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 pb-32">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10">
          <div className="absolute inset-0">
            <Image
              src="/images/story-cta.jpg"
              alt="Submit Story"
              fill
              className="object-cover opacity-20"
            />
          </div>

          <div className="relative p-16 md:p-24 text-center">
            <BookOpen className="w-16 h-16 text-amber-300 mx-auto mb-8" />

            <h2 className="text-6xl md:text-8xl font-black mb-8">
              Every Story
              <br />
              Matters
            </h2>

            <p className="max-w-3xl mx-auto text-xl text-zinc-400 mb-12">
              Preserve memories, experiences, lessons, turning points,
              relationships, and life-changing moments for future generations.
            </p>

            <button className="px-10 py-5 bg-amber-300 text-black rounded-2xl font-bold inline-flex items-center">
              Submit Your Story
              <ArrowRight className="w-5 h-5 ml-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const stories = [
  {
    id: 1,
    title: "The Call I Never Returned",
    category: "Regrets",
    featured: true,
    image: "/images/story1.jpg",
    excerpt:
      "A missed phone call became one of the most important lessons of my life.",
    views: "4.2k",
    likes: "981",
    comments: "103",
  },
  {
    id: 2,
    title: "The Letter I Never Sent",
    category: "Letters",
    image: "/images/story2.jpg",
    excerpt:
      "Some letters never reach their destination but still carry meaning.",
  },
  {
    id: 3,
    title: "Before I Became Me",
    category: "Transformation",
    image: "/images/story3.jpg",
    excerpt:
      "The story of identity, healing, and becoming someone new.",
  },
  {
    id: 4,
    title: "The Stranger In The Café",
    category: "Turning Point",
    image: "/images/story4.jpg",
    excerpt:
      "A brief encounter changed everything.",
  },
  {
    id: 5,
    title: "The Photograph In The Drawer",
    category: "Memory",
    image: "/images/story5.jpg",
    excerpt:
      "One forgotten photograph reopened a lifetime of memories.",
  },
  {
    id: 6,
    title: "Starting Again At Thirty-Five",
    category: "Story",
    image: "/images/story6.jpg",
    excerpt:
      "What happens when life forces you to begin again.",
  },
  {
    id: 7,
    title: "The Last Train Home",
    category: "Story",
    image: "/images/story7.jpg",
    excerpt:
      "A journey that changed the direction of an entire life.",
  },
  {
    id: 8,
    title: "The Summer We Said Goodbye",
    category: "Memory",
    image: "/images/story8.jpg",
    excerpt:
      "Some seasons never really leave us.",
  },
];