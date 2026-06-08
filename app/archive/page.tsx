"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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
  Quote,
  TrendingUp,
  Feather,
  Archive,
  Star,
  Eye,
  MessageCircle,
} from "lucide-react";

type Story = {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
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
      image: "/images/story1.jpg",
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
      image: "/stories/story-2.jpg",
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
      image: "/images/the-train-i-missed.jpg",
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
      image: "/stories/story-4.jpg",
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
      image: "/stories/story-5.jpg",
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
      image: "/stories/story-6.jpg",
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
      image: "/stories/story-7.jpg",
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
      image: "/stories/story-8.jpg",
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
        story.title.toLowerCase().includes(search.toLowerCase()) ||
        story.excerpt.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="uppercase tracking-[0.6em] text-zinc-500 mb-8">
              The Human Archive
            </p>

            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black leading-none mb-10">
              Story
              <br />
              Archive
            </h1>

            <p className="max-w-4xl mx-auto text-xl text-zinc-400 leading-relaxed">
              A growing collection of memories, untold truths, life lessons,
              personal transformations, letters never sent, and stories that
              deserve to survive time.
            </p>
          </motion.div>

          <div className="mt-20 relative h-[650px] rounded-[40px] overflow-hidden border border-white/10">
            <Image
              src="/images/hero.jpg"
              alt="Human Archive"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute bottom-0 left-0 p-10 md:p-16">
              <h2 className="text-4xl md:text-6xl font-black max-w-4xl mb-6">
                Humanity's Stories Deserve To Survive Time
              </h2>

              <p className="max-w-2xl text-zinc-300 text-lg">
                Every memory matters. Every voice matters. Every untold story
                becomes part of a larger human legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              ["1,248", "Stories", Archive],
              ["542", "Letters", Mail],
              ["312", "Turning Points", TrendingUp],
              ["98", "Time Capsules", Sparkles],
            ].map(([num, label, Icon]: any) => (
              <div
                key={label}
                className="bg-zinc-900/60 border border-white/10 rounded-3xl p-8 text-center"
              >
                <Icon className="w-8 h-8 text-amber-300 mx-auto mb-5" />
                <h3 className="text-5xl font-black text-amber-300">{num}</h3>
                <p className="text-zinc-400 mt-3">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search stories, letters, memories..."
                  className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-14 pr-5 outline-none focus:border-amber-300/30"
                />
              </div>

              <button className="px-8 rounded-2xl border border-white/10 flex items-center gap-3 hover:border-amber-300/30 transition">
                <Filter size={18} />
                Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-amber-300 text-black"
                    : "border border-white/10 hover:border-amber-300/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-zinc-900/50">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[650px]">
                <Image
                  src="/images/story1.jpg"
                  alt="Featured Story"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <span className="uppercase tracking-[0.3em] text-zinc-500">
                  Featured Story
                </span>

                <h2 className="text-5xl md:text-7xl font-black my-8">
                  The Call
                  <br />
                  I Never Returned
                </h2>

                <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                  Sometimes the smallest decisions become the largest regrets.
                  A deeply personal story about silence, missed chances,
                  unfinished conversations, and the memories that remain.
                </p>

                <button className="inline-flex items-center gap-3 text-amber-300">
                  Read Story
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-14">
            <div>
              <h2 className="text-5xl font-black mb-3">
                Explore Stories
              </h2>
              <p className="text-zinc-500">
                {filteredStories.length} stories found
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-zinc-500">
              <Grid3X3 size={18} />
              Grid View
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-zinc-900/50"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
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

                  <div className="space-y-3 text-sm text-zinc-500">
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
            <h2 className="text-6xl md:text-8xl font-black mb-6">
              Collections
            </h2>

            <p className="text-zinc-400 text-lg">
              Explore the emotional landscape of human experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Untold Stories" },
              { icon: Mail, title: "Letters Never Sent" },
              { icon: Clock3, title: "Turning Points" },
              { icon: Sparkles, title: "Transformation" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="p-10 rounded-3xl border border-white/10 bg-zinc-900/50 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-amber-300/10 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-amber-300" />
                  </div>

                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-8 rounded-3xl border border-white/10 bg-zinc-900/50"
              >
                <Quote className="w-10 h-10 text-amber-300 mb-6" />

                <p className="text-zinc-400 leading-relaxed mb-8">
                  Reading these stories reminds us that every life contains
                  wisdom, heartbreak, courage, and meaning worth preserving.
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-300/20" />
                  <div>
                    <p className="font-semibold">Archive Reader</p>
                    <p className="text-zinc-500 text-sm">
                      Community Member
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] border border-white/10 bg-zinc-900/50 p-16 md:p-24 text-center">
            <Heart className="w-16 h-16 mx-auto text-amber-300 mb-8" />

            <h2 className="text-6xl md:text-8xl font-black mb-8">
              Your Story
              <br />
              Matters
            </h2>

            <p className="max-w-3xl mx-auto text-xl text-zinc-400 leading-relaxed mb-12">
              Every life contains experiences worth preserving. Share your
              memories, lessons, regrets, victories, and moments that shaped
              who you became.
            </p>

            <div className="flex justify-center gap-8 text-zinc-500 mb-12">
              <div className="flex items-center gap-2">
                <Eye size={18} />
                24K Readers
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle size={18} />
                8K Stories
              </div>

              <div className="flex items-center gap-2">
                <Star size={18} />
                Growing Daily
              </div>
            </div>

            <button className="px-10 py-5 rounded-2xl bg-amber-300 text-black font-semibold">
              Submit Your Story
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}