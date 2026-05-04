"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP();

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
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center">
          {/* Increased size to accommodate the globe and text properly */}
          <div className="relative w-48 h-46">
            <Image 
              src="/vida-logo.png" // Ensure your logo file is named exactly this in the public folder
              alt="VIDA Foundation Logo" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Center: Main Menu */}
        <div className="hidden lg:flex items-center gap-10 font-medium text-[15px] text-zinc-700">
          <Link href="/" className="hover:text-[#004b87] transition-colors duration-300">
            Home
          </Link>

          {/* Programs Mega Menu Trigger */}
          <div 
            className="relative h-24 flex items-center cursor-pointer group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="group-hover:text-[#004b87] transition-colors duration-300 flex items-center gap-1">
              Programs
              <svg className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            
            {/* The Mega Menu Dropdown */}
            <div 
              ref={dropdownRef}
              className="absolute top-[96px] left-1/2 -translate-x-1/2 w-[850px] bg-white border border-zinc-200 shadow-2xl opacity-0 hidden"
              style={{ transform: "translate(-50%, -15px)" }} 
            >
              <div className="grid grid-cols-3 gap-0">
                
                {/* Column 1: Core Certifications */}
                <div className="p-8 border-r border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                  <h3 className="text-xs font-bold text-[#F28500] tracking-widest uppercase mb-5">Core Certifications</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/programs#ipc" className="block text-sm text-zinc-800 hover:text-[#004b87] leading-snug">
                        Advanced Certification in Infection Prevention & Control
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs#cssd" className="block text-sm text-zinc-800 hover:text-[#004b87] leading-snug">
                        Advanced Certification in CSSD & Sterilization Technology
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs#biomedical" className="block text-sm text-zinc-800 hover:text-[#004b87] leading-snug">
                        Biomedical Equipment Handling & Maintenance
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 2: Clinical & Nursing */}
                <div className="p-8 border-r border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                  <h3 className="text-xs font-bold text-[#F28500] tracking-widest uppercase mb-5">Advanced Clinical</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/programs#acute-care" className="block text-sm text-zinc-800 hover:text-[#004b87] leading-snug">
                        Acute Clinical Care – Nursing
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs#ecg" className="block text-sm text-zinc-800 hover:text-[#004b87] leading-snug">
                        Advanced ECG Interpretation
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs#wound-care" className="block text-sm text-zinc-800 hover:text-[#004b87] leading-snug">
                        Advanced Wound Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs#pediatrics" className="block text-sm text-zinc-800 hover:text-[#004b87] leading-snug">
                        Paediatric Mental & Physical Growth
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3: Management & Custom */}
                <div className="p-8 hover:bg-zinc-50/50 transition-colors flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-[#F28500] tracking-widest uppercase mb-5">Management & Quality</h3>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/programs#nabh" className="block text-sm text-zinc-800 hover:text-[#004b87] leading-snug">
                          Quality, NABH & Healthcare Accreditation
                        </Link>
                      </li>
                      <li>
                        <Link href="/programs#leadership" className="block text-sm text-zinc-800 hover:text-[#004b87] leading-snug">
                          Leadership & Professional Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/programs#hygiene" className="block text-sm text-zinc-800 hover:text-[#004b87] leading-snug">
                          Hospital Hygiene & Environmental Cleaning
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
              
              {/* Dropdown Footer */}
              <div className="bg-zinc-50 p-5 border-t border-zinc-200 flex justify-between items-center px-8">
                <p className="text-xs text-zinc-500">Explore our comprehensive curriculum tailored for healthcare excellence.</p>
                <Link href="/programs" className="text-sm font-bold text-[#004b87] hover:text-[#F28500] transition-colors flex items-center gap-2">
                  View All Programs <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/methodology" className="hover:text-[#004b87] transition-colors duration-300">
            Methodology & Certification
          </Link>
          
          <Link href="/about" className="hover:text-[#004b87] transition-colors duration-300">
            About Us
          </Link>
        </div>

        {/* Right: CTA Button (Using Brand Colors) connected to /enquire */}
        {/* Base is Brand Blue, hover slide is Brand Orange */}
        <Link 
          href="/enquire"
          className="group relative overflow-hidden bg-[#004b87] text-white px-8 py-3 text-sm font-bold uppercase tracking-wider rounded-sm shadow-md"
        >
          <span className="absolute inset-0 w-full h-full bg-[#F28500] -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
          <span className="relative z-10 flex items-center justify-center gap-2">
            Enquire Now
          </span>
        </Link>

      </div>
    </nav>
  );
}