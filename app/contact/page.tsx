"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  Clock3,
  Heart,
  Feather,
  MessageCircle,
  BookOpen,
  Globe,
  Shield,
  Sparkles,
  Users,
  Quote,
  Phone,
  CheckCircle2,
  PenSquare,
  Archive,
  Earth,
  ChevronRight,
  ArrowRight,
  Star,
  Award,
  Coffee,
  Camera,
  Mic,
  Newspaper,
  Lightbulb,
  Compass,
  Bookmark,
  Calendar,
} from "lucide-react";

export default function ContactPage() {
  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@humanarchive.com",
      description:
        "General inquiries, support requests, community questions, and archive-related discussions.",
    },
    {
      icon: MessageCircle,
      title: "Story Submissions",
      value: "stories@humanarchive.com",
      description:
        "Share memories, life lessons, family histories, personal journeys, and experiences.",
    },
    {
      icon: Globe,
      title: "Partnerships",
      value: "partners@humanarchive.com",
      description:
        "Collaborations, media projects, publishing opportunities, and educational initiatives.",
    },
    {
      icon: Clock3,
      title: "Response Time",
      value: "24–48 Hours",
      description:
        "Most messages receive a thoughtful response within two business days.",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "Stories are treated with care and respect. Trust remains the foundation of meaningful storytelling.",
    },
    {
      icon: Heart,
      title: "Human-Centered",
      description:
        "Behind every message is a real person, a real memory, and a meaningful life experience.",
    },
    {
      icon: Sparkles,
      title: "Long-Term Preservation",
      description:
        "We aim to preserve stories beyond trends, algorithms, and disappearing timelines.",
    },
  ];

  const faqItems = [
    {
      q: "Can I submit anonymous stories?",
      a: "Yes. Contributors may choose whether their names are displayed publicly or remain private.",
    },
    {
      q: "Do you publish every submission?",
      a: "Not every story is published, but every submission is reviewed carefully and respectfully.",
    },
    {
      q: "Can organizations collaborate?",
      a: "Absolutely. We welcome partnerships focused on storytelling, education, culture, and preservation.",
    },
    {
      q: "Can stories be edited later?",
      a: "Yes. Contributors may request updates, revisions, corrections, or additional context.",
    },
    {
      q: "Do you accept international stories?",
      a: "Yes. Human experiences transcend borders, languages, and cultures.",
    },
    {
      q: "Can I contribute photographs?",
      a: "Yes. Photographs, letters, journals, and supporting materials are welcome.",
    },
  ];

  const stats = [
    {
      icon: Archive,
      value: "10K+",
      label: "Stories Preserved",
    },
    {
      icon: Users,
      value: "120+",
      label: "Countries Reached",
    },
    {
      icon: Heart,
      value: "1M+",
      label: "Human Connections",
    },
    {
      icon: Earth,
      value: "Global",
      label: "Community",
    },
  ];

  const storyTypes = [
    {
      icon: Heart,
      title: "Life Stories",
      text: "Personal journeys and transformative experiences.",
    },
    {
      icon: Camera,
      title: "Family Memories",
      text: "Moments passed between generations.",
    },
    {
      icon: Mic,
      title: "Interviews",
      text: "Conversations that deserve preservation.",
    },
    {
      icon: Newspaper,
      title: "Historical Accounts",
      text: "Events remembered through lived experiences.",
    },
    {
      icon: Compass,
      title: "Travel Narratives",
      text: "Journeys across places, cultures, and time.",
    },
    {
      icon: Lightbulb,
      title: "Life Lessons",
      text: "Wisdom gathered through experience.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-3xl" />
      </div>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-3 border border-white/10 rounded-full px-6 py-3 mb-10 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="uppercase tracking-[0.35em] text-xs text-zinc-400">
              Contact The Human Archive
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl xl:text-[10rem] font-black leading-[0.9] mb-10">
            Every Story
            <br />
            Begins With
            <br />
            A Conversation
          </h1>

          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-zinc-400 leading-relaxed mb-14">
            Whether you want to submit a story, preserve a memory,
            collaborate on a project, ask a question, or simply connect,
            we welcome every voice and every perspective.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="rounded-xl bg-amber-300 text-black font-bold px-10 py-5 hover:scale-105 transition">
              Send A Message
            </button>

            <button className="border border-white/10 hover:border-amber-300/40 rounded-xl px-10 py-5 transition">
              Explore Stories
            </button>
          </div>
        </motion.div>
      </section>

      {/* STATS */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
                >
                  <Icon className="w-8 h-8 text-amber-300 mx-auto mb-5" />

                  <h3 className="text-5xl font-black mb-2">
                    {item.value}
                  </h3>

                  <p className="text-zinc-400">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {contactCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-300/10 mx-auto flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-amber-300" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-amber-300 mb-4 break-all">
                    {item.value}
                  </p>

                  <p className="text-zinc-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STORY TYPES */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-5">
              What We Preserve
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              Stories Worth
              <br />
              Remembering
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {storyTypes.map((item) => {
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

      {/* CONTACT + FORM */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Get In Touch
            </p>

            <h2 className="text-5xl md:text-7xl font-black mb-10">
              Tell Us
              <br />
              What's On
              <br />
              Your Mind
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Every memory matters. Every experience matters.
              Every voice deserves to be heard and preserved.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: Heart,
                  title: "Story Submissions",
                },
                {
                  icon: BookOpen,
                  title: "Archive Contributions",
                },
                {
                  icon: Feather,
                  title: "Creative Collaborations",
                },
                {
                  icon: Phone,
                  title: "Community Support",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-5">
                    <Icon className="w-7 h-7 text-amber-300 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 outline-none"
              />

              <select className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 outline-none">
                <option>General Inquiry</option>
                <option>Story Submission</option>
                <option>Partnership</option>
                <option>Feedback</option>
              </select>

              <textarea
                rows={8}
                placeholder="Tell us your story..."
                className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-amber-300 text-black font-bold py-5"
              >
                Send Message
                <Send className="inline-block ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center"
                >
                  <Icon className="w-10 h-10 text-amber-300 mx-auto mb-6" />

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 md:p-20">
            <div className="grid lg:grid-cols-3 gap-10">
              <div>
                <Star className="w-10 h-10 text-amber-300 mb-6" />
                <h3 className="text-3xl font-black mb-4">
                  Trusted Voices
                </h3>
                <p className="text-zinc-400">
                  Thousands of contributors trust us with their memories.
                </p>
              </div>

              <div>
                <Award className="w-10 h-10 text-amber-300 mb-6" />
                <h3 className="text-3xl font-black mb-4">
                  Lasting Impact
                </h3>
                <p className="text-zinc-400">
                  Stories remain accessible for future generations.
                </p>
              </div>

              <div>
                <Coffee className="w-10 h-10 text-amber-300 mb-6" />
                <h3 className="text-3xl font-black mb-4">
                  Human Connection
                </h3>
                <p className="text-zinc-400">
                  Every conversation strengthens the archive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}

      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Quote className="w-16 h-16 text-amber-300 mx-auto mb-8" />

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Stories Connect People
            Across Time,
            Place, And Experience
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed">
            "The Human Archive reminds us that ordinary lives contain
            extraordinary stories. Every message becomes part of a larger
            human conversation."
          </p>
        </div>
      </section>

      {/* FAQ */}

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-300 mt-1" />

                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      {item.q}
                    </h3>

                    <p className="text-zinc-400">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL SECTION */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="min-h-[500px] bg-gradient-to-br from-amber-300/20 via-zinc-900 to-black flex items-center justify-center">
                <Earth className="w-40 h-40 text-amber-300/40" />
              </div>

              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <MapPin className="w-12 h-12 text-amber-300 mb-8" />

                <h2 className="text-5xl font-black mb-8">
                  Stories Have
                  <br />
                  No Borders
                </h2>

                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  We welcome stories from every culture, language,
                  community, and generation.
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  Human experiences are diverse, but emotions are universal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-16 md:p-24 text-center">
            <PenSquare className="w-16 h-16 text-amber-300 mx-auto mb-8" />

            <h2 className="text-5xl md:text-8xl font-black mb-8">
              Share Your
              <br />
              Voice
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
              Every archive begins with a story.
              Every story begins with a message.
            </p>

            <button className="rounded-xl bg-amber-300 text-black font-bold text-lg px-10 py-5">
              Start A Conversation
              <ChevronRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}