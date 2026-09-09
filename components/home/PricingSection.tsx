
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    note: "Get a feel for coaching.",
    badge: "Current",
    buttonText: "Current plan",
    buttonStyle: "current",
    features: [
      "3 coaching chats",
      "Single boat profile",
      "Core safety basics",
    ],
  },
  {
    name: "Pro",
    price: "4.99",
    period: "mo",
    note: "For the weekend boater.",
    badge: null,
    buttonText: "Go Pro",
    buttonStyle: "dark",
    features: [
      "30 questions a day",
      "Unlimited chats",
      "Boat-specific guidance",
      "Quizzes & history",
    ],
  },
  {
    name: "Business",
    price: "9.99",
    period: "mo",
    yearlyPrice: "69.99",
    yearlyNote: "Save 42%",
    note: "Ask as much as you like.",
    badge: "Most popular",
    buttonText: "Go Business",
    yearlyButtonText: "Pay yearly — $69.99",
    buttonStyle: "dark",
    features: [
      "Unlimited questions",
      "Unlimited chats",
      "Full Lake Norman knowledge base",
      "Priority responses",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#062c43] via-[#05324e] to-[#062c43] py-16 text-white sm:py-24 lg:py-28">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00a896]/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/50 bg-[#083344]/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#38bdf8] shadow-sm sm:mb-6 sm:text-xs">
            Meet Your AI Boating Coach
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Simple Pricing.
            <br />
            <span className="text-[#00a896]">Powerful Coaching.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:mt-5 sm:text-base">
            Choose the plan that fits your boating journey and get unlimited
            access to your AI boating coach, personalized guidance, and
            learning experience.
          </p>

          {/* Header Buttons */}
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3.5 sm:mt-8 sm:w-auto sm:flex-row">
            <Link
              href="https://first-mate-beta.vercel.app/signup"
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

        {/* Plan Cards */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-stretch gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const isFeatured = plan.badge === "Most popular";
            const isThird = index === 2;

            return (
              <div
                key={`${plan.name}-${index}`}
                className={`relative flex flex-col ${isThird
                    ? "mx-auto w-full max-w-md sm:col-span-2 lg:col-span-1 lg:max-w-none"
                    : "mx-auto w-full max-w-md sm:max-w-none"
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <span
                    className={`absolute -top-3 left-6 z-10 rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md ${isFeatured
                        ? "bg-[#00a896] shadow-[#00a896]/30"
                        : "bg-[#07557c] shadow-[#07557c]/30"
                      }`}
                  >
                    {plan.badge}
                  </span>
                )}

                {/* Pricing Card */}
                <div
                  className={`group flex h-full flex-col justify-between rounded-3xl p-6 text-white shadow-lg backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#00a896]/25 sm:p-7 ${isFeatured
                      ? "border-2 border-[#00a896] bg-[#073b5c]/80 shadow-[#00a896]/20"
                      : "border border-[#0284c7]/30 bg-[#06334f]/50 hover:border-[#38bdf8]/60 hover:bg-[#073b5c]/70"
                    }`}
                >
                  <div>
                    {/* Plan Name */}
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      {plan.name}
                    </p>

                    {/* Monthly Price */}
                    <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                      ${plan.price}

                      <span className="text-sm font-normal text-slate-300">
                        /{plan.period}
                      </span>
                    </p>

                    {/* Yearly Price */}
                    {plan.yearlyPrice && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">
                          ${plan.yearlyPrice}/yr
                        </span>

                        {plan.yearlyNote && (
                          <span className="rounded-full bg-[#dcfce7] px-2 py-0.5 text-[10px] font-bold text-[#15803d]">
                            {plan.yearlyNote}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    <p className="mt-1 text-xs text-slate-400">
                      {plan.note}
                    </p>

                    {/* Features */}
                    <ul className="mt-6 space-y-3 sm:space-y-3.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-xs font-medium text-slate-200 sm:text-sm"
                        >
                          <Check className="h-4 w-4 shrink-0 text-[#00a896] stroke-[2.5]" />

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8">
                    <Link
                      href={
                        plan.buttonStyle === "current"
                          ? "#"
                          : "https://first-mate-beta.vercel.app/signup"
                      }
                      className={`flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold transition-all duration-200 ${plan.buttonStyle === "current"
                          ? "cursor-default bg-white/10 text-slate-400"
                          : "bg-[#0b1e33] text-white shadow-sm hover:bg-[#071524]"
                        }`}
                    >
                      {plan.buttonText}
                    </Link>

                    {/* Yearly Button */}
                    {plan.yearlyButtonText && (
                      <Link
                        href="https://first-mate-beta.vercel.app/signup"
                        className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-xl border border-[#00a896]/60 bg-[#00a896]/10 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#00a896] hover:shadow-md hover:shadow-[#00a896]/30"
                      >
                        {plan.yearlyButtonText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
