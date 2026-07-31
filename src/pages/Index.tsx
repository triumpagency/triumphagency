import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionDirectory from "@/components/SectionDirectory";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";

const Index = () => {
  useSeo({
    title: "Triumph Agency | Premium Shopify & Web Development",
    description:
      "Triumph Agency builds high-performance Shopify stores and websites engineered to convert. Browse case studies, results, process and more.",
    path: "/",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SectionDirectory />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
