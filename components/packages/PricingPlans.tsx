import { Check } from "lucide-react";

const features = [
  "AI Boating Coach",
  "Personalized guidance by boat type",
  "Study-based answers",
  "Follow-up quiz questions",
  "Conversation history",
  "Access on all your devices",
];

const plans = [
  {
    name: "Annual Plan",
    price: "199.99",
    period: "year",
    note: "Billed annually. Best value — save $40 vs monthly.",
    badge: "Most Popular",
    border: "default",
    buttonStyle: "dark",
  },
  {
    name: "Monthly Plan",
    price: "19.99",
    period: "month",
    note: "Billed monthly. Cancel anytime.",
    badge: null,
    border: "teal",
    buttonStyle: "teal",
  },
  {
    name: "Annual Plan",
    price: "199.99",
    period: "year",
    note: "Billed annually. Best value — save $40 vs monthly.",
    badge: null,
    border: "default",
    buttonStyle: "dark",
  },
  {
    name: "Monthly Plan",
    price: "19.99",
    period: "month",
    note: "Billed monthly. Cancel anytime.",
    badge: null,
    border: "teal",
    buttonStyle: "teal",
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-[#f0f4f9] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/60 bg-[#e0f2fe]/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#0284c7] shadow-sm sm:text-xs">
            Packages
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl md:text-6xl">
            Choose Your Plan
          </h1>
          <p className="mt-3 text-sm text-[#64748b] sm:text-base">
            Simple pricing. Powerful coaching.
          </p>
          <button className="mt-7 cursor-pointer rounded-lg bg-[#07557c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#08223a]">
            Start Learning
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div key={`${plan.name}-${index}`} className="relative flex flex-col">
              {plan.badge && (
                <span className="absolute -top-3.5 left-6 z-10 rounded-full bg-[#00a896] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                  {plan.badge}
                </span>
              )}
              <div
                className={`flex h-full flex-col justify-between rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  plan.border === "teal"
                    ? "border-2 border-[#00a896]"
                    : "border border-slate-200/90"
                }`}
              >
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a]">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-4xl font-extrabold tracking-tight text-[#0f172a]">
                    ${plan.price}
                    <span className="text-sm font-normal text-[#64748b]">
                      /{plan.period}
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-[#64748b]">{plan.note}</p>

                  <ul className="mt-6 space-y-3.5">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-[#334155]"
                      >
                        <Check className="h-4 w-4 shrink-0 text-[#00a896] stroke-[2.5]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`mt-8 w-full cursor-pointer rounded-xl py-3 text-sm font-semibold shadow-sm transition-all duration-200 ${
                    plan.buttonStyle === "dark"
                      ? "bg-[#0b1e33] text-white hover:bg-[#071524]"
                      : "bg-[#00a896] text-white hover:bg-[#009686] shadow-[#00a896]/20 shadow-md"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
