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
    description: "30 questions per day.",
    badge: null,
    buttonStyle: "dark",
  },
  {
    name: "Unlimited Monthly",
    price: "9.99",
    period: "month",
    description: "Unlimited questions. Cancel anytime.",
    badge: "Most Popular",
    buttonStyle: "teal",
  },
  {
    name: "Unlimited Annual",
    price: "69.99",
    period: "year",
    description: "Unlimited questions. Best value.",
    badge: "Best Value",
    buttonStyle: "dark",
  },
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#062c43] via-[#05324e] to-[#062c43] py-16 sm:py-24 lg:py-28 text-white">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00a896]/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 sm:mb-6 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/50 bg-[#083344]/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#38bdf8] shadow-sm sm:text-xs">
            Meet Your AI Boating Coach
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Simple Pricing.
            <br />
            <span className="text-[#00a896]">Powerful Coaching.</span>
          </h2>
          <p className="mt-4 sm:mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Choose the plan that fits your boating journey and get unlimited
            access to your AI boating coach, personalized guidance, and
            learning experience.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row w-full sm:w-auto">
            <Link
              href="/get-started"
              className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#00a896] to-[#02b8a2] px-7 py-3 text-center text-sm font-semibold text-white shadow-md shadow-[#00a896]/30 transition-all duration-200 hover:brightness-110 sm:w-auto"
            >
              Start Learning
            </Link>
            <Link
              href="/packages"
              className="w-full cursor-pointer rounded-lg border border-[#38bdf8]/40 bg-[#04283f]/60 px-7 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-[#07395a] sm:w-auto"
            >
              Explore Packages
            </Link>
          </div>
        </div>

        {/* Plan cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            const isFeatured = plan.badge === "Most Popular";
            const isThird = index === 2;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col ${isThird
                    ? "sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full lg:col-span-1 lg:max-w-none"
                    : "w-full max-w-md mx-auto sm:max-w-none"
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <span className="absolute -top-3 left-6 z-10 rounded-full bg-[#00a896] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md shadow-[#00a896]/30">
                    {plan.badge}
                  </span>
                )}

                <div
                  className={`group flex h-full flex-col justify-between rounded-3xl p-6 sm:p-7 text-white shadow-lg backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#00a896]/25 ${isFeatured
                      ? "border-2 border-[#00a896] bg-[#073b5c]/80 shadow-[#00a896]/20"
                      : "border border-[#0284c7]/30 bg-[#06334f]/50 hover:border-[#38bdf8]/60 hover:bg-[#073b5c]/70"
                    }`}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      {plan.name}
                    </p>
                    <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                      ${plan.price}
                      <span className="text-sm font-normal text-slate-300">
                        /{plan.period}
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {plan.description}
                    </p>

                    <ul className="mt-6 space-y-3 sm:space-y-3.5">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200"
                        >
                          <Check className="h-4 w-4 shrink-0 text-[#00a896] stroke-[2.5]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="https://first-mate-beta.vercel.app/signup"
                    className={`mt-8 flex w-full cursor-pointer items-center justify-center rounded-xl py-3 text-sm font-semibold transition-all duration-200 ${plan.buttonStyle === "teal"
                        ? "bg-[#00a896] text-white shadow-md shadow-[#00a896]/30 hover:bg-[#02b8a2] hover:brightness-110"
                        : "border border-[#00a896]/60 bg-[#00a896]/15 text-white hover:bg-[#00a896] hover:shadow-md hover:shadow-[#00a896]/30"
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

