"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Only animate the buttons sliding up and fading in
    gsap.fromTo(
      ".hero-buttons",
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105"
      >
        <source src="/vida-hero-04.mp4" type="video/mp4" />
      </video>

      {/* Hero Content - Just the Buttons Centered */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center h-full mt-116">
        
        {/* Action Buttons */}
        <div className="hero-buttons flex flex-col sm:flex-row items-center gap-6">
          {/* Solid Brand Blue Button */}
          <Link 
            href="/programs"
            className="group relative overflow-hidden bg-[#004b87] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm shadow-xl min-w-[220px] text-center"
          >
            <span className="absolute inset-0 w-full h-full bg-[#F28500] -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <span className="relative z-10">Explore Syllabus</span>
          </Link>

          {/* Outline Button */}
          <Link 
            href="/methodology"
            className="group relative overflow-hidden bg-transparent border border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm min-w-[220px] text-center transition-colors hover:border-transparent"
          >
            <span className="absolute inset-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <span className="relative z-10 group-hover:text-zinc-950 transition-colors duration-400 delay-75">Our Methodology</span>
          </Link>
        </div>

      </div>
    </section>
  );
}   