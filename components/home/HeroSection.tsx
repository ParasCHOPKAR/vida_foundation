"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { PlayCircle, Sparkles, Globe, SlidersHorizontal } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Main hero content animation
    gsap.fromTo(
      ".hero-content",
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    // Dedicated highlight animation for the feature badge
    gsap.fromTo(
      ".feature-badge",
      { y: 20, autoAlpha: 0, scale: 0.95 },
      { y: 0, autoAlpha: 1, scale: 1, duration: 0.8, delay: 1.2, ease: "back.out(1.5)" }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105 opacity-60"
      >
        <source src="/vida-hero-04.mp4" type="video/mp4" />
      </video>

      {/* Hero Content */}
      <div className="hero-content relative z-20 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center h-full mt-20">
        
        <h1 className="text-4xl md:text-6xl font-black text-white text-center tracking-tight mb-6 drop-shadow-lg">
          Pioneering Healthcare <span className="text-[#F28500]">Education</span>
        </h1>

        <p className="text-zinc-200 text-center max-w-2xl mb-10 text-lg">
          Empowering the next generation of medical professionals with advanced clinical certifications and hands-on training.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
          <Link 
            href="/programs"
            className="group relative overflow-hidden bg-[#004b87] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm shadow-xl min-w-[220px] text-center"
          >
            <span className="absolute inset-0 w-full h-full bg-[#F28500] -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" /> Explore Syllabus
            </span>
          </Link>

          <Link 
            href="/methodology"
            className="group relative overflow-hidden bg-transparent border border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm min-w-[220px] text-center transition-colors hover:border-transparent"
          >
            <span className="absolute inset-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <span className="relative z-10 group-hover:text-zinc-950 transition-colors duration-400 delay-75">Our Methodology</span>
          </Link>
        </div>

        {/* --- PREMIUM FEATURE BADGE --- */}
        <div className="feature-badge w-full max-w-4xl bg-gradient-to-br from-zinc-900/90 to-[#004b87]/40 backdrop-blur-xl border-2 border-[#F28500]/60 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 shadow-[0_0_40px_rgba(242,133,0,0.25)] relative overflow-hidden">
          
          {/* Subtle background glow effect inside the badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-[#F28500]/10 blur-3xl z-0 rounded-full pointer-events-none" />

          {/* Feature 1: Language Selection */}
          <div className="relative z-10 flex items-start gap-4 flex-1">
            <div className="bg-[#F28500]/20 p-3 rounded-xl border border-[#F28500]/50 shrink-0">
              <Globe className="w-6 h-6 text-[#F28500]" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                Watch in Your Language <Sparkles className="w-4 h-4 text-[#F28500]" />
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Select your preferred regional language to watch video lectures and master concepts with ease.
              </p>
            </div>
          </div>

          {/* Divider for desktop */}
          <div className="hidden md:block w-px h-20 bg-white/10 relative z-10" />
          
          {/* Divider for mobile */}
          <div className="block md:hidden w-full h-px bg-white/10 relative z-10" />

          {/* Feature 2: Course Customization */}
          <div className="relative z-10 flex items-start gap-4 flex-1">
            <div className="bg-[#004b87]/40 p-3 rounded-xl border border-blue-400/30 shrink-0">
              <SlidersHorizontal className="w-6 h-6 text-blue-300" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">
                Customizable Courses
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Tailor your learning journey by customizing course modules to fit your specific career goals.
              </p>
            </div>
          </div>

        </div>
        {/* ----------------------------------------------- */}

      </div>
    </section>
  );
}