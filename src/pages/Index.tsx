import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProjectsSection from "@/components/ProjectsSection";
import CaseStudySection from "@/components/CaseStudySection";
import ResultsSection from "@/components/ResultsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProcessSection from "@/components/ProcessSection";
import SkillsSection from "@/components/SkillsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <WhyChooseSection />
    <ProjectsSection />
    <CaseStudySection />
    <ResultsSection />
    <BeforeAfterSection />
    <ProcessSection />
    <SkillsSection />
    <GuaranteeSection />
    <TestimonialsSection />
    <BlogSection />
    <FaqSection />
    <BookingSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
