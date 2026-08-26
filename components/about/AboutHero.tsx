export default function AboutHero() {
  return (
    <section
      className="relative bg-cover bg-center py-28 sm:py-36 lg:py-40"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(6, 38, 59, 0.45) 0%, rgba(4, 26, 42, 0.65) 100%), url('/about/heroimage.jpg')",
      }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#2dd4bf]/40 bg-[#0d9488]/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#2dd4bf] backdrop-blur-md">
          About Us
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
          Built for Boaters. Backed
          <br />
          by Knowledge.
          <br />
          <span className="text-[#2dd4bf]">Focused on Safety.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg">
          First Mate is an AI boating coach created to make boating education
          more accessible, engaging and personalized for every recreational
          boater on the water.
        </p>
      </div>
    </section>
  );
}

