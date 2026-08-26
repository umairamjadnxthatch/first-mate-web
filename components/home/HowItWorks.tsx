import { Anchor, Ship, MessageCircle, GraduationCap } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Anchor,
    title: "Create Account",
    description: "Sign up in minutes and create your account.",
  },
  {
    number: 2,
    icon: Ship,
    title: "Choose Your Boat",
    description: "Tell us your boat type for personalized answers.",
  },
  {
    number: 3,
    icon: MessageCircle,
    title: "Ask Any Question",
    description: "Chat with your AI coach anytime, anywhere.",
  },
  {
    number: 4,
    icon: GraduationCap,
    title: "Learn & Test Yourself",
    description: "Get quiz questions to reinforce your learning.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#062c43] via-[#05324e] to-[#062c43] py-20 text-white sm:py-28">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00a896]/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/50 bg-[#083344]/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#38bdf8] shadow-sm sm:text-xs">
            Meet Your AI Boating Coach
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            How First Mate Works
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Simple steps to smarter boating.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <button className="w-full rounded-lg bg-gradient-to-r from-[#00a896] to-[#02b8a2] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#00a896]/30 transition-all duration-200 hover:brightness-110 sm:w-auto">
              Start Learning
            </button>
            <button className="w-full rounded-lg border border-[#38bdf8]/40 bg-[#04283f]/60 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#07395a] sm:w-auto">
              Explore Packages
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <div
              key={number}
              className="group relative flex flex-col items-center rounded-3xl border border-[#0284c7]/30 bg-[#06334f]/40 p-6 pt-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#38bdf8]/60 hover:shadow-xl"
            >
              {/* Number circle badge at top-left inside card */}
              <span className="self-start flex h-8 w-8 items-center justify-center rounded-xl bg-[#00a896] text-sm font-bold text-white shadow-sm sm:rounded-full">
                {number}
              </span>

              {/* Large circular icon container */}
              <div className="mt-2 flex h-20 w-20 items-center justify-center rounded-full border border-[#22d3ee]/20 bg-gradient-to-b from-[#00a896] to-[#064e6e] text-white shadow-inner transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-8 w-8 text-white" strokeWidth={1.75} />
              </div>

              <h3 className="mt-6 text-lg font-bold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

