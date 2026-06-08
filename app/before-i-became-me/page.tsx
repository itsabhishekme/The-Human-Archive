"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Calendar,
  User,
  Clock3,
  Heart,
  Mountain,
  Sunrise,
  BookOpen,
  Stars,
  Quote,
} from "lucide-react";

export default function BeforeIBecameMePage() {
  const transformationStories = [
    {
      title: "The Day I Stopped Running",
      author: "Anonymous",
      date: "March 2026",
      readTime: "8 min read",
      image: "/before-i-became-me/story-1.jpg",
      excerpt:
        "For years I chased success, approval, and validation. One unexpected moment forced me to stop and discover who I truly was.",
    },
    {
      title: "Starting Again At Thirty-Five",
      author: "Anonymous",
      date: "February 2026",
      readTime: "12 min read",
      image: "/before-i-became-me/story-2.jpg",
      excerpt:
        "Losing everything felt like the end. It became the beginning of a completely different life.",
    },
    {
      title: "The Version Of Me I Had To Leave Behind",
      author: "Anonymous",
      date: "January 2026",
      readTime: "10 min read",
      image: "/before-i-became-me/story-3.jpg",
      excerpt:
        "Transformation is rarely about becoming someone new. Sometimes it is about letting go of who you no longer are.",
    },
    {
      title: "The Quiet Rebuilding",
      author: "Anonymous",
      date: "December 2025",
      readTime: "7 min read",
      image: "/before-i-became-me/story-4.jpg",
      excerpt:
        "No dramatic breakthrough. No overnight success. Just small steps that slowly rebuilt a broken life.",
    },
    {
      title: "Learning To Forgive Myself",
      author: "Anonymous",
      date: "November 2025",
      readTime: "9 min read",
      image: "/before-i-became-me/story-5.jpg",
      excerpt:
        "The hardest person I ever had to forgive was the one I saw in the mirror every morning.",
    },
    {
      title: "A Different Kind Of Success",
      author: "Anonymous",
      date: "October 2025",
      readTime: "6 min read",
      image: "/before-i-became-me/story-6.jpg",
      excerpt:
        "I spent years climbing the wrong mountain before realizing I was chasing someone else's dream.",
    },
  ];

  const journeySteps = [
    {
      title: "The Breaking Point",
      description:
        "Every transformation begins when something can no longer continue as it was.",
      icon: Mountain,
    },
    {
      title: "The Uncertainty",
      description:
        "The difficult middle chapter where nothing feels clear and the future remains unknown.",
      icon: Stars,
    },
    {
      title: "The Discovery",
      description:
        "A realization, lesson, or truth that changes how we see ourselves.",
      icon: Sparkles,
    },
    {
      title: "The Becoming",
      description:
        "The gradual process of stepping into a new version of ourselves.",
      icon: Sunrise,
    },
  ];

  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/before-i-became-me/hero.jpg"
          alt="Before I Became Me"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[0.5em] text-zinc-400 mb-8">
              The Human Archive Collection
            </p>

            <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold leading-none mb-10">
              Before
              <br />
              I Became Me
            </h1>

            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-zinc-300 leading-relaxed">
              Stories of transformation, resilience,
              self-discovery, healing, growth,
              and the extraordinary journey of becoming.
            </p>

            <button className="btn-primary mt-12">
              Explore Stories
            </button>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
                About This Collection
              </p>

              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Every Person
                <br />
                Lives Multiple
                <br />
                Lives
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                There is who we were. There is who we became.
                And there is the journey between them.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Before I Became Me is a collection of
                deeply personal stories about change,
                transformation, resilience, and identity.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed">
                These are stories of people who faced
                challenges, lost their way, discovered
                new paths, and emerged transformed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[650px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/before-i-became-me/intro.jpg"
                alt="Transformation"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/60" />

              <div className="absolute bottom-0 p-10">
                <Quote className="w-12 h-12 text-amber-300 mb-6" />

                <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                  "Transformation rarely arrives all at once.
                  It happens quietly, one decision,
                  one lesson, one day at a time."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              Transformation Journey
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              The Universal Path
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="archive-card p-10 text-center"
                >
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-300/10 flex items-center justify-center mb-8">
                    <Icon className="w-10 h-10 text-amber-300" />
                  </div>

                  <div className="text-amber-300 text-sm mb-4">
                    STEP {index + 1}
                  </div>

                  <h3 className="text-3xl font-bold mb-6">
                    {step.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card overflow-hidden rounded-3xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[700px]">
                <Image
                  src="/before-i-became-me/featured-story.jpg"
                  alt="Featured Story"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
                  Featured Transformation
                </p>

                <h2 className="text-5xl md:text-6xl font-bold mb-8">
                  The Version
                  <br />
                  Of Me
                  <br />
                  I Had To Leave
                  <br />
                  Behind
                </h2>

                <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                  Growth often requires letting go of
                  identities that once felt permanent.
                  This story explores the courage needed
                  to walk away from an old self and
                  embrace uncertainty.
                </p>

                <button className="btn-primary w-fit">
                  Read Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              Archive Stories
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              Transformation Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {transformationStories.map((story, index) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="archive-card overflow-hidden rounded-3xl group"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <span className="px-4 py-2 rounded-full bg-amber-300/10 text-amber-300 text-sm">
                    Transformation
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

      {/* INSPIRATION */}

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/before-i-became-me/inspiration.jpg"
                alt="Inspiration"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-black/70" />

            <div className="relative p-16 md:p-24 text-center">
              <Heart className="w-16 h-16 text-amber-300 mx-auto mb-8" />

              <h2 className="text-5xl md:text-7xl font-bold mb-10">
                Becoming Is
                <br />
                A Lifelong Process
              </h2>

              <p className="max-w-4xl mx-auto text-zinc-300 text-xl leading-relaxed">
                No one arrives fully formed.
                Every person is a work in progress,
                shaped by experiences, failures,
                relationships, dreams, and lessons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/before-i-became-me/cta.jpg"
              alt="Share Story"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/80" />

            <div className="relative p-16 md:p-24 text-center">
              <BookOpen className="w-16 h-16 text-amber-300 mx-auto mb-8" />

              <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
                Share Your Journey
              </p>

              <h2 className="text-5xl md:text-8xl font-bold mb-8">
                Tell Your
                <br />
                Transformation Story
              </h2>

              <p className="max-w-3xl mx-auto text-zinc-300 text-xl leading-relaxed mb-12">
                Your story of growth, resilience,
                and self-discovery may inspire someone
                walking a similar path.
              </p>

              <button className="btn-primary text-lg px-10 py-5 inline-flex items-center">
                Submit A Story
                <ArrowRight className="ml-3 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}