export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#00bfa5] via-[#00897b] to-[#062c43] py-20 text-white sm:py-28 md:py-32">
      {/* Subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Eyebrow badge */}
        <span className="mb-6 inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white shadow-sm backdrop-blur-sm sm:text-xs">
          Call to Action
        </span>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Ready to Become a More
          <br />
          <span className="text-[#67e8f9]">Confident Boater?</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
          Learn with trusted guidance, personalized to your boat and built
          around safer, smarter boating.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <button className="w-full rounded-lg bg-gradient-to-r from-[#00a896] to-[#02b8a2] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00a896]/30 transition-all duration-200 hover:brightness-110 sm:w-auto">
            Get Started
          </button>
          <button className="w-full rounded-lg border border-white/50 bg-[#083344]/50 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15 sm:w-auto">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

