import { BookOpen, User, ClipboardCheck, ShieldCheck } from "lucide-react";

const items = [
  {
    number: "01",
    icon: BookOpen,
    title: "Study-Based Coaching",
    description:
      "Built on trusted boating studies. Get clear, reliable answers grounded in the approved First Mate curriculum.",
    isHighlighted: true,
  },
  {
    number: "02",
    icon: User,
    title: "Personalized Guidance",
    description:
      "Advice that fits your boat. Your selected boat helps tailor coaching to the guidance that matters most to you.",
    isHighlighted: false,
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Learn & Reinforce",
    description:
      "Turn answers into real knowledge. Follow-up questions and quick quizzes help you understand, practice, and remember.",
    isHighlighted: false,
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Safety at the Core",
    description:
      "Designed with safety in mind. Clear boundaries keep your coaching educational, responsible, and focused on safer boating.",
    isHighlighted: false,
  },
];

export default function AboutFeatures() {
  return (
    <section className="bg-[#eef3f7] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ number, icon: Icon, title, description, isHighlighted }) => (
            <div
              key={number}
              className={`flex flex-col justify-start rounded-2xl p-7 sm:p-8 transition-all duration-300 ${
                isHighlighted
                  ? "bg-gradient-to-b from-[#0e9f8f] to-[#14b8a6] text-white shadow-lg shadow-[#0d9488]/20"
                  : "border border-slate-200/90 bg-white text-[#0f172a] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md"
              }`}
            >
              <Icon
                className={`h-8 w-8 shrink-0 ${
                  isHighlighted ? "text-white" : "text-[#0f172a]"
                }`}
                strokeWidth={1.75}
              />
              <h3
                className={`mt-6 text-base sm:text-lg font-bold tracking-tight ${
                  isHighlighted ? "text-white" : "text-[#0f172a]"
                }`}
              >
                {number} — {title}
              </h3>
              <p
                className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                  isHighlighted ? "text-white/95" : "text-[#475569]"
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
