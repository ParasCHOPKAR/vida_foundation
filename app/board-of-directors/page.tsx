"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Shield, 
  Briefcase, 
  Settings, 
  Users, 
  ArrowRight, 
  FileText, 
  Target, 
  CheckCircle2, 
  Quote 
} from "lucide-react";

const directors = [
  {
    id: 1,
    name: "Dr. Onkar A. Yadav",
    title: "Director – Infection Prevention & Regulatory Affairs",
    img: "/director_01.png",
    icon: Shield,
    color: "from-blue-600 to-cyan-500",
    tag: "Clinical Governance",
    content: (
      <div className="space-y-4 text-zinc-300">
        <p className="leading-relaxed">
          Dr. Onkar A. Yadav provides clinical and regulatory leadership to Vida Life Sciences, bringing extensive experience in Infection Prevention and Control (IPC) across diverse healthcare environments.
        </p>
        <p className="leading-relaxed">
          His background includes formal education in Pharmacy and Pharmacology, complemented by advanced training in medico-legal studies. His governance ensures that all Vida solutions align with regulatory expectations and clinical safety standards.
        </p>
        <motion.a 
          whileHover={{ x: 5 }}
          href="/founder" 
          className="inline-flex items-center gap-2 text-[#F28500] font-bold mt-4"
        >
          <FileText className="w-4 h-4" /> View Publications & Research <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    )
  },
  {
    id: 2,
    name: "Mr. Dhananjay Sawant",
    title: "Director – Sales & Marketing",
    img: "/director-02.jpeg",
    icon: Briefcase,
    color: "from-orange-600 to-amber-400",
    tag: "Strategic Operations",
    content: (
      <div className="space-y-6">
        <p className="text-zinc-300">
          Mr. Dhananjay Sawant brings over 25 years of experience in CSSD products, having successfully completed more than 300 CSSD/TSSU projects in compliance with NABH standards.
        </p>
        <div className="grid md:grid-cols-2 gap-4 pt-2">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#F28500]" /> Expertise
            </h4>
            <ul className="text-xs space-y-1 text-zinc-400">
              <li>• CSSD/TSSU project operations</li>
              <li>• Expansion of marketing teams</li>
              <li>• NABH compliant consulting</li>
            </ul>
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400" /> Duties
            </h4>
            <ul className="text-xs space-y-1 text-zinc-400">
              <li>• Dealer network management</li>
              <li>• Financial stability & cash flow</li>
              <li>• New product R&D leader</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    name: "Mr. Sanjay Khandagale",
    title: "Director – Manufacturing, Equipment & Quality Systems",
    img: "/director-03.jpeg",
    icon: Settings,
    color: "from-emerald-600 to-teal-500",
    tag: "Manufacturing Excellence",
    content: (
      <div className="space-y-4 text-zinc-300">
        <p className="leading-relaxed">
          Mr. Sanjay Khandagale leads the manufacturing and technical operations, ensuring the durability and safety of all medical equipment via his academic foundation in production studies.
        </p>
        <p className="leading-relaxed">
          He oversees the validation of CSSD equipment, ensuring strict compliance. Under his leadership, Vida has expanded in-house manufacturing capabilities, reinforcing the commitment to quality-driven healthcare.
        </p>
      </div>
    )
  }
];

export default function BoardOfDirectors() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <main className="min-h-screen bg-[#F4F0E6] relative overflow-hidden font-sans">
      
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            rotate: [0, 20, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#F28500]/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 100, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-white px-4 py-1.5 rounded-full text-[#DF8618] font-bold text-xs uppercase tracking-[0.3em] shadow-sm border border-[#D9D4C7]">
              Governance
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-[#1C2329] mt-6 mb-8 tracking-tighter">
              The <span className="text-[#004b87]">Board.</span>
            </h1>
            <p className="text-zinc-600 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              At Vida Life Sciences, leadership is structured around clinical safety, operational precision, and manufacturing integrity.
            </p>
          </motion.div>
        </div>

        {/* --- DIRECTORS LIST --- */}
        <div className="grid grid-cols-1 gap-8">
          {directors.map((d, index) => {
            const isOpen = openId === d.id;
            return (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative group rounded-[2.5rem] transition-all duration-500 overflow-hidden ${
                  isOpen ? "bg-[#021d38] shadow-2xl" : "bg-white hover:bg-zinc-50 shadow-sm border border-zinc-200"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : d.id)}
                  className="w-full text-left p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 relative z-10"
                >
                  {/* Avatar with Glow */}
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 bg-gradient-to-br ${d.color} ${isOpen ? "opacity-40" : "opacity-0"}`} />
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border-2 border-white/10 shadow-xl">
                      <Image src={d.img} alt={d.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                    </div>
                  </div>

                  {/* Header Text */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                       <d.icon className={`w-5 h-5 ${isOpen ? "text-[#F28500]" : "text-[#004b87]"}`} />
                       <span className={`text-[10px] font-black uppercase tracking-widest ${isOpen ? "text-blue-300/60" : "text-zinc-400"}`}>
                        {d.tag}
                       </span>
                    </div>
                    <h3 className={`text-3xl md:text-4xl font-black tracking-tight mb-2 ${isOpen ? "text-white" : "text-[#1C2329]"}`}>
                      {d.name}
                    </h3>
                    <p className={`text-lg font-bold ${isOpen ? "text-blue-200/80" : "text-[#DF8618]"}`}>
                      {d.title}
                    </p>
                  </div>

                  {/* Toggle Icon */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${
                    isOpen ? "bg-white/10 border-white/20 rotate-180" : "bg-zinc-100 border-zinc-200 rotate-0"
                  }`}>
                    <ChevronDown className={`w-6 h-6 ${isOpen ? "text-white" : "text-zinc-400"}`} />
                  </div>
                </button>

                {/* --- EXPANDABLE CONTENT --- */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 md:px-10 pb-10 pt-4 md:ml-48 border-t border-white/5 relative">
                         {d.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* --- BOTTOM QUOTE / CALLOUT --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-[#021d38] to-[#004b87] rounded-[3rem] p-10 md:p-16 text-center text-white relative shadow-2xl overflow-hidden"
        >
          <Quote className="absolute top-10 left-10 w-20 h-20 text-white/5 -rotate-12" />
          
          <Users className="w-16 h-16 text-[#F28500] mx-auto mb-8" />
          <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Collective Governance</h3>
          <p className="text-blue-100/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Together, the directors provide end-to-end leadership across the healthcare sterilization lifecycle—from clinical governance and infection control to manufacturing excellence and regulatory compliance.
          </p>

          {/* Footer Subtext */}
          <div className="mt-12 pt-8 border-t border-white/10 text-[10px] uppercase tracking-[0.4em] text-white/40">
            Vida Life Sciences Pvt. Ltd. • Office of the Directors
          </div>
        </motion.div>

      </div>
    </main>
  );
}