import { BookOpen, User, ClipboardCheck, ShieldCheck } from "lucide-react";

const items = [
  {
    number: "01",
    icon: BookOpen,
    title: "Study-Based Coaching",
    description:
      "Built on trusted boating studies. Get clear, reliable answers grounded in the approved First Mate curriculum.",
    highlight: true,
  },
  {
    number: "02",
    icon: User,
    title: "Personalized Guidance",
    description:
      "Advice that fits your boat. Your selected boat helps tailor coaching to the guidance that matters most to you.",
    highlight: false,
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Learn & Reinforce",
    description:
      "Turn answers into real knowledge. Follow-up questions and quick quizzes help you understand, practice, and remember.",
    highlight: false,
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Safety at the Core",
    description:
      "Designed with safety in mind. Clear boundaries keep your coaching educational, responsible, and focused on safer boating.",
    highlight: false,
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
          <button className="mt-8 rounded-lg bg-[#0c2e4e] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#08223a]">
            More About It
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ number, icon: Icon, title, description, highlight }) => (
            <div
              key={number}
              className={`flex flex-col justify-start rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                highlight
                  ? "bg-gradient-to-b from-[#00a896] to-[#00bfa5] text-white shadow-lg shadow-[#00a896]/20"
                  : "border border-slate-200/90 bg-white text-[#0f172a] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md"
              }`}
            >
              <Icon
                className={`h-8 w-8 shrink-0 ${
                  highlight ? "text-white" : "text-[#0f172a]"
                }`}
                strokeWidth={1.75}
              />
              <h3 className="mt-6 text-lg font-bold tracking-tight">
                {number} — {title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  highlight ? "text-white/90" : "text-[#64748b]"
                }`}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

