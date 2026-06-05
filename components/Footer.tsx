"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Mail,
  ArrowRight,
  Feather,
  Quote,
  Sparkles,
  Clock3,
  Globe,
  Shield,
  Send,
} from "lucide-react";

const collections = [
  {
    title: "Letters Never Sent",
    href: "/letters-never-sent",
  },
  {
    title: "Before I Became Me",
    href: "/before-i-became-me",
  },
  {
    title: "Turning Points",
    href: "/turning-points",
  },
  {
    title: "Regrets & Lessons",
    href: "/regrets-lessons",
  },
];

const navigation = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Stories",
    href: "/stories",
  },
  {
    title: "Archive",
    href: "/archive",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Submit Story",
    href: "/submit",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const values = [
  {
    icon: Globe,
    title: "Global Voices",
  },
  {
    icon: Shield,
    title: "Preserved Forever",
  },
  {
    icon: Clock3,
    title: "Timeless Stories",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter */}

        <section className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="archive-card p-12 md:p-20 text-center"
          >
            <div className="w-20 h-20 rounded-3xl bg-amber-300/10 flex items-center justify-center mx-auto mb-8">
              <Mail className="w-10 h-10 text-amber-300" />
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Stories Worth
              <br />
              Remembering
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-10">
              Receive newly archived stories,
              memories, lessons, and letters
              from around the world.
            </p>

            <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  flex-1
                  h-14
                  px-5
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  outline-none
                "
              />

              <button className="btn-primary">
                Subscribe
                <Send className="ml-2 w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* Values */}

        <section className="pb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="archive-card p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-300/10 mx-auto flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-amber-300" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>

        {/* Main Footer */}

        <section className="pb-20">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <Link
                href="/"
                className="inline-flex items-center gap-4 mb-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-300/10 flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-amber-300" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    The Human Archive
                  </h3>

                  <p className="text-zinc-500 text-sm">
                    Preserving Human Stories
                  </p>
                </div>
              </Link>

              <p className="text-zinc-400 leading-relaxed text-lg mb-8">
                A living collection of stories,
                memories, turning points,
                letters, lessons, and human
                experiences preserved for
                future generations.
              </p>

              <div className="archive-card p-8">
                <Quote className="w-10 h-10 text-amber-300 mb-5" />

                <p className="text-xl leading-relaxed">
                  Every person carries a story.
                  The Human Archive exists so
                  those stories are not lost.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold mb-8">
                Navigation
              </h4>

              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-zinc-400 hover:text-amber-300 flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold mb-8">
                Collections
              </h4>

              <ul className="space-y-4">
                {collections.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-zinc-400 hover:text-amber-300 flex items-center gap-2"
                    >
                      <Feather className="w-4 h-4" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xl font-bold mb-8">
                Contact
              </h4>

              <div className="space-y-6 text-zinc-400">
                <p>hello@thehumanarchive.com</p>

                <p>
                  stories@thehumanarchive.com
                </p>

                <p>
                  Response Time: 24–48 Hours
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10 my-16" />

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-zinc-500 text-sm">
              © 2026 The Human Archive.
              All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-zinc-500 hover:text-amber-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-zinc-500 hover:text-amber-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </section>

        <div className="pb-10 text-center text-zinc-600 text-sm">
          <div className="inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Preserving the stories people never thought anyone would read.
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}