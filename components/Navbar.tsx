"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  BookOpen,
  Search,
  Archive,
  Feather,
  Mail,
  Sparkles,
  HeartHandshake,
  ArrowRight,
  PenSquare,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const mainNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Stories",
    href: "/stories",
  },
  {
    label: "Archive",
    href: "/archive",
  },
  {
    label: "About",
    href: "/about",
  },
];

const collections: NavItem[] = [
  {
    label: "Letters Never Sent",
    href: "/letters-never-sent",
  },
  {
    label: "Before I Became Me",
    href: "/before-i-became-me",
  },
  {
    label: "Turning Points",
    href: "/turning-points",
  },
  {
    label: "Regrets & Lessons",
    href: "/regrets-lessons",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* DESKTOP NAVBAR */}

      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className={`
          fixed
          top-0
          left-0
          right-0
          z-[100]
          transition-all
          duration-500

          ${
            isScrolled
              ? "py-4"
              : "py-6"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`
              transition-all
              duration-500

              ${
                isScrolled
                  ? `
                    backdrop-blur-2xl
                    bg-black/60
                    border
                    border-white/10
                    rounded-3xl
                    shadow-2xl
                  `
                  : ""
              }
            `}
          >
            <div className="flex items-center justify-between h-20 px-6">
              {/* LOGO */}

              <Link
                href="/"
                className="flex items-center gap-4 group"
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-amber-300/10
                    border
                    border-amber-300/10
                    flex
                    items-center
                    justify-center
                    transition-all
                    group-hover:scale-105
                  "
                >
                  <BookOpen className="w-6 h-6 text-amber-300" />
                </div>

                <div>
                  <h2 className="font-bold text-xl">
                    The Human Archive
                  </h2>

                  <p className="text-xs text-zinc-500">
                    Preserving Human Stories
                  </p>
                </div>
              </Link>

              {/* DESKTOP MENU */}

              <nav className="hidden xl:flex items-center gap-2">
                {mainNavigation.map((item) => {
                  const active =
                    pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        relative
                        px-5
                        py-3
                        rounded-xl
                        transition-all

                        ${
                          active
                            ? "text-amber-300"
                            : "text-zinc-400 hover:text-white"
                        }
                      `}
                    >
                      {item.label}

                      {active && (
                        <motion.div
                          layoutId="active-nav"
                          className="
                            absolute
                            inset-0
                            rounded-xl
                            bg-white/[0.04]
                            border
                            border-white/10
                            -z-10
                          "
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* RIGHT SIDE */}

              <div className="hidden xl:flex items-center gap-3">
                <button
                  className="
                    w-12
                    h-12
                    rounded-xl
                    border
                    border-white/10
                    hover:border-amber-300/30
                    flex
                    items-center
                    justify-center
                    transition-all
                  "
                >
                  <Search className="w-5 h-5" />
                </button>

                <Link
                  href="/submit"
                  className="btn-primary"
                >
                  Submit Story
                  <PenSquare className="ml-3 w-4 h-4" />
                </Link>
              </div>

              {/* MOBILE BUTTON */}

              <button
                onClick={() =>
                  setIsOpen(!isOpen)
                }
                className="
                  xl:hidden
                  w-12
                  h-12
                  rounded-xl
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                "
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[99]
              bg-black/95
              backdrop-blur-xl
              overflow-y-auto
            "
          >
            <motion.div
              initial={{
                y: -40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -40,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                max-w-7xl
                mx-auto
                px-6
                pt-32
                pb-20
              "
            >
              {/* MAIN NAV */}

              <div className="mb-16">
                <p
                  className="
                    uppercase
                    tracking-[0.4em]
                    text-zinc-500
                    text-sm
                    mb-8
                  "
                >
                  Navigation
                </p>

                <div className="space-y-4">
                  {mainNavigation.map(
                    (item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="
                          block
                          archive-card
                          p-6
                          text-2xl
                          font-semibold
                        "
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* COLLECTIONS */}

              <div className="mb-16">
                <p
                  className="
                    uppercase
                    tracking-[0.4em]
                    text-zinc-500
                    text-sm
                    mb-8
                  "
                >
                  Collections
                </p>

                <div className="space-y-4">
                  {collections.map(
                    (collection) => (
                      <Link
                        key={collection.href}
                        href={collection.href}
                        className="
                          archive-card
                          p-6
                          flex
                          items-center
                          justify-between
                          group
                        "
                      >
                        <span className="text-lg">
                          {collection.label}
                        </span>

                        <ArrowRight
                          className="
                            w-5
                            h-5
                            text-zinc-500
                            group-hover:text-amber-300
                          "
                        />
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* QUICK ACCESS */}

              <div className="mb-16">
                <p
                  className="
                    uppercase
                    tracking-[0.4em]
                    text-zinc-500
                    text-sm
                    mb-8
                  "
                >
                  Quick Access
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  <Link
                    href="/submit"
                    className="archive-card p-8"
                  >
                    <PenSquare className="w-8 h-8 text-amber-300 mb-4" />

                    <h3 className="text-xl font-bold mb-2">
                      Submit Story
                    </h3>

                    <p className="text-zinc-500">
                      Contribute to the archive
                    </p>
                  </Link>

                  <Link
                    href="/contact"
                    className="archive-card p-8"
                  >
                    <Mail className="w-8 h-8 text-amber-300 mb-4" />

                    <h3 className="text-xl font-bold mb-2">
                      Contact
                    </h3>

                    <p className="text-zinc-500">
                      Reach out to us
                    </p>
                  </Link>
                </div>
              </div>

              {/* MISSION */}

              <div className="archive-card p-10">
                <div className="flex items-center gap-4 mb-6">
                  <Archive className="w-8 h-8 text-amber-300" />

                  <h3 className="text-2xl font-bold">
                    Why This Archive Exists
                  </h3>
                </div>

                <p className="text-zinc-400 leading-relaxed text-lg">
                  Most human stories disappear quietly.
                  We exist to preserve memories,
                  experiences, lessons, and voices
                  before they are lost.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COLLECTION SHORTCUT BAR */}

      <div
        className="
          hidden
          2xl:block
          fixed
          left-8
          top-1/2
          -translate-y-1/2
          z-40
        "
      >
        <div className="archive-card p-4">
          <div className="space-y-4">
            <Link
              href="/letters-never-sent"
              className="
                w-12
                h-12
                rounded-xl
                flex
                items-center
                justify-center
                hover:bg-white/[0.04]
                transition-all
              "
              title="Letters Never Sent"
            >
              <Mail className="w-5 h-5" />
            </Link>

            <Link
              href="/before-i-became-me"
              className="
                w-12
                h-12
                rounded-xl
                flex
                items-center
                justify-center
                hover:bg-white/[0.04]
                transition-all
              "
              title="Before I Became Me"
            >
              <Sparkles className="w-5 h-5" />
            </Link>

            <Link
              href="/turning-points"
              className="
                w-12
                h-12
                rounded-xl
                flex
                items-center
                justify-center
                hover:bg-white/[0.04]
                transition-all
              "
              title="Turning Points"
            >
              <Feather className="w-5 h-5" />
            </Link>

            <Link
              href="/regrets-lessons"
              className="
                w-12
                h-12
                rounded-xl
                flex
                items-center
                justify-center
                hover:bg-white/[0.04]
                transition-all
              "
              title="Regrets & Lessons"
            >
              <HeartHandshake className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}