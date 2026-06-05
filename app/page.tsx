import Hero from "@/components/Hero";
import StoryGrid from "@/components/StoryGrid";
import SectionTitle from "@/components/SectionTitle";
import {
  archiveStats,
} from "@/data/categories";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}

      <Hero />

      {/* MISSION */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="Our Mission"
            title="Preserving Stories Before They Disappear"
            subtitle="Every person carries memories, lessons, letters, regrets, transformations, and turning points that deserve to be remembered."
          />

          <div className="grid lg:grid-cols-3 gap-8 mt-20">
            <div className="archive-card p-10">
              <h3 className="text-3xl font-bold mb-6">
                Human Stories
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Real experiences shared by
                people from different walks
                of life.
              </p>
            </div>

            <div className="archive-card p-10">
              <h3 className="text-3xl font-bold mb-6">
                Living Archive
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                A growing collection of
                memories preserved for
                future generations.
              </p>
            </div>

            <div className="archive-card p-10">
              <h3 className="text-3xl font-bold mb-6">
                Global Voices
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Stories contributed from
                around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="Archive Statistics"
            title="A Growing Human Collection"
            subtitle="Every story preserved becomes part of a larger human record."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
            <div className="archive-card p-10 text-center">
              <h3 className="text-6xl font-black gradient-text mb-4">
                {archiveStats.totalStories}
              </h3>

              <p className="text-zinc-500">
                Stories Archived
              </p>
            </div>

            <div className="archive-card p-10 text-center">
              <h3 className="text-6xl font-black gradient-text mb-4">
                {archiveStats.totalCollections}
              </h3>

              <p className="text-zinc-500">
                Collections
              </p>
            </div>

            <div className="archive-card p-10 text-center">
              <h3 className="text-6xl font-black gradient-text mb-4">
                {archiveStats.countriesRepresented}
              </h3>

              <p className="text-zinc-500">
                Countries
              </p>
            </div>

            <div className="archive-card p-10 text-center">
              <h3 className="text-6xl font-black gradient-text mb-4">
                {archiveStats.activeContributors}
              </h3>

              <p className="text-zinc-500">
                Contributors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES */}

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <StoryGrid />
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="archive-card p-16 md:p-24 text-center">
            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-8">
              The Human Archive
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-none mb-10">
              Every Life Holds
              <br />
              A Story Worth Saving
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed mb-12">
              Share your memories,
              experiences, turning points,
              lessons, and letters with the
              archive.
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
      </section>
    </main>
  );
}