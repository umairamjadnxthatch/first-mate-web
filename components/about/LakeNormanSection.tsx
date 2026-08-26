import Image from "next/image";
import { Check } from "lucide-react";

const badges = [
  {
    label: "Local Knowledge",
    description:
      "Built around the real questions, conditions, and experiences of Lake Norman boaters.",
  },
  {
    label: "Growing Beyond the Lake",
    description:
      "What started on Lake Norman is built to help boaters wherever their next adventure takes them.",
  },
  {
    label: "Real-World Experience",
    description:
      "Practical guidance designed for the situations boaters encounter—not just textbook answers.",
  },
];

export default function LakeNormanSection() {
  return (
    <section className="bg-gradient-to-b from-[#052b42] via-[#073a56] to-[#042135] py-20 sm:py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center justify-center rounded-full border border-[#2dd4bf]/40 bg-[#0d9488]/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#2dd4bf]">
            Rooted in Where We Boat
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built on Lake Norman. Made for
            <br />
            <span className="text-[#2dd4bf]">Boaters Everywhere.</span>
          </h2>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-2xl sm:h-80">
            <Image
              src="/about/lake-norman-story.jpg"
              alt="Aerial view of Lake Norman, North Carolina"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-200 font-normal">
            Our home is Lake Norman and the surrounding waters. Local
            conditions, local knowledge, and local boaters are at the heart
            of everything we do. First Mate was built to understand the
            questions boaters actually face on the water—and turn that
            knowledge into practical guidance you can trust.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {badges.map(({ label, description }) => (
            <div
              key={label}
              className="rounded-2xl border border-[#2dd4bf]/35 bg-[#062c45]/40 p-6 sm:p-7 backdrop-blur-sm shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#14b8a6] text-white">
                  <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
                <p className="text-sm sm:text-base font-bold text-white">{label}</p>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

