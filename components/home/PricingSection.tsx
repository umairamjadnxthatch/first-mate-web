import { Check } from "lucide-react";

const features = [
  "AI Boating Coach",
  "Personalized guidance",
  "Study-based answers",
  "Conversation history",
  "Access on all devices",
];

const plans = [
  { name: "Starter", price: "19.99", highlight: false },
  { name: "Growth", price: "19.99", highlight: false },
  { name: "Pro", price: "19.99", highlight: true },
  { name: "Captain", price: "19.99", highlight: false },
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#062c43] via-[#05324e] to-[#062c43] py-20 text-white sm:py-28">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00a896]/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/50 bg-[#083344]/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#38bdf8] shadow-sm sm:text-xs">
            Meet Your AI Boating Coach
          </span>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Simple Pricing.
            <br />
            <span className="text-[#00a896]">Powerful Coaching.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Choose the plan that fits your boating journey and get unlimited
            access to your AI boating coach, personalized guidance, and
            learning experience.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <button className="w-full rounded-lg bg-gradient-to-r from-[#00a896] to-[#02b8a2] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#00a896]/30 transition-all duration-200 hover:brightness-110 sm:w-auto">
              Start Learning
            </button>
            <button className="w-full rounded-lg border border-[#38bdf8]/40 bg-[#04283f]/60 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#07395a] sm:w-auto">
              Explore Packages
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-3xl p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                plan.highlight
                  ? "border-2 border-[#00a896] bg-[#063b5e]/75 shadow-[0_0_30px_rgba(0,168,150,0.2)] hover:border-[#38bdf8]"
                  : "border border-[#0284c7]/30 bg-[#06334f]/50 hover:border-[#38bdf8]/60 hover:bg-[#073b5c]/60"
              }`}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Monthly Plan
                </p>
                <p className="mt-2 text-4xl font-extrabold tracking-tight text-white">
                  ${plan.price}
                  <span className="text-sm font-normal text-slate-300">
                    /month
                  </span>
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Billed monthly. Cancel anytime.
                </p>

                <ul className="mt-6 space-y-3">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm font-medium text-slate-200"
                    >
                      <Check className="h-4 w-4 shrink-0 text-[#00a896] stroke-[2.5]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold shadow-sm transition-all duration-200 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-[#00a896] to-[#02b8a2] font-bold text-white shadow-md shadow-[#00a896]/30 hover:brightness-110"
                    : "border border-[#00a896] bg-[#00a896]/15 text-white hover:bg-[#00a896]"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

