import React from "react";
import TypingAnimation from "@/components/ui/Design System/typing-animation";

export default function HeroSection() {
  return (
    <section
      id="herosection"
      className="relative z-10 flex h-full items-center justify-center mt-30"
    >
      <div className="flex flex-col items-center text-center text-white space-y-4">
        <h3 className="text-slate-400 text-md md:text-lg font-medium tracking-wide">
          Hello I&apos;m
        </h3>

        <h1 className="text-3xl md:text-5xl font-light">Ayonitemi Ogunniran</h1>

        <TypingAnimation
          className="text-lg md:text-xl text-gray-500"
          text="Frontend Developer"
          duration={100}
        />

        <a
          href="/cv.pdf"
          download="Ayonitemi_CV.pdf"
          className="relative inline-flex items-center justify-center bg-white/5 backdrop-blur-md border border-cyan-500/50 text-cyan-300 rounded-full px-8 py-4 text-md font-medium tracking-wide cursor-pointer transition-all duration-500 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-1"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
