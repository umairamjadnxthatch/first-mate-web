import { ShieldCheck, MessagesSquare, Sparkles, Compass } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Trusted Knowledge",
    description:
      "Answers come only from owner-approved studies and instructions.",
    highlight: true,
  },
  {
    icon: MessagesSquare,
    title: "Your Conversations",
    description:
      "Your chat history is saved and available across your devices.",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Learn as You Go",
    description:
      "Follow-up quizzes help reinforce and strengthen your learning.",
    highlight: false,
  },
  {
    icon: Compass,
    title: "Always with You",
    description: "Coaching available anytime you need it, anywhere.",
    highlight: false,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-block rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-sky-700">
            Why Choose First Mate
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            More Than Answers. A Better
            <br />
            <span className="text-teal">Way to Learn Boating.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm text-slate-600 sm:text-base">
            First Mate combines trusted boating studies, personalized
            guidance, and knowledge checks to help you build practical
            knowledge and confidence—one question at a time.
          </p>
          <button className="mt-8 rounded-lg bg-navy px-7 py-3 text-sm font-semibold text-white transition hover:bg-navy-dark">
            Get Started
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description, highlight }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 shadow-sm transition hover:-translate-y-1 ${
                highlight
                  ? "bg-gradient-to-br from-teal to-teal-light text-white"
                  : "border border-slate-200 bg-white text-slate-900"
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  highlight ? "bg-white/20" : "bg-teal/10"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${
                    highlight ? "text-white" : "text-teal"
                  }`}
                />
              </div>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p
                className={`mt-2 text-sm ${
                  highlight ? "text-white/90" : "text-slate-600"
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
