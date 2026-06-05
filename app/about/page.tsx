"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Heart,
  Mail,
  Clock3,
  Sparkles,
  Archive,
  Feather,
  ArrowRight,
  Quote,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Archive,
      title: "Preservation",
      description:
        "We believe every human experience deserves a place in history. Stories should not disappear simply because they were never recorded.",
    },
    {
      icon: Heart,
      title: "Human Connection",
      description:
        "The most powerful stories often come from ordinary people living ordinary lives. Their experiences connect us all.",
    },
    {
      icon: Feather,
      title: "Authenticity",
      description:
        "Every story matters. We celebrate honesty, vulnerability, courage, and the truth found in personal experiences.",
    },
    {
      icon: Sparkles,
      title: "Legacy",
      description:
        "We are building a living archive that future generations can explore to understand what it meant to be human.",
    },
  ];

  const collections = [
    {
      icon: BookOpen,
      title: "Untold Stories",
      description:
        "Experiences that remained hidden for years, waiting for someone willing to listen.",
    },
    {
      icon: Mail,
      title: "Letters Never Sent",
      description:
        "Messages written from the heart but never delivered.",
    },
    {
      icon: Clock3,
      title: "One Turning Point",
      description:
        "A single moment capable of changing the direction of an entire life.",
    },
    {
      icon: Sparkles,
      title: "Before I Became Me",
      description:
        "Stories of growth, transformation, resilience, and self-discovery.",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* HERO */}

      <section className="relative min-h-[90vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="uppercase tracking-[0.5em] text-zinc-500 mb-8">
              About The Human Archive
            </p>

            <h1 className="text-6xl md:text-8xl font-bold leading-none mb-10">
              Every Human
              <br />
              Story Matters
            </h1>

            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-zinc-400 leading-relaxed">
              The Human Archive exists to preserve stories,
              memories, regrets, lessons, transformations,
              and moments that might otherwise disappear
              with time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
                Our Purpose
              </p>

              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                A Living
                <br />
                Museum Of
                <br />
                Human Experience
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Every person carries stories that never
                make it into books, documentaries,
                newspapers, or history records.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                These stories live in memories, journals,
                conversations, unfinished letters,
                regrets, dreams, and moments that
                changed everything.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed">
                The Human Archive was created to ensure
                those stories are not forgotten.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="archive-card p-12"
            >
              <Quote className="w-12 h-12 text-amber-300 mb-8" />

              <p className="text-3xl leading-relaxed font-medium">
                "History remembers leaders,
                inventions, and events.
                We preserve the stories
                of everyone else."
              </p>

              <div className="mt-10 text-zinc-500">
                — The Human Archive
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              Our Values
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              What We Believe
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  className="archive-card p-10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-300/10 flex items-center justify-center mb-8">
                    <Icon className="w-8 h-8 text-amber-300" />
                  </div>

                  <h3 className="text-3xl font-bold mb-6">
                    {value.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              Collections
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              Inside The Archive
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {collections.map((collection, index) => {
              const Icon = collection.icon;

              return (
                <motion.div
                  key={collection.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="archive-card p-10"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-amber-300/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-amber-300" />
                    </div>

                    <h3 className="text-3xl font-bold">
                      {collection.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {collection.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}

      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold">
              Why Stories Matter
            </h2>
          </div>

          <div className="space-y-20">
            {[
              {
                title: "A Story Is Written",
                text: "Someone experiences a moment that changes them forever.",
              },
              {
                title: "A Memory Is Formed",
                text: "The experience becomes part of their personal history.",
              },
              {
                title: "Time Passes",
                text: "Details begin to fade. Memories become fragile.",
              },
              {
                title: "The Archive Preserves",
                text: "The story is recorded and protected from being lost.",
              },
              {
                title: "Future Generations Learn",
                text: "Someone else discovers meaning, comfort, or wisdom.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="flex gap-8"
              >
                <div className="text-6xl font-bold text-amber-300">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-lg">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card p-16 md:p-24 text-center">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Join The Archive
            </p>

            <h2 className="text-5xl md:text-8xl font-bold mb-8">
              Share
              <br />
              Your Story
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
              Every story matters.
              Every memory deserves preservation.
              Your experience could become part of a
              living archive that inspires future generations.
            </p>

            <button className="btn-primary text-lg px-10 py-5">
              Submit A Story
              <ArrowRight className="ml-3 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}