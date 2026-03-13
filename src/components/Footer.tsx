import { Instagram, Facebook, Twitter } from "lucide-react";

const socialLinks = [
  { Icon: Instagram, href: "https://www.instagram.com/triumphproagency" },
  { Icon: Facebook, href: "https://www.facebook.com/triumphproagency" },
  { Icon: Twitter, href: "https://x.com/BolaTriump" },
];

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => (
  <footer className="py-10 border-t border-border bg-background">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
      <p className="font-display text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-foreground font-semibold">Triumph Agency</span>. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {socialLinks.map(({ Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors">
            <Icon size={16} />
          </a>
        ))}
        <a
          href="https://www.tiktok.com/@thetriumphagency"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors">
          <TikTokIcon />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;