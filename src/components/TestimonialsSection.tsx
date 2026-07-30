import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sample Testimonial",
    role: "Skincare Brand Owner",
    text: "The process was organised from the first call. Designs came back on schedule, feedback was handled quickly, and the finished store finally looks like the brand we set out to build.",
  },
  {
    name: "Sample Testimonial",
    role: "Apparel Store Founder",
    text: "Communication was the standout. We always knew what was happening and when, and the new store is far easier for customers to navigate on mobile.",
  },
  {
    name: "Sample Testimonial",
    role: "Home Goods Retailer",
    text: "Clean design, fast pages, and a team that actually explained the reasoning behind each decision. Post-launch support has been just as responsive.",
  },
];


const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What Clients Say
          </h2>
        </motion.div>

        <p className="text-center text-xs text-muted-foreground mb-14 max-w-2xl mx-auto">
          Sample testimonials shown for illustration. We will replace these with verified client reviews as projects complete.
        </p>


        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-8 relative"
            >
              <Quote size={32} className="text-accent/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
