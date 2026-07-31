import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp, Zap, Smartphone, ShoppingCart, MousePointerClick, ShieldCheck } from "lucide-react";
import mobileFirst from "@/assets/conversion-mobile-first.jpg";
import fastLoading from "@/assets/conversion-fast-loading.jpg";
import productPage from "@/assets/conversion-product-page.jpg";
import checkoutFlow from "@/assets/conversion-checkout-flow.jpg";
import persuasiveCta from "@/assets/conversion-persuasive-cta.jpg";
import trustBuilding from "@/assets/conversion-trust-building.jpg";

const websites = [
  {
    title: "Mobile-First Fashion Store",
    strategy: "Thumb-friendly navigation, oversized tap targets, and a streamlined mobile checkout that turns scrollers into buyers.",
    improvements: ["Touch-optimized UI", "Simplified navigation", "Higher mobile conversion"],
    icon: Smartphone,
    image: mobileFirst,
  },
  {
    title: "Speed-Optimized Electronics Store",
    strategy: "Sub-second load times through asset compression, lazy loading, and a lean theme that keeps shoppers engaged from the first click.",
    improvements: ["Sub-2s load time", "Lazy-loaded media", "Lower bounce rate"],
    icon: Zap,
    image: fastLoading,
  },
  {
    title: "Strategic Skincare Product Page",
    strategy: "A benefit-driven product story with social proof, before/after visuals, and comparison tools that remove purchase hesitation.",
    improvements: ["Social proof blocks", "Visual comparison", "Clear value props"],
    icon: TrendingUp,
    image: productPage,
  },
  {
    title: "Optimized Checkout Flow",
    strategy: "A distraction-free checkout with trust badges, guest checkout, and smart payment options that reduce abandonment at the final step.",
    improvements: ["Guest checkout", "Trust badges", "One-tap payments"],
    icon: ShoppingCart,
    image: checkoutFlow,
  },
  {
    title: "Persuasive CTA Landing Page",
    strategy: "Bold value propositions, contrast-driven CTAs, and urgency cues that guide visitors toward a single high-intent action.",
    improvements: ["Contrast CTAs", "Urgency messaging", "Single focus layout"],
    icon: MousePointerClick,
    image: persuasiveCta,
  },
  {
    title: "Trust-Building Lifestyle Brand",
    strategy: "Reviews, guarantees, and editorial content layered throughout the store to build confidence and justify premium pricing.",
    improvements: ["Review highlights", "Guarantee badges", "Editorial trust"],
    icon: ShieldCheck,
    image: trustBuilding,
  },
];

const HighlyConvertingWebsitesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="highly-converting" className="section-padding bg-navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Conversion Focus</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Highly Converting Websites
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Every build is engineered to turn visitors into customers through intentional design, speed, and psychology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((site, i) => (
            <motion.article
              key={site.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30 hover:border-accent/50 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={site.image.url}
                  alt={`${site.title} conversion-focused website mockup`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Case Study
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <site.icon size={18} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{site.title}</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-5">{site.strategy}</p>
                <div className="flex flex-wrap gap-2">
                  {site.improvements.map((imp) => (
                    <span
                      key={imp}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {imp}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlyConvertingWebsitesSection;
