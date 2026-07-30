import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react";

const blocks = [
  {
    icon: Target,
    title: "Challenge",
    body: "A growing skincare brand was running a template Shopify store that had outgrown its purpose. Product discovery was buried three clicks deep, the mobile checkout leaked customers at the shipping step, and the brand's premium positioning was undermined by generic theme styling. Their team could not launch a collection without waiting on a developer.",
  },
  {
    icon: Lightbulb,
    title: "Solution",
    body: "We opened with a full store audit — analytics, heatmaps, and a technical review — then rebuilt the experience around a single goal: fewer decisions, faster purchases. That meant a redesigned collection architecture, a sticky mobile add-to-cart, a two-step checkout flow, and a custom Shopify section library so the client can build new landing pages without touching code.",
  },
  {
    icon: TrendingUp,
    title: "Results",
    body: "The rebuilt store loads in under two seconds on mobile, product pages carry consistent brand storytelling, and the marketing team ships new campaign pages in an afternoon instead of a sprint. Checkout drop-off fell sharply once the shipping and payment steps were simplified and trust signals were added above the fold.",
  },
  {
    icon: CheckCircle2,
    title: "Client Outcome",
    body: "The client now owns a Shopify store that reflects the price point of their products and scales with their catalogue. Ongoing support keeps speed, SEO, and conversion tracked month over month — so the store keeps improving long after launch.",
  },
];

const CaseStudySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Case Study</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Rebuilding a Premium Skincare Store on Shopify
          </h2>
        </motion.div>

        <p className="text-center text-xs text-muted-foreground mb-14 max-w-2xl mx-auto">
          Sample case study — this is a demonstration project illustrating our process and standards, not a named client engagement.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {blocks.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass rounded-xl p-8 hover:border-accent/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-5">
                <b.icon size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
