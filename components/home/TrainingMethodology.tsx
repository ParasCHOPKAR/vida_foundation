"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  MonitorPlay, 
  Stethoscope, 
  Activity, 
  FileText, 
  ClipboardCheck,
  CheckCircle2
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const methodologies = [
  {
    id: "01",
    title: "Interactive Lectures",
    description: "Expert-led digital and physical classroom sessions focusing on core theoretical frameworks, ensuring a deep understanding of medical sciences.",
    highlights: ["Evidence-based curriculum", "Multimedia integration", "Live Q&A sessions"],
    icon: MonitorPlay,
    color: "text-[#4a90e2]", 
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(74,144,226,0.3)]",
    border: "group-hover:border-[#4a90e2]/50"
  },
  {
    id: "02",
    title: "Practical Demonstrations",
    description: "Hands-on exposure to medical equipment, CSSD instruments, and patient care tools under the strict supervision of veteran clinical instructors.",
    highlights: ["State-of-the-art labs", "CSSD equipment handling", "Real-time feedback"],
    icon: Stethoscope,
    color: "text-[#F28500]",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(242,133,0,0.3)]",
    border: "group-hover:border-[#F28500]/50"
  },
  {
    id: "03",
    title: "Simulation Training",
    description: "Controlled, zero-risk environments where students practice complex clinical protocols, building essential muscle memory and critical reflexes.",
    highlights: ["High-fidelity mannequins", "Crisis resource management", "Zero-risk environment"],
    icon: Activity,
    color: "text-[#4a90e2]",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(74,144,226,0.3)]",
    border: "group-hover:border-[#4a90e2]/50"
  },
  {
    id: "04",
    title: "Case Studies & Scenarios",
    description: "Analyzing real-world healthcare crises, infection outbreaks, and equipment failures to develop advanced, rapid problem-solving skills.",
    highlights: ["Outbreak investigation", "Root cause analysis", "Collaborative problem-solving"],
    icon: FileText,
    color: "text-[#F28500]",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(242,133,0,0.3)]",
    border: "group-hover:border-[#F28500]/50"
  },
  {
    id: "05",
    title: "Assessments & Certification",
    description: "Rigorous evaluation combining theoretical exams and practical skill checks to ensure absolute competency before awarding VIDA credentials.",
    highlights: ["Objective Structured Clinical Exams", "Written proficiency tests", "NABH standard compliance"],
    icon: ClipboardCheck,
    color: "text-zinc-300",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)]",
    border: "group-hover:border-zinc-500/50"
  }
];

export default function TrainingMethodology() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".scroll-panel");
    const track = scrollWrapperRef.current;

    if (!track) return;

    let mm = gsap.matchMedia();

    // DESKTOP: Horizontal Scroll Pinning
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1, 
          snap: 1 / (sections.length - 1), 
          end: () => `+=${track.offsetWidth * 1.5}`, 
        }
      });

      // Horizontal translation
      tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
      }, 0);

      // Progress bar fill
      tl.to(".progress-fill", {
        scaleX: 1,
        ease: "none",
      }, 0);

      // Parallax numbers
      gsap.to(".bg-number", {
        x: 120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.offsetWidth * 1.5}`,
        }
      });
    });

    // MOBILE: Vertical Fade-Up
    mm.add("(max-width: 767px)", () => {
      sections.forEach((sec: any) => {
        gsap.fromTo(sec, 
          { autoAlpha: 0, y: 50 },
          { 
            autoAlpha: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              toggleActions: "play reverse play reverse"
            }
          }
        );
      });
    });

    return () => mm.revert(); 
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-[#0A0D14] text-white overflow-hidden relative min-h-screen flex flex-col justify-center py-24 md:py-0">
      
      {/* Subtle Architectural Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#004b87]/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Container */}
      <div className="relative z-20 w-full px-6 md:absolute md:top-24 md:left-0 pointer-events-none mb-12 md:mb-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28500] mb-4 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#F28500]" /> PEDAGOGY
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05]">
              Our Training <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a90e2] to-[#F28500]">
                Methodology.
              </span>
            </h3>
          </div>
          <p className="text-zinc-400 max-w-sm text-sm font-medium leading-relaxed pb-2">
            A comprehensive, 5-step learning framework bridging the gap between theoretical knowledge and practical clinical application.
          </p>
        </div>
      </div>

      {/* Cards Wrapper */}
      <div 
        ref={scrollWrapperRef}
        className="flex flex-col md:flex-row md:h-[60vh] md:min-h-[500px] md:mt-40 items-center relative z-10 w-full gap-8 md:gap-0"
        style={{ width: "100%", md: { width: `${methodologies.length * 100}vw` } } as any}
      >
        {methodologies.map((method) => {
          const Icon = method.icon;
          return (
            <div 
              key={method.id} 
              className="scroll-panel w-full md:w-screen md:h-full flex items-center justify-center px-6 shrink-0"
            >
              <div className="relative w-full max-w-2xl group cursor-default">
                
                {/* === UPDATED BACKGROUND NUMBER === */}
                {/* Larger, visible, and featuring a beautiful gradient fade */}
                <div className="bg-number hidden md:block absolute -top-24 -left-12 text-[18rem] font-black leading-none select-none -z-10 transition-all duration-700 bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-transparent group-hover:from-white/40 group-hover:to-white/5 group-hover:-translate-y-4">
                  {method.id}
                </div>
                
                {/* Modern Glassmorphism Card */}
                <div className={`bg-[#11141D]/80 backdrop-blur-xl border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] p-8 md:p-12 rounded-3xl transition-all duration-500 ${method.glow} ${method.border} relative overflow-hidden`}>
                  
                  {/* Inner Card Top Gradient Line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
                    
                    {/* Left: Icon & Title */}
                    <div className="md:w-[55%]">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-[#1A1F2D] border border-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1A1F2D]/50 transition-all duration-500 shadow-lg">
                          <Icon className={`w-7 h-7 ${method.color}`} />
                        </div>
                        <span className="md:hidden text-4xl font-black text-white/10">{method.id}</span>
                      </div>
                      
                      <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-white/95">{method.title}</h4>
                      <p className="text-zinc-400 leading-[1.7] text-sm font-medium">
                        {method.description}
                      </p>
                    </div>

                    {/* Right: Divider & Highlights */}
                    <div className="hidden md:block w-px h-48 bg-gradient-to-b from-white/10 via-white/5 to-transparent self-center" />
                    
                    <div className="md:w-[45%] w-full pt-6 md:pt-0 border-t border-white/5 md:border-none">
                      <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">Key Components</h5>
                      <ul className="space-y-5">
                        {method.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                            <CheckCircle2 className={`w-5 h-5 shrink-0 ${method.color} opacity-90`} />
                            <span className="leading-tight pt-0.5">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Global Bottom Progress Bar (Hidden on Mobile) */}
      <div className="hidden md:flex absolute bottom-0 left-0 w-full h-16 bg-[#0A0D14]/90 backdrop-blur-md border-t border-white/5 z-20 items-center px-12">
        <div className="max-w-7xl mx-auto w-full flex items-center gap-6">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 shrink-0">Scroll</span>
          
          {/* Progress Track */}
          <div className="relative w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
            {/* Progress Fill (Animated via GSAP) */}
            <div className="progress-fill absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#4a90e2] to-[#F28500] origin-left scale-x-0" />
          </div>
          
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 shrink-0">Explore</span>
        </div>
      </div>

    </section>
  );
}