import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Calendar,
  Cookie,
  UserCheck,
  Globe,
  FileText,
  Server,
  Bell,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  ScrollText,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | The Human Archive",
  description:
    "Learn how The Human Archive collects, uses, stores, and protects information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HERO */}

        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-zinc-800 bg-zinc-900/40 mb-8">
            <Shield className="w-5 h-5 text-amber-300" />
            <span className="uppercase tracking-[0.35em] text-sm">
              Legal Information
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold mb-8">
            Privacy Policy
          </h1>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed">
            The Human Archive is committed to protecting your privacy.
            This Privacy Policy explains how information is collected,
            used, stored, protected, and managed when you interact
            with our platform, submit stories, browse content,
            or communicate with us.
          </p>

          <div className="flex justify-center items-center gap-3 mt-10 text-zinc-500">
            <Calendar size={16} />
            Last Updated: June 2026
          </div>
        </div>

        {/* INTRO */}

        <section className="archive-card p-10 md:p-14 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <ScrollText className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Introduction
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6">
            The Human Archive exists to preserve meaningful human
            stories and experiences for future generations.
            Protecting the privacy and trust of contributors,
            readers, and visitors is fundamental to our mission.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            By using our website, submitting content, or interacting
            with our services, you acknowledge and agree to the
            practices described in this Privacy Policy.
          </p>
        </section>

        {/* INFORMATION COLLECTION */}

        <section className="archive-card p-10 md:p-14 mb-10">
          <div className="flex items-center gap-4 mb-8">
            <Eye className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Information We Collect
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-8">
            We may collect information directly from users as well
            as information generated through normal website usage.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Information You Provide
              </h3>

              <ul className="space-y-3 text-zinc-400">
                <li>• Story submissions</li>
                <li>• Contact forms</li>
                <li>• Feedback and comments</li>
                <li>• Email correspondence</li>
                <li>• Voluntary profile information</li>
                <li>• Contributor details</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Information Collected Automatically
              </h3>

              <ul className="space-y-3 text-zinc-400">
                <li>• Browser type</li>
                <li>• Device information</li>
                <li>• IP address</li>
                <li>• Website usage statistics</li>
                <li>• Session information</li>
                <li>• Referring websites</li>
              </ul>
            </div>
          </div>
        </section>

        {/* USE OF DATA */}

        <section className="archive-card p-10 md:p-14 mb-10">
          <div className="flex items-center gap-4 mb-8">
            <Database className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl md:text-4xl font-bold">
              How We Use Information
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-8">
            Information collected through The Human Archive may be
            used for the following purposes:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Operate and maintain the platform",
              "Review story submissions",
              "Publish approved content",
              "Respond to support requests",
              "Improve website performance",
              "Enhance user experience",
              "Analyze trends and engagement",
              "Prevent misuse and abuse",
              "Maintain security and reliability",
              "Communicate important updates",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* STORY SUBMISSIONS */}

        <section className="archive-card p-10 md:p-14 mb-10">
          <div className="flex items-center gap-4 mb-8">
            <FileText className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Story Submissions & Content
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6">
            The Human Archive allows contributors to submit stories,
            memories, reflections, letters, and personal experiences.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-6">
            By submitting content, you grant permission for the
            platform to review, edit, archive, display, and publish
            the content in accordance with editorial standards.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            Contributors should avoid including sensitive personal
            information that they do not wish to be publicly
            available.
          </p>
        </section>

        {/* SECURITY */}

        <section className="archive-card p-10 md:p-14 mb-10">
          <div className="flex items-center gap-4 mb-8">
            <Lock className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Data Security
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6">
            Reasonable administrative, technical, and organizational
            safeguards are used to protect information against
            unauthorized access, disclosure, alteration, or
            destruction.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            While we strive to protect all information, no online
            system or internet transmission can be guaranteed to be
            completely secure.
          </p>
        </section>

        {/* COOKIES */}

        <section className="archive-card p-10 md:p-14 mb-10">
          <div className="flex items-center gap-4 mb-8">
            <Cookie className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Cookies & Analytics
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6">
            Cookies may be used to remember preferences, improve
            performance, analyze traffic patterns, and understand
            how visitors interact with the website.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            Users may disable cookies through browser settings,
            although certain website features may not function
            properly.
          </p>
        </section>

        {/* THIRD PARTIES */}

        <section className="archive-card p-10 md:p-14 mb-10">
          <div className="flex items-center gap-4 mb-8">
            <Globe className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Third-Party Services
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6">
            The website may use third-party services for analytics,
            hosting, security monitoring, communication tools,
            and infrastructure support.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            These providers may process information only as
            necessary to perform services on behalf of
            The Human Archive.
          </p>
        </section>

        {/* RETENTION */}

        <section className="archive-card p-10 md:p-14 mb-10">
          <div className="flex items-center gap-4 mb-8">
            <Server className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Data Retention
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            Information may be retained for as long as necessary to
            operate the platform, preserve archive content, comply
            with legal obligations, resolve disputes, and maintain
            historical records.
          </p>
        </section>

        {/* USER RIGHTS */}

        <section className="archive-card p-10 md:p-14 mb-10">
          <div className="flex items-center gap-4 mb-8">
            <UserCheck className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Rights
            </h2>
          </div>

          <ul className="space-y-4 text-zinc-400">
            <li>• Request access to your information.</li>
            <li>• Request correction of inaccurate information.</li>
            <li>• Request deletion where applicable.</li>
            <li>• Withdraw consent where permitted.</li>
            <li>• Request clarification regarding data usage.</li>
          </ul>
        </section>

        {/* POLICY CHANGES */}

        <section className="archive-card p-10 md:p-14 mb-10">
          <div className="flex items-center gap-4 mb-8">
            <Bell className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Changes To This Policy
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            This Privacy Policy may be updated periodically.
            Updated versions will be posted on this page along with
            the revised effective date.
          </p>
        </section>

        {/* CONTACT */}

        <section className="archive-card p-10 md:p-14">
          <div className="flex items-center gap-4 mb-8">
            <Mail className="w-8 h-8 text-amber-300" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Contact Us
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6">
            If you have questions regarding this Privacy Policy,
            privacy concerns, data requests, or general inquiries,
            please contact us through the official contact page.
          </p>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-amber-300" />
              <span>
                The Human Archive Privacy Team
              </span>
            </div>
          </div>
        </section>

        {/* FOOTER NOTE */}

        <div className="text-center mt-16">
          <AlertTriangle className="w-8 h-8 mx-auto text-amber-300 mb-4" />

          <p className="text-zinc-500 max-w-3xl mx-auto">
            This Privacy Policy is provided for informational
            purposes and should be reviewed periodically for
            updates and changes.
          </p>
        </div>
      </div>
    </main>
  );
}
