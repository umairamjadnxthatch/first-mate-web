import Image from "next/image";
import Link from "next/link";

const callouts = [
  {
    title: "Trusted Knowledge",
    description: "Get clear answers when you need them.",
    position: "-top-6 -right-4 sm:-right-8 lg:-right-12 lg:top-4",
  },
  {
    title: "Instant Answers",
    description: "Get clear answers when you need them.",
    position: "top-1/3 -left-4 sm:-left-8 lg:-left-14",
  },
  {
    title: "Learn With Confidence",
    description: "Build practical knowledge for safer journeys.",
    position: "bottom-6 -left-4 sm:-left-6 lg:-left-10",
  },
  {
    title: "Built for Your Boat",
    description: "Guidance tailored to your boat and experience.",
    position: "-bottom-6 -right-4 sm:-right-6 lg:-right-10",
  },
];

export default function WhyWeBuilt() {
  return (
    <section className="bg-[#f0f4f9] py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="mb-4 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/60 bg-[#e0f2fe]/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#0284c7]">
          Meet Your AI Boating Coach
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#073c5c] sm:text-4xl lg:text-5xl">
          Why We Built First Mate
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#475569] sm:text-base">
          Boating can be complex and every boat is different. We built First
          Mate to cut through the noise and deliver clear, study-based
          guidance when you need it most.
        </p>
        <Link
          href="/get-started"
          className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#07557c] px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#053d5a]"
        >
          Get Started
        </Link>
      </div>

      {/* Mockup with floating callouts */}
      <div className="relative mx-auto mt-14 max-w-4xl px-6 sm:px-12 lg:px-16">
        <div className="relative">
          {/* Floating callouts on desktop/tablet */}
          <div className="hidden sm:block">
            {callouts.map(({ title, description, position }) => (
              <div
                key={title}
                className={`absolute z-20 w-60 lg:w-64 rounded-xl bg-[#14b8a6] p-4 text-left text-white shadow-xl ${position}`}
              >
                <p className="text-sm sm:text-base font-bold text-white">{title}</p>
                <p className="mt-1 text-xs leading-snug text-white/95">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Device Frame */}
          <div className="relative z-10 overflow-hidden rounded-2xl sm:rounded-3xl border-[6px] sm:border-[8px] border-slate-900 bg-slate-900 shadow-2xl">
            <Image
              src="/home/heroimage.png"
              alt="First Mate AI boating coach dashboard preview"
              width={1440}
              height={786}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Mobile callouts list */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:hidden">
          {callouts.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-xl bg-[#14b8a6] p-4 text-left text-white shadow-md"
            >
              <p className="text-sm font-bold text-white">{title}</p>
              <p className="mt-1 text-xs leading-snug text-white/95">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

