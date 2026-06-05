"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  animation?:
    | "word"
    | "character"
    | "fade"
    | "slide-up"
    | "blur";
  as?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "p"
    | "span"
    | "div";
}

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const characterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -90,
  },

  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 1,
    },
  },
};

const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const blurVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 40,
  },

  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  duration = 1,
  staggerChildren = 0.04,
  animation = "word",
  as = "div",
}: AnimatedTextProps) {
  const words = text.split(" ");
  const characters = text.split("");

  const MotionTag =
    motion[
      as as keyof typeof motion
    ] as React.ComponentType<any>;

  const getVariant = () => {
    switch (animation) {
      case "character":
        return characterVariants;

      case "fade":
        return fadeVariants;

      case "slide-up":
        return slideUpVariants;

      case "blur":
        return blurVariants;

      default:
        return wordVariants;
    }
  };

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: {},

        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.2,
      }}
    >
      {animation === "character"
        ? characters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={getVariant()}
              style={{
                display: "inline-block",
                whiteSpace:
                  char === " "
                    ? "pre"
                    : "normal",
              }}
            >
              {char}
            </motion.span>
          ))
        : words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              variants={getVariant()}
              style={{
                display: "inline-block",
                marginRight: "0.3em",
              }}
            >
              {word}
            </motion.span>
          ))}
    </MotionTag>
  );
}

/* ---------------------------------------------------- */
/* ADVANCED COMPONENTS */
/* ---------------------------------------------------- */

interface HeroAnimatedTitleProps {
  title: string;
  subtitle?: string;
}

export function HeroAnimatedTitle({
  title,
  subtitle,
}: HeroAnimatedTitleProps) {
  return (
    <div className="text-center">
      <AnimatedText
        text={title}
        animation="blur"
        as="h1"
        className="
          text-6xl
          md:text-8xl
          xl:text-9xl
          font-bold
          leading-none
          tracking-tight
          mb-8
        "
      />

      {subtitle && (
        <motion.p
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
            duration: 1,
            delay: 0.6,
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
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

/* ---------------------------------------------------- */
/* DOCUMENTARY TITLE */
/* ---------------------------------------------------- */

interface DocumentaryTitleProps {
  title: string;
  category?: string;
}

export function DocumentaryTitle({
  title,
  category,
}: DocumentaryTitleProps) {
  return (
    <div>
      {category && (
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
            uppercase
            tracking-[0.5em]
            text-zinc-500
            text-sm
            mb-6
          "
        >
          {category}
        </motion.p>
      )}

      <AnimatedText
        text={title}
        animation="character"
        as="h2"
        className="
          text-5xl
          md:text-7xl
          font-bold
          leading-none
        "
      />
    </div>
  );
}

/* ---------------------------------------------------- */
/* STORY QUOTE */
/* ---------------------------------------------------- */

interface StoryQuoteProps {
  quote: string;
  author?: string;
}

export function StoryQuote({
  quote,
  author,
}: StoryQuoteProps) {
  return (
    <motion.blockquote
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
        duration: 0.8,
      }}
      className="
        relative
        border-l-2
        border-amber-300
        pl-8
        py-6
      "
    >
      <AnimatedText
        text={`"${quote}"`}
        animation="blur"
        as="p"
        className="
          text-3xl
          md:text-5xl
          font-bold
          leading-tight
        "
      />

      {author && (
        <p className="mt-8 text-zinc-500">
          — {author}
        </p>
      )}
    </motion.blockquote>
  );
}

/* ---------------------------------------------------- */
/* CINEMATIC PARAGRAPH */
/* ---------------------------------------------------- */

interface CinematicParagraphProps {
  children: ReactNode;
}

export function CinematicParagraph({
  children,
}: CinematicParagraphProps) {
  return (
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
        duration: 0.8,
      }}
      className="
        text-xl
        md:text-2xl
        text-zinc-300
        leading-[2]
      "
    >
      {children}
    </motion.p>
  );
}

/* ---------------------------------------------------- */
/* LETTER ANIMATION */
/* ---------------------------------------------------- */

interface LetterRevealProps {
  text: string;
}

export function LetterReveal({
  text,
}: LetterRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        rotateX: -15,
      }}
      whileInView={{
        opacity: 1,
        rotateX: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
      className="
        archive-card
        p-10
        md:p-14
      "
    >
      <AnimatedText
        text={text}
        animation="character"
        as="p"
        className="
          text-lg
          md:text-xl
          leading-relaxed
        "
      />
    </motion.div>
  );
}

/* ---------------------------------------------------- */
/* STAT ANIMATION */
/* ---------------------------------------------------- */

interface AnimatedStatProps {
  value: string;
  label: string;
}

export function AnimatedStat({
  value,
  label,
}: AnimatedStatProps) {
  return (
    <motion.div
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
      className="
        archive-card
        p-8
        text-center
      "
    >
      <AnimatedText
        text={value}
        animation="blur"
        as="h3"
        className="
          text-5xl
          md:text-6xl
          font-bold
          gradient-text
        "
      />

      <p className="text-zinc-500 mt-4">
        {label}
      </p>
    </motion.div>
  );
}