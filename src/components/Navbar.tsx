import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
{ label: "Home", href: "#home" },
{ label: "About", href: "#about" },
{ label: "Projects", href: "#projects" },
{ label: "Skills", href: "#skills" },
{ label: "Testimonials", href: "#testimonials" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass shadow-lg" : "bg-transparent"}`
      }>
      
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="font-display text-xl font-bold tracking-tight text-foreground">
               ​Triumph Agency                                  <span className="text-accent">Triumph</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full">
            
              {l.label}
            </a>
          )}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground"
            aria-label="Toggle theme">
            
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => setDark(!dark)} className="p-2 text-foreground">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-border">
          
            <div className="container mx-auto py-4 flex flex-col gap-4">
              {navLinks.map((l) =>
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              
                  {l.label}
                </a>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

};

export default Navbar;