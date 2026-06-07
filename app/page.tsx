import Hero from "@/components/Hero";
import StoryGrid from "@/components/StoryGrid";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import {
  archiveStats,
} from "@/data/categories";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-black text-white">

      {/* HERO */}
      <Hero />

      {/* MISSION */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            eyebrow="Our Mission"
            title="Preserving Stories Before They Disappear"
            subtitle="Every person carries memories, lessons, letters, regrets, transformations, and turning points that deserve to be remembered."
          />

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
            <div>
              <h3 className="text-4xl md:text-5xl font-black leading-tight mb-8">
                The World's Largest Collection
                <span className="block text-zinc-500">
                  Of Human Experiences
                </span>
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                The Human Archive exists to preserve memories before they fade.
                Every life contains stories that future generations may never
                hear unless they are recorded, shared, and protected today.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                From childhood memories and family histories to life-changing
                decisions and personal transformations, every contribution adds
                another chapter to humanity's collective memory.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed">
                These are not just stories. They are evidence of what it means
                to be human.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-white/10 rounded-full" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/images/archive-mission.jpg"
                  alt="Human Archive"
                  width={1200}
                  height={800}
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-24">
            <div className="archive-card p-10">
              <div className="text-6xl mb-6">📖</div>

              <h3 className="text-3xl font-bold mb-6">
                Human Stories
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Real experiences, memories, life lessons, reflections,
                relationships, and personal journeys shared by people across
                generations.
              </p>
            </div>

            <div className="archive-card p-10">
              <div className="text-6xl mb-6">🏛️</div>

              <h3 className="text-3xl font-bold mb-6">
                Living Archive
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                A continuously growing collection of memories and stories that
                preserves humanity's emotional, cultural, and personal history.
              </p>
            </div>

            <div className="archive-card p-10">
              <div className="text-6xl mb-6">🌍</div>

              <h3 className="text-3xl font-bold mb-6">
                Global Voices
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Stories from different countries, cultures, generations, and
                backgrounds united within a single human archive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED VISUAL */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10">
            <Image
              src="/images/humanity-banner.jpg"
              alt="Human Stories"
              width={1800}
              height={1000}
              className="w-full h-[700px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 p-12 md:p-20 max-w-4xl">
              <p className="uppercase tracking-[0.4em] text-zinc-400 mb-6">
                Humanity's Memory
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
                Every Voice
                <br />
                Matters
              </h2>

              <p className="text-xl text-zinc-300 leading-relaxed">
                Behind every photograph, letter, memory, and experience lies a
                story waiting to be preserved for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="Archive Statistics"
            title="A Growing Human Collection"
            subtitle="Every story preserved becomes part of a larger human record."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
            <div className="archive-card p-12 text-center">
              <h3 className="text-7xl font-black gradient-text mb-5">
                {archiveStats.totalStories}
              </h3>

              <p className="text-zinc-500 text-lg">
                Stories Archived
              </p>
            </div>

            <div className="archive-card p-12 text-center">
              <h3 className="text-7xl font-black gradient-text mb-5">
                {archiveStats.totalCollections}
              </h3>

              <p className="text-zinc-500 text-lg">
                Collections
              </p>
            </div>

            <div className="archive-card p-12 text-center">
              <h3 className="text-7xl font-black gradient-text mb-5">
                {archiveStats.countriesRepresented}
              </h3>

              <p className="text-zinc-500 text-lg">
                Countries
              </p>
            </div>

            <div className="archive-card p-12 text-center">
              <h3 className="text-7xl font-black gradient-text mb-5">
                {archiveStats.activeContributors}
              </h3>

              <p className="text-zinc-500 text-lg">
                Contributors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SHOWCASE */}
      <section className="py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="Featured Collection"
            title="Moments That Changed Lives"
            subtitle="A glimpse into the stories, memories, and experiences preserved inside the archive."
          />

          <div className="grid lg:grid-cols-3 gap-8 mt-20">

            <div className="overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/story-1.jpg"
                alt=""
                width={800}
                height={1000}
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/story-2.jpg"
                alt=""
                width={800}
                height={1000}
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/story-3.jpg"
                alt=""
                width={800}
                height={1000}
                className="w-full h-[500px] object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* STORIES GRID */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <StoryGrid />
        </div>
      </section>

      {/* WHY STORIES MATTER */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div className="overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/archive-future.jpg"
                alt="Future Generations"
                width={1200}
                height={800}
                className="w-full h-[650px] object-cover"
              />
            </div>

            <div>
              <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
                Future Generations
              </p>

              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
                Stories Connect
                <br />
                The Past And Future
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Memories disappear. Photographs fade. Voices are forgotten.
                Yet stories have the power to travel through time and preserve
                what truly matters.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                The Human Archive protects these moments so future generations
                can understand the lives, emotions, challenges, and triumphs
                that came before them.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Every contribution becomes part of a larger human legacy.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="archive-card p-16 md:p-24 text-center relative overflow-hidden">

            <div className="absolute inset-0 opacity-20">
              <Image
                src="/images/cta-background.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10">
              <p className="uppercase tracking-[0.4em] text-zinc-500 mb-8">
                The Human Archive
              </p>

              <h2 className="text-5xl md:text-8xl font-black leading-none mb-10">
                Every Life Holds
                <br />
                A Story Worth Saving
              </h2>

              <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
                Share your memories, experiences, turning points, life lessons,
                family history, personal reflections, and letters with the
                archive. Help preserve humanity's stories before they disappear.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="/stories"
                  className="btn-primary"
                >
                  Explore Stories
                </a>

                <a
                  href="/submit"
                  className="btn-outline"
                >
                  Submit Your Story
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}