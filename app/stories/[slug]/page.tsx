"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
  Eye,
  MessageCircle,
  Sparkles,
  Feather,
  Mail,
  ChevronRight,
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
    views: "12.8K",
    comments: "214",
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

The longer I lived, the more I noticed how many moments are treated as routine.

A quick goodbye.

A short conversation.

A simple thank you.

A casual invitation.

A random phone call.

We assume these things will happen again.

We assume there will always be another opportunity.

Another evening.

Another weekend.

Another birthday.

Another chance to express what lives in our hearts.

But life rarely announces its final chapters.

It turns pages quietly.

Without warning.

Without permission.

Without explanation.

That realization changed how I move through the world.

I try to listen more carefully.

I try to answer more calls.

I try to stay present in conversations.

I try not to postpone kindness.

I try not to delay gratitude.

Because the things we postpone are often the things we value most.

And value delayed sometimes becomes regret.

The memory of that unanswered call remains with me.

Not as a wound.

Not as punishment.

But as a lesson.

A reminder that every connection is temporary.

A reminder that love deserves expression while there is still time.

A reminder that presence is one of the greatest gifts we can offer another human being.

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
    <main className="relative overflow-hidden bg-black text-white">
      {/* Reading Progress */}

      <div className="fixed top-0 left-0 w-full h-[4px] bg-white/5 z-[999]">
        <div
          className="h-full bg-amber-300 transition-all duration-200"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-amber-300/10 blur-[180px]" />
      </div>

      {/* Hero */}

      <section className="relative min-h-screen flex items-center py-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-12 transition"
          >
            <ArrowLeft size={18} />
            Back To Archive
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              <span className="inline-block px-5 py-2 rounded-full bg-amber-300/10 text-amber-300 mb-8">
                {story.category}
              </span>

              <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-none mb-8">
                {story.title}
              </h1>

              <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-10">
                {story.excerpt}
              </p>

              <div className="flex flex-wrap gap-8 text-zinc-500 mb-10">
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

              <div className="flex gap-8 text-zinc-400">
                <div className="flex items-center gap-2">
                  <Eye size={18} />
                  {story.views}
                </div>

                <div className="flex items-center gap-2">
                  <MessageCircle size={18} />
                  {story.comments}
                </div>

                <div className="flex items-center gap-2">
                  <Heart size={18} />
                  3.1K
                </div>
              </div>
            </motion.div>

            {/* Public Image from /public */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >
              <div className="relative h-[650px] rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/story-call.jpg"
                  alt="The Call I Never Returned"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                    <p className="text-zinc-300 leading-relaxed">
                      Sometimes the smallest decisions
                      become the memories that stay with
                      us forever.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Highlights */}

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Life Lesson",
                text: "Never assume there will be another chance.",
              },
              {
                icon: Feather,
                title: "Theme",
                text: "Regret, memory, gratitude and presence.",
              },
              {
                icon: Mail,
                title: "Message",
                text: "Say what matters while time allows it.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
              >
                <item.icon className="w-8 h-8 text-amber-300 mb-5" />

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article */}

      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-16">
            <div className="flex justify-end gap-4 mb-12">
              <button className="h-12 w-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5">
                <Bookmark size={18} />
              </button>

              <button className="h-12 w-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5">
                <Share2 size={18} />
              </button>

              <button className="h-12 w-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5">
                <Heart size={18} />
              </button>
            </div>

            <article>
              {story.content
                .split("\n")
                .filter(Boolean)
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-xl leading-[2] text-zinc-300 mb-8"
                  >
                    {paragraph}
                  </p>
                ))}
            </article>

            <div className="my-24 border-l-4 border-amber-300 pl-8">
              <Quote className="w-12 h-12 text-amber-300 mb-6" />

              <p className="text-3xl md:text-5xl font-bold leading-tight">
                Some moments only knock once.
              </p>
            </div>

            <div className="relative h-[450px] rounded-3xl overflow-hidden my-20">
              <Image
                src="/images/memory.jpg"
                alt="Memory"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xl leading-[2] text-zinc-300">
              The stories we remember most are often not
              the grand achievements, but the quiet
              moments that revealed what truly mattered.
              Every memory becomes part of a larger human
              archive, preserving lessons for future
              generations.
            </p>
          </div>
        </div>
      </section>

      {/* Author */}

      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-28 h-28 rounded-full bg-amber-300/10 flex items-center justify-center">
                <User className="w-12 h-12 text-amber-300" />
              </div>

              <div>
                <p className="text-zinc-500 mb-2">
                  Story Contributor
                </p>

                <h3 className="text-3xl font-bold mb-4">
                  Anonymous
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  Preserved within The Human Archive to
                  ensure this experience remains part of
                  our collective memory and continues to
                  inspire reflection for generations.
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
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:-translate-y-2 transition-all"
              >
                <h3 className="text-2xl font-bold mb-6">
                  {story.title}
                </h3>

                <Link
                  href={`/stories/${story.slug}`}
                  className="inline-flex items-center gap-2 text-amber-300"
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
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-16 md:p-24 text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Every Story
              <br />
              Deserves A Place
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
              Help preserve experiences, memories,
              lessons, regrets, victories and human
              moments that might otherwise disappear
              with time.
            </p>

            <button className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-amber-300 text-black font-bold">
              Submit Your Story
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}