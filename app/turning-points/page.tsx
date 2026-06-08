"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock3,
  User,
  Compass,
  Sparkles,
  Mountain,
  Route,
  Milestone,
  Quote,
  BookOpen,
  Heart,
  Lightbulb,
  ChevronRight,
  Stars,
} from "lucide-react";

export default function TurningPointsPage() {
  const stories = [
    {
      title: "The Train I Missed",
      category: "Chance Encounter",
      author: "Anonymous",
      date: "March 2026",
      readTime: "8 min read",
      image: "/turning-points/train-missed.jpg",
      excerpt:
        "One delayed train led to a conversation that changed the direction of my life forever.",
    },
    {
      title: "The Job I Didn't Get",
      category: "Career",
      author: "Anonymous",
      date: "February 2026",
      readTime: "10 min read",
      image: "/turning-points/job-rejection.jpg",
      excerpt:
        "What felt like a devastating rejection became the greatest opportunity I never expected.",
    },
    {
      title: "The Phone Call At Midnight",
      category: "Family",
      author: "Anonymous",
      date: "January 2026",
      readTime: "7 min read",
      image: "/turning-points/midnight-call.jpg",
      excerpt:
        "A single call divided my life into before and after.",
    },
    {
      title: "The Stranger In The Café",
      category: "Connection",
      author: "Anonymous",
      date: "December 2025",
      readTime: "9 min read",
      image: "/turning-points/stranger-cafe.jpg",
      excerpt:
        "Sometimes life changes because of someone you've only known for five minutes.",
    },
    {
      title: "Walking Away",
      category: "Transformation",
      author: "Anonymous",
      date: "November 2025",
      readTime: "12 min read",
      image: "/turning-points/walking-away.jpg",
      excerpt:
        "The hardest decision I ever made became the most important one.",
    },
    {
      title: "The Day Everything Stopped",
      category: "Reflection",
      author: "Anonymous",
      date: "October 2025",
      readTime: "11 min read",
      image: "/turning-points/everything-stopped.jpg",
      excerpt:
        "When life unexpectedly paused, I finally saw what mattered most.",
    },
  ];

  const turningMoments = [
    {
      icon: Compass,
      title: "A New Direction",
      description:
        "Moments that change the path we believed we were meant to follow.",
    },
    {
      icon: Mountain,
      title: "A Major Challenge",
      description:
        "Difficult experiences that reshape identity and purpose.",
    },
    {
      icon: Heart,
      title: "A Human Connection",
      description:
        "Relationships that unexpectedly alter the course of a life.",
    },
    {
      icon: Lightbulb,
      title: "A Realization",
      description:
        "A sudden insight that changes everything we thought we knew.",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center px-6">
        <Image
          src="/turning-points/hero.jpg"
          alt="Turning Point"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-black/40 to-black" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[0.5em] text-zinc-300 mb-8">
              The Human Archive Collection
            </p>

            <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold leading-none mb-10">
              One
              <br />
              Turning
              <br />
              Point
            </h1>

            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-zinc-300 leading-relaxed">
              Stories about the moments that changed
              everything. The conversations, decisions,
              encounters, and realizations that divided
              life into before and after.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-12">
              <button className="btn-primary">
                Explore Stories
              </button>

              <button className="btn-outline">
                Share Your Turning Point
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
                About This Collection
              </p>

              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                The Moment
                <br />
                Everything
                <br />
                Changed
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Every life contains a turning point.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                A single decision.
                A missed opportunity.
                An unexpected encounter.
                A conversation that changed perspective.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed">
                These moments often seem ordinary
                while they happen. Only later do we
                realize they changed everything.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="archive-card overflow-hidden"
            >
              <div className="relative h-[500px]">
                <Image
                  src="/turning-points/quote-section.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 p-12 flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-amber-300 mb-8" />

                  <p className="text-3xl leading-relaxed font-medium">
                    "Life changes very quickly,
                    in a very positive way,
                    if you let it."
                  </p>

                  <div className="mt-8 text-zinc-400">
                    The Human Archive
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              The Journey
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              Anatomy Of A Turning Point
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                icon: Route,
                title: "The Ordinary Path",
                description:
                  "Life follows a familiar direction.",
              },
              {
                icon: Sparkles,
                title: "The Moment",
                description:
                  "An event disrupts the expected journey.",
              },
              {
                icon: Milestone,
                title: "The Decision",
                description:
                  "A choice must be made.",
              },
              {
                icon: Stars,
                title: "The New Life",
                description:
                  "A different future begins to unfold.",
              },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="archive-card p-10 text-center"
                >
                  <div className="w-20 h-20 rounded-3xl bg-amber-300/10 mx-auto flex items-center justify-center mb-8">
                    <Icon className="w-10 h-10 text-amber-300" />
                  </div>

                  <h3 className="text-2xl font-bold mb-5">
                    {step.title}
                  </h3>

                  <p className="text-zinc-400">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[650px]">
                <Image
                  src="/turning-points/featured-train.jpg"
                  alt="The Train I Missed"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <span className="text-amber-300 uppercase tracking-[0.3em] mb-6">
                  Featured Story
                </span>

                <h2 className="text-5xl md:text-6xl font-bold mb-8">
                  The Train
                  <br />
                  I Missed
                </h2>

                <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                  Missing a train felt like a minor
                  inconvenience. Years later,
                  I realized it was the beginning
                  of a completely different life.
                </p>

                <button className="btn-primary w-fit">
                  Read Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TURNING MOMENTS */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold">
              Common Turning Points
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {turningMoments.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="archive-card p-10 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-300/10 mx-auto flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-amber-300" />
                  </div>

                  <h3 className="text-2xl font-bold mb-5">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STORIES GRID */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              Archive Collection
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              Turning Point Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="archive-card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <span className="px-4 py-2 rounded-full bg-amber-300/10 text-amber-300 text-sm">
                    {story.category}
                  </span>

                  <h3 className="text-3xl font-bold mt-6 mb-5 group-hover:text-amber-300 transition-colors">
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

      {/* QUOTE BLOCK */}

      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Quote className="w-14 h-14 text-amber-300 mx-auto mb-10" />

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            The most important moments
            in our lives are often the ones
            we almost didn't notice.
          </h2>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="archive-card relative overflow-hidden">
            <Image
              src="/turning-points/cta-bg.jpg"
              alt=""
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/75" />

            <div className="relative z-10 p-16 md:p-24 text-center">
              <BookOpen className="w-16 h-16 text-amber-300 mx-auto mb-8" />

              <p className="uppercase tracking-[0.4em] text-zinc-400 mb-6">
                Share Your Turning Point
              </p>

              <h2 className="text-5xl md:text-8xl font-bold mb-8">
                What Changed
                <br />
                Your Life?
              </h2>

              <p className="max-w-3xl mx-auto text-zinc-300 text-xl leading-relaxed mb-12">
                Everyone has a story about a moment
                that changed everything.
                Preserve yours for future generations.
              </p>

              <button className="btn-primary text-lg px-10 py-5">
                Submit Your Story
                <ChevronRight className="ml-3 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}