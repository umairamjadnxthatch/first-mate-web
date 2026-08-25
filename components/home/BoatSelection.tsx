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
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-block rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-sky-700">
            AI Boating Coach
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Choose Your <span className="text-teal">Boat</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-slate-600 sm:text-base">
            Get personalized guidance based on your boat type.
          </p>
          <button className="mt-8 rounded-lg bg-navy px-7 py-3 text-sm font-semibold text-white transition hover:bg-navy-dark">
            Start Learning
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {boats.map((boat) => (
            <div
              key={boat.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={boat.image}
                  alt={boat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-teal/90 text-white backdrop-blur-sm">
                  <Anchor className="h-4 w-4" />
                </span>
              </div>
              <div
                className={`p-5 ${boat.highlight
                  ? "bg-gradient-to-br from-teal to-teal-light text-white"
                  : "text-slate-900"
                  }`}
              >
                <h3 className="text-lg font-semibold">{boat.name}</h3>
                <p
                  className={`mt-2 text-sm ${boat.highlight ? "text-white/90" : "text-slate-600"
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
