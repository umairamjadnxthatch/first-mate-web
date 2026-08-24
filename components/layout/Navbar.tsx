"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, Menu, X } from "lucide-react";

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
      className="relative text-sm font-medium tracking-wide transition-colors duration-200 group"
      style={{ color: active ? "#2dd4bf" : "#c8dde9" }}
      aria-current={active ? "page" : undefined}
    >
      {label}
      {/* Active underline dot */}
      {active && (
        <span
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
          style={{ background: "#2dd4bf" }}
        />
      )}
      {/* Hover underline (hidden when active) */}
      {!active && (
        <span
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full transition-all duration-200 group-hover:w-4"
          style={{ background: "rgba(45,212,191,0.6)" }}
        />
      )}
    </Link>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /** Detect scroll so we can deepen the backdrop blur on scroll */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /** Close mobile menu when route changes */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: scrolled
          ? "rgba(10,22,40,0.92)"
          : "linear-gradient(180deg, rgba(8,20,38,0.95) 0%, rgba(10,26,46,0.92) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        transition: "background 0.3s ease",
      }}
    >
      {/* ── Inner container ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex flex-shrink-0 items-center gap-2.5 group"
            aria-label="First Mate – go to homepage"
          >
            {/* Icon box */}
            <span
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-200 group-hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.92)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.12)",
              }}
            >
              <Anchor
                className="h-4.5 w-4.5"
                style={{ color: "#0d7ea0" }}
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </span>

            {/* Brand name */}
            <span
              className="text-[15px] font-semibold tracking-tight"
              style={{ color: "#f0f6fc" }}
            >
              First Mate
            </span>
          </Link>

          {/* ── Desktop nav links (centered) ── */}
          <nav
            className="hidden md:flex items-center gap-7"
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
          <div className="hidden md:flex items-center gap-3">
            {/* Log In */}
            <Link
              href="/login"
              className="text-sm font-medium transition-colors duration-200 px-3 py-1.5 rounded-lg"
              style={{ color: "#c8dde9" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#f0f6fc")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#c8dde9")
              }
            >
              Log In
            </Link>

            {/* Get Started */}
            <Link
              href="/get-started"
              className="flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(135deg, #0fb8a0 0%, #0d9e8a 50%, #0a8875 100%)",
                color: "#ffffff",
                boxShadow:
                  "0 2px 12px rgba(15,184,160,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              Get Started
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            type="button"
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-150"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#c8dde9",
            }}
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? (
              <X className="h-4.5 w-4.5" aria-hidden="true" />
            ) : (
              <Menu className="h-4.5 w-4.5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu drawer ── */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: mobileOpen ? "420px" : "0px",
          opacity: mobileOpen ? 1 : 0,
          borderTop: mobileOpen
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 pb-6 pt-4 flex flex-col gap-1"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,22,40,0.98) 0%, rgba(8,18,34,0.99) 100%)",
          }}
        >
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
                  className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150"
                  style={{
                    color: active ? "#2dd4bf" : "#c8dde9",
                    background: active
                      ? "rgba(45,212,191,0.08)"
                      : "transparent",
                  }}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA buttons */}
          <div className="mt-4 flex flex-col gap-3 border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center h-10 rounded-xl text-sm font-medium transition-colors duration-150"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#c8dde9",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              Log In
            </Link>
            <Link
              href="/get-started"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center h-10 rounded-xl text-sm font-semibold transition-all duration-200 hover:brightness-110"
              style={{
                background:
                  "linear-gradient(135deg, #0fb8a0 0%, #0d9e8a 50%, #0a8875 100%)",
                color: "#ffffff",
                boxShadow: "0 2px 12px rgba(15,184,160,0.3)",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
