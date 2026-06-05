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
  ArrowRight,
  Globe,
  Shield,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      {/* HERO SECTION */}

      <section className="relative min-h-[80vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-300/10 via-transparent to-transparent" />

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
            duration: 0.9,
          }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <p className="uppercase tracking-[0.5em] text-zinc-500 mb-8">
            Contact The Human Archive
          </p>

          <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold leading-none mb-10">
            Every Story
            <br />
            Begins With
            <br />
            A Conversation
          </h1>

          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-zinc-400 leading-relaxed">
            Whether you want to submit a story,
            ask a question, collaborate,
            or simply share your thoughts,
            we'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* CONTACT CARDS */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "hello@humanarchive.com",
                description:
                  "General inquiries and questions",
              },
              {
                icon: MessageCircle,
                title: "Story Submissions",
                value: "stories@humanarchive.com",
                description:
                  "Share your personal story",
              },
              {
                icon: Globe,
                title: "Partnerships",
                value: "partners@humanarchive.com",
                description:
                  "Collaborations and projects",
              },
              {
                icon: Clock3,
                title: "Response Time",
                value: "24-48 Hours",
                description:
                  "Average response period",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    delay: index * 0.1,
                  }}
                  className="archive-card p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-300/10 mx-auto flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-amber-300" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-amber-300 mb-4">
                    {item.value}
                  </p>

                  <p className="text-zinc-400 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT */}

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
                Get In Touch
              </p>

              <h2 className="text-5xl md:text-7xl font-bold mb-10">
                Tell Us
                <br />
                What's On
                <br />
                Your Mind
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                The Human Archive exists because of people
                willing to share experiences, memories,
                lessons, and stories.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Whether your message is personal,
                creative, or collaborative,
                every conversation matters.
              </p>

              <div className="space-y-8 mt-12">
                <div className="flex gap-5">
                  <Heart className="w-7 h-7 text-amber-300 mt-1" />

                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Story Submissions
                    </h4>

                    <p className="text-zinc-400">
                      Share personal experiences,
                      lessons, transformations,
                      and untold stories.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <BookOpen className="w-7 h-7 text-amber-300 mt-1" />

                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Archive Contributions
                    </h4>

                    <p className="text-zinc-400">
                      Help preserve stories and memories
                      that deserve a place in history.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Feather className="w-7 h-7 text-amber-300 mt-1" />

                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Creative Partnerships
                    </h4>

                    <p className="text-zinc-400">
                      Work together on storytelling,
                      publishing, and archive projects.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FORM */}

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
              className="archive-card p-10 md:p-12"
            >
              <form className="space-y-8">
                <div>
                  <label className="block text-sm uppercase tracking-wider text-zinc-500 mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="archive-input"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-zinc-500 mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="archive-input"
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-zinc-500 mb-3">
                    Subject
                  </label>

                  <select className="archive-input">
                    <option>General Inquiry</option>
                    <option>Story Submission</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                    <option>Media Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-zinc-500 mb-3">
                    Message
                  </label>

                  <textarea
                    placeholder="Write your message..."
                    className="archive-input archive-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-5 text-lg"
                >
                  Send Message
                  <Send className="ml-3 w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              Our Commitment
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              Built On Trust
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Privacy First",
                description:
                  "Your stories and personal information are handled with respect and care.",
              },
              {
                icon: Heart,
                title: "Human-Centered",
                description:
                  "Every story is treated as a meaningful part of human experience.",
              },
              {
                icon: Sparkles,
                title: "Long-Term Preservation",
                description:
                  "We believe memories deserve a place beyond social media timelines.",
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

                  <h3 className="text-2xl font-bold mb-5">
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

      {/* LOCATION SECTION */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="min-h-[450px] bg-gradient-to-br from-amber-300/10 via-zinc-900 to-black" />

              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <MapPin className="w-12 h-12 text-amber-300 mb-8" />

                <p className="uppercase tracking-[0.3em] text-zinc-500 mb-5">
                  Global Archive
                </p>

                <h2 className="text-5xl font-bold mb-8">
                  Stories Have
                  <br />
                  No Borders
                </h2>

                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  The Human Archive welcomes stories
                  from every culture, country,
                  language, and background.
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  Human experiences may be unique,
                  but the emotions behind them are universal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card p-16 md:p-24 text-center">
            <Mail className="w-16 h-16 text-amber-300 mx-auto mb-8" />

            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Let's Connect
            </p>

            <h2 className="text-5xl md:text-8xl font-bold mb-8">
              Share Your
              <br />
              Voice
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
              Every conversation begins with a message.
              Every archive begins with a story.
            </p>

            <button className="btn-primary text-lg px-10 py-5">
              Start A Conversation
              <ArrowRight className="ml-3 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}