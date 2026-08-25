import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Melissa R.",
    role: "Bowrider Owner",
    quote:
      "The quiz questions really help me remember what I learn. I feel much more confident on the water now.",
  },
  {
    name: "Daniel K.",
    role: "Pontoon Owner",
    quote:
      "Docking used to stress me out every time. Now I get a clear answer in seconds, right when I need it.",
  },
  {
    name: "Priya S.",
    role: "Center Console Owner",
    quote:
      "It feels like having an instructor on board. The guidance is specific to my boat, not generic advice.",
  },
  {
    name: "Jordan T.",
    role: "Surf Boat Owner",
    quote:
      "The conversation history is a great touch — I can look back at everything I've learned so far.",
  },
];

function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <div className="mx-3.5 w-[310px] shrink-0 rounded-3xl border border-[#0284c7]/30 bg-[#06334f]/50 p-6 text-left shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#38bdf8]/60 hover:bg-[#073b5c]/60 sm:w-[340px] sm:p-7">
      <div className="flex gap-1 text-[#f59e0b]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-100 sm:text-base">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#0c2e4e] shadow-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-white">{name}</p>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate the list so the marquee loop is seamless
  const loop = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#062c43] via-[#05324e] to-[#062c43] py-20 text-white sm:py-28">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00a896]/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/50 bg-[#083344]/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#38bdf8] shadow-sm sm:text-xs">
          Testimonials
        </span>
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Trusted by <span className="text-[#00a896]">Boaters</span>
        </h2>
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          Get personalized guidance based on your boat type.
        </p>
      </div>

      {/* Marquee row */}
      <div className="relative mt-14 sm:mt-16">
        <div className="flex w-max animate-marquee sm:animate-marquee motion-reduce:animate-none">
          {loop.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#062c43] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#062c43] to-transparent" />
      </div>
    </section>
  );
}

