import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const before = [
  "Generic theme styling that made a premium product look like a dropshipping store",
  "5+ second load times caused by oversized images and unused apps",
  "Mobile navigation that hid collections behind multiple taps",
  "Product pages with thin copy, no size guidance, and no trust signals",
  "A cluttered checkout flow that lost customers at the shipping step",
];

const after = [
  "A custom brand system — typography, colour, and photography — applied consistently across every template",
  "Sub-two-second loads after image compression, script cleanup, and app pruning",
  "A thumb-first mobile layout with sticky add-to-cart and predictive search",
  "Conversion-focused product pages with rich detail, reviews, and clear guarantees",
  "A simplified checkout with express payments and visible shipping expectations",
];

const BeforeAfterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="before-after" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Transformation</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Before &amp; After</h2>
        </motion.div>

        <p className="text-center text-muted-foreground text-sm mb-14 max-w-2xl mx-auto leading-relaxed">
          Most stores do not need to start over — they need clarity. Here is the kind of shift a Triumph
          Agency redesign delivers across branding, user experience, speed, and conversion.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass rounded-xl p-8"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">Before</h3>
            <ul className="space-y-4">
              {before.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <X size={16} className="text-destructive shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass rounded-xl p-8 border-accent/30"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">After</h3>
            <ul className="space-y-4">
              {after.map((a) => (
                <li key={a} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <Check size={16} className="text-accent shrink-0 mt-0.5" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
