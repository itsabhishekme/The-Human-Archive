"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Heart,
  PenLine,
  Clock3,
  Calendar,
  User,
  ArrowRight,
  Quote,
  Feather,
  BookOpen,
  Send,
  Lock,
  Sparkles,
} from "lucide-react";

export default function LettersNeverSentPage() {
  const letters = [
    {
      title: "Dear Dad, I Finally Understand",
      author: "Anonymous",
      date: "March 2026",
      readTime: "8 min read",
      category: "Family",
      excerpt:
        "There were so many things I wanted to say before you left. Years later, this letter became my way of finishing that conversation.",
    },
    {
      title: "To The Friend I Never Replied To",
      author: "Anonymous",
      date: "February 2026",
      readTime: "6 min read",
      category: "Friendship",
      excerpt:
        "One message sat unread for too long. Life moved forward, but the words remained waiting.",
    },
    {
      title: "Dear Younger Me",
      author: "Anonymous",
      date: "January 2026",
      readTime: "9 min read",
      category: "Reflection",
      excerpt:
        "The advice, comfort, and understanding I wish someone had given me when everything felt uncertain.",
    },
    {
      title: "The Letter I Never Sent After Goodbye",
      author: "Anonymous",
      date: "December 2025",
      readTime: "11 min read",
      category: "Relationships",
      excerpt:
        "Some endings deserve words. This letter carried everything I never had the courage to say.",
    },
    {
      title: "To My Future Self",
      author: "Anonymous",
      date: "November 2025",
      readTime: "7 min read",
      category: "Future",
      excerpt:
        "A message written in hope, uncertainty, and curiosity for the person I would one day become.",
    },
    {
      title: "Dear Mom, Thank You",
      author: "Anonymous",
      date: "October 2025",
      readTime: "5 min read",
      category: "Family",
      excerpt:
        "Some gratitude arrives late, but it remains meaningful all the same.",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-300/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <p className="uppercase tracking-[0.5em] text-zinc-500 mb-8">
              The Human Archive Collection
            </p>

            <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold leading-none mb-10">
              Letters
              <br />
              Never Sent
            </h1>

            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-zinc-400 leading-relaxed">
              Messages written from the heart,
              carried by memory,
              preserved by time,
              but never delivered.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-12">
              <button className="btn-primary">
                Explore Letters
              </button>

              <button className="btn-outline">
                Submit A Letter
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
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
                About This Collection
              </p>

              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Words
                <br />
                Waiting
                <br />
                For A Home
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Across the world, millions of letters
                remain unfinished, unsent, or unread.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Some were written in love.
                Others in grief, gratitude,
                regret, forgiveness, or hope.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Letters Never Sent preserves these
                messages as part of our collective
                human story.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="archive-card p-12"
            >
              <Quote className="w-12 h-12 text-amber-300 mb-8" />

              <p className="text-3xl leading-relaxed font-medium">
                "Not every letter needs a recipient.
                Some letters exist simply to carry
                emotions safely through time."
              </p>

              <div className="mt-8 text-zinc-500">
                The Human Archive
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED LETTER */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="min-h-[600px] bg-gradient-to-br from-amber-300/10 via-zinc-900 to-black" />

              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
                  Featured Letter
                </p>

                <h2 className="text-5xl md:text-6xl font-bold mb-8">
                  Dear Dad,
                  <br />
                  I Finally
                  <br />
                  Understand
                </h2>

                <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                  A deeply personal letter written
                  years after a final goodbye.
                  A reflection on understanding,
                  forgiveness, and the conversations
                  we wish we could still have.
                </p>

                <button className="btn-primary w-fit">
                  Read Letter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LETTER THEMES */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              Categories
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              Letters About
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Love",
                description:
                  "Unspoken feelings and unfinished conversations.",
              },
              {
                icon: BookOpen,
                title: "Family",
                description:
                  "Messages to parents, siblings, and relatives.",
              },
              {
                icon: Feather,
                title: "Forgiveness",
                description:
                  "Words written to heal old wounds.",
              },
              {
                icon: Sparkles,
                title: "Future",
                description:
                  "Letters written to future versions of ourselves.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="archive-card p-10 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-300/10 mx-auto flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-amber-300" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LETTER GRID */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              Archive Collection
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              Read The Letters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {letters.map((letter, index) => (
              <motion.article
                key={letter.title}
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
                  delay: index * 0.08,
                }}
                className="archive-card overflow-hidden group"
              >
                <div className="h-60 bg-gradient-to-br from-amber-300/10 via-zinc-900 to-black" />

                <div className="p-8">
                  <span className="px-4 py-2 rounded-full bg-amber-300/10 text-amber-300 text-sm">
                    {letter.category}
                  </span>

                  <h3 className="text-3xl font-bold mt-6 mb-5 group-hover:text-amber-300 transition-colors">
                    {letter.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-8">
                    {letter.excerpt}
                  </p>

                  <div className="space-y-3 text-zinc-500 text-sm">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      {letter.author}
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {letter.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={14} />
                      {letter.readTime}
                    </div>
                  </div>

                  <button className="mt-8 flex items-center gap-2 text-amber-300">
                    Read Letter
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PRESERVATION SECTION */}

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="archive-card p-16 md:p-24 text-center">
            <Lock className="w-16 h-16 text-amber-300 mx-auto mb-8" />

            <h2 className="text-5xl md:text-7xl font-bold mb-10">
              Preserved
              <br />
              Forever
            </h2>

            <p className="max-w-4xl mx-auto text-zinc-400 text-xl leading-relaxed">
              Letters capture moments that cannot
              be recreated. They preserve emotions,
              thoughts, and truths exactly as they
              existed in a particular moment of life.
            </p>
          </div>
        </div>
      </section>

      {/* SUBMISSION CTA */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card p-16 md:p-24 text-center">
            <Mail className="w-16 h-16 text-amber-300 mx-auto mb-8" />

            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Contribute To The Archive
            </p>

            <h2 className="text-5xl md:text-8xl font-bold mb-8">
              Share
              <br />
              Your Letter
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
              Somewhere in your notebook,
              drafts folder, or memory
              there may be a letter that deserves
              to be preserved.
            </p>

            <button className="btn-primary text-lg px-10 py-5">
              Submit A Letter
              <Send className="ml-3 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}