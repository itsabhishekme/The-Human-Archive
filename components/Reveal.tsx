"use client";

import {
  motion,
  Variants,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ReactNode,
  useRef,
} from "react";

/* ======================================================
   REVEAL COMPONENT
====================================================== */

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  width?: "fit-content" | "100%";
  animation?:
    | "fade"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "zoom"
    | "blur"
    | "rotate";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  once = true,
  width = "100%",
  animation = "slide-up",
}: RevealProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once,
    amount: 0.15,
  });

  const getVariants = (): Variants => {
    switch (animation) {
      case "fade":
        return {
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        };

      case "slide-down":
        return {
          hidden: {
            opacity: 0,
            y: -80,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        };

      case "slide-left":
        return {
          hidden: {
            opacity: 0,
            x: 80,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        };

      case "slide-right":
        return {
          hidden: {
            opacity: 0,
            x: -80,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        };

      case "zoom":
        return {
          hidden: {
            opacity: 0,
            scale: 0.8,
          },
          visible: {
            opacity: 1,
            scale: 1,
          },
        };

      case "blur":
        return {
          hidden: {
            opacity: 0,
            filter: "blur(20px)",
            y: 50,
          },
          visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          },
        };

      case "rotate":
        return {
          hidden: {
            opacity: 0,
            rotate: -10,
            scale: 0.95,
          },
          visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
          },
        };

      default:
        return {
          hidden: {
            opacity: 0,
            y: 70,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        };
    }
  };

  return (
    <div
      ref={ref}
      style={{
        width,
      }}
      className={className}
    >
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={
          isInView
            ? "visible"
            : "hidden"
        }
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ======================================================
   STAGGER REVEAL
====================================================== */

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerRevealProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  const containerVariants: Variants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const items = Array.isArray(children)
    ? children
    : [children];

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={
        isInView
          ? "visible"
          : "hidden"
      }
    >
      {items.map((child, index) => (
        <motion.div
          key={index}
          variants={childVariants}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ======================================================
   PARALLAX REVEAL
====================================================== */

interface ParallaxRevealProps {
  children: ReactNode;
  className?: string;
  offset?: number;
}

export function ParallaxReveal({
  children,
  className = "",
  offset = 100,
}: ParallaxRevealProps) {
  const ref = useRef(null);

  const { scrollYProgress } =
    useScroll({
      target: ref,
      offset: [
        "start end",
        "end start",
      ],
    });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [offset, -offset]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ======================================================
   IMAGE REVEAL
====================================================== */

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
}

export function ImageReveal({
  children,
  className = "",
}: ImageRevealProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
    >
      <motion.div
        initial={{
          scale: 1.2,
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                scale: 1,
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ======================================================
   MASK REVEAL
====================================================== */

interface MaskRevealProps {
  children: ReactNode;
  className?: string;
}

export function MaskReveal({
  children,
  className = "",
}: MaskRevealProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div
      ref={ref}
      className={`
        overflow-hidden
        ${className}
      `}
    >
      <motion.div
        initial={{
          y: "100%",
        }}
        animate={
          isInView
            ? {
                y: "0%",
              }
            : {}
        }
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ======================================================
   DOCUMENTARY TITLE REVEAL
====================================================== */

interface DocumentaryTitleRevealProps {
  title: string;
  subtitle?: string;
}

export function DocumentaryTitleReveal({
  title,
  subtitle,
}: DocumentaryTitleRevealProps) {
  const words = title.split(" ");

  return (
    <div className="text-center">
      <div className="overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          <h2
            className="
              text-5xl
              md:text-7xl
              xl:text-8xl
              font-bold
              leading-none
            "
          >
            {words.map(
              (word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 80,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="
                    inline-block
                    mr-4
                  "
                >
                  {word}
                </motion.span>
              )
            )}
          </h2>
        </motion.div>
      </div>

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
            delay: 0.5,
            duration: 1,
          }}
          className="
            max-w-3xl
            mx-auto
            mt-8
            text-xl
            text-zinc-400
            leading-relaxed
          "
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

/* ======================================================
   STORY PARAGRAPH REVEAL
====================================================== */

interface StoryParagraphRevealProps {
  text: string;
}

export function StoryParagraphReveal({
  text,
}: StoryParagraphRevealProps) {
  return (
    <Reveal animation="blur">
      <p
        className="
          text-lg
          md:text-xl
          leading-[2]
          text-zinc-300
        "
      >
        {text}
      </p>
    </Reveal>
  );
}

/* ======================================================
   CARD REVEAL
====================================================== */

interface CardRevealProps {
  children: ReactNode;
}

export function CardReveal({
  children,
}: CardRevealProps) {
  return (
    <Reveal animation="zoom">
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {children}
      </motion.div>
    </Reveal>
  );
}

/* ======================================================
   FLOATING REVEAL
====================================================== */

interface FloatingRevealProps {
  children: ReactNode;
}

export function FloatingReveal({
  children,
}: FloatingRevealProps) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}