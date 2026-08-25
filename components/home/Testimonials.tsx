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
    <div className="mx-3 w-[300px] shrink-0 rounded-2xl border border-teal-light/20 bg-white/5 p-6 backdrop-blur-sm">
      <div className="flex gap-1 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-100">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-sm font-semibold text-white">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate the list so the marquee loop is seamless
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-testimonial-gradient py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="mb-6 inline-block rounded-full border border-teal-light/40 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-teal-light">
          Testimonials
        </span>
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Trusted by <span className="text-teal-light">Boaters</span>
        </h2>
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          Get personalized guidance based on your boat type.
        </p>
      </div>

      {/* Marquee row — wraps to a static, scrollable row on small screens */}
      <div className="relative mt-14">
        <div className="flex w-max animate-marquee sm:animate-marquee motion-reduce:animate-none">
          {loop.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#082438] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#082438] to-transparent" />
      </div>
    </section>
  );
}
