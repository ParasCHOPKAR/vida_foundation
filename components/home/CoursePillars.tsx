"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BookOpen, Award, Briefcase, Building2, ArrowRight } from "lucide-react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CoursePillars() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Stagger fade-in animation for the cards as the user scrolls to them
    gsap.fromTo(
      ".pillar-card",
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: containerRef });

  const pillars = [
    {
      id: "foundation",
      title: "Foundation Courses",
      description: "Basic understanding and fundamental principles for beginners entering the healthcare sector.",
      icon: BookOpen,
      link: "/programs#foundation"
    },
    {
      id: "advanced",
      title: "Advanced Certification",
      description: "Specialized, rigorous training in IPC, CSSD, and Biomedical Equipment Handling.",
      icon: Award,
      link: "/programs#advanced"
    },
    {
      id: "masterclass",
      title: "Masterclass Programs",
      description: "Expert-level curriculum designed for supervisors, nursing heads, and hospital managers.",
      icon: Briefcase,
      link: "/programs#masterclass"
    },
    {
      id: "customized",
      title: "Customized Modules",
      description: "Tailor-made, institutional training programs specifically designed for hospitals.",
      icon: Building2,
      link: "/enquire"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/home-second-section-bg.png" 
          alt="Course Curriculum Background" 
          fill 
          className="object-cover object-center opacity-30" // Adjust opacity here if you want it darker/lighter
        />
        {/* Optional: Add a subtle white gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#F28500] mb-3">
            Our Curriculum
          </h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-950">
            The 4 Pillars of <br className="hidden md:block" />
            <span className="text-[#004b87]">Healthcare Excellence.</span>
          </h3>
        </div>

        {/* 4-Column CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link 
                key={pillar.id} 
                href={pillar.link}
                className="pillar-card group flex flex-col justify-between p-8 border border-zinc-200 bg-white/95 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-[#004b87] transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Accent Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#F28500] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                
                <div>
                  <Icon className="w-10 h-10 text-zinc-400 group-hover:text-[#004b87] transition-colors duration-300 mb-8" />
                  <h4 className="text-xl font-bold text-zinc-900 mb-4 leading-tight group-hover:text-[#F28500] transition-colors duration-300">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center text-sm font-bold text-zinc-400 group-hover:text-[#004b87] transition-colors duration-300">
                  Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}