"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logoIcon from "@/app/logo-icon.png";

// ─── Nav link data ────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Single desktop nav link with active/hover state */
function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium tracking-normal transition-colors duration-200 ${active
        ? "text-[#00c9a7] font-semibold"
        : "text-white/90 hover:text-white"
        }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /** Detect scroll */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /** Close mobile menu when route changes */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="absolute top-0 inset-x-0 z-50 w-full px-4 pt-3.5 pb-2 sm:px-6 sm:pt-5 lg:px-8 pointer-events-none">
      {/* ── Floating capsule pill container ── */}
      <div className="relative z-50 mx-auto max-w-6xl pointer-events-auto">
        <div
          className={`relative z-50 rounded-2xl sm:rounded-2xl border border-white/10 bg-gradient-to-r from-[#06273e] via-[#093954] to-[#041c2c] px-4 py-2.5 sm:px-6 sm:py-3 shadow-[0_12px_40px_rgba(0,0,0,0.38)] backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-[0_16px_50px_rgba(0,0,0,0.48)] border-sky-500/20" : ""
            }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex flex-shrink-0 items-center gap-3 group"
              aria-label="First Mate – go to homepage"
            >
              {/* White rounded icon box */}
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-sm transition-transform duration-200 group-hover:scale-105 sm:h-10 sm:w-10 sm:p-1.5">
                <Image
                  src={logoIcon}
                  alt="First Mate Coach"
                  width={40}
                  height={40}
                  className="h-full w-full scale-[2.4] object-contain"
                  priority
                />
              </span>

              {/* Brand name */}
              <span className="text-base sm:text-lg font-bold tracking-tight text-white">
                First Mate Coach
              </span>
            </Link>

            {/* ── Desktop nav links (centered) ── */}
            <nav
              className="hidden md:flex items-center gap-8 lg:gap-10"
              aria-label="Primary navigation"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <NavLink
                  key={href}
                  href={href}
                  label={label}
                  active={
                    href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(href)
                  }
                />
              ))}
            </nav>

            {/* ── Desktop CTA buttons ── */}
            <div className="hidden md:flex items-center gap-5">
              {/* Log In */}
              <Link
                href="https://first-mate-beta.vercel.app/login"
                className="text-sm font-medium text-white/90 transition-colors duration-200 hover:text-white"
              >
                Log In
              </Link>

              {/* Get Started Button */}
              <Link
                href="https://first-mate-beta.vercel.app/signup"
                className="inline-flex items-center justify-center rounded-xl bg-[#00c9a7] px-5 sm:px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,201,167,0.4)] transition-all duration-200 hover:bg-[#00b497] hover:shadow-[0_6px_24px_rgba(0,201,167,0.55)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              type="button"
              className="md:hidden flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-white/10 text-white transition-colors duration-150 hover:bg-white/15"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* ── Mobile menu drawer ── */}
          <div
            id="mobile-menu"
            role="region"
            aria-label="Mobile navigation"
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-80 opacity-100 mt-4 pt-4 border-t border-white/10" : "max-h-0 opacity-0"
              }`}
          >
            <div className="flex flex-col gap-1 pb-2">
              {/* Mobile nav links */}
              <nav className="flex flex-col gap-1" aria-label="Mobile primary navigation">
                {NAV_LINKS.map(({ label, href }) => {
                  const active =
                    href === "/" ? pathname === "/" : pathname.startsWith(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-150 ${active
                        ? "text-[#00c9a7] bg-white/10 font-semibold"
                        : "text-white/90 hover:bg-white/5 hover:text-white"
                        }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile CTA buttons */}
              <div className="mt-3 flex flex-col gap-2.5 border-t border-white/10 pt-3">
                <Link

                  href="https://first-mate-beta.vercel.app/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center h-10 rounded-xl text-sm font-medium text-white/90 border border-white/15 bg-white/5 transition-colors duration-150 hover:bg-white/10"
                >
                  Log In
                </Link>
                <Link
                  href="https://first-mate-beta.vercel.app/signup"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center h-10 rounded-xl text-sm font-semibold text-white bg-[#00c9a7] shadow-[0_4px_16px_rgba(0,201,167,0.35)] transition-all duration-200 hover:bg-[#00b497]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
