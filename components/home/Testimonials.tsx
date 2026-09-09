"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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
      "The conversation history is a great touch. I can look back at everything I've learned so far.",
  },
  {
    name: "Alex M.",
    role: "Fishing Boat Owner",
    quote:
      "I love how quickly I can get answers while preparing for a day on the water. It makes learning much easier.",
  },
  {
    name: "Chris B.",
    role: "Ski Boat Owner",
    quote:
      "The explanations are simple and practical. I can actually understand what I need to do instead of reading complicated manuals.",
  },
  {
    name: "Samantha L.",
    role: "Deck Boat Owner",
    quote:
      "Having boating information available whenever I need it is incredibly useful. The AI coach has become part of my routine.",
  },
  {
    name: "Michael T.",
    role: "Cruiser Owner",
    quote:
      "The personalized answers make a big difference. I don't have to search through pages of information to find what I need.",
  },
  {
    name: "Rachel P.",
    role: "Runabout Owner",
    quote:
      "The quizzes are my favorite feature. They turn learning into something interactive and help me remember important details.",
  },
  {
    name: "Kevin W.",
    role: "Wake Boat Owner",
    quote:
      "I can ask questions in normal language and get useful answers right away. It feels like having a knowledgeable coach with me.",
  },
  {
    name: "Emily C.",
    role: "Bay Boat Owner",
    quote:
      "The guidance gives me much more confidence when I'm getting ready to head out. Everything feels easier to understand.",
  },
  {
    name: "Robert H.",
    role: "Cabin Cruiser Owner",
    quote:
      "Being able to revisit previous conversations is really helpful. I can keep building my knowledge without starting over.",
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
    <div
      className="
        flex h-[320px] w-full flex-col justify-between
        rounded-3xl border border-[#0284c7]/30 bg-[#06334f]/50 p-6 text-left
        shadow-lg backdrop-blur-md transition-all duration-300
        hover:border-[#38bdf8]/60 hover:bg-[#073b5c]/60 sm:p-7
      "
    >
      <div>
        <div className="flex gap-1 text-[#f59e0b]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
          ))}
        </div>
        <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-slate-100 sm:text-base">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#07557c] shadow-sm">
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth
      : 340;
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

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

      {/* Horizontal scrollable testimonials */}
      <div className="relative mx-auto mt-14 max-w-[1600px] px-12 sm:mt-16 sm:px-16 lg:px-20">
        {/* Left chevron — on the left of the screen/container */}
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous testimonials"
          className="
            absolute left-2 top-1/2 z-20 -translate-y-1/2
            flex h-11 w-11 items-center justify-center rounded-full
            border border-[#38bdf8]/40 bg-[#083344]/90 text-[#38bdf8]
            shadow-xl backdrop-blur-md transition-all duration-200
            hover:border-[#38bdf8] hover:bg-[#0b4a6b] hover:scale-110
            active:scale-95 sm:left-4 lg:left-6
          "
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Right chevron — on the right of the screen/container */}
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next testimonials"
          className="
            absolute right-2 top-1/2 z-20 -translate-y-1/2
            flex h-11 w-11 items-center justify-center rounded-full
            border border-[#38bdf8]/40 bg-[#083344]/90 text-[#38bdf8]
            shadow-xl backdrop-blur-md transition-all duration-200
            hover:border-[#38bdf8] hover:bg-[#0b4a6b] hover:scale-110
            active:scale-95 sm:right-4 lg:right-6
          "
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div
          ref={scrollRef}
          className="
            flex
            w-full
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            pb-4
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="w-full shrink-0 snap-center px-3 sm:w-1/2 sm:snap-start md:w-1/3 lg:w-1/4"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}