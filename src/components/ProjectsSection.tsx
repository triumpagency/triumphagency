import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    desc: "A full-featured online store with modern UI, payment integration, and analytics dashboard.",
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "Brand Identity System",
    category: "Design & Branding",
    desc: "Complete visual identity including logo, typography, and guidelines for a tech startup.",
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    desc: "Real-time analytics dashboard with interactive charts and user management features.",
    color: "from-accent/20 to-cyan-muted/20",
  },
  {
    title: "Mobile App Landing",
    category: "Landing Page",
    desc: "High-converting landing page with animations, testimonials, and download CTAs.",
    color: "from-cyan-muted/20 to-primary/20",
  },
  {
    title: "Portfolio Website",
    category: "Web Design",
    desc: "Elegant portfolio showcasing creative work with smooth transitions and dark mode.",
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Marketing Automation",
    category: "Web Application",
    desc: "Email marketing platform with drag-and-drop builder and campaign analytics.",
    color: "from-accent/20 to-primary/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Portfolio</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-xl overflow-hidden hover:border-accent/30 transition-all"
            >
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <span className="font-display text-foreground/40 text-6xl font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {p.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2 flex items-center gap-2">
                  {p.title}
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
