"use client";

import Link from "next/link";
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
  className = "",
}: StoryCardProps) {
  const CategoryIcon =
    categoryIcons[category] || BookOpen;

  return (
    <motion.article
      whileHover={{
        y: -12,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        group
        archive-card
        overflow-hidden
        relative
        ${className}
      `}
    >
      {/* Featured Badge */}

      {featured && (
        <div
          className="
            absolute
            top-5
            left-5
            z-20
            px-4
            py-2
            rounded-full
            bg-amber-300
            text-black
            text-xs
            font-bold
            uppercase
            tracking-wider
          "
        >
          Featured Story
        </div>
      )}

      {/* Image / Hero Area */}

      <div className="relative h-72 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-amber-300/10
            via-zinc-900
            to-black
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_40%)]
          "
        />

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              w-24
              h-24
              rounded-3xl
              bg-amber-300/10
              border
              border-amber-300/10
              flex
              items-center
              justify-center
            "
          >
            <CategoryIcon className="w-12 h-12 text-amber-300" />
          </div>
        </motion.div>

        {/* Overlay Actions */}

        <div
          className="
            absolute
            top-5
            right-5
            flex
            gap-2
            opacity-0
            group-hover:opacity-100
            transition-all
          "
        >
          <button
            className="
              w-10
              h-10
              rounded-xl
              bg-black/50
              backdrop-blur-xl
              border
              border-white/10
              flex
              items-center
              justify-center
            "
          >
            <Bookmark className="w-4 h-4" />
          </button>

          <button
            className="
              w-10
              h-10
              rounded-xl
              bg-black/50
              backdrop-blur-xl
              border
              border-white/10
              flex
              items-center
              justify-center
            "
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}

      <div className="p-8">
        {/* Category */}

        <div className="mb-6">
          <span
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-amber-300/10
              text-amber-300
              text-sm
            "
          >
            <CategoryIcon className="w-4 h-4" />
            {category}
          </span>
        </div>

        {/* Title */}

        <Link href={`/stories/${slug}`}>
          <h3
            className="
              text-3xl
              font-bold
              leading-tight
              mb-5
              transition-colors
              group-hover:text-amber-300
            "
          >
            {title}
          </h3>
        </Link>

        {/* Excerpt */}

        <p
          className="
            text-zinc-400
            leading-relaxed
            text-lg
            mb-8
          "
        >
          {excerpt}
        </p>

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

        {/* Stats */}

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-white/5
            pt-6
            mb-8
          "
        >
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
          className="
            flex
            items-center
            justify-between
            group/link
          "
        >
          <span
            className="
              text-amber-300
              font-medium
            "
          >
            Read Full Story
          </span>

          <ArrowRight
            className="
              w-5
              h-5
              text-amber-300
              transition-transform
              group-hover/link:translate-x-2
            "
          />
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
}

export function FeaturedStoryCard({
  title,
  slug,
  excerpt,
  category,
  readTime = "12 min read",
}: FeaturedStoryCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="
        archive-card
        overflow-hidden
      "
    >
      <div className="grid lg:grid-cols-2">
        <div
          className="
            min-h-[500px]
            bg-gradient-to-br
            from-amber-300/10
            via-zinc-900
            to-black
          "
        />

        <div className="p-12 lg:p-16 flex flex-col justify-center">
          <span
            className="
              text-amber-300
              uppercase
              tracking-[0.3em]
              text-sm
              mb-6
            "
          >
            Featured Story
          </span>

          <div className="mb-5">
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
              {category}
            </span>
          </div>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
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
              mb-10
            "
          >
            {excerpt}
          </p>

          <div className="text-zinc-500 mb-10">
            {readTime}
          </div>

          <Link
            href={`/stories/${slug}`}
            className="btn-primary w-fit"
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
        whileHover={{
          x: 10,
        }}
        className="
          archive-card
          p-6
          flex
          items-center
          justify-between
          group
        "
      >
        <div>
          <span className="text-zinc-500 text-sm">
            {category}
          </span>

          <h4
            className="
              text-xl
              font-semibold
              mt-2
              group-hover:text-amber-300
              transition-colors
            "
          >
            {title}
          </h4>
        </div>

        <ArrowRight
          className="
            w-5
            h-5
            text-zinc-500
            group-hover:text-amber-300
          "
        />
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
        whileHover={{
          y: -8,
        }}
        className="
          archive-card
          p-10
          h-full
        "
      >
        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-amber-300/10
            flex
            items-center
            justify-center
            mb-8
          "
        >
          <Sparkles className="w-7 h-7 text-amber-300" />
        </div>

        <blockquote
          className="
            text-2xl
            leading-relaxed
            font-medium
            mb-8
          "
        >
          "{quote}"
        </blockquote>

        <div className="text-zinc-500">
          — {author}
        </div>
      </motion.div>
    </Link>
  );
}