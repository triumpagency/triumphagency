import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { sectionGroups, sections } from "@/lib/sections";

const SectionDirectory = () => (
  <section id="sections" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-14">
        <p className="text-sm uppercase tracking-widest text-accent mb-3">Browse</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Explore the portfolio section by section
        </h2>
        <p className="text-muted-foreground">
          Pick a category and view only that section — no endless scrolling.
        </p>
      </div>

      <div className="space-y-14">
        {sectionGroups.map((group) => (
          <div key={group}>
            <h3 className="font-display text-sm uppercase tracking-widest text-accent mb-6">
              {group}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sections
                .filter((s) => s.group === group)
                .map((s, i) => (
                  <motion.div
                    key={s.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.2) }}
                  >
                    <Link
                      to={`/${s.slug}`}
                      className="group block h-full glass rounded-2xl p-6 border border-border transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                        {s.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-5">{s.blurb}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                        View section
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SectionDirectory;
