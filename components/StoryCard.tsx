"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock3,
  User,
  Heart,
  Bookmark,
  Share2,
  Eye,
  MessageCircle,
  Sparkles,
  Mail,
  Feather,
  BookOpen,
  TrendingUp,
  Star,
  Quote,
  Globe,
  PenTool,
} from "lucide-react";

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
  className?: string;
}

const categoryIcons: Record<string, any> = {
  Letters: Mail,
  Transformation: Sparkles,
  Memory: Feather,
  Regrets: Heart,
  "Turning Point": TrendingUp,
  Story: BookOpen,
};

export default function StoryCard({
  title,
  slug,
  excerpt,
  category,
  author = "Anonymous",
  date = "March 2026",
  readTime = "8 min read",
  featured = false,
  views = "1.2k",
  likes = "324",
  comments = "41",
  image = "/stories/story-cover.jpg", // public folder image
  className = "",
}: StoryCardProps) {
  const CategoryIcon =
    categoryIcons[category] || BookOpen;

  return (
    <motion.article
      whileHover={{ y: -12 }}
      transition={{ duration: 0.35 }}
      className={`group archive-card overflow-hidden relative rounded-3xl border border-white/10 bg-zinc-950 ${className}`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-5 left-5 z-30 px-4 py-2 rounded-full bg-amber-300 text-black text-xs font-bold uppercase tracking-wider">
          Featured Story
        </div>
      )}

      {/* Hero Image */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.2),transparent_45%)]" />

        {/* Category Icon */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-28 h-28 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center">
            <CategoryIcon className="w-12 h-12 text-amber-300" />
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="absolute top-5 right-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center">
            <Bookmark className="w-4 h-4" />
          </button>

          <button className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Category Label */}
        <div className="absolute bottom-5 left-5">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-300/20 backdrop-blur-xl text-amber-300 text-sm">
            <CategoryIcon className="w-4 h-4" />
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Title */}
        <Link href={`/stories/${slug}`}>
          <h3 className="text-3xl font-bold leading-tight mb-5 transition-colors group-hover:text-amber-300">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-zinc-400 leading-relaxed text-lg mb-8">
          {excerpt}
        </p>

        {/* Story Highlights */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="rounded-2xl bg-zinc-900 p-4 text-center">
            <Eye className="w-5 h-5 text-amber-300 mx-auto mb-2" />
            <p className="text-xs text-zinc-500">Readers</p>
            <p className="font-semibold">{views}</p>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-4 text-center">
            <Heart className="w-5 h-5 text-amber-300 mx-auto mb-2" />
            <p className="text-xs text-zinc-500">Likes</p>
            <p className="font-semibold">{likes}</p>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-4 text-center">
            <MessageCircle className="w-5 h-5 text-amber-300 mx-auto mb-2" />
            <p className="text-xs text-zinc-500">Comments</p>
            <p className="font-semibold">{comments}</p>
          </div>
        </div>

        {/* Meta */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-zinc-500 text-sm">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>

          <div className="flex items-center gap-3 text-zinc-500 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>

          <div className="flex items-center gap-3 text-zinc-500 text-sm">
            <Clock3 className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Story Quote */}
        <div className="border border-white/5 rounded-2xl p-5 bg-zinc-900/60 mb-8">
          <Quote className="w-5 h-5 text-amber-300 mb-3" />
          <p className="text-zinc-300 italic leading-relaxed">
            Every story carries a memory, every memory carries a lesson,
            and every lesson shapes a future.
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between border-t border-white/5 pt-6 mb-8">
          <div className="flex gap-5">
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <Eye className="w-4 h-4" />
              {views}
            </div>

            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <Heart className="w-4 h-4" />
              {likes}
            </div>

            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <MessageCircle className="w-4 h-4" />
              {comments}
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/stories/${slug}`}
          className="flex items-center justify-between group/link"
        >
          <span className="text-amber-300 font-medium">
            Read Full Story
          </span>

          <ArrowRight className="w-5 h-5 text-amber-300 transition-transform group-hover/link:translate-x-2" />
        </Link>
      </div>
    </motion.article>
  );
}

/* ==========================================================
   FEATURED STORY CARD
========================================================== */

interface FeaturedStoryCardProps {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime?: string;
  image?: string;
}

export function FeaturedStoryCard({
  title,
  slug,
  excerpt,
  category,
  readTime = "12 min read",
  image = "/stories/featured-story.jpg",
}: FeaturedStoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="archive-card overflow-hidden rounded-3xl border border-white/10 bg-black"
    >
      <div className="grid lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative min-h-[600px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/70" />

          <div className="absolute bottom-10 left-10">
            <div className="flex gap-3 mb-4">
              <span className="px-4 py-2 rounded-full bg-amber-300 text-black text-sm font-semibold">
                Featured
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl text-white text-sm">
                {category}
              </span>
            </div>

            <h3 className="text-5xl font-black max-w-xl">
              Stories That Echo Beyond Time
            </h3>
          </div>
        </div>

        {/* Right Content */}
        <div className="p-12 lg:p-16 flex flex-col justify-center">
          <span className="text-amber-300 uppercase tracking-[0.3em] text-sm mb-6">
            Featured Story
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            {title}
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed mb-10">
            {excerpt}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="bg-zinc-900 rounded-2xl p-4">
              <Star className="w-5 h-5 text-amber-300 mb-2" />
              <p className="text-xs text-zinc-500">Rating</p>
              <p className="font-semibold">4.9</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-4">
              <Globe className="w-5 h-5 text-amber-300 mb-2" />
              <p className="text-xs text-zinc-500">Readers</p>
              <p className="font-semibold">18K+</p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-4">
              <PenTool className="w-5 h-5 text-amber-300 mb-2" />
              <p className="text-xs text-zinc-500">Read Time</p>
              <p className="font-semibold">{readTime}</p>
            </div>
          </div>

          <Link
            href={`/stories/${slug}`}
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-amber-300 text-black font-semibold w-fit"
          >
            Read Story
            <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================================
   MINI STORY CARD
========================================================== */

interface MiniStoryCardProps {
  title: string;
  slug: string;
  category: string;
}

export function MiniStoryCard({
  title,
  slug,
  category,
}: MiniStoryCardProps) {
  return (
    <Link href={`/stories/${slug}`}>
      <motion.div
        whileHover={{ x: 10 }}
        className="archive-card p-6 flex items-center justify-between group rounded-2xl border border-white/10"
      >
        <div>
          <span className="text-zinc-500 text-sm">
            {category}
          </span>

          <h4 className="text-xl font-semibold mt-2 group-hover:text-amber-300 transition-colors">
            {title}
          </h4>
        </div>

        <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-amber-300" />
      </motion.div>
    </Link>
  );
}

/* ==========================================================
   QUOTE STORY CARD
========================================================== */

interface QuoteStoryCardProps {
  quote: string;
  author?: string;
  slug: string;
}

export function QuoteStoryCard({
  quote,
  author = "Anonymous",
  slug,
}: QuoteStoryCardProps) {
  return (
    <Link href={`/stories/${slug}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="archive-card p-10 h-full rounded-3xl border border-white/10"
      >
        <div className="w-14 h-14 rounded-2xl bg-amber-300/10 flex items-center justify-center mb-8">
          <Sparkles className="w-7 h-7 text-amber-300" />
        </div>

        <blockquote className="text-2xl leading-relaxed font-medium mb-8">
          "{quote}"
        </blockquote>

        <div className="text-zinc-500">
          — {author}
        </div>
      </motion.div>
    </Link>
  );
}