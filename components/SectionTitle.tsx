"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Quote,
  BookOpen,
  Feather,
  ArrowRight,
} from "lucide-react";
import { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  maxWidth?: string;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
  size = "lg",
  maxWidth = "max-w-4xl",
  className = "",
}: SectionTitleProps) {
  const sizeClasses = {
    sm: "text-3xl md:text-4xl",
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-7xl",
    xl: "text-6xl md:text-8xl xl:text-9xl",
  };

  return (
    <div
      className={`
        ${maxWidth}
        ${
          centered
            ? "mx-auto text-center"
            : ""
        }
        ${className}
      `}
    >
      {eyebrow && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            inline-flex
            items-center
            gap-3
            mb-8
          "
        >
          <div className="w-12 h-px bg-amber-300/40" />

          <span
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              md:text-sm
              text-zinc-500
            "
          >
            {eyebrow}
          </span>

          <div className="w-12 h-px bg-amber-300/40" />
        </motion.div>
      )}

      <motion.h2
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
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
        className={`
          ${sizeClasses[size]}
          font-bold
          tracking-tight
          leading-[0.95]
          mb-8
        `}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
          }}
          className="
            text-zinc-400
            text-lg
            md:text-xl
            leading-relaxed
          "
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

/* ==========================================================
   CINEMATIC TITLE
========================================================== */

interface CinematicTitleProps {
  title: string;
  description?: string;
}

export function CinematicTitle({
  title,
  description,
}: CinematicTitleProps) {
  return (
    <div className="text-center max-w-5xl mx-auto">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
      >
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
            mb-10
          "
        >
          <Sparkles className="w-4 h-4 text-amber-300" />

          <span className="text-sm text-zinc-300">
            The Human Archive
          </span>
        </div>

        <h2
          className="
            text-5xl
            md:text-7xl
            xl:text-8xl
            font-bold
            leading-[0.9]
            tracking-tight
            mb-8
          "
        >
          {title}
        </h2>

        {description && (
          <p
            className="
              text-zinc-400
              text-xl
              md:text-2xl
              leading-relaxed
              max-w-4xl
              mx-auto
            "
          >
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}

/* ==========================================================
   STORY SECTION TITLE
========================================================== */

interface StorySectionTitleProps {
  category: string;
  title: string;
  description?: string;
}

export function StorySectionTitle({
  category,
  title,
  description,
}: StorySectionTitleProps) {
  return (
    <div className="max-w-4xl">
      <motion.span
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
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
          mb-8
        "
      >
        <BookOpen className="w-4 h-4" />

        {category}
      </motion.span>

      <motion.h2
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
        className="
          text-5xl
          md:text-7xl
          font-bold
          leading-none
          mb-8
        "
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            text-zinc-400
            text-xl
            leading-relaxed
          "
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

/* ==========================================================
   DOCUMENTARY TITLE
========================================================== */

interface DocumentaryTitleProps {
  title: string;
  quote?: string;
}

export function DocumentaryTitle({
  title,
  quote,
}: DocumentaryTitleProps) {
  return (
    <div className="text-center max-w-6xl mx-auto">
      <motion.h2
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="
          text-5xl
          md:text-8xl
          font-bold
          tracking-tight
          leading-none
          mb-10
        "
      >
        {title}
      </motion.h2>

      {quote && (
        <motion.div
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
            delay: 0.2,
          }}
          className="
            archive-card
            p-10
            max-w-4xl
            mx-auto
          "
        >
          <Quote className="w-10 h-10 text-amber-300 mx-auto mb-6" />

          <p className="text-2xl md:text-3xl leading-relaxed">
            {quote}
          </p>
        </motion.div>
      )}
    </div>
  );
}

/* ==========================================================
   COLLECTION TITLE
========================================================== */

interface CollectionTitleProps {
  title: string;
  count?: string;
  description?: string;
}

export function CollectionTitle({
  title,
  count,
  description,
}: CollectionTitleProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
      <div className="max-w-4xl">
        {count && (
          <div
            className="
              inline-flex
              items-center
              gap-3
              mb-6
            "
          >
            <Feather className="w-5 h-5 text-amber-300" />

            <span className="text-zinc-500">
              {count} Stories Archived
            </span>
          </div>
        )}

        <h2
          className="
            text-5xl
            md:text-7xl
            font-bold
            leading-none
            mb-6
          "
        >
          {title}
        </h2>

        {description && (
          <p
            className="
              text-zinc-400
              text-xl
              leading-relaxed
            "
          >
            {description}
          </p>
        )}
      </div>

      <button className="btn-outline">
        Explore Collection
        <ArrowRight className="ml-3 w-4 h-4" />
      </button>
    </div>
  );
}

/* ==========================================================
   FEATURE TITLE
========================================================== */

interface FeatureTitleProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
}

export function FeatureTitle({
  icon,
  title,
  subtitle,
}: FeatureTitleProps) {
  return (
    <div className="text-center">
      {icon && (
        <div
          className="
            w-20
            h-20
            rounded-3xl
            bg-amber-300/10
            flex
            items-center
            justify-center
            mx-auto
            mb-8
          "
        >
          {icon}
        </div>
      )}

      <h3
        className="
          text-3xl
          md:text-5xl
          font-bold
          mb-6
        "
      >
        {title}
      </h3>

      {subtitle && (
        <p
          className="
            max-w-2xl
            mx-auto
            text-zinc-400
            text-lg
            leading-relaxed
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ==========================================================
   PAGE HERO TITLE
========================================================== */

interface PageHeroTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeroTitle({
  eyebrow,
  title,
  description,
}: PageHeroTitleProps) {
  return (
    <div className="text-center max-w-6xl mx-auto">
      {eyebrow && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            uppercase
            tracking-[0.5em]
            text-zinc-500
            mb-8
          "
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h1
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
        }}
        className="
          text-6xl
          md:text-8xl
          xl:text-9xl
          font-bold
          leading-[0.9]
          tracking-tight
          mb-10
        "
      >
        {title}
      </motion.h1>

      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            max-w-4xl
            mx-auto
            text-zinc-400
            text-xl
            md:text-2xl
            leading-relaxed
          "
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}