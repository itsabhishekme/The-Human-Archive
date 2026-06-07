import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
  Globe,
  Heart,
  PenTool,
  Star,
} from "lucide-react";

export const metadata = {
  title: "Stories | The Human Archive",
  description:
    "Explore remarkable human experiences, untold journeys, personal reflections, and timeless stories preserved inside The Human Archive.",
};

const stories = [
  {
    id: 1,
    title: "The Letter That Waited Twenty Years",
    excerpt:
      "A forgotten letter hidden inside an old wooden box reveals a story of love, regret, and hope that survived across decades.",
    image: "/images/stories/story-1.jpg",
    category: "Life",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 2,
    title: "The Last Tea Stall at the Edge of the Highway",
    excerpt:
      "A roadside tea seller becomes the silent witness to thousands of lives crossing paths every day.",
    image: "/images/stories/story-2.jpg",
    category: "People",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "The Child Who Built Dreams from Scrap",
    excerpt:
      "Using discarded materials, one child transformed curiosity into inventions that inspired an entire neighborhood.",
    image: "/images/stories/story-3.jpg",
    category: "Inspiration",
    readTime: "8 min read",
  },
  {
    id: 4,
    title: "A Train Journey That Changed Everything",
    excerpt:
      "A chance conversation between strangers turned an ordinary train ride into a life-altering moment.",
    image: "/images/stories/story-4.jpg",
    category: "Travel",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "The Photographer Who Captured Forgotten Faces",
    excerpt:
      "One photographer dedicated years to documenting people whose stories rarely appeared in history books.",
    image: "/images/stories/story-5.jpg",
    category: "Culture",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Echoes of a Village Library",
    excerpt:
      "Inside a tiny library, generations discovered worlds far beyond the boundaries of their village.",
    image: "/images/stories/story-6.jpg",
    category: "Education",
    readTime: "6 min read",
  },
];

const categories = [
  "All",
  "Life",
  "People",
  "Travel",
  "Inspiration",
  "Culture",
  "Education",
];

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/stories/hero.jpg"
            alt="The Human Archive"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300">
              <Sparkles className="h-4 w-4" />
              The Human Archive
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
              Stories People Never Thought Anyone Would Read
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Every life contains chapters that rarely make headlines. The Human
              Archive preserves experiences, memories, lessons, and moments that
              deserve to be remembered.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#stories"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
              >
                Explore Stories
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <BookOpen className="mb-4 h-8 w-8 text-white" />
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="mt-2 text-zinc-400">Stories Preserved</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <Heart className="mb-4 h-8 w-8 text-white" />
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="mt-2 text-zinc-400">Readers Inspired</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <Globe className="mb-4 h-8 w-8 text-white" />
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="mt-2 text-zinc-400">Countries Reached</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <PenTool className="mb-4 h-8 w-8 text-white" />
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="mt-2 text-zinc-400">Contributors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10 flex items-center gap-3">
          <Star className="h-6 w-6" />
          <h2 className="text-3xl font-bold">Featured Story</h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[400px] lg:h-full">
              <Image
                src="/images/stories/featured.jpg"
                alt="Featured Story"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-10 lg:p-14">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
                Featured
              </span>

              <h3 className="mt-6 text-4xl font-bold leading-tight">
                The Letter That Waited Twenty Years
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Hidden inside a wooden chest for decades, a handwritten letter
                finally reaches its destination. What follows is a remarkable
                story about memory, forgiveness, and the power of human
                connection.
              </p>

              <div className="mt-8 flex items-center gap-6 text-zinc-500">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  7 min read
                </span>
              </div>

              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
              >
                Read Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section id="stories" className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="relative">
          <Search className="absolute left-5 top-4 h-5 w-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Search stories..."
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 py-4 pl-14 pr-4 outline-none transition focus:border-zinc-600"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2 text-sm transition hover:border-zinc-600"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Stories Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-zinc-700"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <span className="inline-block rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  {story.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold leading-snug">
                  {story.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-zinc-400">
                  {story.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-zinc-500">
                    <Clock className="h-4 w-4" />
                    {story.readTime}
                  </span>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-4xl font-bold">
            Never Miss a Human Story
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Receive carefully selected stories, reflections, and human
            experiences from The Human Archive.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 outline-none"
            />

            <button className="rounded-xl bg-white px-8 py-4 font-medium text-black transition hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}