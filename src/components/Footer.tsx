import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border bg-background">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
      <p className="font-display text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-foreground font-semibold">Bola Triumph</span>. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {[Github, Linkedin, Twitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
