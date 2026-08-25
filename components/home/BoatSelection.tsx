import Image from "next/image";
import { Anchor } from "lucide-react";

const boats = [
  {
    name: "Pontoon",
    description: "Spacious, stable and perfect for relaxing with family and friends.",
    image: "/home/pontoon.jpg",
    highlight: true,
  },
  {
    name: "Bowrider",
    description: "Versatile and sporty for cruising, skiing and day adventures.",
    image: "/home/bowrider.jpg",
    highlight: false,
  },
  {
    name: "Center Console",
    description: "Built for fishing and performance on the water.",
    image: "/home/center_console.jpg",
    highlight: false,
  },
  {
    name: "Surf Boat",
    description: "Engineered for wakesurfing and creating the perfect wave.",
    image: "/home/surf_boat.jpg",
    highlight: false,
  },
];

export default function BoatSelection() {
  return (
    <section className="bg-[#f0f4f9] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/60 bg-[#e0f2fe]/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#0284c7] shadow-sm sm:text-xs">
            AI Boating Coach
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
            Choose Your <span className="text-[#00a896]">Boat</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#475569] sm:text-base">
            Get personalized guidance based on your boat type.
          </p>
          <button className="mt-8 rounded-lg bg-[#0c2e4e] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#08223a]">
            Start Learning
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {boats.map((boat) => (
            <div
              key={boat.name}
              className={`group flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                boat.highlight
                  ? "shadow-lg shadow-[#00a896]/20"
                  : "border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
              }`}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={boat.image}
                  alt={boat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#00a896]/90 text-white shadow-sm backdrop-blur-sm">
                  <Anchor className="h-4 w-4" />
                </span>
              </div>
              <div
                className={`flex flex-1 flex-col justify-start p-6 ${
                  boat.highlight
                    ? "bg-gradient-to-b from-[#00a896] to-[#00bfa5] text-white"
                    : "bg-white text-[#0f172a]"
                }`}
              >
                <h3 className="text-lg font-bold tracking-tight">{boat.name}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    boat.highlight ? "text-white/90" : "text-[#64748b]"
                  }`}
                >
                  {boat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

