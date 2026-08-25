export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 sm:py-28 md:py-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Eyebrow badge */}
        <span className="mb-6 inline-block rounded-full border border-teal-light/40 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-teal-light backdrop-blur-sm">
          Call to Action
        </span>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          Ready to Become a More
          <br />
          <span className="text-teal-light">Confident Boater?</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-xl text-base text-slate-200 sm:text-lg">
          Learn with trusted guidance, personalized to your boat and built
          around safer, smarter boating.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-lg bg-gradient-to-r from-teal to-teal-light px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-teal/20 transition hover:brightness-110">
            Get Started
          </button>
          <button className="rounded-lg border border-white/70 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
