"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle2, 
  ShieldPlus, 
  BookOpen, 
  GraduationCap, 
  Award,
  Clock,
  Sparkles,
  ChevronRight,
  Globe,
  MonitorPlay,
  Briefcase // Icon for the leadership and professional theme
} from "lucide-react";

// --- LEADERSHIP & PROFESSIONAL DEVELOPMENT SYLLABUS DATA ---
const leadershipModules = [
  {
    title: "Leadership Skills",
    topics: [
      "Leadership styles in healthcare",
      "Effective clinical decision making",
    ],
  },
  {
    title: "Team Management",
    topics: [
      "Conflict resolution strategies",
      "Interdisciplinary team coordination",
    ],
  },
  {
    title: "Time & Stress Management",
    topics: [
      "Maintaining work-life balance",
      "Productivity and delegation tools",
    ],
  },
  {
    title: "Career Development",
    topics: [
      "Professional resume building",
      "Advanced interview skills",
    ],
  },
];

export default function LeadershipDevelopmentPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Ambient floating animation for background blobs
    gsap.to(".ambient-blob", {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      rotation: "random(-10, 10)",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

    // Hero Reveal
    tl.fromTo(
      ".hero-element",
      { y: 40, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.15, ease: "expo.out" }
    );

    // Cards Stagger
    gsap.fromTo(
      ".module-card",
      { y: 60, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power3.out",
        delay: 0.4
      }
    );

    // Sidebar Widgets Stagger
    gsap.fromTo(
      ".sidebar-widget",
      { x: 30, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power3.out",
        delay: 0.6
      }
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F4F7FB] pb-24 selection:bg-[#F28500] selection:text-white font-sans">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#021d38] text-white pt-32 pb-24 px-6 overflow-hidden">
        
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="ambient-blob absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#004b87] rounded-full blur-[120px] opacity-60 mix-blend-screen" />
          <div className="ambient-blob absolute top-20 -left-20 w-[400px] h-[400px] bg-[#F28500] rounded-full blur-[150px] opacity-40 mix-blend-screen" />
          <ShieldPlus className="absolute -bottom-20 right-10 w-[400px] h-[400px] text-white/5 rotate-12" strokeWidth={0.5} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-8">
            <Link href="/courses" className="hero-element inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-all hover:-translate-x-2 font-medium text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md w-fit">
              <ArrowLeft className="w-4 h-4" /> Back to Programs
            </Link>
            
            <div className="hero-element flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-gradient-to-r from-[#F28500] to-[#ffab57] text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(242,133,0,0.4)] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Management Excellence
              </span>
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Professional Growth
              </span>
            </div>
            
            <h1 className="hero-element text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              Leadership & Professional <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F28500] via-[#ffb65c] to-[#F28500] bg-[length:200%_auto] animate-gradient">
                Development
              </span>
            </h1>
            
            <p className="hero-element text-lg md:text-xl text-blue-100/80 max-w-2xl mb-10 leading-relaxed font-light">
              Empower yourself with advanced leadership skills, effective team management strategies, and professional growth tools to excel in healthcare administration.
            </p>
            
            <div className="hero-element flex flex-col sm:flex-row gap-4">
              <button className="group relative overflow-hidden bg-white text-[#021d38] font-black py-4 px-8 rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_40px_rgba(242,133,0,0.4)] transition-all flex items-center justify-center gap-3">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#F28500] to-[#ffab57] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <BookOpen className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" /> 
                <span className="relative z-10 group-hover:text-white transition-colors tracking-wide">Enroll in this Course</span>
              </button>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="hidden lg:block lg:col-span-4 hero-element">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F28500] rounded-full blur-[60px] opacity-40" />
              <Briefcase className="w-16 h-16 text-[#F28500] mb-6 relative z-10" />
              <h3 className="text-2xl font-black text-white mb-2 relative z-10">Executive Leadership</h3>
              <p className="text-blue-100/70 text-sm leading-relaxed mb-6 relative z-10">Develop the soft skills and strategic mindset required to lead high-performing clinical and administrative teams.</p>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
                <div className="w-full h-full bg-gradient-to-r from-[#F28500] to-[#ffb65c]" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Syllabus */}
        <div className="lg:col-span-8 -mt-10 relative z-20">
          
          <div className="bg-white rounded-t-3xl p-8 pb-4 flex items-center justify-between border-b border-slate-100 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
            <h2 className="text-2xl md:text-3xl font-black text-[#021d38] flex items-center gap-3 tracking-tight">
              <GraduationCap className="w-8 h-8 text-[#F28500]" />
              Course Syllabus
            </h2>
          </div>
          
          <div className="bg-white rounded-b-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-8 pt-6 space-y-6">
            {leadershipModules.map((module, index) => {
              const moduleNum = (index + 1).toString().padStart(2, '0');
              
              return (
                <div 
                  key={index} 
                  className="module-card group relative bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-[#F28500]/40 hover:bg-white hover:shadow-[0_15px_40px_rgba(0,75,135,0.08)] transition-all duration-500 overflow-hidden"
                >
                  {/* Premium Watermark Number */}
                  <div className="absolute -right-4 -top-8 text-[120px] font-black text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none select-none z-0">
                    {moduleNum}
                  </div>

                  <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">
                    
                    {/* Left: Module Title */}
                    <div className="md:w-1/3">
                      <span className="text-[#F28500] font-black text-sm tracking-widest uppercase mb-2 block">
                        Module {moduleNum}
                      </span>
                      <h3 className="font-extrabold text-[#021d38] text-xl leading-tight group-hover:text-[#004b87] transition-colors">
                        {module.title}
                      </h3>
                    </div>

                    {/* Right: Topics List */}
                    <div className="md:w-2/3">
                      <ul className="space-y-3">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 group/item">
                            <div className="mt-1 w-5 h-5 rounded-full bg-[#F28500]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#F28500] transition-colors duration-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#F28500] group-hover/item:text-white transition-colors" />
                            </div>
                            <span className="text-[15px] font-medium leading-snug group-hover/item:text-slate-900 transition-colors">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Sticky Sidebar */}
        <div className="lg:col-span-4 space-y-8 relative lg:mt-6">
          <div className="sticky top-28 space-y-8">
            
            {/* Quick Stats Widget */}
            <div className="sidebar-widget bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 p-8">
              <h3 className="font-black text-lg text-[#021d38] mb-6 uppercase tracking-wider text-center">Course Overview</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#004b87]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Duration</p>
                    <p className="font-bold text-[#021d38]">4 Weeks</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#F28500]">
                    <MonitorPlay className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Format</p>
                    <p className="font-bold text-[#021d38]">Hybrid / Online</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Language</p>
                    <p className="font-bold text-[#021d38]">English, Hindi, Marathi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Methodology Widget */}
            <div className="sidebar-widget bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 p-8">
              <h3 className="font-black text-xl text-[#021d38] mb-6 flex items-center gap-2">
                Methodology
              </h3>
              <ul className="space-y-3">
                {[
                  "Leadership Case Studies",
                  "Conflict Resolution Roleplay",
                  "Resume & Interview Workshops",
                  "Time Management Scenarios",
                  "Final Assessments & Certification"
                ].map((item, i) => (
                  <li key={i} className="group flex items-center gap-3 text-slate-600 font-medium p-3 hover:bg-slate-50 rounded-xl transition-all cursor-default border border-transparent hover:border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-400 group-hover:bg-[#004b87] group-hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <span className="text-sm group-hover:text-[#021d38]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certification Widget CTA */}
            <div className="sidebar-widget group bg-[#021d38] rounded-3xl shadow-[0_20px_40px_rgba(2,29,56,0.3)] p-8 text-white text-center relative overflow-hidden cursor-pointer">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F28500] rounded-full blur-[70px] opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#004b87] rounded-full blur-[50px] opacity-50" />
              
              <Award className="w-16 h-16 text-[#F28500] mx-auto mb-6 relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-black text-2xl mb-3 relative z-10">Download Brochure</h3>
              <p className="text-blue-100/70 mb-8 font-light text-sm leading-relaxed relative z-10">
                Get complete details on modules, fees, and global career opportunities.
              </p>
              <button className="relative z-10 w-full bg-gradient-to-r from-[#F28500] to-[#ffb65c] text-white font-black py-4 rounded-xl text-sm transition-all duration-300 shadow-lg group-hover:shadow-[0_0_25px_rgba(242,133,0,0.5)] uppercase tracking-widest flex justify-center items-center gap-2">
                Get PDF <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}