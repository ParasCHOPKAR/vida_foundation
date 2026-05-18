"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  ShieldCheck, 
  Stethoscope, 
  Microscope, 
  Award, 
  ArrowRight,
  ChevronRight
} from "lucide-react";

// IMPORTANT: Import the Language Switcher component 
// (Adjust to "./LanguageSwitcher" if they are in the exact same folder)
import LanguageSwitcher from "./LanguageSwitcher"; 

// --- ORGANIZED SYLLABUS DATA WITH UPDATED SEPARATE PAGE LINKS ---
const programCategories = [
  {
    id: "core",
    title: "Infection Control & CSSD",
    icon: ShieldCheck,
    desc: "Core certifications for hospital safety and sterilization.",
    courses: [
      { name: "Advanced Certification in Infection Prevention & Control (IPC)", href: "/courses/ipc" },
      { name: "Advanced Certification in CSSD & Sterilization Technology", href: "/courses/cssd" },
      { name: "Sterilization Science & Validation Program", href: "/courses/sterilization-science" },
      { name: "Hospital Hygiene & Environmental Cleaning", href: "/courses/hospital-hygiene" },


      { name: "Paramedical & Nursing Skill Development  ", href: "/courses/nursing-skill-development" },


    ]
  },
  {
    id: "nursing",
    title: "Advanced Clinical & Nursing",
    icon: Stethoscope,
    desc: "Specialized training for acute care and critical situations.",
    courses: [
      { name: "Acute Clinical Care – Nursing", href: "/courses/acute-clinical-care" },
  
      { name: "Advanced Decision Making & Problem Solving – Nursing ", href: "/courses/advanced-decision-making" },
      { name: "Advanced ECG Interpretation – Nursing ", href: "/courses/advanced-ecg-interpretation" },

      { name: "Cancer Care – Nursing ", href: "/courses/cancer-care" },
      { name: "Cardiac Care – Nursing ", href: "/courses/cardiac-care" },
    ]
  },
  {
    id: "allied",
    title: "Allied Health & Specialized Care",
    icon: Microscope,
    desc: "Technical and specialized patient care protocols.",
    courses: [
      { name: "Biomedical Equipment Handling & Maintenance", href: "/courses/biomedical-equipment" },
      { name: "Acute Non-Invasive Ventilation (NIV)", href: "/courses/acute-non-invasive-ventilation" },
      { name: "Advanced Wound Management", href: "/courses/advanced-wound-management" },


      { name: "Cardiology in Out-of-Hospital Care", href: "/courses/cardiology-out-of-hospital-care" },


      { name: "Care of Older People in Urgent Care", href: "/courses/geriatric-urgent-care" },
      { name: "Paediatric Mental & Physical Growth, Health and Psychology", href: "/courses/pediatric-acute-care" },
    ]
  },
  {
    id: "leadership",
    title: "Quality & Leadership",
    icon: Award,
    desc: "Management, accreditation, and professional growth.",
    courses: [
      { name: "Quality, NABH & Healthcare Accreditation", href: "/courses/nabh-accreditation" },
      { name: "Leadership & Professional Development", href: "/courses/leadership-development" },
    ]
  }
];

export default function Navbar() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP();
  
  // State to track which category is currently hovered in the mega menu
  const [activeCategory, setActiveCategory] = useState(programCategories[0].id);

  // GSAP animation for the Mega Menu
  const handleMouseEnter = contextSafe(() => {
    gsap.to(dropdownRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
      display: "block",
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(dropdownRef.current, {
      autoAlpha: 0,
      y: -15, 
      duration: 0.25,
      ease: "power2.in",
      display: "none",
    });
    // Optional: Reset category when menu closes
    // setActiveCategory(programCategories[0].id); 
  });

  // Get the currently active category data to render on the right side
  const activeData = programCategories.find(cat => cat.id === activeCategory);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/95 border-b border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-28 h-26">
            <Image 
              src="/vida-logo -01.png" 
              alt="VIDA Foundation Logo" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Center: Main Menu */}
        <div className="hidden lg:flex items-center gap-10 font-bold text-[13px] uppercase tracking-wider text-[#1C2329]">
          <Link href="/" className="hover:text-[#F28500] transition-colors duration-300">
            Home
          </Link>

          {/* Programs Mega Menu Trigger */}
          <div 
            className="relative h-20 flex items-center cursor-pointer group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="group-hover:text-[#F28500] transition-colors duration-300 flex items-center gap-1.5">
              Our Programs
              <svg className="w-4 h-4 text-zinc-400 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            
            {/* --- THE MEGA MENU DROPDOWN --- */}
            <div 
              ref={dropdownRef}
              className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-zinc-200 opacity-0 hidden overflow-hidden"
              style={{ transform: "translate(-50%, -15px)" }} 
            >
              <div className="flex min-h-[450px]">
                
                {/* Left Pane: Categories */}
                <div className="w-1/3 bg-zinc-50 border-r border-zinc-200 p-6 flex flex-col gap-2">
                  <h3 className="text-[10px] font-black text-zinc-400 tracking-[0.2em] uppercase mb-4 ml-3">Academic Domains</h3>
                  
                  {programCategories.map((category) => {
                    const Icon = category.icon;
                    const isActive = activeCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onMouseEnter={() => setActiveCategory(category.id)}
                        className={`w-full text-left px-4 py-4 rounded-xl flex items-center justify-between transition-all duration-300 ${
                          isActive 
                            ? "bg-white shadow-sm border border-zinc-200" 
                            : "hover:bg-zinc-100 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? "bg-[#004b87] text-white" : "bg-zinc-200 text-zinc-500"}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className={`text-xs font-bold leading-tight ${isActive ? "text-[#004b87]" : "text-zinc-600"}`}>
                            {category.title}
                          </span>
                        </div>
                        {isActive && <ChevronRight className="w-4 h-4 text-[#F28500]" />}
                      </button>
                    )
                  })}
                </div>

                {/* Right Pane: Course List */}
                <div className="w-2/3 bg-white p-8 relative">
                  {activeData && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="mb-8 pb-6 border-b border-zinc-100">
                        <h2 className="text-xl font-black text-[#1C2329] capitalize tracking-normal mb-2">
                          {activeData.title}
                        </h2>
                        <p className="text-sm text-zinc-500 font-medium normal-case tracking-normal">
                          {activeData.desc}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-x-6 gap-y-4">
                        {activeData.courses.map((course, idx) => (
                          <Link 
                            key={idx} 
                            href={course.href}
                            className="group flex items-start gap-3 p-3 -ml-3 rounded-xl hover:bg-zinc-50 transition-colors"
                          >
                            <div className="mt-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F28500] opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all" />
                            </div>
                            <span className="text-sm font-semibold text-zinc-700 group-hover:text-[#004b87] leading-snug normal-case tracking-normal">
                              {course.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Right Pane Footer Link */}
                  <div className="absolute bottom-8 right-8">
                    {/* <Link href="/courses" className="inline-flex items-center gap-2 text-xs font-bold text-[#004b87] hover:text-[#F28500] transition-colors bg-[#F4F0E6] px-4 py-2 rounded-full normal-case tracking-normal">
                      Explore All Courses <ArrowRight className="w-3 h-3" />
                    </Link> */}
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Link href="/methodology" className="hover:text-[#F28500] transition-colors duration-300">
            Methodology
          </Link>
          
          <Link href="/about" className="hover:text-[#F28500] transition-colors duration-300">
            About Us
          </Link>
        </div>

        {/* --- Right: Language Switcher & CTA Button --- */}
        <div className="flex items-center gap-4">
          
          {/* Automatic Language Translator Dropdown */}
          <LanguageSwitcher />

          <Link 
            href="/enquire"
            className="group relative overflow-hidden bg-[#004b87] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_10px_20px_rgba(0,75,135,0.2)] hover:shadow-[0_10px_25px_rgba(242,133,0,0.3)] transition-shadow"
          >
            <span className="absolute inset-0 w-full h-full bg-[#F28500] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Enquire Now
            </span>
          </Link>
        </div>

      </div>
    </nav>
  );
}