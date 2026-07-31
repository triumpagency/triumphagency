import Navbar from "@/components/Navbar";
import SectionDirectory from "@/components/SectionDirectory";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";

const Sections = () => {
  useSeo({
    title: "All Sections | Triumph Agency",
    description:
      "Browse every section of the Triumph Agency portfolio: work, case studies, results, process, guarantees, blog and contact.",
    path: "/sections",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-10">
        <div className="container mx-auto">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            All sections
          </h1>
        </div>
        <SectionDirectory />
      </main>
      <Footer />
    </div>
  );
};

export default Sections;
