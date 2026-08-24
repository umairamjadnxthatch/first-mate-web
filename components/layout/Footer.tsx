import Link from "next/link";
import { Anchor, Mail, Phone, MapPin } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const navColumns = [
  {
    heading: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Features", href: "/features" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

const contactItems = [
  {
    Icon: Mail,
    label: "support@firstmate.ai",
    href: "mailto:support@firstmate.ai",
    ariaLabel: "Email First Mate support",
  },
  {
    Icon: Phone,
    label: "(704) 123-4567",
    href: "tel:+17041234567",
    ariaLabel: "Call First Mate",
  },
  {
    Icon: MapPin,
    label: "Lake Norman, NC",
    href: "#",
    ariaLabel: "First Mate location",
  },
];

// Brand-icon SVG paths (lucide-react doesn't ship social brand icons)
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

const socialLinks = [
  {
    Icon: FacebookIcon,
    href: "https://facebook.com",
    ariaLabel: "First Mate on Facebook",
  },
  {
    Icon: InstagramIcon,
    href: "https://instagram.com",
    ariaLabel: "First Mate on Instagram",
  },
  {
    Icon: YoutubeIcon,
    href: "https://youtube.com",
    ariaLabel: "First Mate on YouTube",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      aria-label="Site footer"
      style={{
        background:
          "linear-gradient(135deg, #0a1628 0%, #0d2137 40%, #0a1e35 70%, #071520 100%)",
      }}
    >
      {/* Subtle top border accent */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.15) 50%, transparent 100%)",
        }}
      />

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-8 lg:px-8 xl:px-10">
        {/* Upper grid: Brand column + Nav columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-12">
          {/* ── Brand column ── */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="First Mate home"
            >
              <span
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(56,189,248,0.25) 0%, rgba(14,165,233,0.15) 100%)",
                  boxShadow: "0 0 0 1px rgba(56,189,248,0.2)",
                }}
              >
                <Anchor
                  className="h-5 w-5"
                  style={{ color: "#38bdf8" }}
                  aria-hidden="true"
                />
              </span>
              <span
                className="text-xl font-semibold tracking-tight"
                style={{ color: "#f0f6fc" }}
              >
                First Mate
              </span>
            </Link>

            {/* Brand description */}
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "#7a9bb5" }}
            >
              Your AI boating coach built on trusted knowledge and designed for
              safer, smarter boating.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1" role="list">
              {socialLinks.map(({ Icon, href, ariaLabel }) => (
                <a
                  key={ariaLabel}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  role="listitem"
                  className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#7a9bb5",
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Nav columns: Product, Company, Legal ── */}
          {navColumns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h3
                className="text-sm font-semibold tracking-wide"
                style={{ color: "#e2eaf3" }}
              >
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {col.links.map(({ label, href }) => (
                  <li key={label} role="listitem">
                    <Link
                      href={href}
                      className="text-sm transition-colors duration-150"
                      style={{ color: "#6b8fa8" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Contact Us column ── */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-sm font-semibold tracking-wide"
              style={{ color: "#e2eaf3" }}
            >
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {contactItems.map(({ Icon, label, href, ariaLabel }) => (
                <li key={ariaLabel} role="listitem">
                  <a
                    href={href}
                    aria-label={ariaLabel}
                    className="inline-flex items-center gap-2.5 text-sm transition-colors duration-150"
                    style={{ color: "#6b8fa8" }}
                  >
                    <Icon
                      className="h-4 w-4 flex-shrink-0"
                      style={{ color: "#2e8fa8" }}
                      aria-hidden="true"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="my-8"
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.07)",
          }}
          role="separator"
        />

        {/* ── Copyright ── */}
        <p className="text-center text-sm" style={{ color: "#4d718a" }}>
          © 2026 First Mate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
