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
    <section className="bg-pricing-gradient py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-block rounded-full border border-teal-light/40 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-teal-light">
            Meet Your AI Boating Coach
          </span>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Simple Pricing.
            <br />
            <span className="text-teal-light">Powerful Coaching.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm text-slate-200 sm:text-base">
            Choose the plan that fits your boating journey and get unlimited
            access to your AI boating coach, personalized guidance, and
            learning experience.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-gradient-to-r from-teal to-teal-light px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-teal/20 transition hover:brightness-110">
              Start Learning
            </button>
            <button className="rounded-lg border border-white/70 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Explore Packages
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-6 backdrop-blur-sm transition hover:-translate-y-1 ${plan.highlight
                  ? "border-teal-light bg-teal/20"
                  : "border-teal-light/20 bg-white/5"
                }`}
            >
              <p className="text-sm font-medium text-slate-200">
                Monthly Plan
              </p>
              <p className="mt-2 text-4xl font-extrabold text-white">
                ${plan.price}
                <span className="text-base font-medium text-slate-300">
                  /month
                </span>
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Billed monthly. Cancel anytime.
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-100"
                  >
                    <Check className="h-4 w-4 shrink-0 text-teal-light" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 rounded-lg bg-gradient-to-r from-teal to-teal-light py-3 text-sm font-semibold text-white shadow-md shadow-teal/20 transition hover:brightness-110">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
