"use client";

import { motion } from "framer-motion";
import {
  HeartCrack,
  Lightbulb,
  BookOpen,
  Clock3,
  Calendar,
  User,
  ArrowRight,
  Quote,
  Shield,
  Sparkles,
  Mountain,
  Compass,
  TrendingUp,
  Feather,
  AlertTriangle,
  Heart,
} from "lucide-react";

export default function RegretsAndLessonsPage() {
  const stories = [
    {
      title: "The Opportunity I Said No To",
      author: "Anonymous",
      date: "March 2026",
      readTime: "7 min read",
      category: "Career",
      excerpt:
        "I thought I had time. Looking back, I realize opportunities rarely wait for certainty.",
    },
    {
      title: "I Waited Too Long To Apologize",
      author: "Anonymous",
      date: "February 2026",
      readTime: "9 min read",
      category: "Relationships",
      excerpt:
        "Pride protected me for years until I discovered it was also keeping me from healing.",
    },
    {
      title: "Success Wasn't What I Expected",
      author: "Anonymous",
      date: "January 2026",
      readTime: "8 min read",
      category: "Life Lessons",
      excerpt:
        "After achieving everything I wanted, I learned I had been pursuing the wrong goals.",
    },
    {
      title: "The Cost Of Never Taking Risks",
      author: "Anonymous",
      date: "December 2025",
      readTime: "6 min read",
      category: "Growth",
      excerpt:
        "My biggest failures came not from mistakes, but from opportunities I never attempted.",
    },
    {
      title: "I Forgot To Enjoy The Journey",
      author: "Anonymous",
      date: "November 2025",
      readTime: "10 min read",
      category: "Reflection",
      excerpt:
        "I spent years chasing destinations and overlooked the life happening in between.",
    },
    {
      title: "The Conversation That Never Happened",
      author: "Anonymous",
      date: "October 2025",
      readTime: "7 min read",
      category: "Family",
      excerpt:
        "Some words become heavier with time when they remain unspoken.",
    },
  ];

  const lessons = [
    {
      icon: Compass,
      title: "Direction Matters",
      description:
        "Moving quickly means little if you're heading toward the wrong destination.",
    },
    {
      icon: Heart,
      title: "Relationships Matter",
      description:
        "Years later, people rarely regret working less. They regret loving less.",
    },
    {
      icon: Mountain,
      title: "Growth Requires Discomfort",
      description:
        "Most meaningful growth begins where comfort ends.",
    },
    {
      icon: TrendingUp,
      title: "Failure Teaches",
      description:
        "Many of life's greatest lessons arrive disguised as setbacks.",
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
              Regrets
              <br />
              &
              <br />
              Lessons
            </h1>

            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-zinc-400 leading-relaxed">
              Honest reflections about mistakes,
              missed opportunities, hard truths,
              second chances, and the wisdom
              gained through experience.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-12">
              <button className="btn-primary">
                Explore Stories
              </button>

              <button className="btn-outline">
                Share Your Lesson
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
                About This Collection
              </p>

              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Wisdom
                <br />
                Often Arrives
                <br />
                Late
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Regret is one of the most universal
                human experiences.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Every person carries memories of
                decisions they wish they had made
                differently.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Yet hidden within regret is something
                valuable: perspective, growth, and wisdom.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="archive-card p-12"
            >
              <Quote className="w-12 h-12 text-amber-300 mb-8" />

              <p className="text-3xl leading-relaxed font-medium">
                "The purpose of regret is not to
                punish the past. It is to teach
                the future."
              </p>

              <div className="mt-8 text-zinc-500">
                The Human Archive
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LESSONS */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              Common Lessons
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              What Regret Teaches
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {lessons.map((lesson, index) => {
              const Icon = lesson.icon;

              return (
                <motion.div
                  key={lesson.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="archive-card p-10 text-center"
                >
                  <div className="w-20 h-20 rounded-3xl bg-amber-300/10 mx-auto flex items-center justify-center mb-8">
                    <Icon className="w-10 h-10 text-amber-300" />
                  </div>

                  <h3 className="text-2xl font-bold mb-5">
                    {lesson.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {lesson.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="min-h-[600px] bg-gradient-to-br from-amber-300/10 via-zinc-900 to-black" />

              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
                  Featured Reflection
                </p>

                <h2 className="text-5xl md:text-6xl font-bold mb-8">
                  The
                  <br />
                  Opportunity
                  <br />
                  I Said No To
                </h2>

                <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                  Looking back years later,
                  I realized my greatest regret
                  wasn't failure. It was fear.
                  Fear of uncertainty,
                  fear of risk,
                  and fear of leaving comfort behind.
                </p>

                <button className="btn-primary w-fit">
                  Read Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY GRID */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-4">
              Archive Stories
            </p>

            <h2 className="text-5xl md:text-7xl font-bold">
              Stories Of Reflection
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.article
                key={story.title}
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
                    {story.category}
                  </span>

                  <h3 className="text-3xl font-bold mt-6 mb-5 group-hover:text-amber-300 transition-colors">
                    {story.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-8">
                    {story.excerpt}
                  </p>

                  <div className="space-y-3 text-zinc-500 text-sm">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      {story.author}
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {story.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={14} />
                      {story.readTime}
                    </div>
                  </div>

                  <button className="mt-8 flex items-center gap-2 text-amber-300">
                    Read Story
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* REFLECTION */}

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="archive-card p-16 md:p-24 text-center">
            <Lightbulb className="w-16 h-16 text-amber-300 mx-auto mb-8" />

            <h2 className="text-5xl md:text-7xl font-bold mb-10">
              Every Mistake
              <br />
              Contains A Lesson
            </h2>

            <p className="max-w-4xl mx-auto text-zinc-400 text-xl leading-relaxed">
              Regret reminds us that we cared.
              Wisdom reminds us that we learned.
              Together, they become part of the story
              that shapes who we are.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Honest Reflection",
                description:
                  "Facing the past with courage and honesty.",
              },
              {
                icon: Shield,
                title: "Growth",
                description:
                  "Using experience as a foundation for change.",
              },
              {
                icon: Feather,
                title: "Wisdom",
                description:
                  "Transforming mistakes into guidance for the future.",
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

                  <p className="text-zinc-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="archive-card p-16 md:p-24 text-center">
            <HeartCrack className="w-16 h-16 text-amber-300 mx-auto mb-8" />

            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Share Your Experience
            </p>

            <h2 className="text-5xl md:text-8xl font-bold mb-8">
              What Did
              <br />
              Life Teach You?
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
              Every lesson has a story.
              Every regret has a voice.
              Share yours and help future readers
              learn from experiences they haven't lived yet.
            </p>

            <button className="btn-primary text-lg px-10 py-5">
              Submit Your Story
              <ArrowRight className="ml-3 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}