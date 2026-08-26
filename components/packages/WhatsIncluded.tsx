import { Check, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

const rows = [
  { feature: "AI Boating Coach", monthly: true, annual: true },
  { feature: "Personalized Boat Guidance", monthly: true, annual: true },
  { feature: "Study Based Answers", monthly: true, annual: true },
  { feature: "Follow-up Quiz Questions", monthly: true, annual: true },
  { feature: "Conversation History", monthly: true, annual: true },
  { feature: "Access on All Devices", monthly: true, annual: true },
];

export default function WhatsIncluded() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#0f172a] sm:text-3xl">
          What&apos;s Included
        </h2>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm sm:rounded-3xl">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-[#f8fafc] text-[#0f172a]">
                <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-[#64748b] sm:text-sm">
                  Feature
                </th>
                <th className="px-6 py-4 text-center font-semibold text-xs uppercase tracking-wider text-[#64748b] sm:text-sm">
                  Monthly
                </th>
                <th className="px-6 py-4 text-center font-semibold text-xs uppercase tracking-wider text-[#64748b] sm:text-sm">
                  Annual
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 1 ? "bg-[#fafcff]/60" : "bg-white"}
                >
                  <td className="px-6 py-4.5 font-medium text-[#334155]">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4.5 text-center">
                    {row.monthly && (
                      <Check className="mx-auto h-5 w-5 text-[#00a896] stroke-[2.5]" />
                    )}
                  </td>
                  <td className="px-6 py-4.5 text-center">
                    {row.annual && (
                      <Check className="mx-auto h-5 w-5 text-[#00a896] stroke-[2.5]" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Complimentary access callout */}
        <Link
          href="/contact"
          className="group mt-6 flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl border border-[#dbeafe]/80 bg-[#f0f6fb] p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00a896]/50 hover:shadow-md sm:p-5"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b1e33] text-white shadow-sm">
              <ShieldCheck className="h-5 w-5 text-[#38bdf8]" />
            </span>

            <div>
              <p className="text-sm font-bold text-[#0f172a] sm:text-base">
                Complimentary Access
              </p>

              <p className="mt-0.5 text-xs text-[#64748b] sm:text-sm">
                Training students may receive complimentary access, provided and
                managed by their instructor.
              </p>
            </div>
          </div>

          <ChevronRight className="h-5 w-5 shrink-0 text-[#94a3b8] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#00a896]" />
        </Link>
      </div>
    </section>
  );
}
