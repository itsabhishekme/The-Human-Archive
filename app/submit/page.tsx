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
  Quote,
  Globe,
  Archive,
  Star,
  PenSquare,
  Camera,
  Users,
  Award,
  Brain,
  Compass,
  Lightbulb,
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

  const stats = [
    { label: "Stories Preserved", value: "12,000+" },
    { label: "Countries Reached", value: "80+" },
    { label: "Readers Inspired", value: "1M+" },
    { label: "Memories Archived", value: "Forever" },
  ];

  const inspirations = [
    {
      icon: Heart,
      title: "A Life Lesson",
      text: "Share a moment that changed the way you see the world.",
    },
    {
      icon: Compass,
      title: "A Turning Point",
      text: "Describe the decision that altered your path forever.",
    },
    {
      icon: Users,
      title: "Someone Important",
      text: "Honor a person who shaped your journey.",
    },
    {
      icon: Brain,
      title: "A Hidden Truth",
      text: "Reveal an insight you learned through experience.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* Background Effects */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-amber-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-orange-500/10 blur-[180px]" />
      </div>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8">
              <Archive className="w-4 h-4 text-amber-300" />
              <span className="text-sm tracking-[0.3em] uppercase text-zinc-400">
                The Human Archive
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl xl:text-[10rem] font-black leading-none mb-10">
              Submit
              <br />
              Your Story
            </h1>

            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-zinc-400 leading-relaxed mb-14">
              Every life contains stories worth preserving.
              Share your memories, lessons, experiences,
              reflections, and moments that deserve to
              survive beyond time.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-2xl bg-amber-400 text-black font-semibold">
                Start Writing
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10">
                Explore Stories
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
              >
                <h3 className="text-4xl font-black text-amber-300 mb-2">
                  {item.value}
                </h3>

                <p className="text-zinc-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12 md:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
                  Why Submit
                </p>

                <h2 className="text-5xl md:text-7xl font-black mb-8">
                  Stories
                  <br />
                  Matter
                </h2>

                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  Most stories disappear not because they
                  lack value, but because nobody records
                  them. The experiences that shaped entire
                  lives often vanish within a generation.
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  Every story contains wisdom, emotion,
                  perspective, and humanity. Preserving
                  those stories helps future readers learn,
                  connect, and understand.
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  Your experience may become the exact
                  words someone else needs years from now.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  "Preserve your experience",
                  "Help future generations",
                  "Share lessons learned",
                  "Leave a meaningful legacy",
                  "Contribute to collective memory",
                  "Become part of a living archive",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle2 className="text-amber-300" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY TYPES */}

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              Choose Category
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              What Are You Sharing?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
            {storyTypes.map((type) => {
              const Icon = type.icon;

              return (
                <button
                  key={type.name}
                  onClick={() => setStoryType(type.name)}
                  className={`rounded-3xl border p-8 transition-all duration-300 ${storyType === type.name
                      ? "border-amber-300 bg-amber-300/10"
                      : "border-white/10 bg-white/[0.03]"
                    }`}
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

      {/* IDEAS */}

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Need Inspiration?
            </h2>

            <p className="text-zinc-400 max-w-3xl mx-auto">
              If you're unsure what to write, begin with
              one meaningful moment from your life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {inspirations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                >
                  <Icon className="w-10 h-10 text-amber-300 mb-6" />

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXTENDED STORY SUBMISSION PAGE */}

      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px]" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-300 text-sm font-medium">
              Human Stories Matter
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">
              Submit Your
              <span className="block text-amber-400">
                {storyType}
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-zinc-400 text-lg mt-8 leading-relaxed">
              Every life contains moments worth preserving.
              Share your journey, memories, lessons, struggles,
              breakthroughs, family history, dreams, and
              experiences that may inspire future generations.
            </p>
          </div>

          {/* Guidelines */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Be Authentic",
                desc: "Real experiences create meaningful connections and lasting impact.",
              },
              {
                title: "Be Detailed",
                desc: "Include emotions, events, challenges, and lessons learned.",
              },
              {
                title: "Be Respectful",
                desc: "Avoid sharing sensitive information without permission.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-14">
            <div className="mb-14">
              <h2 className="text-4xl md:text-5xl font-black mb-5">
                Story Submission Form
              </h2>

              <p className="text-zinc-400 text-lg">
                Complete the form below and help preserve
                a human experience that deserves to be remembered.
              </p>
            </div>

            <form className="space-y-10">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-6 py-5 outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-6 py-5 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-6 py-5 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="City"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-6 py-5 outline-none"
                  />
                </div>
              </div>

              {/* Story Details */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Story Information
                </h3>

                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="Story Title"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-6 py-5 outline-none"
                  />

                  <select className="w-full rounded-2xl border border-white/10 bg-black/30 px-6 py-5 outline-none">
                    <option>Life Lesson</option>
                    <option>Transformation</option>
                    <option>Family Story</option>
                    <option>Childhood Memory</option>
                    <option>Relationships</option>
                    <option>Friendship</option>
                    <option>Marriage</option>
                    <option>Career Journey</option>
                    <option>Personal Growth</option>
                    <option>Travel Experience</option>
                    <option>Spiritual Experience</option>
                    <option>Dream Experience</option>
                    <option>Historical Memory</option>
                    <option>Legacy Story</option>
                  </select>

                  <textarea
                    rows={12}
                    placeholder="Tell your story in detail..."
                    className="w-full rounded-3xl border border-white/10 bg-black/30 px-6 py-5 outline-none resize-none"
                  />
                </div>
              </div>

              {/* Additional Context */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Additional Details
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Approximate Year"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-6 py-5 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="People Involved (Optional)"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-6 py-5 outline-none"
                  />
                </div>
              </div>

              {/* Upload Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Supporting Materials
                </h3>

                <div className="border-2 border-dashed border-white/10 rounded-[32px] p-14 text-center hover:border-amber-400/30 transition">
                  <Upload className="w-14 h-14 mx-auto text-amber-300 mb-5" />

                  <h4 className="font-bold text-xl mb-3">
                    Upload Files
                  </h4>

                  <p className="text-zinc-400 max-w-xl mx-auto">
                    Photos, letters, journals, voice recordings,
                    scanned documents, certificates, memories,
                    family archives, and other supporting files.
                  </p>

                  <button
                    type="button"
                    className="mt-8 px-8 py-4 rounded-2xl bg-amber-400 text-black font-bold"
                  >
                    Choose Files
                  </button>
                </div>
              </div>

              {/* Permissions */}
              <div className="space-y-5">
                <label className="flex gap-4 rounded-2xl border border-white/10 p-6">
                  <input type="checkbox" />

                  <span className="text-zinc-400">
                    I confirm that this story is my own experience
                    or I have permission to share it.
                  </span>
                </label>

                <label className="flex gap-4 rounded-2xl border border-white/10 p-6">
                  <input type="checkbox" />

                  <span className="text-zinc-400">
                    I understand submissions may be reviewed,
                    edited for clarity, and considered for
                    publication within The Human Archive.
                  </span>
                </label>

                <label className="flex gap-4 rounded-2xl border border-white/10 p-6">
                  <input type="checkbox" />

                  <span className="text-zinc-400">
                    I agree to the archive guidelines and
                    consent to the secure storage of my
                    submitted materials.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-6 rounded-3xl bg-amber-400 text-black font-black text-lg flex items-center justify-center gap-3 hover:scale-[1.01] transition"
                >
                  Submit Story
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-center text-zinc-500 mt-6 text-sm">
                  Thank you for contributing to the preservation
                  of human experiences and memories.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black">
              Submission Process
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Submit",
                text: "Share your story through the submission form.",
              },
              {
                icon: User,
                title: "Review",
                text: "Our editorial team reviews each entry.",
              },
              {
                icon: Shield,
                title: "Preserve",
                text: "Stories are archived and protected.",
              },
              {
                icon: BookOpen,
                title: "Publish",
                text: "Selected stories join the archive.",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center"
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

      {/* VALUES */}

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Lock,
                title: "Privacy",
                description:
                  "Anonymous submissions are welcomed.",
              },
              {
                icon: Shield,
                title: "Respect",
                description:
                  "Every story is treated carefully.",
              },
              {
                icon: Globe,
                title: "Humanity",
                description:
                  "Voices from every background matter.",
              },
              {
                icon: Clock3,
                title: "Preservation",
                description:
                  "Stories remain part of the archive.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
                >
                  <Icon className="w-10 h-10 text-amber-300 mx-auto mb-6" />

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

      {/* TESTIMONIALS */}

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black">
              Why People Share
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-10"
              >
                <Quote className="w-10 h-10 text-amber-300 mb-6" />

                <p className="text-zinc-400 leading-relaxed mb-8">
                  Writing my story helped me understand my
                  own journey. Knowing it may help someone
                  else made the experience meaningful.
                </p>

                <h4 className="font-bold">
                  Archive Contributor
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-16 md:p-24 text-center">
            <BookOpen className="w-16 h-16 text-amber-300 mx-auto mb-8" />

            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Preserve A Memory
            </p>

            <h2 className="text-5xl md:text-8xl font-black mb-8">
              Every Story
              <br />
              Deserves
              <br />
              To Be Remembered
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
              The stories we preserve today become the
              memories that guide tomorrow.
            </p>

            <button className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-amber-400 text-black font-bold text-lg">
              Begin Writing
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}