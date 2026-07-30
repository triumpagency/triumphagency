import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Plus } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectBranding from "@/assets/project-branding.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectMarketing from "@/assets/project-marketing.jpg";
import skincare from "@/assets/top-project-skincare.jpg";
import fashion from "@/assets/top-project-fashion.jpg";
import coffee from "@/assets/top-project-coffee.jpg";
import supplements from "@/assets/top-project-supplements.jpg";
import homedecor from "@/assets/top-project-homedecor.jpg";
import jewelry from "@/assets/top-project-jewelry.jpg";

const previousProjects = [
  { name: "Velvet Bloom", category: "Shopify Store", image: skincare },
  { name: "Northline Outfitters", category: "Store Redesign", image: fashion },
  { name: "Brew Society", category: "Subscription Store", image: coffee },
  { name: "Ironclad Nutrition", category: "Landing Page", image: supplements },
  { name: "Casa Norde", category: "eCommerce Website", image: homedecor },
  { name: "Aurelia Atelier", category: "Shopify Plus", image: jewelry },
  { name: "Marketplace Hub", category: "eCommerce Website", image: projectEcommerce },
  { name: "Kindred Brand Studio", category: "Brand + Store", image: projectBranding },
  { name: "Merchant Insights", category: "Custom App", image: projectDashboard },
  { name: "Loop Mobile", category: "Landing Page", image: projectMobile },
  { name: "Studio Ora", category: "Portfolio Site", image: projectPortfolio },
  { name: "Growth Engine", category: "Conversion Redesign", image: projectMarketing },
];

const PreviousProjectsSection = () => {
  const [visible, setVisible] = useState(6);
  const shown = previousProjects.slice(0, visible);
  const hasMore = visible < previousProjects.length;

  return (
    <section id="previous-projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Portfolio Archive</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Previous Projects
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Shopify stores, redesigns, landing pages, and eCommerce builds delivered for brands across
            every stage of growth.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {shown.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="group mb-6 break-inside-avoid glass rounded-2xl overflow-hidden hover:border-accent/40 hover:shadow-xl transition-all duration-300"
            >
              <div className={`overflow-hidden ${i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}>
                <img
                  src={p.image}
                  alt={`${p.name} project thumbnail`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {p.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-4">
                  {p.name}
                </h3>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground border border-border rounded-full px-4 py-2 group-hover:border-accent group-hover:text-accent transition-colors"
                >
                  View Project
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-4">
            <button
              onClick={() => setVisible((v) => v + 6)}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
            >
              <Plus size={16} />
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviousProjectsSection;
