import { Check, Send, Anchor } from "lucide-react";

const leftChecks = [
  "Based on approved boating studies",
  "Instant, accurate answers",
  "Tailored to your selected boat",
];

const rightChecks = [
  "Conversation history saved",
  "Get reliable boating guidance 24 hrs",
  "Turn every question into practical",
];

export default function AIChatShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#062c43] via-[#05324e] to-[#062c43] py-20 text-white sm:py-28">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00a896]/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/50 bg-[#083344]/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#38bdf8] shadow-sm sm:text-xs">
            Meet Your AI Boating Coach
          </span>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Get Answers. Build Knowledge.
            <br />
            <span className="text-[#00a896]">Boat With Confidence.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Get instant, accurate answers and follow-up quiz questions that
            help you retain what matters most out on the water.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-6 sm:mt-16 lg:grid-cols-[1fr_1.35fr_1fr] lg:gap-8">
          {/* Left checklist */}
          <ul className="order-2 space-y-4 lg:order-1">
            {leftChecks.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-[#0284c7]/30 bg-[#06334f]/50 p-4 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-[#38bdf8]/60 hover:bg-[#073b5c]/60 sm:p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00a896] text-white shadow-sm sm:rounded-full">
                  <Check className="h-5 w-5 stroke-[2.5]" />
                </span>
                <span className="text-sm font-semibold text-white sm:text-base">{item}</span>
              </li>
            ))}
          </ul>

          {/* Chat mockup */}
          <div className="order-1 mx-auto w-full max-w-md overflow-hidden rounded-2xl border-[6px] border-[#0c1f33] bg-[#0c1f33] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] sm:rounded-3xl sm:border-[8px] lg:order-2">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-[#f8fafc] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0c2e4e] text-white shadow-sm">
                  <Anchor className="h-4 w-4" />
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900">
                    Your First Mate coach
                  </p>
                  <p className="text-[10px] font-medium text-[#00a896]">Lake Norman, NC</p>
                </div>
              </div>
              <span className="cursor-pointer rounded-md bg-[#00a896] px-3 py-1 text-[10px] font-bold text-white shadow-sm transition hover:bg-[#009686]">
                Change boat
              </span>
            </div>

            {/* Messages */}
            <div className="space-y-3 bg-white px-4 py-4 text-left">
              <div className="rounded-2xl rounded-tl-sm border border-slate-100 bg-[#f1f5f9] p-3 text-xs leading-relaxed text-slate-700">
                Welcome aboard! I&apos;m your First Mate coach for Lake
                Norman, NC. Pick your boat and I&apos;ll tailor every answer
                to it — or ask me anything to get started.
              </div>

              <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-[#0c2e4e] p-3 text-xs font-medium text-white shadow-sm">
                How do I dock in a crosswind?
              </div>

              <div className="space-y-1.5 rounded-2xl rounded-tl-sm border border-slate-100 bg-[#f1f5f9] p-3 text-xs leading-relaxed text-slate-700">
                <p>
                  Good question — this is one of those &quot;boat matters&quot; situations. Which one do you run: pontoon, bowrider/sterndrive, center console, or a surf/inboard boat? Wind and pivot point behave differently depending on hull and how much windage you&apos;ve got up top.
                </p>
                <p>
                  Tell me your boat and I&apos;ll get specific on angle of approach and which side to favor.
                </p>
              </div>

              <div className="ml-auto w-fit cursor-pointer rounded-lg bg-[#0c2e4e] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#08223a]">
                Got it
              </div>

              <div className="rounded-2xl rounded-tl-sm border border-slate-100 bg-[#f1f5f9] p-3 text-xs leading-relaxed text-slate-700">
                Sounds good — but I still don&apos;t know what you&apos;re driving. Pontoon, bowrider/sterndrive, center console, or surf/inboard? Windage and pivot behavior are different enough on each that &quot;docking in a crosswind&quot; looks pretty different depending on the answer.
              </div>
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-slate-100 bg-white px-4 py-2.5">
              <input
                type="text"
                placeholder="Ask your coach..."
                disabled
                className="flex-1 rounded-full border border-slate-200/80 bg-[#f1f5f9] px-4 py-2 text-xs text-slate-500 outline-none"
              />
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00a896] text-white shadow-sm">
                <Send className="h-4 w-4" />
              </span>
            </div>
            <div className="bg-white pb-3 px-4">
              <p className="text-center text-[9px] font-medium text-[#00a896]">
                Educational purposes only · Not a navigation device · Emergency: 911 or VHF 16
              </p>
            </div>
          </div>

          {/* Right checklist */}
          <ul className="order-3 space-y-4">
            {rightChecks.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-[#0284c7]/30 bg-[#06334f]/50 p-4 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-[#38bdf8]/60 hover:bg-[#073b5c]/60 sm:p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00a896] text-white shadow-sm sm:rounded-full">
                  <Check className="h-5 w-5 stroke-[2.5]" />
                </span>
                <span className="text-sm font-semibold text-white sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

