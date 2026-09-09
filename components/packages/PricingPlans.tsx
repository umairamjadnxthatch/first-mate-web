
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

export default function PricingPlans() {
  return (
    <section className="bg-[#f0f4f9] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/60 bg-[#e0f2fe]/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#0284c7] shadow-sm sm:mb-6 sm:text-xs">
            Packages
          </span>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl md:text-6xl">
            Choose Your Plan
          </h1>

          <p className="mt-3 text-sm text-[#64748b] sm:text-base">
            Simple pricing. Powerful coaching.
          </p>

          <Link
            href="https://first-mate-beta.vercel.app/signup"
            className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#07557c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#08223a] sm:mt-7"
          >
            Start Learning
          </Link>
        </div>

        {/* Pricing Cards */}
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
                    className={`absolute -top-3 left-6 z-10 rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${isFeatured ? "bg-[#00a896]" : "bg-[#07557c]"
                      }`}
                  >
                    {plan.badge}
                  </span>
                )}

                {/* Pricing Card */}
                <div
                  className={`flex h-full flex-col justify-between rounded-3xl bg-white p-6 text-[#0f172a] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#00a896]/10 sm:p-7 ${isFeatured
                    ? "border-2 border-[#00a896] shadow-md shadow-[#00a896]/10"
                    : "border border-slate-200/90 hover:border-[#00a896]"
                    }`}
                >
                  <div>
                    {/* Plan Name */}
                    <h3 className="text-lg font-bold tracking-tight text-[#0f172a]">
                      {plan.name}
                    </h3>

                    {/* Monthly Price */}
                    <p className="mt-2 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">
                      ${plan.price}
                      <span className="text-sm font-normal text-[#64748b]">
                        /{plan.period}
                      </span>
                    </p>

                    {/* Yearly Price */}
                    {plan.yearlyPrice && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#0f172a]">
                          ${plan.yearlyPrice}/yr
                        </span>

                        {plan.yearlyNote && (
                          <span className="rounded-full bg-[#dcfce7] px-2 py-0.5 text-[10px] font-bold text-[#15803d]">
                            {plan.yearlyNote}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Note */}
                    <p className="mt-1 text-xs text-[#64748b]">
                      {plan.note}
                    </p>

                    {/* Features */}
                    <ul className="mt-6 space-y-3 sm:space-y-3.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-xs text-[#334155] sm:text-sm"
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
                      className={`flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold shadow-sm transition-all duration-200 ${plan.buttonStyle === "current"
                        ? "cursor-default bg-slate-100 text-slate-500"
                        : plan.buttonStyle === "dark"
                          ? "cursor-pointer bg-[#0b1e33] text-white hover:bg-[#071524]"
                          : "cursor-pointer bg-[#00a896] text-white shadow-md shadow-[#00a896]/20 hover:bg-[#009686]"
                        }`}
                    >
                      {plan.buttonText}
                    </Link>

                    {/* Yearly Button */}
                    {plan.yearlyButtonText && (
                      <Link
                        href="https://first-mate-beta.vercel.app/signup"
                        className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-xl border border-slate-300 py-3 text-sm font-semibold text-[#0b1e33] transition-all duration-200 hover:border-[#00a896] hover:bg-slate-50"
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