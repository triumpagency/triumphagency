import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { tag: "Development", title: "Shopify Theme vs Custom Build: Which One Fits Your Brand?", summary: "How to decide whether a premium theme or a custom build is the smarter investment at your stage." },
  { tag: "CRO", title: "9 Product Page Elements That Quietly Kill Conversions", summary: "The small details on product pages that cause hesitation right before checkout." },
  { tag: "Speed", title: "Why Your Shopify Store Is Slow (And How to Fix It in a Weekend)", summary: "The usual culprits behind sluggish load times and the fixes that actually move the needle." },
  { tag: "SEO", title: "Shopify SEO Fundamentals Every Store Owner Should Know", summary: "A practical checklist for structure, metadata, and content that helps you rank." },
  { tag: "Design", title: "What Makes an eCommerce Store Look Expensive", summary: "The typography, spacing, and photography choices that signal premium quality." },
  { tag: "CRO", title: "How to Reduce Cart Abandonment Without Discounting", summary: "Trust, clarity, and friction fixes that recover sales you are currently losing." },
  { tag: "Mobile", title: "Designing Shopify Stores for Thumbs, Not Cursors", summary: "Mobile-first patterns that make buying on a phone effortless." },
  { tag: "Growth", title: "The Metrics That Actually Predict eCommerce Growth", summary: "Which numbers deserve your attention and which ones are vanity." },
  { tag: "AI", title: "Using AI Tools to Scale Product Content Without Sounding Generic", summary: "A workflow for generating product copy that still sounds like your brand." },
  { tag: "Branding", title: "Building a Brand System Your Shopify Store Can Grow Into", summary: "How to define colour, type, and voice once and apply them everywhere." },
  { tag: "Migration", title: "Migrating from WooCommerce to Shopify Without Losing SEO", summary: "The redirect and data strategy that protects your rankings during a move." },
  { tag: "Apps", title: "The Hidden Cost of Shopify Apps", summary: "How app stacking slows your store and inflates your monthly bill." },
  { tag: "CRO", title: "A/B Testing on Shopify: What to Test First", summary: "A prioritised testing roadmap for stores without huge traffic volume." },
  { tag: "Checkout", title: "Checkout Optimisation: Where Customers Drop Off and Why", summary: "Step-by-step diagnosis of the final and most expensive leak in your funnel." },
  { tag: "Content", title: "Writing Product Descriptions That Sell Instead of Describe", summary: "A simple framework for turning specs into reasons to buy." },
  { tag: "Email", title: "The Five Klaviyo Flows Every Shopify Store Should Have Live", summary: "Automated revenue you can set up once and keep earning from." },
  { tag: "Design", title: "Homepage Layouts That Guide Customers Instead of Overwhelming Them", summary: "Structuring your homepage around one clear next action." },
  { tag: "Growth", title: "How to Increase Average Order Value Without Annoying Customers", summary: "Bundling and upsell tactics that feel helpful rather than pushy." },
  { tag: "Analytics", title: "Setting Up Shopify Analytics So You Can Trust Your Data", summary: "Tracking, attribution, and reporting configured properly from the start." },
  { tag: "Strategy", title: "When It Is Time to Redesign Your Shopify Store", summary: "The five signals that mean your current store is costing you money." },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display text-sm tracking-[0.2em] uppercase mb-3">Insights</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            From the Triumph Blog
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: (i % 6) * 0.07 }}
              className="glass rounded-xl p-6 hover:border-accent/30 transition-colors group"
            >
              <span className="text-xs font-medium text-accent uppercase tracking-wider">{p.tag}</span>
              <h3 className="font-display text-base font-semibold text-foreground mt-2 mb-2 flex items-start gap-1.5">
                {p.title}
                <ArrowUpRight size={14} className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
