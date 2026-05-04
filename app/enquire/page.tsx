"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function EnquirePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Header animation
    tl.fromTo(
      ".page-header",
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" }
    );

    // Staggered fade up for contact info blocks
    tl.fromTo(
      ".contact-item",
      { x: -30, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" },
      "-=0.4"
    );

    // Form reveal
    tl.fromTo(
      ".form-container",
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );
  }, { scope: containerRef });

  // Handle mock form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send data to your backend (e.g., Web3Forms, Formspree)
    setIsSubmitted(true);
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-zinc-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="page-header mb-16 border-b border-zinc-200 pb-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Start Your <span className="text-[#004b87]">Journey.</span>
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl font-medium">
            Connect with our academic counselors. Fill out the form below to inquire about admissions, program details, or customized institutional training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">Direct Contact</h2>
              
              <div className="space-y-6">
                <div className="contact-item flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#F28500]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Headquarters</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      123 Healthcare Avenue, Medical District,<br />
                      City Name, State, 12345
                    </p>
                  </div>
                </div>

                <div className="contact-item flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#F28500]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-sm text-zinc-600 hover:text-[#004b87] transition-colors block mb-1">
                      +1 (234) 567-8900 (Admissions)
                    </a>
                    <a href="tel:+1234567891" className="text-sm text-zinc-600 hover:text-[#004b87] transition-colors block">
                      +1 (234) 567-8901 (Support)
                    </a>
                  </div>
                </div>

                <div className="contact-item flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#F28500]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:admissions@vidafoundation.edu" className="text-sm text-zinc-600 hover:text-[#004b87] transition-colors block mb-1">
                      admissions@vidafoundation.edu
                    </a>
                    <a href="mailto:info@vidafoundation.edu" className="text-sm text-zinc-600 hover:text-[#004b87] transition-colors block">
                      info@vidafoundation.edu
                    </a>
                  </div>
                </div>

                <div className="contact-item flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#F28500]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Working Hours</h3>
                    <p className="text-sm text-zinc-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-zinc-600">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="form-container bg-white border border-zinc-200 p-8 md:p-10 shadow-sm relative overflow-hidden">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#004b87]" />

              {isSubmitted ? (
                // Success State
                <div className="flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Submitted!</h3>
                  <p className="text-zinc-600 mb-8 max-w-md">
                    Thank you for your interest in VIDA Foundation. Our academic counselors will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-bold text-[#004b87] hover:text-[#F28500] transition-colors underline underline-offset-4"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                // Form State
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Send an Inquiry</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-zinc-500">First Name *</label>
                      <input 
                        id="firstName"
                        type="text" 
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-[#004b87] focus:bg-white transition-colors rounded-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Last Name *</label>
                      <input 
                        id="lastName"
                        type="text" 
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-[#004b87] focus:bg-white transition-colors rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address *</label>
                      <input 
                        id="email"
                        type="email" 
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-[#004b87] focus:bg-white transition-colors rounded-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Phone Number *</label>
                      <input 
                        id="phone"
                        type="tel" 
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-[#004b87] focus:bg-white transition-colors rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="profession" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Current Profession *</label>
                      <select 
                        id="profession"
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-[#004b87] focus:bg-white transition-colors rounded-sm appearance-none"
                      >
                        <option value="" disabled selected>Select your profession...</option>
                        <option value="Nurse">Nurse / Nursing Student</option>
                        <option value="AlliedHealth">Allied Health Professional</option>
                        <option value="Doctor">Doctor / Physician</option>
                        <option value="Management">Hospital Administrator / Manager</option>
                        <option value="Other">Other Healthcare Role</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="program" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Program of Interest *</label>
                      <select 
                        id="program"
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-[#004b87] focus:bg-white transition-colors rounded-sm appearance-none"
                      >
                        <option value="" disabled selected>Select a program...</option>
                        <option value="IPC">Adv. Cert. in Infection Prevention & Control (IPC)</option>
                        <option value="CSSD">Adv. Cert. in CSSD & Sterilization Tech</option>
                        <option value="ClinicalCare">Acute Clinical Care - Nursing</option>
                        <option value="QualityNABH">Quality, NABH & Healthcare Accreditation</option>
                        <option value="Pediatrics">Paediatric Mental & Physical Growth</option>
                        <option value="Custom">Custom Institutional Training</option>
                        <option value="Unsure">Not sure yet / Need Counseling</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your Message / Query</label>
                    <textarea 
                      id="message"
                      rows={4}
                      className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-[#004b87] focus:bg-white transition-colors rounded-sm resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="group relative overflow-hidden bg-[#004b87] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm shadow-md w-full flex items-center justify-center gap-2"
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#F28500] -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
                    <span className="relative z-10 flex items-center gap-2">
                      Submit Inquiry <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>

                  <p className="text-xs text-zinc-400 text-center mt-4">
                    Your information is secure. We do not share your data with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}