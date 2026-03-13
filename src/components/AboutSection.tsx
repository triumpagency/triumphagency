import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Scalable, maintainable, and modern code architecture." },
  { icon: Palette, title: "Great Design", desc: "Pixel-perfect interfaces with elegant user experience." },
  { icon: Rocket, title: "Fast Delivery", desc: "Quick turnaround without compromising quality." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Turning Ideas Into Digital Reality
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm a passionate developer and designer dedicated to building impactful digital experiences.
            With expertise in modern web technologies, I help businesses establish their online presence
            with beautiful, high-performance solutions that convert visitors into customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-8 text-center hover:border-accent/30 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-5 group-hover:scale-110 transition-transform">
                <h.icon size={26} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
