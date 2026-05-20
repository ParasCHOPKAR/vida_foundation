"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  ArrowLeft,
  ArrowRight,
  Download,
  FileText,
  GraduationCap,
  Microscope,
  ShieldCheck,
  Award,
  Users,
  Briefcase,
  CheckCircle2,
  Quote
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FounderProfilePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-element",
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: "expo.out" }
    );
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#F4F7FB] text-zinc-950 pb-20 overflow-hidden font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#021d38] text-white pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start">
            <Link href="/about" className="hero-element inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-all hover:-translate-x-2 font-medium text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
              <ArrowLeft className="w-4 h-4" /> Back to About Us
            </Link>

            <h1 className="hero-element text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-4">
              Dr. Onkar A. Yadav
            </h1>
            
            <p className="hero-element text-lg text-blue-100/80 leading-relaxed mb-10 max-w-2xl font-light">
              Dr. Onkar A. Yadav is a healthcare-focused leader specializing in medical sterilization, CSSD systems, and infection prevention solutions.
            </p>

            <div className="hero-element flex flex-wrap items-center gap-4">
              {/* BUTTON 1: DOWNLOAD BIO */}
              <a 
                href="/dr-yadav-bio.pdf" 
                download="Dr_Onkar_Yadav_Bio.pdf"
                className="bg-[#F28500] hover:bg-[#d67300] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_20px_rgba(242,133,0,0.3)] flex items-center gap-2"
              >
                <FileText className="w-5 h-5" /> View Official Bio
              </a>

              {/* BUTTON 2: DOWNLOAD HANDBOOK */}
              <a 
                href="/sterilization-handbook.pdf" 
                download="Vida_Handbook.pdf"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md flex items-center gap-2"
              >
                <Download className="w-5 h-5" /> Download Handbook
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 hero-element relative">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <Image 
                src="/director_01.png"
                alt="Dr. Onkar A. Yadav"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES TICKER --- */}
      <div className="bg-[#004b87] py-4 border-y border-white/10 shadow-inner overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-blue-200/80">
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F28500]" /> Scientific Rigor</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F28500]" /> Ethical Responsibility</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F28500]" /> Empathy</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F28500]" /> Long-term Value</span>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Column: Education & Quote */}
        <div className="lg:col-span-4 space-y-8">
          
          <div className="pop-card bg-white rounded-[2rem] p-8 shadow-sm border border-[#E8E4D9]">
            <h3 className="text-xl font-black text-[#021d38] mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#F28500]" />
              Academic Foundation
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed mb-6">
              A strong foundation in pharmaceutical sciences, biomedical research, and healthcare ethics, supporting evidence-based decision-making.
            </p>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-zinc-100">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#004b87]" />
                <h4 className="font-bold text-[#1C2329]">Postgraduate Diploma</h4>
                <p className="text-sm text-zinc-500">Medico-Legal Systems</p>
                <p className="text-xs font-bold text-[#F28500] mt-1">Symbiosis University (2021)</p>
              </div>
              <div className="relative pl-6 border-l-2 border-zinc-100">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#004b87]" />
                <h4 className="font-bold text-[#1C2329]">Postgraduate Degree</h4>
                <p className="text-sm text-zinc-500">Pharmacology</p>
                <p className="text-xs font-bold text-[#F28500] mt-1">University of Hertfordshire (2009)</p>
              </div>
              <div className="relative pl-6 border-l-2 border-zinc-100">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#004b87]" />
                <h4 className="font-bold text-[#1C2329]">Bachelor of Pharmacy</h4>
                <p className="text-xs font-bold text-[#F28500] mt-1">University of Pune (2006)</p>
              </div>
            </div>
          </div>

          <div className="pop-card bg-[#F4F0E6] rounded-[2rem] p-8 border border-[#D9D4C7] relative">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-[#DF8618]/20" />
            <p className="text-[#1C2329] font-medium leading-relaxed italic relative z-10">
              &quot;Dr. Onkar A. Yadav&apos;s leadership reflects a commitment to regulated healthcare excellence, combining academic insight, operational discipline, and governance integrity. His work continues to shape Vida Life Sciences as a responsible partner for hospitals, healthcare institutions, and regulatory stakeholders.&quot;
            </p>
          </div>

        </div>

        {/* Right Column: Detailed Sections */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Section: Leadership Role */}
          <div className="pop-card">
            <h2 className="text-3xl font-black text-[#021d38] mb-6 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-[#004b87]" /> Leadership Role at Vida
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              As Chairman and Managing Director, Dr. Yadav holds overall strategic and operational responsibility, driving the organization&apos;s mission to elevate healthcare safety.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Clinical governance and infection prevention oversight",
                "Strategic planning and organizational direction",
                "Regulatory alignment and compliance supervision",
                "Business development and institutional partnerships",
                "Oversight of CSSD system design and deployment",
                "Financial discipline and long-term sustainability"
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-[#E8E4D9] flex items-start gap-3">
                  <div className="mt-1 shrink-0"><CheckCircle2 className="w-5 h-5 text-[#F28500]" /></div>
                  <span className="text-sm font-semibold text-zinc-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-zinc-200" />

          {/* Section: Infection Prevention & CSSD */}
          <div className="pop-card">
            <h2 className="text-3xl font-black text-[#021d38] mb-6 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#004b87]" /> Infection Prevention & CSSD
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              A central focus of Dr. Yadav&apos;s work is infection prevention and control within hospital Central Sterile Services Department (CSSD) environments.
            </p>
            <div className="bg-[#021d38] text-white rounded-[2rem] p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F28500] rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/4" />
             
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-blue-50/90"><span className="w-2 h-2 rounded-full bg-[#F28500] shrink-0" /> Designing and implementing infection control programs.</li>
                <li className="flex items-center gap-3 text-blue-50/90"><span className="w-2 h-2 rounded-full bg-[#F28500] shrink-0" /> Developing sterilization workflows and monitoring systems.</li>
                <li className="flex items-center gap-3 text-blue-50/90"><span className="w-2 h-2 rounded-full bg-[#F28500] shrink-0" /> Supporting hospitals in audit readiness and outbreak prevention.</li>
                <li className="flex items-center gap-3 text-blue-50/90"><span className="w-2 h-2 rounded-full bg-[#F28500] shrink-0" /> Educating healthcare professionals on best practices.</li>
              </ul>
            </div>
          </div>

          <hr className="border-zinc-200" />

          {/* Section: Scientific Contributions */}
          <div className="pop-card">
            <h2 className="text-3xl font-black text-[#021d38] mb-6 flex items-center gap-3">
              <Microscope className="w-8 h-8 text-[#004b87]" /> Scientific Contributions
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              Dr. Yadav has remained actively engaged in scientific research, reinforcing his role as a science-driven healthcare leader grounded in validated research.
            </p>
            <div className="bg-white p-8 rounded-[2rem] border border-[#E8E4D9] shadow-sm">
              <ul className="space-y-4 text-zinc-700 font-medium">
                <li className="flex items-start gap-3"><span className="text-[#F28500] mt-1 font-bold">01.</span> Peer-reviewed publication on moist heat disinfection.</li>
                <li className="flex items-start gap-3"><span className="text-[#F28500] mt-1 font-bold">02.</span> Research on nitric oxide modulation.</li>
                <li className="flex items-start gap-3"><span className="text-[#F28500] mt-1 font-bold">03.</span> Physiological responses to environmental stimuli.</li>
                <li className="flex items-start gap-3"><span className="text-[#F28500] mt-1 font-bold">04.</span> International academic presentations.</li>
              </ul>
            </div>
          </div>

          {/* Section: Governance */}
          <div className="pop-card mt-12 bg-[#EAE6DA] rounded-[2rem] p-8 md:p-12 border border-[#D9D4C7] shadow-sm">
            <h2 className="text-2xl font-black text-[#1C2329] mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-[#F28500]" /> Governance & People-Centric Leadership
            </h2>
            <p className="text-zinc-700 leading-relaxed font-medium text-lg italic">
              &quot;Dr. Yadav is recognized for a leadership philosophy emphasizing workforce stability, ethical responsibility, and long-term organizational trust. His approach prioritizes building stable teams through trust and accountability, maintaining transparency, and balancing growth objectives with human responsibility.&quot;
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}