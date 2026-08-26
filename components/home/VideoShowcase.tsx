// "use client";

// import { useRef, useState } from "react";
// import { Play } from "lucide-react";

// export default function VideoShowcase() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlay = () => {
//     videoRef.current?.play();
//     setIsPlaying(true);
//   };

//   return (
//     <section className="bg-[#f0f4f9] py-20 sm:py-28">
//       <div className="mx-auto max-w-5xl px-6">
//         <div className="flex flex-col items-center text-center">
//           <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/60 bg-[#e0f2fe]/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#0284c7] shadow-sm sm:text-xs">
//             Take a Look Inside
//           </span>
//           <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
//             See First Mate in Action.
//           </h2>
//           <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#475569] sm:text-base">
//             Get a closer look at the First Mate experience and see how your
//             AI boating coach helps you learn, ask questions, and build
//             confidence on the water.
//           </p>
//           <button className="mt-8 rounded-lg bg-[#07557c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#08223a]">
//             Try First Mate
//           </button>
//         </div>

//         {/* Video frame — swap the `src` below for your real video file/URL */}
//         <div className="relative mt-16 aspect-video w-full overflow-hidden rounded-2xl border border-slate-800/30 bg-black shadow-2xl sm:rounded-3xl">
//           <video
//             ref={videoRef}
//             className="h-full w-full object-cover"
//             controls={isPlaying}
//             onPause={() => setIsPlaying(false)}
//             onEnded={() => setIsPlaying(false)}
//             poster=""
//           >
//             <source src="/videos/first-mate-demo.mp4" type="video/mp4" />
//           </video>

//           {!isPlaying && (
//             <button
//               onClick={handlePlay}
//               aria-label="Play demo video"
//               className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all duration-200 hover:bg-black/30"
//             >
//               <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-2xl transition duration-200 hover:scale-110 sm:h-20 sm:w-20">
//                 <Play className="h-7 w-7 translate-x-0.5 text-[#0c1f33] sm:h-8 sm:w-8" fill="currentColor" />
//               </span>
//             </button>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Play } from "lucide-react";

export default function VideoShowcase() {
  return (
    <section className="bg-[#f0f4f9] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#38bdf8]/60 bg-[#e0f2fe]/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#0284c7] shadow-sm sm:text-xs">
            Take a Look Inside
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
            See First Mate in Action.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#475569] sm:text-base">
            Get a closer look at the First Mate experience and see how your
            AI boating coach helps you learn, ask questions, and build
            confidence on the water.
          </p>

          <button className="mt-8 cursor-pointer rounded-lg bg-[#07557c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#08223a]">
            Try First Mate
          </button>
        </div>

        {/* YouTube Video */}
        <div className="relative mt-16 aspect-video w-full overflow-hidden rounded-2xl border border-slate-800/30 bg-black shadow-2xl sm:rounded-3xl">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/2AaFkbgbm9A"
            title="First Mate Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}