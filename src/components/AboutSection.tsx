import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Palette,
  TrendingUp,
  Smartphone,
  Gauge,
  LifeBuoy,
  Target,
  Eye,
  BadgeCheck,
  Lightbulb,
  Eye as EyeIcon,
  ShieldCheck,
  HeartHandshake,
  RefreshCw,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import aboutHero from "@/assets/about-hero.jpg";

const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">{children}</p>
);

const strengths = [
  { icon: ShoppingBag, title: "Shopify Expertise", desc: "Years focused on one platform, so we know exactly what makes a store fast, stable and easy to run." },
  { icon: Palette, title: "Custom Website Solutions", desc: "No recycled templates. Every layout is designed around your brand, catalogue and buyer." },
  { icon: TrendingUp, title: "Conversion-Focused Design", desc: "Each section earns its place by shortening the path from first click to completed checkout." },
  { icon: Smartphone, title: "Mobile-Friendly Development", desc: "Designed mobile first and tested on real devices, because that is where most of your revenue happens." },
  { icon: Gauge, title: "Performance Optimization", desc: "Lean code, compressed media and disciplined app usage keep pages quick and rankings healthy." },
  { icon: LifeBuoy, title: "Ongoing Support", desc: "We stay available after launch to maintain, refine and keep improving what we built together." },
];

const processSteps = [
  { n: "01", title: "Discovery & Strategy", desc: "Understand your goals, audience and business needs, then agree a clear plan, scope and timeline." },
  { n: "02", title: "Design", desc: "Create modern, user-friendly and visually appealing designs you review before development starts." },
  { n: "03", title: "Development", desc: "Build a responsive, scalable and high-performing Shopify store with reusable, editable sections." },
  { n: "04", title: "Launch & Support", desc: "Test, launch and provide ongoing support so your store keeps performing after go-live." },
];

const values = [
  { icon: BadgeCheck, title: "Quality", desc: "Considered detail in every screen, every state and every line of code." },
  { icon: Lightbulb, title: "Innovation", desc: "We keep testing new ideas and patterns rather than repeating the same build." },
  { icon: EyeIcon, title: "Transparency", desc: "Clear scope, clear pricing, honest updates. You always know where things stand." },
  { icon: ShieldCheck, title: "Reliability", desc: "Deadlines we mean, communication you can plan around, work that holds up." },
  { icon: HeartHandshake, title: "Customer Success", desc: "Your growth is the only real measure of whether the project worked." },
  { icon: RefreshCw, title: "Continuous Improvement", desc: "A store is never finished. We keep refining based on real behaviour and data." },
];

const services = [
  "Shopify Store Design",
  "Shopify Store Redesign",
  "Shopify Theme Customization",
  "Landing Page Design",
  "Product Page Design",
  "Conversion Rate Optimization",
  "Website Speed Optimization",
  "Responsive Web Design",
  "Website Maintenance",
];

const testimonials = [
  { name: "Sample Client", company: "Skincare Brand", text: "Organised from the first call. Designs arrived on schedule and the finished store finally looks like the brand we set out to build." },
  { name: "Sample Client", company: "Apparel Store", text: "Communication was the standout. We always knew what was happening, and the store is far easier to navigate on mobile." },
  { name: "Sample Client", company: "Home Goods Retailer", text: "Clean design, fast pages, and a team that explained the reasoning behind every decision. Support has been just as responsive." },
];

const faqs = [
  { q: "Why should I choose Triumph Agency?", a: "We specialise in Shopify rather than spreading across every platform. That focus means faster builds, fewer surprises, and design decisions grounded in what actually converts for eCommerce brands." },
  { q: "How long does a Shopify project take?", a: "A focused redesign typically runs three to five weeks. Larger builds with custom sections, migrations or bespoke functionality usually take six to ten weeks. You get a firm timeline before work begins." },
  { q: "Do you redesign existing Shopify stores?", a: "Yes, redesigns are a large part of our work. We audit your current store, keep what already performs, and rebuild the parts that lose customers." },
  { q: "Do you provide support after launch?", a: "We do. Every project includes a post-launch support window, and ongoing monthly care is available for maintenance, updates and continued optimisation." },
  { q: "Can you optimize my existing Shopify website?", a: "Absolutely. We handle speed tuning, conversion optimisation, mobile fixes and product page improvements without a full rebuild when that is the better use of your budget." },
];

const AboutSection = () => (
  <div>
    {/* Hero */}
    <section className="section-padding bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Eyebrow>About Us</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            We Build Shopify Stores That Help Businesses Grow
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
            At Triumph Agency, we specialize in designing and developing high-performing Shopify
            stores that combine beautiful design, seamless user experience, and conversion-focused
            strategies to help brands succeed online.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/book">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/top-projects">View Our Portfolio</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <img
            src={aboutHero}
            alt="Shopify store analytics dashboard with product cards and revenue metrics"
            width={1280}
            height={960}
            decoding="async"
            className="w-full rounded-2xl border border-border/50 shadow-2xl"
          />
        </Reveal>
      </div>
    </section>

    {/* Who we are */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            A Shopify Agency Built Around Results
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Triumph Agency is a dedicated Shopify web design agency focused on helping businesses
            create powerful online stores. We combine creativity, strategy, and technical expertise
            to build websites that not only look exceptional but also deliver measurable business
            results.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto grid md:grid-cols-2 gap-6">
        {[
          {
            icon: Target,
            label: "Our Mission",
            text: "Our mission is to help businesses establish a strong online presence by creating Shopify websites that provide outstanding user experiences, strengthen brand identity, and increase conversions.",
          },
          {
            icon: Eye,
            label: "Our Vision",
            text: "Our vision is to become a trusted partner for businesses worldwide by delivering innovative Shopify solutions that drive long-term growth and success.",
          },
        ].map((item, i) => (
          <Reveal key={item.label} delay={i * 0.1}>
            <div className="glass rounded-2xl p-8 h-full">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-5">
                <item.icon size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Why choose */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>Why Us</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Triumph Agency
            </h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="glass rounded-2xl p-7 h-full hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-5 group-hover:scale-110 transition-transform">
                  <s.icon size={22} />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>Our Process</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              How We Work
            </h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="glass rounded-2xl p-7 h-full relative">
                <span className="font-display text-4xl font-bold text-accent/20">{s.n}</span>
                <h3 className="font-display text-base font-semibold text-foreground mt-3 mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Core values */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>Core Values</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What We Stand For
            </h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="flex gap-4 rounded-2xl border border-border/50 p-6 h-full hover:border-accent/40 transition-colors">
                <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-accent/10 text-accent">
                  <v.icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>Services</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What We Do
            </h2>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s} delay={i * 0.04}>
              <li className="glass rounded-xl px-5 py-4 flex items-center gap-3 hover:border-accent/40 transition-colors">
                <ArrowRight size={16} className="text-accent shrink-0" />
                <span className="font-display text-sm font-medium text-foreground">{s}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>

    {/* Client success */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-4">
            <Eyebrow>Client Success</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What Clients Say
            </h2>
          </div>
        </Reveal>
        <p className="text-center text-xs text-muted-foreground mb-12 max-w-xl mx-auto">
          Placeholder feedback shown for illustration, ready to be replaced with verified client
          reviews.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.company} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <Reveal>
          <div className="text-center mb-12">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-display text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>

    {/* Final CTA */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <Reveal>
          <div className="glass rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Let's Build a Shopify Store That Grows Your Business
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Whether you're launching a new store or improving an existing one, Triumph Agency is
              ready to help you create an online experience that delivers results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default AboutSection;
