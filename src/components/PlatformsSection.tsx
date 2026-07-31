import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const platforms = [
  {
    name: "Shopify",
    logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    description:
      "We design, build, and optimize Shopify stores for brands that want to scale. From custom themes to checkout conversion, every detail is tuned for performance.",
    benefits: ["Custom theme development", "Checkout & app optimization", "Headless & Shopify Plus"],
  },
  {
    name: "WordPress",
    logo: "https://cdn.worldvectorlogo.com/logos/wordpress-2.svg",
    description:
      "Bespoke WordPress websites built for speed, security, and easy content management. We leverage custom blocks and plugins to match your exact business needs.",
    benefits: ["Custom theme & plugin dev", "SEO-first architecture", "Scalable CMS workflows"],
  },
  {
    name: "Wix",
    logo: "https://cdn.worldvectorlogo.com/logos/wix.svg",
    description:
      "Modern, visually striking Wix sites for brands that need a polished presence fast. We extend Wix with custom code, Velo, and studio-grade design.",
    benefits: ["Velo custom code", "Rapid design sprints", "Membership & booking features"],
  },
  {
    name: "GoDaddy",
    logo: "https://cdn.worldvectorlogo.com/logos/godaddy-1.svg",
    description:
      "Reliable GoDaddy website solutions for small businesses and entrepreneurs. We set up, design, and optimize sites that launch quickly and grow with you.",
    benefits: ["Website + Business setup", "Domain & hosting guidance", "Local business optimization"],
  },
];

const PlatformsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="platforms"
      className="section-padding bg-navy-gradient relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">
            Technologies
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Platforms We Leverage for Exceptional Website Development
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Building high-performance digital experiences using industry-leading technologies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group rounded-xl p-7 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-accent/50 hover:bg-white/10 transition-colors"
            >
              <div className="h-16 w-full flex items-center justify-center bg-white rounded-lg mb-6 p-3 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="max-h-full max-w-[80%] object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {p.name}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                {p.description}
              </p>
              <ul className="space-y-2">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/80">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
