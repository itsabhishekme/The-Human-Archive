"use client";

import Link from "next/link";
import Image from "next/image";
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
  Globe,
  PenSquare,
  Shield,
} from "lucide-react";

export default function Page() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/human-archive.jpg"
            alt="The Human Archive"
            fill
            priority
            className="object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/5 mb-8">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="text-sm text-zinc-300">
                  Humanity's Living Memory
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
                The Human Archive
              </h1>

              <p className="text-2xl text-amber-300 mb-8 max-w-3xl">
                Preserving the stories people never thought anyone would read.
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mb-10">
                Every person carries a hidden archive. Letters never sent.
                Dreams abandoned. Transformations nobody witnessed.
                Conversations remembered for decades. The Human Archive
                preserves these moments before they disappear into silence.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/archive"
                  className="px-8 py-4 rounded-full bg-amber-300 text-black font-semibold flex items-center gap-3"
                >
                  Explore Archive
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/submit"
                  className="px-8 py-4 rounded-full border border-white/20"
                >
                  Submit Story
                </Link>

                <button className="px-8 py-4 rounded-full border border-white/20 flex items-center gap-3">
                  <Play className="w-4 h-4" />
                  Watch Mission
                </button>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="relative"
            >
              <div className="relative h-[650px] rounded-[40px] overflow-hidden border border-white/10">
                <Image
                  src="/images/human-archive.jpg"
                  alt="Archive"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["1,248", "Stories"],
              ["542", "Letters"],
              ["98", "Collections"],
              ["42", "Countries"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10"
              >
                <h3 className="text-5xl font-black text-amber-300">
                  {value}
                </h3>

                <p className="text-zinc-400 mt-3">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT EXISTS */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Quote className="w-16 h-16 mx-auto mb-8 text-amber-300" />

          <h2 className="text-5xl md:text-7xl font-black mb-10">
            Humanity's Stories Deserve To Survive Time
          </h2>

          <p className="text-xl text-zinc-400 leading-relaxed max-w-4xl mx-auto">
            Most human experiences disappear quietly. Memories fade. Voices are
            forgotten. Entire lifetimes become invisible. The Human Archive was
            created so meaningful experiences have a permanent place to exist
            beyond a single lifetime.
          </p>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-20">
            Featured Collections
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Letters Never Sent",
                desc: "Messages that remained in the heart.",
              },
              {
                icon: Clock3,
                title: "Turning Points",
                desc: "Moments that changed everything.",
              },
              {
                icon: Feather,
                title: "Lessons & Regrets",
                desc: "Wisdom earned through experience.",
              },
              {
                icon: Heart,
                title: "Love Stories",
                desc: "Connections that shaped lives.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="p-8 rounded-3xl border border-white/10 bg-white/[0.03]"
                >
                  <Icon className="w-10 h-10 text-amber-300 mb-6" />

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Archive,
                title: "Preserve",
                desc: "Protect stories from being forgotten.",
              },
              {
                icon: Globe,
                title: "Connect",
                desc: "Create a shared memory of humanity.",
              },
              {
                icon: Shield,
                title: "Protect",
                desc: "Give every voice a safe home.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="p-10 rounded-3xl border border-white/10 bg-white/[0.03]"
                >
                  <Icon className="w-12 h-12 text-amber-300 mb-6" />

                  <h3 className="text-3xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative h-[700px] rounded-[40px] overflow-hidden">
            <Image
              src="/images/human-archive.jpg"
              alt="Human Stories"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-10">
              <div>
                <h2 className="text-6xl md:text-8xl font-black mb-8">
                  Every Life Is A Story
                </h2>

                <p className="text-xl max-w-3xl mx-auto text-zinc-300">
                  A single memory can outlive generations when it is preserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <PenSquare className="w-16 h-16 text-amber-300 mx-auto mb-8" />

          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Add Your Story
          </h2>

          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
            Somewhere in your life is a story worth preserving. Share it with
            future generations and become part of humanity's living archive.
          </p>

          <Link
            href="/submit"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-amber-300 text-black font-bold text-lg"
          >
            Submit Your Story
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}