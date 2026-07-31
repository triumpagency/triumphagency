import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { primaryNavSlugs, sectionGroups, sections } from "@/lib/sections";

const primary = primaryNavSlugs
  .map((slug) => sections.find((s) => s.slug === slug)!)
  .filter(Boolean);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-accent after:transition-all ${
      isActive
        ? "text-foreground after:w-full"
        : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full"
    }`;

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <nav aria-label="Main navigation" className="container mx-auto flex items-center justify-between gap-6 py-4">
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground shrink-0">
          Triumph <span className="text-accent">Agency</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 overflow-x-auto">
          {primary.map((s) => (
            <NavLink key={s.slug} to={`/${s.slug}`} className={linkClass}>
              {s.label}
            </NavLink>
          ))}
          <Link
            to="/sections"
            className="text-sm font-semibold text-accent hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            All sections
          </Link>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground"
            aria-label="Toggle colour theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 text-foreground"
            aria-label="Toggle colour theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass border-t border-border max-h-[70vh] overflow-y-auto"
          >
            <div className="container mx-auto py-6 flex flex-col gap-6">
              {sectionGroups.map((group) => (
                <div key={group}>
                  <p className="text-xs uppercase tracking-widest text-accent mb-2">{group}</p>
                  <div className="flex flex-col gap-2">
                    {sections
                      .filter((s) => s.group === group)
                      .map((s) => (
                        <NavLink
                          key={s.slug}
                          to={`/${s.slug}`}
                          className={({ isActive }) =>
                            `text-sm font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`
                          }
                        >
                          {s.label}
                        </NavLink>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
