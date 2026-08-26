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

export default function AboutFeatures() {
  return (
    <section id="features" className="bg-[#eef3f7] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ number, icon: Icon, title, description }) => (
            <div
              key={number}
              className="group flex cursor-pointer flex-col justify-start rounded-3xl border border-slate-200/90 bg-white p-7 text-[#0f172a] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-transparent hover:bg-gradient-to-b hover:from-[#00a896] hover:to-[#00bfa5] hover:text-white hover:shadow-xl hover:shadow-[#00a896]/20"
            >
              <Icon
                className="h-8 w-8 shrink-0 text-[#0f172a] transition-colors duration-300 ease-out group-hover:text-white"
                strokeWidth={1.75}
              />

              <h3 className="mt-6 text-base font-bold tracking-tight text-[#0f172a] transition-colors duration-300 ease-out group-hover:text-white sm:text-lg">
                {number} — {title}
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-[#475569] transition-colors duration-300 ease-out group-hover:text-white/90 sm:text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}