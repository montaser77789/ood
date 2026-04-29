import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import LogoSection from "./_components/LogoSection";
import ServicesSection from "./_components/ServicesSection";
import ProgramsSection from "./_components/ProgramsSection";
import FieldsSection from "./_components/FieldsSection";
import TestimonialSection from "./_components/TestimonialSection";

export default function Home() {
  return (
    <main className="px-4 md:px-10">
      <HeroSection />
      <LogoSection />
      <ServicesSection />
      <ProgramsSection />
      <FieldsSection />
      <TestimonialSection />
    </main>
  );
}
