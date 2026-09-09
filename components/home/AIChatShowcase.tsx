import Image from "next/image";
import { Check } from "lucide-react";

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

      <div className="relative mx-auto max-w-[1550px] px-4 sm:px-6 lg:px-8">
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

        {/* Content row: Left Badges - Large Center Image - Right Badges */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:mt-16 lg:flex-row lg:items-center lg:gap-6 xl:gap-8">
          {/* Left checklist */}
          <ul className="order-2 flex w-full flex-col items-center gap-3 sm:max-w-md lg:order-1 lg:w-auto lg:items-end lg:shrink-0">
            {leftChecks.map((item) => (
              <li
                key={item}
                className="flex w-full items-center gap-2.5 rounded-xl border border-[#0284c7]/35 bg-[#06334f]/60 px-3.5 py-2.5 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#38bdf8]/60 hover:bg-[#073b5c]/70 hover:-translate-y-0.5 sm:rounded-2xl sm:px-4 sm:py-3 lg:w-[280px]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00a896] text-white shadow-sm sm:h-8 sm:w-8">
                  <Check className="h-4 w-4 stroke-[2.5]" />
                </span>
                <span className="text-xs font-semibold text-white sm:text-sm">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Chat screenshot image (large size preserved) */}
          <div className="order-1 mx-auto w-full max-w-2xl lg:order-2 lg:max-w-4xl lg:flex-1">
            <div className="overflow-hidden rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] sm:rounded-3xl">
              <Image
                src="/home/AIChatShowcase.png"
                alt="First Mate AI chat interface"
                width={1280}
                height={808}
                priority
                className="h-auto w-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 900px"
              />
            </div>
          </div>

          {/* Right checklist */}
          <ul className="order-3 flex w-full flex-col items-center gap-3 sm:max-w-md lg:order-3 lg:w-auto lg:items-start lg:shrink-0">
            {rightChecks.map((item) => (
              <li
                key={item}
                className="flex w-full items-center gap-2.5 rounded-xl border border-[#0284c7]/35 bg-[#06334f]/60 px-3.5 py-2.5 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#38bdf8]/60 hover:bg-[#073b5c]/70 hover:-translate-y-0.5 sm:rounded-2xl sm:px-4 sm:py-3 lg:w-[280px]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00a896] text-white shadow-sm sm:h-8 sm:w-8">
                  <Check className="h-4 w-4 stroke-[2.5]" />
                </span>
                <span className="text-xs font-semibold text-white sm:text-sm">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
