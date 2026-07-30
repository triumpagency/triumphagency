import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Paintbrush, TrendingUp, Smartphone, Zap, Search, MessageSquare, Layers, LifeBuoy } from "lucide-react";

const reasons = [
  { icon: Paintbrush, title: "Custom Shopify Design", desc: "No recycled templates. Every store is designed around your brand and your buyer." },
  { icon: TrendingUp, title: "Conversion-Focused Build", desc: "Every layout decision is made to shorten the path from landing page to checkout." },
  { icon: Smartphone, title: "Mobile Optimisation", desc: "Most of your traffic is mobile, so we design mobile first and test it relentlessly." },
  { icon: Zap, title: "Fast Loading Speeds", desc: "Lean code, compressed media, and disciplined app usage keep your store quick." },
  { icon: Search, title: "SEO Best Practices", desc: "Clean structure, semantic markup, metadata, and schema built in from day one." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Clear scope, clear pricing, regular updates. You always know where the project stands." },
  { icon: Layers, title: "Scalable Solutions", desc: "Reusable sections and clean architecture so your store grows with your catalogue." },
  { icon: LifeBuoy, title: "Long-Term Support", desc: "We stay available after launch to maintain, refine, and improve what we built." },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Why Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            Why Choose Triumph Agency
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Premium eCommerce brands do not need another theme install. They need a store that looks the
            part, loads fast, and turns attention into orders. That is the only thing we build.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-xl p-6 hover:border-accent/30 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform">
                <r.icon size={20} />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
