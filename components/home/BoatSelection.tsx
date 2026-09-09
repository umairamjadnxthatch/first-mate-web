import Image from "next/image";
import { Anchor } from "lucide-react";
import Link from "next/link";

const boats = [
  {
    name: "Pontoon",
    description: "Spacious, stable and perfect for relaxing with family and friends.",
    image: "/home/pontoon.jpg",
  },
  {
    name: "Bowrider",
    description: "Versatile and sporty for cruising, skiing and day adventures.",
    image: "/home/bowrider.jpg",
  },
  {
    name: "Center Console",
    description: "Built for fishing and performance on the water.",
    image: "/home/center_console.jpg",
  },
  {
    name: "Surf Boat",
    description: "Engineered for wakesurfing and creating the perfect wave.",
    image: "/home/surf_boat.jpg",
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
          <Link
            href="https://first-mate-beta.vercel.app/signup"
            className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#07557c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#08223a]"
          >
            Start Learning
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {boats.map((boat) => (
            <div
              key={boat.name}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#00a896]/20 hover:border-[#00a896]/30"
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
              <div className="flex flex-1 flex-col justify-start p-6 bg-white text-[#0f172a] transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-[#00a896] group-hover:to-[#00bfa5] group-hover:text-white">
                <h3 className="text-lg font-bold tracking-tight text-[#0f172a] transition-colors duration-300 group-hover:text-white">
                  {boat.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748b] transition-colors duration-300 group-hover:text-white/90">
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

