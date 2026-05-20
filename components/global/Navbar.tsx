"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  ShieldCheck, 
  Stethoscope, 
  Microscope, 
  Award, 
  ArrowRight,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

import LanguageSwitcher from "./LanguageSwitcher"; 

// --- ORGANIZED SYLLABUS DATA ---
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
      { name: "Paramedical & Nursing Skill Development", href: "/courses/nursing-skill-development" },
    ]
  },
  {
    id: "nursing",
    title: "Advanced Clinical & Nursing",
    icon: Stethoscope,
    desc: "Specialized training for acute care and critical situations.",
    courses: [
      { name: "Acute Clinical Care – Nursing", href: "/courses/acute-clinical-care" },
      { name: "Advanced Decision Making & Problem Solving", href: "/courses/advanced-decision-making" },
      { name: "Advanced ECG Interpretation", href: "/courses/advanced-ecg-interpretation" },
      { name: "Cancer Care – Nursing", href: "/courses/cancer-care" },
      { name: "Cardiac Care – Nursing", href: "/courses/cardiac-care" },
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

// --- ABOUT US DROPDOWN DATA ---
const aboutLinks = [
  { name: "Company Overview", href: "/about" },
  { name: "Board of Directors", href: "/board-of-directors" },
 
];

export default function Navbar() {
  // Refs
  const programsDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP();
  
  // State
  const [activeCategory, setActiveCategory] = useState(programCategories[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
  const [isAboutMobileOpen, setIsAboutMobileOpen] = useState(false); // Mobile About accordion state

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // --- DESKTOP PROGRAMS MEGA MENU ANIMATIONS ---
  const handleProgramsEnter = contextSafe(() => {
    gsap.to(programsDropdownRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.3,
      ease: "power3.out",
      display: "block",
    });
  });

  const handleProgramsLeave = contextSafe(() => {
    gsap.to(programsDropdownRef.current, {
      autoAlpha: 0,
      y: -10, 
      duration: 0.2,
      ease: "power2.in",
      display: "none",
    });
  });

  // --- DESKTOP ABOUT DROPDOWN ANIMATIONS ---
  const handleAboutEnter = contextSafe(() => {
    gsap.to(aboutDropdownRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.3,
      ease: "power3.out",
      display: "block",
    });
  });

  const handleAboutLeave = contextSafe(() => {
    gsap.to(aboutDropdownRef.current, {
      autoAlpha: 0,
      y: -10, 
      duration: 0.2,
      ease: "power2.in",
      display: "none",
    });
  });

  // --- MOBILE MENU ANIMATIONS ---
  const toggleMobileMenu = contextSafe(() => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power4.out"
      });
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => setIsMobileMenuOpen(false)
      });
      document.body.style.overflow = "unset";
    }
  });

  const toggleMobileCategory = (id: string) => {
    setActiveMobileCategory(activeMobileCategory === id ? null : id);
  };

  const activeData = programCategories.find(cat => cat.id === activeCategory);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/95 border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center relative z-50">
            <div className="relative w-24 sm:w-28 h-26">
              <Image 
                src="/logo-update-removebg-preview.png" 
                alt="VIDA Foundation Logo" 
                
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Center: Desktop Main Menu */}
          <div className="hidden lg:flex items-center gap-10 font-bold text-[13px] uppercase tracking-wider text-[#1C2329]">
            <Link href="/" className="hover:text-[#F28500] transition-colors duration-300">
              Home
            </Link>

            {/* --- PROGRAMS MEGA MENU --- */}
            <div 
              className="relative h-20 flex items-center cursor-pointer group"
              onMouseEnter={handleProgramsEnter}
              onMouseLeave={handleProgramsLeave}
            >
              <span className="group-hover:text-[#F28500] transition-colors duration-300 flex items-center gap-1.5">
                Our Programs
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:rotate-90 transition-transform duration-300" />
              </span>
              
              <div 
                ref={programsDropdownRef}
                className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-zinc-200 opacity-0 hidden overflow-hidden"
                style={{ transform: "translate(-50%, -10px)" }} 
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
                  </div>
                </div>
              </div>
            </div>

            <Link href="/methodology" className="hover:text-[#F28500] transition-colors duration-300">
              Methodology
            </Link>
            
            {/* --- ABOUT US DROPDOWN --- */}
            <div 
              className="relative h-20 flex items-center cursor-pointer group"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <span className="group-hover:text-[#F28500] transition-colors duration-300 flex items-center gap-1.5">
                About Us
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:rotate-90 transition-transform duration-300" />
              </span>
              
              <div 
                ref={aboutDropdownRef}
                className="absolute top-[80px] left-1/2 -translate-x-1/2 w-56 bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-zinc-200 opacity-0 hidden overflow-hidden"
                style={{ transform: "translate(-50%, -10px)" }} 
              >
                <div className="flex flex-col p-2">
                  {aboutLinks.map((link, idx) => (
                    <Link 
                      key={idx} 
                      href={link.href}
                      className="px-4 py-3 text-sm font-bold text-zinc-600 hover:text-[#004b87] hover:bg-zinc-50 rounded-xl transition-colors normal-case tracking-normal"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right: Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 relative z-50">
            
            <LanguageSwitcher />

            {/* Desktop Enquire Button */}
            <Link 
              href="/enquire"
              className="hidden lg:flex group relative overflow-hidden bg-[#004b87] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_10px_20px_rgba(0,75,135,0.2)] hover:shadow-[0_10px_25px_rgba(242,133,0,0.3)] transition-shadow"
            >
              <span className="absolute inset-0 w-full h-full bg-[#F28500] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Enquire Now
              </span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-[#021d38] hover:text-[#F28500] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </nav>

      {/* --- MOBILE FULL-SCREEN MENU --- */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 bg-white z-40 transform translate-x-full lg:hidden overflow-y-auto pt-24 pb-12 px-6 shadow-2xl"
      >
        <div className="flex flex-col gap-6 h-full">
          
          <Link href="/" onClick={toggleMobileMenu} className="text-xl font-black text-[#021d38] border-b border-zinc-100 pb-4">
            Home
          </Link>

          {/* Mobile Programs Accordion */}
          <div className="flex flex-col border-b border-zinc-100 pb-4">
            <h3 className="text-xl font-black text-[#021d38] mb-4">Our Programs</h3>
            
            <div className="flex flex-col gap-3 pl-2">
              {programCategories.map((category) => {
                const Icon = category.icon;
                const isExpanded = activeMobileCategory === category.id;
                
                return (
                  <div key={category.id} className="bg-zinc-50 rounded-xl overflow-hidden border border-zinc-100">
                    <button 
                      onClick={() => toggleMobileCategory(category.id)}
                      className="w-full flex items-center justify-between p-4 bg-white"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isExpanded ? "bg-[#004b87] text-white" : "bg-zinc-100 text-zinc-600"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`font-bold text-sm text-left ${isExpanded ? "text-[#004b87]" : "text-zinc-700"}`}>
                          {category.title}
                        </span>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isExpanded ? "rotate-90 text-[#F28500]" : ""}`} />
                    </button>
                    
                    {/* Expandable Course List */}
                    <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <div className="p-4 pt-0 flex flex-col gap-3">
                          {category.courses.map((course, idx) => (
                            <Link 
                              key={idx} 
                              href={course.href}
                              onClick={toggleMobileMenu}
                              className="text-sm font-medium text-zinc-600 pl-4 py-2 border-l-2 border-zinc-200 hover:border-[#F28500] hover:text-[#004b87] transition-all"
                            >
                              {course.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <Link href="/methodology" onClick={toggleMobileMenu} className="text-xl font-black text-[#021d38] border-b border-zinc-100 pb-4">
            Methodology
          </Link>
          
          {/* Mobile About Accordion */}
          <div className="flex flex-col border-b border-zinc-100 pb-4">
            <button 
              onClick={() => setIsAboutMobileOpen(!isAboutMobileOpen)}
              className="w-full flex items-center justify-between text-xl font-black text-[#021d38]"
            >
              About Us
              <ChevronRight className={`w-6 h-6 text-zinc-400 transition-transform duration-300 ${isAboutMobileOpen ? "rotate-90 text-[#F28500]" : ""}`} />
            </button>
            
            <div className={`grid transition-all duration-300 ease-in-out ${isAboutMobileOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="flex flex-col gap-3 pl-2">
                  {aboutLinks.map((link, idx) => (
                    <Link 
                      key={idx} 
                      href={link.href}
                      onClick={toggleMobileMenu}
                      className="text-sm font-bold text-zinc-600 pl-4 py-2 border-l-2 border-zinc-200 hover:border-[#F28500] hover:text-[#004b87] transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Enquire Button */}
          <div className="mt-auto pt-8">
            <Link 
              href="/enquire"
              onClick={toggleMobileMenu}
              className="w-full bg-[#004b87] text-white py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:bg-[#021d38] transition-colors"
            >
              Enquire Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}