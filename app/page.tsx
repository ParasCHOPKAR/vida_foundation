import HeroSection from "@/components/home/HeroSection";
import CoursePillars from "@/components/home/CoursePillars";
import TrainingMethodology from "@/components/home/TrainingMethodology";
import GlobalImpact from "@/components/home/GlobalImpact";
import EnquireCTA from "@/components/home/EnquireCTA"; // <-- Import it here

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Video Hero Section */}
      <HeroSection />
      
      {/* 2. The 4 Pillars / Course Structure */}
      <CoursePillars />
      
      {/* 3. Horizontal Scrolling Methodology */}
      <TrainingMethodology />

      {/* 4. Global Impact & Testimonials */}
      <GlobalImpact />

      {/* 5. Pre-Footer Call To Action */}
      <EnquireCTA />
      
    </main>
  );
}