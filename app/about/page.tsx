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
  Users,
  Globe,
  PenTool,
  Library,
  Stars,
  Shield,
  TrendingUp,
  History,
  Camera,
  Mic,
  ScrollText,
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
    {
      icon: Shield,
      title: "Respect",
      description:
        "Every contribution is treated with dignity, care, and appreciation regardless of background or circumstance.",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description:
        "Stories from every culture, generation, profession, and life journey deserve to be preserved and shared.",
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
    {
      icon: Camera,
      title: "Moments Captured",
      description:
        "Photographs and memories that preserve meaningful moments in time.",
    },
    {
      icon: Mic,
      title: "Voices Remembered",
      description:
        "Personal reflections, spoken memories, and oral histories shared across generations.",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "10K+",
      label: "Stories Preserved",
    },
    {
      icon: Globe,
      value: "50+",
      label: "Countries Represented",
    },
    {
      icon: Library,
      value: "100+",
      label: "Archive Collections",
    },
    {
      icon: Heart,
      value: "Millions",
      label: "Lives Reflected",
    },
  ];

  const principles = [
    {
      icon: PenTool,
      title: "Write Freely",
      text: "Every contributor is encouraged to share their experiences honestly without fear of judgment.",
    },
    {
      icon: Archive,
      title: "Preserve Forever",
      text: "Stories become part of a growing collection designed to outlive generations.",
    },
    {
      icon: Users,
      title: "Connect Humanity",
      text: "Personal experiences create bridges between strangers across time and distance.",
    },
    {
      icon: TrendingUp,
      title: "Create Impact",
      text: "A single story can inspire courage, healing, understanding, or transformation.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* BACKGROUND */}

      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[0.6em] text-zinc-500 mb-8">
              About The Human Archive
            </p>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-10">
              Every Human
              <br />
              Story Matters
            </h1>

            <p className="max-w-5xl mx-auto text-xl md:text-2xl text-zinc-400 leading-relaxed mb-12">
              The Human Archive exists to preserve stories,
              memories, lessons, regrets, dreams, transformations,
              and moments that might otherwise disappear with time.
              We believe history is incomplete without the voices
              of ordinary people.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-amber-400 text-black font-bold flex items-center gap-2">
                Explore Stories
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="px-8 py-4 rounded-full border border-white/10">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}

      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 text-center"
                >
                  <Icon className="w-10 h-10 text-amber-300 mx-auto mb-5" />
                  <h3 className="text-5xl font-black mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-zinc-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PURPOSE */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
                Our Purpose
              </p>

              <h2 className="text-5xl md:text-7xl font-black mb-8">
                A Living
                <br />
                Museum Of
                <br />
                Human Experience
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Every person carries stories that never make it into
                history books. Yet these experiences shape families,
                communities, cultures, and generations.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                The Human Archive exists because we believe ordinary
                lives contain extraordinary lessons. Every memory,
                challenge, victory, heartbreak, and transformation
                deserves preservation.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Through storytelling we build understanding, empathy,
                and connection between people separated by geography,
                culture, and time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/5 rounded-[40px] p-12"
            >
              <Quote className="w-14 h-14 text-amber-300 mb-8" />

              <p className="text-3xl md:text-4xl leading-relaxed font-semibold">
                History remembers leaders,
                inventions, and events.
                We preserve the stories
                of everyone else.
              </p>

              <div className="mt-10 text-zinc-500 text-lg">
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

            <h2 className="text-5xl md:text-7xl font-black">
              What We Believe
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/[0.03] border border-white/5 rounded-3xl p-8"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center mb-8">
                    <Icon className="w-8 h-8 text-amber-300" />
                  </div>

                  <h3 className="text-3xl font-bold mb-5">
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

      {/* PRINCIPLES */}

      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              How The Archive Works
            </h2>

            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              Every preserved story follows a simple journey from
              personal memory to lasting legacy.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white/[0.03] border border-white/5 rounded-3xl p-8"
                >
                  <Icon className="w-10 h-10 text-amber-300 mb-6" />

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
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

            <h2 className="text-5xl md:text-7xl font-black">
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
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white/[0.03] border border-white/5 rounded-3xl p-10"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-amber-300" />
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
            <History className="w-14 h-14 text-amber-300 mx-auto mb-6" />

            <h2 className="text-5xl md:text-7xl font-black">
              Why Stories Matter
            </h2>
          </div>

          <div className="space-y-16">
            {[
              {
                title: "A Story Is Lived",
                text: "Someone experiences a moment that changes them forever.",
              },
              {
                title: "A Memory Is Created",
                text: "The experience becomes part of personal identity and history.",
              },
              {
                title: "Time Moves Forward",
                text: "Without preservation, details gradually fade and disappear.",
              },
              {
                title: "The Archive Records",
                text: "The story is documented and protected for future generations.",
              },
              {
                title: "Wisdom Is Shared",
                text: "Another person discovers meaning, comfort, insight, or hope.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex gap-8 items-start"
              >
                <div className="text-6xl font-black text-amber-300 min-w-[90px]">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/5 rounded-[50px] p-16 md:p-24 text-center">
            <ScrollText className="w-16 h-16 text-amber-300 mx-auto mb-8" />

            <h2 className="text-5xl md:text-8xl font-black mb-10">
              Building Humanity's
              <br />
              Memory
            </h2>

            <p className="max-w-4xl mx-auto text-zinc-400 text-xl leading-relaxed">
              The Human Archive is more than a collection of stories.
              It is a growing record of what it means to love, lose,
              hope, struggle, dream, fail, learn, and become.
              Together we are preserving the emotional history
              of humanity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-amber-400 text-black rounded-[50px] p-16 md:p-24 text-center">
            <Stars className="w-16 h-16 mx-auto mb-8" />

            <p className="uppercase tracking-[0.4em] mb-6 opacity-70">
              Join The Archive
            </p>

            <h2 className="text-5xl md:text-8xl font-black mb-8">
              Share
              <br />
              Your Story
            </h2>

            <p className="max-w-3xl mx-auto text-xl leading-relaxed mb-12">
              Every story matters. Every memory deserves preservation.
              Your experience could become part of a living archive
              that inspires future generations.
            </p>

            <button className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-lg">
              Submit A Story
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}