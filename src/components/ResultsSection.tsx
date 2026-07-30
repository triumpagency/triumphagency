import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MousePointerClick, DollarSign, ShoppingBag, Gauge, Smartphone, Users } from "lucide-react";

const metrics = [
  { icon: MousePointerClick, value: "+42%", label: "Conversion Rate", desc: "Streamlined product pages and a shorter checkout path." },
  { icon: DollarSign, value: "+68%", label: "Revenue Growth", desc: "Measured over the first two quarters after relaunch." },
  { icon: ShoppingBag, value: "+27%", label: "Average Order Value", desc: "Bundles, upsells, and smarter cart recommendations." },
  { icon: Gauge, value: "1.8s", label: "Page Load Time", desc: "Down from 5.4s through image, script, and theme tuning." },
  { icon: Smartphone, value: "94/100", label: "Mobile Score", desc: "Mobile-first layouts built for thumb-friendly buying." },
  { icon: Users, value: "+51%", label: "Returning Customers", desc: "Better post-purchase flow and email capture." },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Results</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Growth You Can Measure
          </h2>
        </motion.div>

        <p className="text-center text-xs text-muted-foreground mb-14 max-w-2xl mx-auto">
          Illustrative benchmarks from demonstration builds. We report verified numbers from your own analytics once your store is live.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-8 hover:border-accent/30 transition-colors"
            >
              <m.icon size={22} className="text-accent mb-5" />
              <p className="font-display text-4xl font-bold text-gradient mb-2">{m.value}</p>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">{m.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
