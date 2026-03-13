import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "UI/UX Design", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Database / SQL", level: 80 },
  { name: "SEO & Analytics", level: 85 },
  { name: "DevOps / CI-CD", level: 75 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Expertise</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="space-y-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-display text-sm font-medium text-foreground">{s.name}</span>
                <span className="text-xs text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${s.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
