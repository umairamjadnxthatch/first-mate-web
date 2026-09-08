import { Check } from "lucide-react";
import Link from "next/link";

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
    name: "Basic Plan",
    price: "4.99",
    period: "month",
    note: "30 questions per day.",
    badge: null,
    buttonStyle: "dark",
  },
  {
    name: "Unlimited Monthly",
    price: "9.99",
    period: "month",
    note: "Unlimited questions. Cancel anytime.",
    badge: "Most Popular",
    buttonStyle: "teal",
  },
  {
    name: "Unlimited Annual",
    price: "69.99",
    period: "year",
    note: "Unlimited questions. Best value.",
    badge: "Best Value",
    buttonStyle: "dark",
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-[#f0f4f9] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 sm:mb-6 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/60 bg-[#e0f2fe]/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#0284c7] shadow-sm sm:text-xs">
            Packages
          </span>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl md:text-6xl">
            Choose Your Plan
          </h1>

          <p className="mt-3 text-sm text-[#64748b] sm:text-base">
            Simple pricing. Powerful coaching.
          </p>

          <Link
            href="/get-started"
            className="mt-6 sm:mt-7 inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#07557c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#08223a]"
          >
            Start Learning
          </Link>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            const isFeatured = plan.badge === "Most Popular";
            const isThird = index === 2;

            return (
              <div
                key={`${plan.name}-${index}`}
                className={`relative flex flex-col ${
                  isThird
                    ? "sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full lg:col-span-1 lg:max-w-none"
                    : "w-full max-w-md mx-auto sm:max-w-none"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <span className="absolute -top-3 left-6 z-10 rounded-full bg-[#00a896] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    {plan.badge}
                  </span>
                )}

                {/* Pricing Card */}
                <div
                  className={`flex h-full flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 text-[#0f172a] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#00a896]/10 ${
                    isFeatured
                      ? "border-2 border-[#00a896] shadow-md shadow-[#00a896]/10"
                      : "border border-slate-200/90 hover:border-[#00a896]"
                  }`}
                >
                  <div>
                    {/* Plan Name */}
                    <h3 className="text-lg font-bold tracking-tight text-[#0f172a]">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a]">
                      ${plan.price}
                      <span className="text-sm font-normal text-[#64748b]">
                        /{plan.period}
                      </span>
                    </p>

                    {/* Note */}
                    <p className="mt-1 text-xs text-[#64748b]">
                      {plan.note}
                    </p>

                    {/* Features */}
                    <ul className="mt-6 space-y-3 sm:space-y-3.5">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-[#334155]"
                        >
                          <Check className="h-4 w-4 shrink-0 text-[#00a896] stroke-[2.5]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Get Started */}
                  <Link
                    href="/get-started"
                    className={`mt-8 flex w-full cursor-pointer items-center justify-center rounded-xl py-3 text-sm font-semibold shadow-sm transition-all duration-200 ${
                      plan.buttonStyle === "dark"
                        ? "bg-[#0b1e33] text-white hover:bg-[#071524]"
                        : "bg-[#00a896] text-white shadow-md shadow-[#00a896]/20 hover:bg-[#009686]"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
