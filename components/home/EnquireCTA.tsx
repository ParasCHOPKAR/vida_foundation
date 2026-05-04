"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, PhoneCall, Award, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EnquireCTA() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      }
    });

    // 1. Banner pop-in
    tl.fromTo(
      ".cta-banner",
      { scale: 0.95, autoAlpha: 0, y: 40 },
      { scale: 1, autoAlpha: 1, y: 0, duration: 1, ease: "back.out(1.2)" }
    );

    // 2. Text and Button Stagger Reveal
    tl.fromTo(
      ".cta-element",
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      "-=0.5"
    );

    // 3. Floating animation for decorative icons
    gsap.to(".floating-icon", {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-white">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* --- Floating CTA Banner --- */}
        <div className="cta-banner relative bg-[linear-gradient(135deg,#24405E_0%,#131B23_100%)] rounded-[2.5rem] p-10 md:p-20 text-center overflow-hidden shadow-[0_20px_50px_rgba(36,64,94,0.3)] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] border border-[#24405E]/50">
          
          {/* Ambient Glow Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#DF8618]/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[400px] h-[400px] bg-[#4a90e2]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Decorative Floating Icons */}
          <Award className="floating-icon absolute top-12 left-12 w-16 h-16 text-white/5 -rotate-12 hidden md:block" />
          <Sparkles className="floating-icon absolute bottom-16 right-16 w-20 h-20 text-white/5 rotate-12 hidden md:block" />

          {/* --- Content --- */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <div className="cta-element inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#DF8618] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Admissions Open For 2024</span>
            </div>

            <h2 className="cta-element text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-[1.05]">
              Ready to elevate your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF8618] to-[#FAD4A6]">
                Clinical Career?
              </span>
            </h2>

            <p className="cta-element text-zinc-300 text-sm md:text-base font-medium leading-relaxed mb-12 max-w-xl">
              Join thousands of healthcare professionals worldwide. Get VIDA-certified and master the critical skills required by top-tier hospitals.
            </p>

            {/* --- Action Buttons --- */}
            <div className="cta-element flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
              
              {/* Primary Form Redirect Button */}
              <Link 
                href="/enquire"
                className="group relative overflow-hidden bg-[linear-gradient(135deg,#DF8618_0%,#C86E04_100%)] text-white px-8 py-4 text-sm font-black uppercase tracking-widest rounded-xl shadow-[0_10px_20px_rgba(200,110,4,0.3)] min-w-[240px] w-full sm:w-auto flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 duration-300 border border-[#DF8618]"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Enquire Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Secondary Contact Button */}
              <Link 
                href="tel:+1234567890"
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-xl min-w-[240px] w-full sm:w-auto flex items-center justify-center gap-3 transition-all hover:-translate-y-1 duration-300 backdrop-blur-sm"
              >
                <PhoneCall className="w-4 h-4 text-[#DF8618] group-hover:scale-110 transition-transform" />
                <span>Request Callback</span>
              </Link>

            </div>

            {/* Trust Indicator */}
            <p className="cta-element text-[11px] font-semibold text-zinc-500 mt-8 tracking-wide">
              No commitment required. Our academic counselors will guide you.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}