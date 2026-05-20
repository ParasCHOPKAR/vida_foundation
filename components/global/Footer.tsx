"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden text-zinc-200">

      {/* --- BACKGROUND IMAGE ONLY --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/footer-background.jpg"
          alt="Healthcare Professionals"
          fill
          className="object-cover object-center"
          quality={80}
          priority={false}
        />

        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 [text-shadow:0_3px_12px_rgba(0,0,0,1)]">

        {/* 4-Column Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">

          {/* Column 1: Logo & Details */}
          <div className="space-y-8">

            {/* Logo in White Box */}
            <div className="bg-white p-3 rounded-md shadow-lg inline-block w-fit">
              <div className="relative w-40 h-16">
                <Image
                  src="/logo-update-removebg-preview.png"
                  alt="VIDA Foundation Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-zinc-200 text-sm font-bold uppercase tracking-widest mb-6">
                Our Details
              </h3>

              <div className="space-y-4 text-sm font-medium text-white">

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F28500] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    123 Healthcare Avenue, Medical District,
                    <br />
                    City Name, State, 12345
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#F28500] shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="hover:text-[#F28500] transition-colors duration-300"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#F28500] shrink-0" />
                  <a
                    href="mailto:info@vidafoundation.edu"
                    className="hover:text-[#F28500] transition-colors duration-300"
                  >
                    info@vidafoundation.edu
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Column 2: Explore Links */}
          <div className="lg:pl-4">
            <h3 className="text-zinc-200 text-sm font-bold uppercase tracking-widest mb-6">
              Explore Links
            </h3>

            <ul className="space-y-4 text-sm font-medium text-white">

              <li>
                <Link
                  href="/"
                  className="hover:text-[#F28500] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full group-hover:bg-[#F28500] transition-colors" />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/programs"
                  className="hover:text-[#F28500] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full group-hover:bg-[#F28500] transition-colors" />
                  All Programs
                </Link>
              </li>

              <li>
                <Link
                  href="/methodology"
                  className="hover:text-[#F28500] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full group-hover:bg-[#F28500] transition-colors" />
                  Methodology
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#F28500] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full group-hover:bg-[#F28500] transition-colors" />
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#F28500] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full group-hover:bg-[#F28500] transition-colors" />
                  Terms of Service
                </Link>
              </li>

            </ul>
          </div>

          {/* Column 3: Our Focus */}
          <div>
            <h3 className="text-zinc-200 text-sm font-bold uppercase tracking-widest mb-6">
              Our Focus
            </h3>

            <p className="text-sm leading-relaxed text-white mb-6 pr-4">
              VIDA-certified credentials enhancing professional credibility in
              hospitals, laboratories, and global healthcare organizations.
            </p>

            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-3 border border-zinc-700 bg-zinc-900/80 backdrop-blur-md px-4 py-2.5 rounded-md shadow-2xl">
              <ShieldCheck className="w-6 h-6 text-[#4a90e2]" />

              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                  Aligned With
                </span>

                <span className="text-xs font-bold text-white tracking-wide">
                  NABH Standards
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Lead Form */}
          <div>
            <h3 className="text-zinc-200 text-sm font-bold uppercase tracking-widest mb-6">
              Take The Next Step
            </h3>

            <p className="text-sm mb-6 text-white">
              Request a callback from our academic counselors to find the right
              program for you.
            </p>

            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-zinc-900/90 border border-zinc-700 px-4 py-3 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#F28500] transition-all rounded-md shadow-2xl"
                required
              />

              <div className="flex gap-2">

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-zinc-900/90 border border-zinc-700 px-4 py-3 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#F28500] transition-all rounded-md shadow-2xl"
                  required
                />

                <button
                  type="submit"
                  className="bg-[#F28500] hover:bg-[#d67300] text-white px-4 py-3 flex items-center justify-center transition-all duration-300 rounded-md shadow-2xl shrink-0 hover:scale-105"
                  aria-label="Request Callback"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>

              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium tracking-wide text-zinc-200">

          <p>
            &copy; {new Date().getFullYear()} VIDA Foundation. All rights
            reserved.
          </p>

          <p>Empowering Healthcare Professionals</p>

        </div>
      </div>
    </footer>
  );
}