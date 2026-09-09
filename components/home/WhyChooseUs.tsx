import { ShieldCheck, MessagesSquare, Sparkles, Compass } from "lucide-react";
import Link from "next/link";

const items = [
  {
    icon: ShieldCheck,
    title: "Trusted Knowledge",
    description:
      "Answers come only from owner-approved studies and instructions.",
  },
  {
    icon: MessagesSquare,
    title: "Your Conversations",
    description:
      "Your chat history is saved and available across your devices.",
  },
  {
    icon: Sparkles,
    title: "Learn as You Go",
    description:
      "Follow-up quizzes help reinforce and strengthen your learning.",
  },
  {
    icon: Compass,
    title: "Always with You",
    description: "Coaching available anytime you need it, anywhere.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f0f4f9] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/60 bg-[#e0f2fe]/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#0284c7] shadow-sm sm:text-xs">
            Why Choose First Mate
          </span>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#0f172a] sm:text-5xl">
            More Than Answers. A Better
            <br />
            <span className="text-[#00a896]">Way to Learn Boating.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#475569] sm:text-base">
            First Mate combines trusted boating studies, personalized
            guidance, and knowledge checks to help you build practical
            knowledge and confidence—one question at a time.
          </p>
          <Link
            href="https://first-mate-beta.vercel.app/signup"
            className="mt-8 cursor-pointer rounded-lg bg-[#07557c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#08223a]"
          >
            Get Started
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex cursor-pointer flex-col justify-start rounded-3xl border border-slate-200/90 bg-white p-7 text-[#0f172a] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-transparent hover:bg-gradient-to-b hover:from-[#00a896] hover:to-[#00bfa5] hover:text-white hover:shadow-xl hover:shadow-[#00a896]/20"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#38bdf8]/30 bg-[#e0f2fe]/60 text-[#00a896] shadow-sm transition-all duration-300 ease-out group-hover:border-transparent group-hover:bg-white group-hover:text-[#00a896]">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[#0f172a] transition-colors duration-300 ease-out group-hover:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#64748b] transition-colors duration-300 ease-out group-hover:text-white/90">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

