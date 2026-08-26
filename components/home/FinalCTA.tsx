export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#00b49c] via-[#05516e] to-[#082b44] py-20 text-white sm:py-28 md:py-32">
      {/* Subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Eyebrow badge */}
        <span className="mb-6 inline-flex items-center justify-center rounded-full border border-white/50 bg-[#074760]/50 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white shadow-sm backdrop-blur-sm sm:text-xs">
          Call to Action
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Ready to Become a More
          <br />
          <span className="text-[#38e1c6]">Confident Boater?</span>
        </h2>

        {/* Subtext */}
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white sm:text-base">
          Learn with trusted guidance, personalized to your boat and built
          around safer, smarter boating.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <button className="w-full rounded-xl bg-[#00b49c] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00b49c]/25 transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] sm:w-auto">
            Get Started
          </button>
          <button className="w-full rounded-xl border border-white/70 bg-[#0c354e]/40 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:border-white sm:w-auto">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

