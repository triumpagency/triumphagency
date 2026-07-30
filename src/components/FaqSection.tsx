import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does a Shopify project take?", a: "Most redesigns run three to five weeks. A full custom build with complex integrations typically takes six to ten weeks. You get a firm timeline in writing before we start." },
  { q: "How much does a Shopify store cost?", a: "Pricing depends on scope — page count, custom functionality, and integrations. We quote a fixed project price after the discovery call so there are no moving numbers mid-build." },
  { q: "Can you migrate my store from another platform?", a: "Yes. We handle migrations from WooCommerce, Wix, Squarespace, BigCommerce, and custom platforms, including products, customers, orders, and URL redirects to protect your SEO." },
  { q: "Do you redesign existing Shopify stores?", a: "Often, yes. If your foundation is sound we improve what exists rather than rebuild it — that is usually faster and cheaper for the same result." },
  { q: "Can you build custom Shopify features?", a: "We build custom sections, product configurators, bundle and subscription flows, and bespoke theme functionality using Liquid and the Shopify APIs." },
  { q: "Will my store be optimised for SEO?", a: "Every build ships with clean semantic markup, structured data, optimised metadata, fast load times, and a sensible URL structure. Ongoing content SEO is available as a separate service." },
  { q: "Do you handle conversion rate optimisation?", a: "Yes. CRO is built into the design phase, and we also offer post-launch CRO work: audits, A/B testing, and iterative improvements based on your analytics." },
  { q: "What kind of support do you offer after launch?", a: "Every project includes a post-launch support window for fixes and refinements. Beyond that, we offer monthly maintenance retainers covering updates, monitoring, and improvements." },
  { q: "What are your payment terms?", a: "Typically 50% to reserve your project slot and 50% on completion before handover. Larger projects can be split into milestone payments." },
  { q: "How many revisions are included?", a: "Two rounds of revisions per design phase are included, which is enough for almost every project. Additional rounds are quoted transparently before any extra work starts." },
  { q: "Who owns the store and the files?", a: "You do — fully. The Shopify store, theme code, assets, and accounts are all yours. We never hold your store hostage." },
  { q: "Can you integrate third-party apps and tools?", a: "Yes: email platforms like Klaviyo, reviews, subscriptions, loyalty, analytics, ERP and inventory systems, and payment gateways. We also advise on which apps to remove." },
  { q: "Will my store be fast on mobile?", a: "Speed is a build requirement, not an afterthought. We compress media, trim scripts, limit app bloat, and test on real mobile conditions before launch." },
  { q: "Do you write product copy and content?", a: "We can. Basic content structuring is included; full copywriting and product description writing is available as an add-on." },
  { q: "What do you need from me to get started?", a: "Your brand assets, product information, and access to your Shopify account. If any of that is missing, we will help you put it together during the strategy phase." },
];

const FaqSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">FAQ</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Questions, Answered
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-sm md:text-base text-foreground hover:text-accent">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
