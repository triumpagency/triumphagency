import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Clock, MessagesSquare, BadgeCheck, HeartHandshake } from "lucide-react";

const guarantees = [
  { icon: MessagesSquare, title: "Transparent Communication", desc: "Fixed scope, clear pricing, and regular written updates. No surprise invoices and no silence." },
  { icon: Clock, title: "On-Time Delivery", desc: "Timelines are agreed before we start, and we hold to them. If anything shifts, you hear it from us first." },
  { icon: HeartHandshake, title: "Responsive Support", desc: "Questions answered within one business day throughout your project — and after it." },
  { icon: BadgeCheck, title: "Quality Assurance", desc: "Every build is tested across browsers, devices, and the full checkout flow before it goes live." },
  { icon: ShieldCheck, title: "Post-Launch Assistance", desc: "A support window after launch to resolve issues, refine details, and make sure everything runs cleanly." },
];

const GuaranteeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="guarantees" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Our Commitments</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            What We Guarantee
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We will not promise you a revenue figure — nobody honestly can. What we can promise is how we
            work, and we hold ourselves to it on every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-8 hover:border-accent/30 transition-colors"
            >
              <g.icon size={22} className="text-accent mb-5" />
              <h3 className="font-display text-base font-semibold text-foreground mb-2">{g.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
