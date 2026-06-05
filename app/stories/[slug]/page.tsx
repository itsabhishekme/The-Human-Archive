"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock3,
  User,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Share2,
  Heart,
  Quote,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

interface StoryPageProps {
  params: {
    slug: string;
  };
}

export default function StoryDetailPage({
  params,
}: StoryPageProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const scrollPercent =
        (scrollTop / docHeight) * 100;

      setProgress(scrollPercent);
    };

    window.addEventListener(
      "scroll",
      updateProgress
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  const story = {
    title: "The Call I Never Returned",

    category: "Regrets",

    author: "Anonymous",

    date: "March 2026",

    readTime: "8 min read",

    excerpt:
      "I thought there would be another chance. Another conversation. Another day.",

    content: `
There are moments in life that seem ordinary when they happen.

A missed call.

A message left unread.

A conversation postponed until tomorrow.

Most of the time, tomorrow arrives.

Sometimes it doesn't.

The phone rang while I was driving home after a long day.

I glanced at the screen.

It was someone I cared about deeply.

I remember thinking I would call back later.

Not because the conversation wasn't important.

Not because I didn't care.

Simply because I believed there would be another opportunity.

There usually is.

But not always.

Hours passed.

Then the next day.

And then came the news that changed everything.

The kind of news that divides life into before and after.

The call remained unanswered forever.

For years I replayed that moment in my mind.

Not because I believed one conversation could have changed fate.

But because I never got the chance to say the things I thought could wait.

Regret has a strange way of teaching us what matters.

It reminds us that time is not guaranteed.

That people are not permanent.

That opportunities often arrive quietly and disappear the same way.

Today, when someone important calls, I answer.

Not because every conversation is urgent.

But because some moments only knock once.

And we rarely know which moments those are.
`,
  };

  const relatedStories = [
    {
      title: "The Letter I Never Sent",
      slug: "the-letter-i-never-sent",
    },
    {
      title: "The Promise I Couldn't Keep",
      slug: "the-promise-i-couldnt-keep",
    },
    {
      title: "A Conversation That Never Happened",
      slug: "a-conversation-that-never-happened",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Reading Progress */}

      <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-[999]">
        <div
          className="h-full bg-amber-300 transition-all duration-150"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* Hero */}

      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-300/10 via-transparent to-transparent" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-12"
          >
            <ArrowLeft size={18} />
            Back To Archive
          </Link>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-amber-300/10 text-amber-300 mb-8">
              {story.category}
            </span>

            <h1 className="text-6xl md:text-8xl font-bold leading-none mb-10">
              {story.title}
            </h1>

            <p className="text-zinc-400 text-2xl leading-relaxed mb-12">
              {story.excerpt}
            </p>

            <div className="flex flex-wrap gap-8 text-zinc-500">
              <div className="flex items-center gap-2">
                <User size={16} />
                {story.author}
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {story.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} />
                {story.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article */}

      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="archive-card p-10 md:p-16">
            <div className="flex justify-end gap-4 mb-12">
              <button className="btn-outline">
                <Bookmark size={18} />
              </button>

              <button className="btn-outline">
                <Share2 size={18} />
              </button>

              <button className="btn-outline">
                <Heart size={18} />
              </button>
            </div>

            <article className="prose prose-invert max-w-none">
              {story.content
                .split("\n")
                .filter(Boolean)
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="
                      text-xl
                      leading-[2]
                      text-zinc-300
                      mb-8
                    "
                  >
                    {paragraph}
                  </p>
                ))}
            </article>

            {/* Pull Quote */}

            <div className="my-20 border-l-2 border-amber-300 pl-8">
              <Quote className="w-10 h-10 text-amber-300 mb-5" />

              <p className="text-3xl font-bold leading-relaxed">
                Some moments only knock once.
              </p>
            </div>

            <article>
              <p className="text-xl leading-[2] text-zinc-300">
                The stories we remember most are often
                not the grand achievements, but the
                quiet moments that revealed what truly
                mattered.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Author */}

      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="archive-card p-12">
            <div className="flex gap-8 items-center">
              <div className="w-24 h-24 rounded-full bg-amber-300/10 flex items-center justify-center">
                <User className="w-10 h-10 text-amber-300" />
              </div>

              <div>
                <p className="text-zinc-500 mb-2">
                  Story Contributor
                </p>

                <h3 className="text-3xl font-bold mb-4">
                  Anonymous
                </h3>

                <p className="text-zinc-400">
                  Preserved within The Human Archive
                  to ensure this experience remains
                  part of our collective memory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Stories */}

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-14">
            <BookOpen className="text-amber-300" />

            <h2 className="text-5xl font-bold">
              Related Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedStories.map((story) => (
              <div
                key={story.slug}
                className="archive-card p-8"
              >
                <h3 className="text-2xl font-bold mb-6">
                  {story.title}
                </h3>

                <Link
                  href={`/stories/${story.slug}`}
                  className="flex items-center gap-2 text-amber-300"
                >
                  Read Story
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="archive-card p-16 md:p-24 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Every Story
              <br />
              Deserves A Place
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
              Help preserve experiences, memories,
              and lessons that might otherwise be
              forgotten.
            </p>

            <button className="btn-primary">
              Submit Your Story
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}