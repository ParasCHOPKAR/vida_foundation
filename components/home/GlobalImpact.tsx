"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star, Users, Building2, ShieldCheck, Globe2, Minus } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GlobalImpact() {
  const containerRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Infection Control Lead",
      hospital: "Metro Hospital",
      content: "The Advanced IPC Certification transformed how our hospital handles outbreak prevention. The simulation training made the transition from theory to practice seamless.",
      rating: 5,
      initial: "S"
    },
    {
      id: 2,
      name: "David Chen",
      role: "CSSD Supervisor",
      hospital: "Global Health Institute",
      content: "VIDA's curriculum is incredibly rigorous. The sterilization modules aligned perfectly with global standards, which helped me secure a senior role internationally.",
      rating: 5,
      initial: "D"
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      role: "Hospital Administrator",
      hospital: "City Care Clinic",
      content: "We now strictly prefer hiring VIDA-certified staff for our critical care units. Their methodology ensures absolute clinical readiness from day one.",
      rating: 5,
      initial: "D"
    }
  ];

  useGSAP(() => {
    // 1. Text Reveal Animation
    gsap.fromTo(
      ".reveal-text",
      { y: 40, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".impact-header",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        }
      }
    );

    // 2. Bento Box Float-in Animation
    const bentoBoxes = gsap.utils.toArray<HTMLElement>(".bento-box");
    bentoBoxes.forEach((box) => {
      gsap.fromTo(
        box,
        { scale: 0.95, autoAlpha: 0, y: 30 },
        {
          scale: 1,
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    });

    // 3. Animated Number Counters
    const counters = gsap.utils.toArray<HTMLElement>(".stat-number");
    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute("data-target") || "0");
      gsap.fromTo(counter, 
        { innerHTML: 0 },
        {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
          onUpdate: function () {
            counter.innerHTML = Math.ceil(Number(this.targets()[0].innerHTML)).toLocaleString();
          }
        }
      );
    });

    // 4. Testimonial Cards Float-Up
    gsap.fromTo(
      ".testimonial-card",
      { y: 40, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-[#F2F0E9] min-h-screen">
      
      {/* Textured Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: "url('/gloab-background-img-01.jpg')", // Make sure your image is named this in the public folder
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
bg
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="impact-header mb-12 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="reveal-text text-[11px] font-black uppercase tracking-[0.2em] text-[#C09263] mb-4 flex items-center gap-1">
              <Minus className="w-6 h-6 text-[#C09263]" /> GLOBAL IMPACT
            </h2>
            <h3 className="reveal-text text-5xl md:text-[5.5rem] font-black uppercase tracking-tighter leading-[0.95]">
              <span className="text-[#987D60]">ELEVATING <br /> STANDARDS <br /></span>
              <span className="text-[#3C577A]">WORLDWIDE.</span>
            </h3>
          </div>
          <p className="reveal-text text-zinc-700 font-medium max-w-[280px] mt-8 md:mt-0 leading-relaxed text-[13px] md:pb-4">
            Our certifications don't just teach—they transform careers and improve patient safety on a global scale.
          </p>
        </div>

        {/* --- STATS BENTO GRID --- */}
        {/* The gap is slightly tighter to match the image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-16">
          
          {/* 1. Large Blue Box */}
          <div className="bento-box md:col-span-2 bg-[linear-gradient(135deg,#3A5C84_0%,#24405E_100%)] rounded-2xl p-10 text-white relative overflow-hidden shadow-[0_15px_35px_rgba(36,64,94,0.4)] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] border border-[#24405E]/50 group hover:-translate-y-1 transition-transform duration-500">
            {/* Watermark Icon */}
            <Globe2 className="absolute -right-16 top-1/2 -translate-y-1/2 w-[400px] h-[400px] text-white opacity-[0.04] group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none stroke-1" />
            <Users className="w-8 h-8 text-[#D19D65] mb-12 opacity-80" />
            <div className="flex items-baseline gap-1 mb-1 relative z-10">
              <span className="stat-number text-7xl md:text-[6rem] font-black tracking-tighter" data-target="15000">0</span>
              <span className="text-5xl md:text-6xl font-black text-[#DE8820]">+</span>
            </div>
            <p className="text-[13px] font-black uppercase tracking-widest text-white/90 relative z-10">Certified Professionals</p>
          </div>

          {/* 2. Small Silver Box (200+) */}
          <div className="bento-box bg-[linear-gradient(135deg,#FFFFFF_0%,#E6E3DB_100%)] rounded-2xl p-10 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,1)] border border-[#E0DCD1] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
             {/* Watermark Element (simulating the cell sketch) */}
            <div className="absolute -right-8 -top-8 w-48 h-48 border-[20px] border-black/5 rounded-full opacity-20 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
            <div className="absolute right-4 top-4 w-24 h-24 border-[10px] border-black/5 rounded-full opacity-20 pointer-events-none" />
            
            <Building2 className="w-7 h-7 text-[#24405E]" />
            <div className="mt-12 relative z-10">
              <div className="flex items-baseline gap-1">
                <span className="stat-number text-5xl md:text-[4rem] font-black tracking-tighter text-[#1C2329]" data-target="200">0</span>
                <span className="text-4xl font-black text-[#DE8820]">+</span>
              </div>
              <p className="text-[11px] font-black uppercase tracking-widest text-[#24405E] mt-2">Hospital Partners</p>
            </div>
          </div>

          {/* 3. Small Silver Box (15+) */}
          <div className="bento-box bg-[linear-gradient(135deg,#FFFFFF_0%,#E6E3DB_100%)] rounded-2xl p-10 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,1)] border border-[#E0DCD1] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
             {/* Watermark Element (simulating the cell sketch) */}
            <div className="absolute -right-8 -top-8 w-48 h-48 border-[20px] border-black/5 rounded-full opacity-20 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
            
            <Globe2 className="w-7 h-7 text-[#D19D65]" />
            <div className="mt-12 relative z-10">
              <div className="flex items-baseline gap-1">
                <span className="stat-number text-5xl md:text-[4rem] font-black tracking-tighter text-[#1C2329]" data-target="15">0</span>
                <span className="text-4xl font-black text-[#1C2329]">+</span>
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#1C2329] mt-2">Countries Reached</p>
            </div>
          </div>

          {/* 4. Large Orange Box (100%) */}
          <div className="bento-box md:col-span-2 bg-[linear-gradient(135deg,#DF8618_0%,#C86E04_100%)] rounded-2xl p-10 text-white relative overflow-hidden shadow-[0_15px_35px_rgba(200,110,4,0.35)] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] border border-[#C86E04]/50 group hover:-translate-y-1 transition-transform duration-500 flex flex-col justify-center">
            {/* Watermark Icon */}
            <ShieldCheck className="absolute right-10 top-1/2 -translate-y-1/2 w-48 h-48 text-white opacity-[0.1] group-hover:scale-110 transition-all duration-700 pointer-events-none stroke-1" />
            
            <div className="relative z-10 mt-2">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="stat-number text-7xl md:text-[6.5rem] font-black tracking-tighter text-white" data-target="100">0</span>
                <span className="text-5xl md:text-6xl font-black text-white/70">%</span>
              </div>
              <p className="text-[13px] font-black uppercase tracking-widest text-white/95 flex items-center gap-2">
                Curriculum Aligned with NABH Standards
              </p>
            </div>
          </div>

        </div>

        {/* --- TESTIMONIALS --- */}
        {/* Notice: No staggering here (md:mt-12 is removed) to match image */}
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card bg-[#F9F7F1] p-8 md:p-10 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.04)] shadow-[inset_0_1px_0_rgba(255,255,255,1)] border border-[#E8E4D9] relative flex flex-col hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#DF8618] text-[#DF8618]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-zinc-800 leading-[1.7] font-medium mb-10 flex-grow text-[13px]">
                "{testimonial.content}"
              </p>

              {/* Author Profile */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#EAE7DF] flex items-center justify-center font-bold text-[#24405E] text-sm shrink-0 border border-[#DFDCD3]">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-bold text-[#1C2329] text-[13px]">{testimonial.name}</h4>
                  <p className="text-[10px] font-bold text-zinc-600 mt-0.5 leading-tight">{testimonial.role}</p>
                  <p className="text-[10px] text-[#DF8618] font-bold leading-tight mt-0.5">{testimonial.hospital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}