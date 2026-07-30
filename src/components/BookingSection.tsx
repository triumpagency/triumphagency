import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarCheck, Clock, ShieldCheck } from "lucide-react";

const points = [
  { icon: Clock, text: "30 minutes, entirely free" },
  { icon: ShieldCheck, text: "No obligation, no hard sell" },
  { icon: CalendarCheck, text: "Actionable advice you can use either way" },
];

const BookingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="book" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-10 md:p-14"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Free Consultation</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            Book Your Free Shopify Strategy Call
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            Bring your store, your goals, and your biggest frustration. In thirty minutes we will walk
            through where your store is losing customers, what to fix first, and what a rebuild or
            redesign would realistically involve. You leave with a clear plan whether you hire us or not.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10">
            {points.map((p) => (
              <div key={p.text} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <p.icon size={16} className="text-accent" />
                {p.text}
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-display font-semibold text-sm bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Book Your Free Strategy Call
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            Prefer email? Reach us at triumphproagency@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
