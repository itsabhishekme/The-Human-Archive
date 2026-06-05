"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Upload,
  BookOpen,
  Mail,
  Heart,
  Sparkles,
  Feather,
  Shield,
  Lock,
  CheckCircle2,
  ArrowRight,
  FileText,
  Clock3,
  User,
} from "lucide-react";

export default function SubmitStoryPage() {
  const [storyType, setStoryType] = useState("Story");

  const storyTypes = [
    {
      name: "Story",
      icon: BookOpen,
      description: "Personal experiences and memories",
    },
    {
      name: "Letter",
      icon: Mail,
      description: "Letters never sent",
    },
    {
      name: "Transformation",
      icon: Sparkles,
      description: "Life-changing journeys",
    },
    {
      name: "Regret",
      icon: Heart,
      description: "Lessons learned through experience",
    },
    {
      name: "Memory",
      icon: Feather,
      description: "Moments worth preserving",
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
              The Human Archive
            </p>

            <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold leading-none mb-10">
              Submit
              <br />
              Your Story
            </h1>

            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-zinc-400 leading-relaxed">
              Every life contains stories worth preserving.
              Share your experience and become part of a
              growing archive of human memory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card p-12 md:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
                  Why Submit
                </p>

                <h2 className="text-5xl md:text-7xl font-bold mb-8">
                  Stories
                  <br />
                  Matter
                </h2>

                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  Most stories disappear.
                  Not because they lack value,
                  but because nobody preserved them.
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  The Human Archive exists to protect
                  memories, lessons, reflections,
                  and experiences before they fade.
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  Your story may help someone understand
                  their own journey.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  "Preserve your experience",
                  "Help future readers",
                  "Share lessons learned",
                  "Contribute to human history",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle2 className="text-amber-300" />

                    <span className="text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY TYPE */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              Choose Category
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              What Are You Sharing?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
            {storyTypes.map((type) => {
              const Icon = type.icon;

              return (
                <button
                  key={type.name}
                  onClick={() =>
                    setStoryType(type.name)
                  }
                  className={`
                    archive-card
                    p-8
                    text-center
                    transition-all

                    ${
                      storyType === type.name
                        ? "border-amber-300/40"
                        : ""
                    }
                  `}
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-300/10 mx-auto flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-amber-300" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {type.name}
                  </h3>

                  <p className="text-zinc-500 text-sm">
                    {type.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM */}

      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="archive-card p-10 md:p-14"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Submit Your {storyType}
              </h2>

              <p className="text-zinc-400">
                Take your time.
                Honest stories create the strongest
                connections.
              </p>
            </div>

            <form className="space-y-8">
              {/* NAME */}

              <div>
                <label className="block text-sm uppercase tracking-wider text-zinc-500 mb-3">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name or Anonymous"
                  className="archive-input"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="block text-sm uppercase tracking-wider text-zinc-500 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="archive-input"
                />
              </div>

              {/* TITLE */}

              <div>
                <label className="block text-sm uppercase tracking-wider text-zinc-500 mb-3">
                  Title
                </label>

                <input
                  type="text"
                  placeholder="Give your story a title"
                  className="archive-input"
                />
              </div>

              {/* CATEGORY */}

              <div>
                <label className="block text-sm uppercase tracking-wider text-zinc-500 mb-3">
                  Category
                </label>

                <select className="archive-input">
                  <option>Life Lesson</option>
                  <option>Transformation</option>
                  <option>Memory</option>
                  <option>Family</option>
                  <option>Relationships</option>
                  <option>Career</option>
                  <option>Friendship</option>
                  <option>Personal Growth</option>
                </select>
              </div>

              {/* STORY */}

              <div>
                <label className="block text-sm uppercase tracking-wider text-zinc-500 mb-3">
                  Your Story
                </label>

                <textarea
                  placeholder="Share your experience..."
                  className="archive-input archive-textarea"
                />
              </div>

              {/* FILE */}

              <div>
                <label className="block text-sm uppercase tracking-wider text-zinc-500 mb-3">
                  Attach File (Optional)
                </label>

                <div className="border border-dashed border-white/10 rounded-3xl p-10 text-center">
                  <Upload className="w-10 h-10 mx-auto text-amber-300 mb-4" />

                  <p className="text-zinc-400">
                    Drag and drop files or click to upload
                  </p>
                </div>
              </div>

              {/* CONSENT */}

              <div className="archive-card p-6 bg-white/[0.02]">
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    className="mt-1"
                  />

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    I understand that my submission may
                    be reviewed and published within
                    The Human Archive.
                  </p>
                </div>
              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="btn-primary w-full py-5 text-lg"
              >
                Submit Story
                <Send className="ml-3 w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              What Happens Next
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              Submission Process
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Submit",
                text: "Share your story through our form.",
              },
              {
                icon: User,
                title: "Review",
                text: "Editorial review for clarity and quality.",
              },
              {
                icon: Shield,
                title: "Preserve",
                text: "Archive and protect the story.",
              },
              {
                icon: BookOpen,
                title: "Publish",
                text: "Become part of The Human Archive.",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="archive-card p-10 text-center"
                >
                  <div className="w-20 h-20 rounded-3xl bg-amber-300/10 mx-auto flex items-center justify-center mb-8">
                    <Icon className="w-10 h-10 text-amber-300" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {step.title}
                  </h3>

                  <p className="text-zinc-400">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST */}

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Privacy",
                description:
                  "Anonymous submissions are welcome.",
              },
              {
                icon: Shield,
                title: "Respect",
                description:
                  "Every story is treated with care.",
              },
              {
                icon: Clock3,
                title: "Preservation",
                description:
                  "Stories become part of a long-term archive.",
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

      {/* FINAL CTA */}

      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="archive-card p-16 md:p-24 text-center">
            <BookOpen className="w-16 h-16 text-amber-300 mx-auto mb-8" />

            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Preserve A Memory
            </p>

            <h2 className="text-5xl md:text-8xl font-bold mb-8">
              Every Story
              <br />
              Deserves
              <br />
              To Be Remembered
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
              The stories we preserve today
              become the memories that guide tomorrow.
            </p>

            <button className="btn-primary text-lg px-10 py-5">
              Begin Writing
              <ArrowRight className="ml-3 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}