"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden text-zinc-200">
      
      {/* Background Video (Optional: falls back to gradient if missing) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/vida-hero-02.mp4" type="video/mp4" />
      </video>

      {/* GRADIENT OVERLAY: 
        Deep Navy Blue on the left transitioning to Vibrant Orange on the right 
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#021326]/95 via-[#00396b]/85 to-[#d65f00]/90 z-10" />

      {/* Footer Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        
        {/* 4-Column Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Logo & Details */}
          <div className="space-y-8">
            {/* Logo in White Box */}
            <div className="bg-white p-3 rounded-md shadow-lg inline-block w-fit">
              <div className="relative w-40 h-16">
                <Image 
                  src="/vida-logo.png" 
                  alt="VIDA Foundation Logo" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            </div>
            
            {/* Contact Details */}
            <div>
              <h3 className="text-zinc-300 text-sm font-bold uppercase tracking-widest mb-6">
                Our Details
              </h3>
              <div className="space-y-4 text-sm font-medium text-white/90">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F28500] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">123 Healthcare Avenue, Medical District,<br />City Name, State, 12345</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#F28500] shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-8900</a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#F28500] shrink-0" />
                  <a href="mailto:info@vidafoundation.edu" className="hover:text-white transition-colors">info@vidafoundation.edu</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Explore Links */}
          <div className="lg:pl-4">
            <h3 className="text-zinc-300 text-sm font-bold uppercase tracking-widest mb-6">
              Explore Links
            </h3>
            <ul className="space-y-4 text-sm font-medium text-white/90">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full group-hover:bg-[#F28500] transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full group-hover:bg-[#F28500] transition-colors" />
                  All Programs
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full group-hover:bg-[#F28500] transition-colors" />
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full group-hover:bg-[#F28500] transition-colors" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full group-hover:bg-[#F28500] transition-colors" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Focus & Accreditation */}
          <div>
            <h3 className="text-zinc-300 text-sm font-bold uppercase tracking-widest mb-6">
              Our Focus
            </h3>
            <p className="text-sm leading-relaxed text-white/90 mb-6 pr-4">
              VIDA-certified credentials enhancing professional credibility in hospitals, laboratories, and global healthcare organizations.
            </p>
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-3 border border-zinc-700 bg-zinc-900/60 backdrop-blur-md px-4 py-2.5 rounded-md shadow-lg">
              <ShieldCheck className="w-6 h-6 text-[#4a90e2]" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Aligned With</span>
                <span className="text-xs font-bold text-white tracking-wide">NABH Standards</span>
              </div>
            </div>
          </div>

          {/* Column 4: Lead Form */}
          <div>
            <h3 className="text-zinc-300 text-sm font-bold uppercase tracking-widest mb-6">
              Take The Next Step
            </h3>
            <p className="text-sm mb-6 text-white/90">
              Request a callback from our academic counselors to find the right program for you.
            </p>
            
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-zinc-900/80 border border-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#F28500] transition-all rounded-md shadow-inner"
                required
              />
              <div className="flex gap-2">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-zinc-900/80 border border-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#F28500] transition-all rounded-md shadow-inner"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#F28500] hover:bg-[#d67300] text-white px-4 py-3 flex items-center justify-center transition-colors duration-300 rounded-md shadow-md shrink-0"
                  aria-label="Request Callback"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium tracking-wide text-zinc-400">
          <p>&copy; {new Date().getFullYear()} VIDA Foundation. All rights reserved.</p>
          <p>Empowering Healthcare Professionals</p>
        </div>

      </div>
    </footer>
  );
}