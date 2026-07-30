import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", title: "Discovery Call", desc: "A free, no-pressure conversation about your products, customers, and goals — so we know exactly what success looks like before any work begins." },
  { n: "02", title: "Research & Strategy", desc: "We audit your current store, study your competitors, and map the buying journey. You receive a written plan with scope, timeline, and priorities." },
  { n: "03", title: "Store Design", desc: "Custom UI/UX built around your brand and your customer's path to purchase. You review designs and give feedback before a single line of code is written." },
  { n: "04", title: "Shopify Development", desc: "Clean, fast, maintainable Shopify builds with reusable sections, so your team can edit and launch pages without a developer." },
  { n: "05", title: "Testing & QA", desc: "Cross-browser and cross-device testing, checkout run-throughs, speed tuning, and SEO checks. Nothing ships until it holds up under real use." },
  { n: "06", title: "Launch & Support", desc: "A carefully managed launch with monitoring, plus ongoing support so your store keeps improving after go-live." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Our Process</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Six Steps From Idea to Launch
          </h2>
        </motion.div>

        <ol className="relative border-l border-border ml-4 md:ml-6 space-y-10">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="pl-8 md:pl-10 relative"
            >
              <span className="absolute -left-4 md:-left-5 top-0 w-8 md:w-10 h-8 md:h-10 rounded-full bg-accent/10 border border-accent/30 text-accent font-display text-xs font-bold flex items-center justify-center">
                {s.n}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
