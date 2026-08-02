import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const socialLinks = [
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/triumphproagency" },
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/triumphproagency" },
  { Icon: Twitter, label: "Twitter", href: "https://x.com/BolaTriump" },
];

const quickLinks = [
  { label: "Services", to: "/skills" },
  { label: "Portfolio", to: "/top-projects" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-3 items-start">
      <div>
        <Link to="/" className="font-display text-lg font-bold text-foreground">
          Triumph<span className="text-accent">.</span>Agency
        </Link>
        <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
          Shopify web design and eCommerce development for brands that want stores which convert.
        </p>
      </div>

      <nav aria-label="Footer navigation">
        <h2 className="font-display text-sm font-semibold text-foreground mb-3">Quick Links</h2>
        <ul className="space-y-2">
          {quickLinks.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:text-right">
        <h2 className="font-display text-sm font-semibold text-foreground mb-3">Follow Us</h2>
        <div className="flex items-center gap-3 md:justify-end">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors">
              <Icon size={16} />
            </a>
          ))}
          <a
            href="https://www.tiktok.com/@thetriumphagency"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors">
            <TikTokIcon />
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-border py-6">
      <p className="container mx-auto px-4 font-display text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} <span className="text-foreground font-semibold">Triumph Agency</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
