import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () =>
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden">
  
    {/* Background image */}
    <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${heroBg})` }} />
  
    <div className="absolute inset-0 bg-navy-dark/70" />

    <div className="relative z-10 container mx-auto text-center px-4">
      <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-cyan font-display text-sm tracking-[0.3em] uppercase mb-4">
      
        Building Digital Legacies
      </motion.p>

      <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
      style={{ color: "hsl(210, 40%, 98%)" }}>
      
        Welcome to{" "}
        <span className="text-gradient">Triumph Agency</span>
      </motion.h1>

      <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="max-w-2xl mx-auto text-lg md:text-xl mb-10"
      style={{ color: "hsl(215, 20%, 75%)" }}>
      
        I craft premium digital experiences that elevate brands and drive results.
        Let's bring your vision to life.
      </motion.p>

      <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-center">
      
        <a
        href="#contact"
        className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-display font-semibold text-sm bg-accent text-accent-foreground hover:opacity-90 transition-opacity">
        
          Get In Touch
        </a>
        <a
        href="#projects"
        className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-display font-semibold text-sm border border-border/50 hover:bg-secondary/20 transition-colors"
        style={{ color: "hsl(210, 40%, 95%)" }}>
        
          View Projects
        </a>
      </motion.div>

      <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="inline-block mt-16 animate-bounce">
      
        <ArrowDown size={24} style={{ color: "hsl(195, 90%, 50%)" }} />
      </motion.a>
    </div>
  </section>;


export default HeroSection;