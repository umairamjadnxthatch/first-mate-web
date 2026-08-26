import { BookOpen, User, ClipboardCheck, ShieldCheck } from "lucide-react";

const items = [
  {
    number: "01",
    icon: BookOpen,
    title: "Study-Based Coaching",
    description:
      "Built on trusted boating studies. Get clear, reliable answers grounded in the approved First Mate curriculum.",
  },
  {
    number: "02",
    icon: User,
    title: "Personalized Guidance",
    description:
      "Advice that fits your boat. Your selected boat helps tailor coaching to the guidance that matters most to you.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Learn & Reinforce",
    description:
      "Turn answers into real knowledge. Follow-up questions and quick quizzes help you understand, practice, and remember.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Safety at the Core",
    description:
      "Designed with safety in mind. Clear boundaries keep your coaching educational, responsible, and focused on safer boating.",
  },
];

export default function TrustFeatures() {
  return (
    <section className="bg-[#f0f4f9] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/60 bg-[#e0f2fe]/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#0284c7] shadow-sm sm:text-xs">
            AI Boating Coach
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
            Guidance you <span className="text-[#00a896]">can trust.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#475569] sm:text-base">
            First Mate gives you clear, reliable answers based on approved
            boating studies. Ask anything, get instant coaching, and build
            your confidence on the water.
          </p>
          <button className="mt-8 cursor-pointer rounded-lg bg-[#07557c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#08223a]">
            More About It
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ number, icon: Icon, title, description }) => (
            <div
              key={number}
              className="group flex cursor-pointer flex-col justify-start rounded-3xl border border-slate-200/90 bg-white p-7 text-[#0f172a] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-transparent hover:bg-gradient-to-b hover:from-[#00a896] hover:to-[#00bfa5] hover:text-white hover:shadow-xl hover:shadow-[#00a896]/20"
            >
              <Icon
                className="h-8 w-8 shrink-0 text-[#0f172a] transition-colors duration-300 ease-out group-hover:text-white"
                strokeWidth={1.75}
              />
              <h3 className="mt-6 text-lg font-bold tracking-tight text-[#0f172a] transition-colors duration-300 ease-out group-hover:text-white">
                {number} — {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#64748b] transition-colors duration-300 ease-out group-hover:text-white/90">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

