import { GraduationCap, ShieldCheck, FileText, Anchor } from "lucide-react";

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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf6fc] via-[#f3f9fd] to-[#ffffff] py-20 sm:py-28">
      {/* Subtle decorative background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-200/30 via-transparent to-transparent" />

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

          {/* Browser / app frame */}
          <div className="overflow-hidden rounded-2xl border-[6px] border-[#0c1f33] bg-[#0c1f33] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] sm:rounded-3xl sm:border-[8px]">
            <div className="flex">
              {/* Sidebar */}
              <div className="hidden w-44 shrink-0 flex-col justify-between border-r border-[#152e4a] bg-[#0b1e32] p-4 text-white sm:flex">
                <div>
                  <div className="mb-6 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00a896] text-white shadow-sm">
                      <Anchor className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-bold tracking-tight">First Mate</span>
                  </div>
                  <nav className="space-y-1.5 text-xs">
                    <p className="rounded-lg border-l-2 border-[#00a896] bg-[#00a896]/15 px-3 py-2 font-semibold text-[#38bdf8]">
                      Dashboard
                    </p>
                    <p className="px-3 py-2 font-medium text-slate-400 transition hover:text-white">AI Coach</p>
                    <p className="px-3 py-2 font-medium text-slate-400 transition hover:text-white">Subscription</p>
                  </nav>
                </div>
                <div className="mt-8 space-y-2">
                  <div className="rounded-lg border border-[#173a5a]/60 bg-[#132c48]/60 p-2.5">
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                      Your Boat
                    </p>
                    <p className="text-xs font-semibold text-white">Not set</p>
                    <p className="text-[10px] font-medium text-[#00a896]">Change →</p>
                  </div>
                  <p className="px-1 text-[10px] text-slate-500 hover:text-slate-400 cursor-pointer">Log out</p>
                </div>
              </div>

              {/* Main panel */}
              <div className="flex-1 bg-[#f1f5f9] p-4 text-left sm:p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Home Port
                    </p>
                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                      Good afternoon, Iqra
                    </h3>
                    <p className="text-xs font-medium text-[#00a896]">
                      Calm and clear on Lake Norman today — a fine day to
                      sharpen your skills.
                    </p>
                  </div>
                  <span className="hidden shrink-0 items-center gap-1 rounded-full bg-[#00a896] px-3.5 py-1.5 text-[10px] font-semibold text-white shadow-sm sm:inline-flex">
                    Open AI Coach
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex flex-col justify-between rounded-xl border border-[#173a5a]/50 bg-[#0c2438] p-4 text-white shadow-sm">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                        Selected Boat
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        No boat selected
                      </p>
                      <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                        Pick a boat so your coach can tailor every answer, quiz,
                        and safety note to it.
                      </p>
                    </div>
                    <p className="mt-3 text-[11px] font-medium text-[#00a896] cursor-pointer hover:underline">
                      Choose boat →
                    </p>
                  </div>
                  <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                          Subscription
                        </p>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-semibold text-slate-600">
                          Free
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        Free plan
                      </p>
                      <p className="mt-1 text-[11px] text-slate-500">
                        Upgrade to unlock unlimited coaching.
                      </p>
                    </div>
                    <button className="mt-3 w-full rounded-lg bg-[#00a896] py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-[#009686]">
                      Upgrade to Pro
                    </button>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-900">
                        Recent coaching
                      </p>
                      <p className="text-[10px] font-medium text-[#00a896] cursor-pointer hover:underline">View all</p>
                    </div>
                    <p className="mt-3 rounded-lg border border-slate-100 bg-[#f8fafc] p-2.5 text-[11px] leading-relaxed text-slate-500">
                      No coaching sessions yet — ask your first question to
                      get started.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold text-slate-900">
                      Quick actions
                    </p>
                    <ul className="mt-2 space-y-1.5 text-[11px] text-slate-600">
                      <li className="cursor-pointer hover:text-[#00a896]">Open AI Coach</li>
                      <li className="cursor-pointer hover:text-[#00a896]">Change boat</li>
                      <li className="cursor-pointer hover:text-[#00a896]">Manage subscription</li>
                    </ul>
                    <p className="mt-2.5 rounded-md border border-[#fee2e2] bg-[#fef2f2] p-1.5 text-[9px] font-medium text-[#ef4444]">
                      Educational purposes only. First Mate is not a
                      navigation device.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

