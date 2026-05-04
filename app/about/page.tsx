"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  CheckCircle2, 
  BookOpen, 
  GraduationCap, 
  Target, 
  ShieldCheck, 
  Microscope,
  Stethoscope,
  Award,
  Sparkles,
  ArrowRight
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // 1. Friendly Hero Reveal
    gsap.fromTo(
      ".hero-text",
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

    // 2. Scroll-triggered pop-up cards
    const popCards = gsap.utils.toArray<HTMLElement>(".pop-card");
    popCards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, autoAlpha: 0, scale: 0.95 },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

   // 3. Staggered grid items (Domains)
    const staggeredGrids = gsap.utils.toArray<HTMLElement>(".stagger-grid");
    staggeredGrids.forEach((grid) => { // <-- Fixed: staggeredGrids
      const items = grid.querySelectorAll(".stagger-item");
      gsap.fromTo(
        items,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#F4F0E6] text-zinc-950 pt-32 pb-20 overflow-hidden font-sans">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32 relative">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:32px_32px] opacity-60 pointer-events-none -z-10" />

        <div className="max-w-4xl flex flex-col items-start relative z-10">
          <div className="hero-text inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#D9D4C7] shadow-sm mb-8">
            <Sparkles className="w-4 h-4 text-[#DF8618] float-icon" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C7355]">About VIDA</span>
          </div>

          <h1 className="hero-text text-5xl md:text-[5.5rem] font-black tracking-tight leading-[1.05] mb-8 text-[#1C2329]">
            Start Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C577A] to-[#24405E]">Healthcare Career.</span>
          </h1>
          
          <p className="hero-text text-lg md:text-xl text-zinc-600 font-medium leading-[1.7] max-w-2xl border-l-4 border-[#DF8618] pl-6">
            We help you learn the exact skills you need to work safely and confidently in top hospitals. Whether you are just starting or want to grow in your career, we have a clear path for you.
          </p>
        </div>
      </section>

      {/* --- 2. EASY 4-STEP PATHWAY --- */}
      <section className="bg-white rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] py-24 mb-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="pop-card mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-[#1C2329]">
              How To Get <span className="text-[#F28500]">Certified</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">A simple, step-by-step journey to learn new skills and get your official hospital-ready certificate.</p>
          </div>

          <div className="stagger-grid grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#004b87]/20 via-[#F28500]/50 to-[#004b87]/20 z-0 rounded-full" />

            {/* Step 1 */}
            <div className="stagger-item pop-card relative z-10 flex flex-col items-center text-center group bg-[#F4F0E6] p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-[#004b87]/20">
              <div className="w-20 h-20 bg-white shadow-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 float-icon">
                <Target className="w-8 h-8 text-[#004b87]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1C2329]">1. Choose a Course</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Pick the medical subject you want to learn and check if it is right for you.</p>
            </div>

            {/* Step 2 */}
            <div className="stagger-item pop-card relative z-10 flex flex-col items-center text-center group bg-[#F4F0E6] p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-[#F28500]/20">
              <div className="w-20 h-20 bg-white shadow-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 float-icon" style={{ animationDelay: "0.2s" }}>
                <BookOpen className="w-8 h-8 text-[#F28500]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1C2329]">2. Learn & Practice</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Join our fun classes and practice with real hospital tools in safe training rooms.</p>
            </div>

            {/* Step 3 */}
            <div className="stagger-item pop-card relative z-10 flex flex-col items-center text-center group bg-[#F4F0E6] p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-[#004b87]/20">
              <div className="w-20 h-20 bg-white shadow-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 float-icon" style={{ animationDelay: "0.4s" }}>
                <CheckCircle2 className="w-8 h-8 text-[#004b87]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1C2329]">3. Take the Test</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Show your teachers what you have learned through simple, fair tests and tasks.</p>
            </div>

            {/* Step 4 */}
            <div className="stagger-item pop-card relative z-10 flex flex-col items-center text-center group bg-[linear-gradient(135deg,#3A5C84_0%,#24405E_100%)] p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 shadow-lg border border-[#24405E]/50">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md shadow-inner rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 float-icon" style={{ animationDelay: "0.6s" }}>
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">4. Get Certified</h3>
              <p className="text-sm text-white/80 leading-relaxed">Earn your official certificate to show hospitals you are highly trained and ready to work.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- 3. WHAT YOU CAN LEARN (DOMAINS) --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="pop-card mb-16 text-center md:text-left">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C09263] mb-4">
            What We Teach
          </h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-[1]">
            <span className="text-[#24405E]">Pick Your</span> Speciality.
          </h3>
        </div>

        <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Domain Card 1 */}
          <div className="stagger-item bg-white p-10 rounded-[2rem] border border-[#E8E4D9] hover:border-[#004b87]/30 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full cursor-pointer">
            <div className="w-16 h-16 bg-[#F4F0E6] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#004b87] transition-colors duration-500 float-icon">
              <Microscope className="w-8 h-8 text-[#004b87] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-4 leading-tight text-[#1C2329]">Stop Infections</h3>
            <p className="text-zinc-600 mb-8 leading-relaxed flex-grow">Learn exactly how to stop germs from spreading, handle medical waste safely, and keep the whole hospital clean for patients.</p>
            <Link href="/programs#ipc" className="text-sm font-bold text-[#F28500] flex items-center gap-2 group-hover:text-[#004b87] transition-colors w-fit">
              Explore This Course <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Domain Card 2 */}
          <div className="stagger-item bg-white p-10 rounded-[2rem] border border-[#E8E4D9] hover:border-[#F28500]/30 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full cursor-pointer">
            <div className="w-16 h-16 bg-[#F4F0E6] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#F28500] transition-colors duration-500 float-icon" style={{ animationDelay: "0.2s" }}>
              <ShieldCheck className="w-8 h-8 text-[#F28500] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-4 leading-tight text-[#1C2329]">Clean & Safe Tools</h3>
            <p className="text-zinc-600 mb-8 leading-relaxed flex-grow">Become an expert in washing, packing, and making sure surgical tools are 100% safe to use in the operating room (CSSD).</p>
            <Link href="/programs#cssd" className="text-sm font-bold text-[#004b87] flex items-center gap-2 group-hover:text-[#F28500] transition-colors w-fit">
              Explore This Course <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Domain Card 3 */}
          <div className="stagger-item bg-white p-10 rounded-[2rem] border border-[#E8E4D9] hover:border-[#004b87]/30 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full cursor-pointer">
            <div className="w-16 h-16 bg-[#F4F0E6] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#004b87] transition-colors duration-500 float-icon" style={{ animationDelay: "0.4s" }}>
              <Stethoscope className="w-8 h-8 text-[#004b87] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-4 leading-tight text-[#1C2329]">Advanced Patient Care</h3>
            <p className="text-zinc-600 mb-8 leading-relaxed flex-grow">Special training for nurses and helpers who want to learn how to care for very sick patients, heart problems, or children.</p>
            <Link href="/programs#clinical" className="text-sm font-bold text-[#F28500] flex items-center gap-2 group-hover:text-[#004b87] transition-colors w-fit">
              Explore This Course <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
      </section>

      {/* --- 4. GLOBAL RECOGNITION & FINAL CTA --- */}
      <section className="bg-[#0A0D14] text-white py-24 rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 shadow-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#004b87] rounded-full blur-[150px] opacity-30 -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 pop-card flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          <div className="max-w-2xl text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center float-icon">
                <Award className="w-8 h-8 text-[#F28500]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">Certificates <span className="text-[#F28500]">Hospitals Trust.</span></h2>
            </div>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Whether you are just starting your first hospital job, or you are already a manager wanting to learn more, our courses follow strict worldwide rules. This means your certificate is trusted everywhere.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm font-medium text-zinc-300 max-w-lg mx-auto lg:mx-0 text-left">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F28500]" /> Beginner Classes</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F28500]" /> Advanced Masterclasses</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F28500]" /> Expert Certificates</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#F28500]" /> Custom Hospital Training</li>
            </ul>
          </div>
          
          {/* Floating CTA Box */}
          <div className="w-full lg:w-auto shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] text-center shadow-2xl hover:-translate-y-2 transition-transform duration-500">
            <h3 className="text-2xl font-bold mb-3 text-white">Ready to learn?</h3>
            <p className="text-zinc-400 mb-8">Join the next group of students today.</p>
            
            <Link 
              href="/programs"
              className="group relative overflow-hidden bg-white text-[#0A0D14] px-10 py-4 text-sm font-black uppercase tracking-widest rounded-xl shadow-xl block w-full hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-shadow"
            >
              <span className="absolute inset-0 w-full h-full bg-[#F28500] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
                Find Your Course <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}