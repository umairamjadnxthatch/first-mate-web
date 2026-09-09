"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

export type FAQItem = {
  question: string;
  answer: string;
};

const defaultFaqs: FAQItem[] = [
  {
    question: "Is First Mate a replacement for a boating license or safety course?",
    answer:
      "No. First Mate is an educational coaching tool built on trusted boating studies. It complements—but does not replace—official licensing, certified safety courses, or the judgment of an experienced captain.",
  },
  {
    question: "How does First Mate personalize answers to my boat?",
    answer:
      "When you select your boat type, First Mate tailors every answer, quiz question, and safety note to the specific handling characteristics and equipment of that boat.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes. Monthly plans can be cancelled anytime with no penalty, and you'll keep access through the end of your current billing period.",
  },
  {
    question: "What happens in an emergency?",
    answer:
      "First Mate is not a navigation or emergency device. In an emergency, always contact 911 or hail the Coast Guard on VHF Channel 16 immediately.",
  },
  {
    question: "Does my conversation history save across sessions?",
    answer:
      "Yes. Your chat history is saved to your account and available whenever you log back in, on any device.",
  },
];

export default function FAQ({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  description = "Boating can be complex and every boat is different. We built First Mate to cut through the noise and deliver clear, study-based guidance when you need it most.",
  showCta = true,
}: {
  faqs?: FAQItem[];
  title?: string;
  description?: string;
  showCta?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-[#f0f4f9] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#64748b] sm:text-base">
            {description}
          </p>
          {showCta && (
            <Link
              href="https://first-mate-beta.vercel.app/signup"
              className="mt-7 cursor-pointer rounded-lg bg-[#07557c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#08223a]">
              Get Started
            </Link>
          )}
        </div>

        <div className="mt-14 space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-bold text-[#0f172a] sm:text-base">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen
                      ? "bg-[#00a896] text-white shadow-sm"
                      : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]"
                      }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="h-4 w-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-[#475569]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
