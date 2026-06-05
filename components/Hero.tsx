"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Mail,
  Sparkles,
  Feather,
  Clock3,
  Quote,
  Play,
  ChevronDown,
  Users,
  Archive,
  Stars,
} from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function Hero({
  title = "The Human Archive",
  subtitle = "Preserving the stories people never thought anyone would read.",
  description = "A living collection of untold stories, letters never sent, turning points, regrets, lessons, transformations, and memories that deserve to survive beyond a single lifetime.",
  primaryButtonText = "Explore Archive",
  primaryButtonHref = "/archive",
  secondaryButtonText = "Submit Story",
  secondaryButtonHref = "/submit",
}: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Layers */}

      <div className="absolute inset-0">
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Glow 1 */}

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[1200px]
            h-[1200px]
            rounded-full
            bg-amber-300/[0.05]
            blur-[180px]
          "
        />

        {/* Glow 2 */}

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[700px]
            h-[700px]
            rounded-full
            bg-orange-500/[0.04]
            blur-[140px]
          "
        />

        {/* Glow 3 */}

        <div
          className="
            absolute
            top-20
            left-0
            w-[500px]
            h-[500px]
            rounded-full
            bg-white/[0.02]
            blur-[120px]
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      {/* Floating Elements */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          hidden
          lg:flex
          absolute
          top-32
          right-24
          w-20
          h-20
          rounded-3xl
          bg-amber-300/10
          border
          border-amber-300/10
          items-center
          justify-center
        "
      >
        <BookOpen className="w-9 h-9 text-amber-300" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          hidden
          lg:flex
          absolute
          left-24
          top-60
          w-16
          h-16
          rounded-2xl
          bg-white/[0.03]
          border
          border-white/10
          items-center
          justify-center
        "
      >
        <Mail className="w-7 h-7 text-white/80" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          hidden
          xl:flex
          absolute
          bottom-40
          right-40
          w-14
          h-14
          rounded-xl
          bg-white/[0.03]
          border
          border-white/10
          items-center
          justify-center
        "
      >
        <Heart className="w-6 h-6 text-white/70" />
      </motion.div>

      {/* Main Content */}

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}

          <div className="lg:col-span-7">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              {/* Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  mb-10
                "
              >
                <Sparkles className="w-4 h-4 text-amber-300" />

                <span className="text-sm text-zinc-300 tracking-wide">
                  Digital Preservation Project
                </span>
              </div>

              {/* Title */}

              <h1
                className="
                  text-6xl
                  md:text-8xl
                  xl:text-[8rem]
                  font-bold
                  leading-[0.9]
                  tracking-tight
                  mb-8
                "
              >
                {title}
              </h1>

              {/* Subtitle */}

              <p
                className="
                  text-2xl
                  md:text-3xl
                  text-amber-300
                  font-light
                  mb-8
                  max-w-4xl
                "
              >
                {subtitle}
              </p>

              {/* Description */}

              <p
                className="
                  text-lg
                  md:text-xl
                  text-zinc-400
                  leading-relaxed
                  max-w-3xl
                  mb-12
                "
              >
                {description}
              </p>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <Link
                  href={primaryButtonHref}
                  className="btn-primary"
                >
                  {primaryButtonText}
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Link>

                <Link
                  href={secondaryButtonHref}
                  className="btn-outline"
                >
                  {secondaryButtonText}
                </Link>

                <button className="btn-outline">
                  <Play className="mr-3 w-4 h-4" />
                  Watch Mission
                </button>
              </div>

              {/* Statistics */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    value: "1,248",
                    label: "Stories",
                  },
                  {
                    value: "542",
                    label: "Letters",
                  },
                  {
                    value: "98",
                    label: "Collections",
                  },
                  {
                    value: "42",
                    label: "Countries",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="archive-card p-6"
                  >
                    <h3 className="text-3xl font-bold gradient-text">
                      {item.value}
                    </h3>

                    <p className="text-zinc-500 mt-2 text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side */}

          <div className="lg:col-span-5">
            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="space-y-8"
            >
              {/* Featured Quote */}

              <div className="archive-card p-10">
                <Quote className="w-12 h-12 text-amber-300 mb-6" />

                <h3 className="text-3xl font-bold mb-6">
                  Why This Archive Exists
                </h3>

                <p className="text-zinc-400 leading-relaxed text-lg">
                  Most human experiences vanish
                  quietly. Conversations disappear.
                  Memories fade. Stories remain untold.
                  The Human Archive exists so these
                  voices have a place to live.
                </p>
              </div>

              {/* Collections */}

              <div className="archive-card p-8">
                <h3 className="text-2xl font-bold mb-8">
                  Featured Collections
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      title: "Letters Never Sent",
                    },
                    {
                      icon: Sparkles,
                      title: "Before I Became Me",
                    },
                    {
                      icon: Clock3,
                      title: "Turning Points",
                    },
                    {
                      icon: Feather,
                      title: "Regrets & Lessons",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        href="#"
                        className="
                          flex
                          items-center
                          justify-between
                          p-4
                          rounded-2xl
                          hover:bg-white/[0.03]
                          transition-all
                          group
                        "
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="
                              w-12
                              h-12
                              rounded-xl
                              bg-amber-300/10
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <Icon className="w-5 h-5 text-amber-300" />
                          </div>

                          <span className="font-medium">
                            {item.title}
                          </span>
                        </div>

                        <ArrowRight
                          className="
                            w-4
                            h-4
                            text-zinc-500
                            group-hover:text-amber-300
                            transition-colors
                          "
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Trust Block */}

              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    icon: Users,
                    label: "Voices",
                  },
                  {
                    icon: Archive,
                    label: "Preserved",
                  },
                  {
                    icon: Stars,
                    label: "Stories",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="
                        archive-card
                        p-6
                        text-center
                      "
                    >
                      <Icon className="w-7 h-7 text-amber-300 mx-auto mb-3" />

                      <p className="text-sm text-zinc-400">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          z-20
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            gap-3
            text-zinc-500
          "
        >
          <span className="text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>
    </section>
  );
}