import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import skincare from "@/assets/top-project-skincare.jpg";
import fashion from "@/assets/top-project-fashion.jpg";
import coffee from "@/assets/top-project-coffee.jpg";
import supplements from "@/assets/top-project-supplements.jpg";
import homedecor from "@/assets/top-project-homedecor.jpg";
import jewelry from "@/assets/top-project-jewelry.jpg";

const topProjects = [
  {
    title: "Lumière Skincare",
    industry: "Beauty & Skincare",
    services: ["Custom Shopify Theme", "CRO", "Subscriptions"],
    desc: "A luxury skincare brand rebuilt from the ground up with a refined product story and a frictionless checkout that lifted conversions across every device.",
    image: skincare,
  },
  {
    title: "Stealth Apparel",
    industry: "Fashion & Apparel",
    services: ["Store Redesign", "Lookbook UX", "Speed Optimization"],
    desc: "An editorial-first fashion storefront with immersive lookbooks, smart filtering, and a sub-two-second load time on mobile.",
    image: fashion,
  },
  {
    title: "Roast & Ritual",
    industry: "Coffee & Subscriptions",
    services: ["Subscription Build", "Shopify Plus", "Retention Flows"],
    desc: "A subscription coffee experience with flexible plans, one-click swaps, and retention flows that turned first orders into repeat rituals.",
    image: coffee,
  },
  {
    title: "Apex Supplements",
    industry: "Health & Fitness",
    services: ["Conversion Design", "Bundles & Upsells", "Analytics"],
    desc: "A performance-driven supplements store built around bundles, social proof, and a high-converting product page architecture.",
    image: supplements,
  },
  {
    title: "Nord Living",
    industry: "Home & Furniture",
    services: ["Headless Shopify", "Custom Filtering", "Content Design"],
    desc: "A large catalog made effortless to browse with headless performance, rich merchandising, and considered editorial content.",
    image: homedecor,
  },
  {
    title: "Aurelia Fine Jewelry",
    industry: "Luxury & Jewelry",
    services: ["Brand-Led Design", "Custom Product Builder", "Checkout UX"],
    desc: "A high-touch luxury experience with a bespoke product configurator and a checkout tuned for high average order values.",
    image: jewelry,
  },
];

const TopProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="top-projects" className="section-padding bg-navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-[110px]" />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Selected Work</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Our Top Projects
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Six flagship Shopify builds where design, speed, and conversion strategy came together to
            move real revenue for ambitious brands.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProjects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30 hover:border-accent/50 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} Shopify store desktop mockup`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Case Study
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="p-7">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {p.industry}
                </span>
                <h3 className="font-display text-xl font-semibold text-white mt-2 mb-3">{p.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProjectsSection;
