import Image from "next/image";
import { GraduationCap, ShieldCheck, FileText } from "lucide-react";

const floatingCards = [
  {
    icon: GraduationCap,
    title: "Study-Based",
    subtitle: "Approved curriculum",
    position: "right-0 top-6 lg:-right-6 lg:top-8",
  },
  {
    icon: FileText,
    title: "Personalized",
    subtitle: "Tailored to your boat",
    position: "right-0 top-52 lg:-right-10 lg:top-60",
  },
  {
    icon: GraduationCap,
    title: "Learn & Test",
    subtitle: "Test what you learn",
    position: "left-0 top-20 lg:-left-10 lg:top-24",
  },
  {
    icon: ShieldCheck,
    title: "Safety - First",
    subtitle: "Built with safety",
    position: "left-0 top-60 lg:-left-6 lg:top-64",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Full-bleed hero background image */}
      <Image
        src="/home/herobgimage.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Soft light overlay to keep text legible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/60 bg-[#e0f2fe]/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#0284c7] shadow-sm sm:text-xs">
          AI Boating Coach
        </span>
        <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-[#0f172a] sm:text-5xl md:text-6xl">
          Your AI Coach for
          <br />
          <span className="text-[#00a896]">Smarter, Safer</span> Boating.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg">
          First Mate is an AI boating coach built on trusted boating studies
          and tailored to your boat—so you can learn with confidence on Lake
          Norman and beyond.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <button className="w-full rounded-lg bg-[#0c2e4e] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#08223a] sm:w-auto">
            Start Learning
          </button>
          <button className="w-full rounded-lg border border-slate-300/90 bg-white/90 px-7 py-3 text-sm font-semibold text-[#0f172a] shadow-sm transition-all duration-200 hover:bg-slate-50 sm:w-auto">
            Explore Packages
          </button>
        </div>
      </div>

      {/* Dashboard mockup with floating callouts */}
      <div className="relative mx-auto mt-14 max-w-5xl px-4 sm:px-6 sm:mt-16 lg:px-12">
        {/* Floating callout cards — stack below mockup on mobile, float on desktop */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
          {floatingCards.map(({ icon: Icon, title, subtitle }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-md"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0284c7] text-white shadow-sm">
                <Icon className="h-4 w-4" />
              </span>
              <div className="text-left">
                <p className="text-xs font-bold text-[#0f172a]">
                  {title}
                </p>
                <p className="text-[11px] text-[#64748b]">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>


        <div className="relative">
          {/* Desktop-only floating cards */}
          {floatingCards.map(({ icon: Icon, title, subtitle, position }) => (
            <div
              key={title}
              className={`absolute z-10 hidden w-56 items-center gap-3.5 rounded-2xl border border-slate-100/90 bg-white p-3.5 pr-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 lg:flex ${position}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0284c7] text-white shadow-sm">
                <Icon className="h-4 w-4" />
              </span>
              <div className="text-left">
                <p className="text-sm font-bold text-[#0f172a]">
                  {title}
                </p>
                <p className="text-xs text-[#64748b]">{subtitle}</p>
              </div>
            </div>
          ))}

          {/* Hero app screenshot image */}
          <div className="relative mx-auto overflow-hidden rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22)] sm:rounded-3xl">
            <Image
              src="/home/heroimage.png"
              alt="First Mate dashboard screenshot"
              width={1280}
              height={800}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

