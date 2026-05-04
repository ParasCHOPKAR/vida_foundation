"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  MonitorPlay, 
  Stethoscope, 
  Activity, 
  FileText, 
  ClipboardCheck, 
  ShieldCheck, 
  Award,
  Globe,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MethodologyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // 1. Friendly Hero Reveal
    gsap.fromTo(
      ".hero-element",
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: "back.out(1.2)" }
    );

    // Continuous floating animation for icons to make the page feel "alive"
    gsap.to(".float-icon", {
      y: -8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3
    });

    // 2. Timeline Animations
    mm.add("(min-width: 768px)", () => {
      // Glow line moving down like a progress bar
      gsap.fromTo(
        ".timeline-glow",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 30%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );

      // Cards bouncing in from sides
      const cards = gsap.utils.toArray<HTMLElement>(".timeline-card");
      cards.forEach((card, i) => {
        
        // Card entrance
        gsap.fromTo(
          card,
          { x: i % 2 === 0 ? -80 : 80, autoAlpha: 0, scale: 0.9 },
          {
            x: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // Staggered bullet points popping in inside the card
        const bullets = card.querySelectorAll(".step-bullet");
        gsap.fromTo(
          bullets,
          { x: -20, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });
    });

    // Mobile Timeline (Simple Fade Up)
    mm.add("(max-width: 767px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".timeline-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    });

    // 3. Bento Certifications Reveal
    gsap.fromTo(
      ".bento-cert",
      { y: 60, autoAlpha: 0, scale: 0.95 },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cert-container",
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    return () => mm.revert();
  }, { scope: containerRef });

  // Simplified, student-friendly content
  const methodologySteps = [
    {
      id: "01",
      title: "Classroom Learning",
      desc: "Learn the basics from our expert teachers in easy-to-follow online and offline classes.",
      bullets: ["Simple study materials", "Helpful videos & pictures", "Ask questions anytime"],
      icon: MonitorPlay,
      color: "text-[#4a90e2]",
      border: "border-[#4a90e2]/30"
    },
    {
      id: "02",
      title: "Watch & Learn",
      desc: "See how real hospital tools and machines work with safe, guided demonstrations.",
      bullets: ["Real hospital labs", "Learn to handle tools safely", "Get helpful tips from experts"],
      icon: Stethoscope,
      color: "text-[#F28500]",
      border: "border-[#F28500]/30"
    },
    {
      id: "03",
      title: "Practice Safely",
      desc: "Practice your skills on medical dummies in a safe room where it's okay to make mistakes and learn.",
      bullets: ["Lifelike medical dummies", "Practice emergency steps", "Safe, stress-free zone"],
      icon: Activity,
      color: "text-[#4a90e2]",
      border: "border-[#4a90e2]/30"
    },
    {
      id: "04",
      title: "Solve Real Problems",
      desc: "Look at real-life hospital situations and figure out how to solve them like a pro.",
      bullets: ["Learn from real events", "Find out what went wrong", "Work together in teams"],
      icon: FileText,
      color: "text-[#F28500]",
      border: "border-[#F28500]/30"
    },
    {
      id: "05",
      title: "Test & Graduate",
      desc: "Show what you know in fair tests. Pass them to earn your respected VIDA certificate!",
      bullets: ["Fair skill checks", "Simple written tests", "Get ready for the job"],
      icon: ClipboardCheck,
      color: "text-zinc-300",
      border: "border-zinc-500/30"
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#F4F0E6] text-zinc-950 pt-32 overflow-hidden font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:32px_32px] opacity-60 pointer-events-none -z-10" />
        
        <div className="max-w-4xl relative z-10 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="hero-element inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#D9D4C7] shadow-sm mb-8">
            <Sparkles className="w-4 h-4 text-[#DF8618] float-icon" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C7355]">How You Will Learn</span>
          </div>
          
          <h1 className="hero-element text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8 text-[#1C2329]">
            Learn by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C577A] to-[#24405E]">Doing.</span>
          </h1>
          
          <p className="hero-element text-lg md:text-xl text-zinc-600 font-medium leading-[1.7] max-w-2xl md:border-l-4 md:border-[#DF8618] md:pl-6">
            We blend classroom learning with real hospital practice. Our simple 5-step path makes it easy to understand, practice safely, and get ready for a real healthcare job.
          </p>
        </div>
      </section>

      {/* --- TIMELINE METHODOLOGY SECTION --- */}
      <section className="bg-[#0A0D14] text-white py-32 relative rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-20 md:mb-28">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
              Your <span className="text-[#F28500]">Learning Path</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-lg">Step-by-step training to help you grow from a beginner to a confident healthcare professional.</p>
          </div>

          {/* Timeline Container */}
          <div ref={timelineRef} className="relative max-w-5xl mx-auto pb-10">
            
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
              <div className="timeline-glow w-full bg-gradient-to-b from-[#4a90e2] via-[#F28500] to-transparent shadow-[0_0_20px_rgba(242,133,0,1)] rounded-full" />
            </div>

            <div className="space-y-12 md:space-y-32">
              {methodologySteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div key={step.id} className={`relative flex flex-col md:flex-row items-center justify-between w-full group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* Card Content */}
                    <div className="timeline-card w-full md:w-[45%] relative z-10">
                      <div className={`bg-white/[0.04] backdrop-blur-xl border ${step.border} p-8 md:p-10 rounded-[2rem] hover:bg-white/[0.08] hover:-translate-y-2 transition-all duration-500 shadow-xl`}>
                        
                        {/* Mobile Step Number */}
                        <div className="md:hidden flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                           <div className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border ${step.border}`}>
                             <Icon className={`w-7 h-7 float-icon ${step.color}`} />
                           </div>
                           <span className="text-3xl font-black text-white/30">Step {step.id}</span>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 text-white/95">{step.title}</h3>
                        <p className="text-zinc-400 text-base leading-relaxed mb-8">{step.desc}</p>
                        
                        <ul className="space-y-4 bg-black/20 p-5 rounded-2xl">
                          {step.bullets.map((bullet, i) => (
                            <li key={i} className="step-bullet flex items-center gap-3 text-sm font-medium text-zinc-300">
                              <CheckCircle2 className={`w-5 h-5 shrink-0 ${step.color}`} /> {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Desktop Center Node (Pulsing) */}
                    <div className="hidden md:flex absolute left-1/2 w-20 h-20 bg-[#0A0D14] border-4 border-[#0A0D14] rounded-full items-center justify-center -translate-x-1/2 z-20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_0_2px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_0_3px_rgba(242,133,0,0.5)]">
                      <Icon className={`w-8 h-8 float-icon ${step.color}`} />
                    </div>

                    {/* Desktop Step Number */}
                    <div className="hidden md:flex w-[45%] items-center select-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <span className={`text-[12rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent ${isEven ? 'ml-10' : 'mr-10'}`}>{step.id}</span>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- BENTO CERTIFICATION SECTION --- */}
      <section className="bg-[#F4F0E6] py-32 relative overflow-hidden">
        <div className="cert-container max-w-7xl mx-auto px-6">
          
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C09263] mb-4">
              Your Reward
            </h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-[1]">
              <span className="text-[#24405E]">Certificates</span> <br />
              Hospitals Trust.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Main Bento Box */}
            <div className="bento-cert md:col-span-2 bg-[linear-gradient(135deg,#3A5C84_0%,#24405E_100%)] rounded-[2rem] p-10 md:p-14 text-white relative overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-500">
              <Award className="absolute -right-10 -bottom-10 w-80 h-80 text-white opacity-10 pointer-events-none float-icon" />
              <div className="relative z-10 max-w-lg">
                <ShieldCheck className="w-14 h-14 text-[#D19D65] mb-6 float-icon" />
                <h4 className="text-3xl font-bold mb-4">Top Quality Training</h4>
                <p className="text-white/80 leading-relaxed mb-8 text-lg">
                  Our training follows strict hospital rules (called NABH standards). This means when you graduate, hospitals know you were taught the right way to keep patients safe.
                </p>
                <Link href="/programs" className="inline-flex items-center gap-2 bg-[#D19D65] text-[#24405E] px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition-colors shadow-lg">
                  See Our Courses <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Secondary Bento Boxes */}
            <div className="flex flex-col gap-6 md:col-span-1">
              
              <div className="bento-cert flex-1 bg-white border border-[#E8E4D9] rounded-[2rem] p-8 flex flex-col justify-center hover:shadow-xl transition-shadow duration-300 group">
                <Globe className="w-12 h-12 text-[#24405E] mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-[#1C2329] mb-2">Accepted Everywhere</h4>
                <p className="text-sm text-zinc-600">Your certificate is respected by major hospitals and clinics all over the world.</p>
              </div>

              <div className="bento-cert flex-1 bg-[linear-gradient(135deg,#DF8618_0%,#C86E04_100%)] text-white rounded-[2rem] p-8 flex flex-col justify-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
                <ClipboardCheck className="w-12 h-12 text-white/90 mb-6 float-icon" />
                <h4 className="text-xl font-bold mb-2">Get Hired Faster</h4>
                <p className="text-sm text-white/90">Having a VIDA certificate on your resume helps you stand out and get the job you want.</p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}