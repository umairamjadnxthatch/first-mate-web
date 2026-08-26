export default function OurMission() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#052b42] via-[#073a56] to-[#042135] py-24 sm:py-32 lg:py-36 text-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-12">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center justify-center rounded-full border border-[#2dd4bf]/40 bg-[#0d9488]/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#2dd4bf]">
            Our Mission
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Mission
          </h2>
        </div>

        <div className="relative mx-auto mt-12 sm:mt-16 max-w-3xl px-8 sm:px-16 text-center">
          {/* Top Left Quote Icon */}
          <div className="absolute -left-2 -top-6 sm:-left-6 sm:-top-8 text-[#2dd4bf] select-none">
            <svg
              className="h-10 w-10 sm:h-14 sm:w-14 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-slate-100 font-medium">
            To help recreational boaters on Lake Norman and beyond learn with
            confidence through trusted, personalized coaching—so every trip on
            the water is safer and more enjoyable.
          </p>

          {/* Bottom Right Quote Icon */}
          <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 text-[#2dd4bf] select-none">
            <svg
              className="h-10 w-10 sm:h-14 sm:w-14 fill-current rotate-180"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

