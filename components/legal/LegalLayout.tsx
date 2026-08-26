export type LegalSection = {
  id: string;
  heading: string;
  body: string[];
};

export default function LegalLayout({
  title,
  updatedDate,
  intro,
  sections,
}: {
  title: string;
  updatedDate: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <section className="bg-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_1fr]">
          {/* Sidebar table of contents (normal document flow, scrolls naturally with the page) */}
          <aside className="hidden lg:block">
            <nav className="rounded-xl border border-slate-200 p-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                On This Page
              </p>
              <ol className="space-y-2 text-sm">
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-2 text-slate-500 transition hover:text-[#00a896]"
                    >
                      <span className="w-4 shrink-0 font-medium">
                        {i + 1}.
                      </span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Article content */}
          <article>
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Last updated: {updatedDate}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              {intro}
            </p>

            <div className="mt-10 space-y-8">
              {sections.map((section, i) => (
                <div key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {i + 1}. {section.heading}
                  </h2>
                  <div className="mt-2 space-y-3">
                    {section.body.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-sm leading-relaxed text-slate-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

