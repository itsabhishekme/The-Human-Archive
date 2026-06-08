import {
  FileText,
  BookOpen,
  AlertCircle,
  Copyright,
  Calendar,
  Shield,
  Scale,
  Gavel,
  Users,
  Globe,
  Ban,
  RefreshCw,
  CheckCircle2,
  Archive,
  Mail,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Terms of Service | The Human Archive",
  description:
    "Terms and conditions governing access to and use of The Human Archive platform, content, archives, submissions, and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}

        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
            <FileText className="w-4 h-4 text-amber-300" />
            <span className="text-xs uppercase tracking-[0.4em]">
              Legal Agreement
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
            Terms Of
            <br />
            Service
          </h1>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed">
            These Terms of Service govern your access to,
            participation in, and use of The Human Archive,
            including story submissions, digital archives,
            community features, and related services.
          </p>

          <div className="flex justify-center items-center gap-3 mt-10 text-zinc-500">
            <Calendar size={16} />
            Last Updated: June 2026
          </div>
        </div>

        {/* Introduction */}

        <section className="archive-card p-12 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Welcome To The Human Archive
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-5">
            The Human Archive exists to preserve personal
            experiences, memories, reflections, life lessons,
            turning points, family histories, and stories that
            might otherwise be lost over time.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-5">
            By accessing, browsing, submitting content to, or
            otherwise using this platform, you acknowledge that
            you have read, understood, and agreed to be bound by
            these Terms of Service.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            If you do not agree with these terms, you should not
            use the platform.
          </p>
        </section>

        {/* Acceptance */}

        <section className="archive-card p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl font-bold">
              Acceptance Of Terms
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-5">
            Your use of The Human Archive constitutes a legally
            binding agreement between you and the platform.
          </p>

          <ul className="space-y-4 text-zinc-400">
            <li>
              • You agree to comply with applicable laws and
              regulations.
            </li>

            <li>
              • You agree not to misuse platform services.
            </li>

            <li>
              • You agree to provide accurate information when
              submitting content.
            </li>

            <li>
              • You accept responsibility for content submitted
              under your account or identity.
            </li>
          </ul>
        </section>

        {/* Eligibility */}

        <section className="archive-card p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <Users className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl font-bold">
              Eligibility & Access
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-5">
            Users must be legally capable of entering binding
            agreements under applicable laws.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            Parents or legal guardians are responsible for
            supervising minors who access or contribute content
            through the platform.
          </p>
        </section>

        {/* Story Ownership */}

        <section className="archive-card p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <Copyright className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl font-bold">
              Story Ownership & Content Rights
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-5">
            Contributors retain ownership of original stories,
            writings, photographs, and materials they submit.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-5">
            By submitting content, you grant The Human Archive a
            worldwide, non-exclusive, royalty-free license to:
          </p>

          <ul className="space-y-4 text-zinc-400">
            <li>• Store and archive submitted content.</li>
            <li>• Display content publicly.</li>
            <li>• Publish content within collections.</li>
            <li>• Preserve content for future generations.</li>
            <li>
              • Format, edit, or adapt content for readability.
            </li>
            <li>
              • Use excerpts for promotional purposes related to
              the archive.
            </li>
          </ul>
        </section>

        {/* User Responsibilities */}

        <section className="archive-card p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <CheckCircle2 className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl font-bold">
              User Responsibilities
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6">
            You are solely responsible for content you submit.
          </p>

          <ul className="space-y-4 text-zinc-400">
            <li>
              • Ensure submissions are truthful and accurate.
            </li>

            <li>
              • Respect privacy rights of other individuals.
            </li>

            <li>
              • Obtain permissions when sharing third-party
              materials.
            </li>

            <li>
              • Avoid submitting misleading information.
            </li>

            <li>
              • Respect community guidelines and platform values.
            </li>
          </ul>
        </section>

        {/* Prohibited Content */}

        <section className="archive-card p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <Ban className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl font-bold">
              Prohibited Content
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6">
            The following content may be removed without notice:
          </p>

          <ul className="space-y-4 text-zinc-400">
            <li>• Illegal content.</li>
            <li>• Threats or harassment.</li>
            <li>• Hate speech.</li>
            <li>• Copyright violations.</li>
            <li>• Fraudulent submissions.</li>
            <li>• Malicious software or harmful links.</li>
            <li>• Spam or deceptive promotions.</li>
            <li>• Content violating privacy rights.</li>
          </ul>
        </section>

        {/* Archive Preservation */}

        <section className="archive-card p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <Archive className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl font-bold">
              Archive Preservation
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-5">
            The Human Archive's mission is long-term preservation
            of human stories.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            While reasonable efforts will be made to preserve
            content, permanent availability cannot be guaranteed.
          </p>
        </section>

        {/* Privacy */}

        <section className="archive-card p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <Lock className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl font-bold">
              Privacy & Data Protection
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            Use of the platform is also governed by our Privacy
            Policy. By using The Human Archive, you consent to
            data collection and processing practices described in
            that policy.
          </p>
        </section>

        {/* Disclaimer */}

        <section className="archive-card p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl font-bold">
              Disclaimer Of Warranties
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-5">
            The platform is provided on an "as is" and
            "as available" basis.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            No warranty is provided regarding uninterrupted
            availability, accuracy, completeness, reliability,
            preservation, or future accessibility of content.
          </p>
        </section>

        {/* Liability */}

        <section className="archive-card p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <Scale className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl font-bold">
              Limitation Of Liability
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            To the fullest extent permitted by law, The Human
            Archive shall not be liable for indirect,
            consequential, incidental, special, or punitive
            damages arising from use of the platform.
          </p>
        </section>

        {/* Governing Law */}

        <section className="archive-card p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <Gavel className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl font-bold">
              Governing Law
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            These Terms shall be governed and interpreted in
            accordance with applicable laws without regard to
            conflict-of-law principles.
          </p>
        </section>

        {/* Changes */}

        <section className="archive-card p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <RefreshCw className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl font-bold">
              Changes To These Terms
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-5">
            These Terms of Service may be updated periodically.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            Continued use of the platform following publication
            of updated terms constitutes acceptance of the
            revised agreement.
          </p>
        </section>

        {/* Contact */}

        <section className="archive-card p-12">
          <div className="flex items-center gap-4 mb-6">
            <Mail className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl font-bold">
              Contact Information
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-5">
            Questions regarding these Terms of Service may be
            submitted through the official contact page.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            Thank you for helping preserve humanity's stories,
            memories, experiences, and turning points through
            The Human Archive.
          </p>
        </section>
      </div>
    </main>
  );
}
