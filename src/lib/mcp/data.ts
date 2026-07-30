// Public agency information exposed through the MCP server.
// Mirrors the content published on the Triumph Agency website.

export const services = [
  { name: "Custom Shopify Design", detail: "Bespoke storefront design built around your brand and buyer, not a recycled template." },
  { name: "Shopify Development", detail: "Clean, fast Liquid builds with reusable sections your team can edit without a developer." },
  { name: "Store Redesign", detail: "Rebuilding existing Shopify stores for better branding, speed, and conversion." },
  { name: "Platform Migration", detail: "Moves from WooCommerce, Wix, Squarespace, BigCommerce, and custom platforms with SEO-safe redirects." },
  { name: "Conversion Rate Optimisation", detail: "Audits, testing, and iterative improvements based on your store analytics." },
  { name: "Speed & SEO Optimisation", detail: "Image, script, and theme tuning plus semantic markup, metadata, and structured data." },
  { name: "Ongoing Support & Maintenance", detail: "Monthly retainers covering updates, monitoring, and continuous improvement." },
];

export const processSteps = [
  { step: 1, name: "Discovery Call", detail: "A free, no-pressure conversation about products, customers, and goals." },
  { step: 2, name: "Research & Strategy", detail: "Store audit, competitor review, and a written plan with scope and timeline." },
  { step: 3, name: "Store Design", detail: "Custom UI/UX reviewed and approved before development begins." },
  { step: 4, name: "Shopify Development", detail: "Fast, maintainable builds with reusable, client-editable sections." },
  { step: 5, name: "Testing & QA", detail: "Cross-device testing, checkout run-throughs, speed tuning, and SEO checks." },
  { step: 6, name: "Launch & Support", detail: "Managed launch with monitoring plus ongoing post-launch support." },
];

export const faqs = [
  { question: "How long does a Shopify project take?", answer: "Most redesigns run three to five weeks. A full custom build with complex integrations typically takes six to ten weeks." },
  { question: "How much does a Shopify store cost?", answer: "Pricing depends on scope. We quote a fixed project price after the discovery call so numbers do not move mid-build." },
  { question: "Can you migrate my store from another platform?", answer: "Yes — WooCommerce, Wix, Squarespace, BigCommerce, and custom platforms, including products, customers, orders, and URL redirects." },
  { question: "Do you redesign existing Shopify stores?", answer: "Often. If the foundation is sound we improve what exists rather than rebuild, which is usually faster and cheaper." },
  { question: "Can you build custom Shopify features?", answer: "Yes: custom sections, product configurators, bundle and subscription flows, and bespoke theme functionality using Liquid and the Shopify APIs." },
  { question: "Will my store be optimised for SEO?", answer: "Every build ships with semantic markup, structured data, optimised metadata, fast load times, and a sensible URL structure." },
  { question: "Do you handle conversion rate optimisation?", answer: "Yes. CRO is built into the design phase, and post-launch CRO work is available as a separate service." },
  { question: "What kind of support do you offer after launch?", answer: "A post-launch support window is included, with optional monthly maintenance retainers after that." },
  { question: "What are your payment terms?", answer: "Typically 50% to reserve the project slot and 50% on completion. Larger projects can be split into milestones." },
  { question: "How many revisions are included?", answer: "Two rounds of revisions per design phase. Additional rounds are quoted transparently before extra work starts." },
  { question: "Who owns the store and the files?", answer: "You do — the Shopify store, theme code, assets, and accounts are all yours." },
  { question: "Can you integrate third-party apps and tools?", answer: "Yes: Klaviyo, reviews, subscriptions, loyalty, analytics, ERP and inventory systems, and payment gateways." },
  { question: "Will my store be fast on mobile?", answer: "Speed is a build requirement. We compress media, trim scripts, limit app bloat, and test real mobile conditions." },
  { question: "Do you write product copy and content?", answer: "Basic content structuring is included; full copywriting is available as an add-on." },
  { question: "What do you need from me to get started?", answer: "Brand assets, product information, and access to your Shopify account. We help assemble anything missing." },
];

export const blogTopics = [
  { title: "Shopify Theme vs Custom Build: Which One Fits Your Brand?", summary: "How to decide whether a premium theme or a custom build is the smarter investment." },
  { title: "9 Product Page Elements That Quietly Kill Conversions", summary: "Small product-page details that cause hesitation right before checkout." },
  { title: "Why Your Shopify Store Is Slow (And How to Fix It in a Weekend)", summary: "Common causes of sluggish load times and the fixes that matter." },
  { title: "Shopify SEO Fundamentals Every Store Owner Should Know", summary: "A practical checklist for structure, metadata, and content." },
  { title: "What Makes an eCommerce Store Look Expensive", summary: "Typography, spacing, and photography choices that signal premium quality." },
  { title: "How to Reduce Cart Abandonment Without Discounting", summary: "Trust, clarity, and friction fixes that recover lost sales." },
  { title: "Designing Shopify Stores for Thumbs, Not Cursors", summary: "Mobile-first patterns that make phone buying effortless." },
  { title: "The Metrics That Actually Predict eCommerce Growth", summary: "Which numbers deserve attention and which are vanity." },
  { title: "Using AI Tools to Scale Product Content Without Sounding Generic", summary: "A workflow for on-brand AI-assisted product copy." },
  { title: "Building a Brand System Your Shopify Store Can Grow Into", summary: "Define colour, type, and voice once and apply them everywhere." },
  { title: "Migrating from WooCommerce to Shopify Without Losing SEO", summary: "The redirect and data strategy that protects rankings." },
  { title: "The Hidden Cost of Shopify Apps", summary: "How app stacking slows a store and inflates monthly bills." },
  { title: "A/B Testing on Shopify: What to Test First", summary: "A prioritised testing roadmap for lower-traffic stores." },
  { title: "Checkout Optimisation: Where Customers Drop Off and Why", summary: "Diagnosing the final and most expensive funnel leak." },
  { title: "Writing Product Descriptions That Sell Instead of Describe", summary: "Turning specs into reasons to buy." },
  { title: "The Five Klaviyo Flows Every Shopify Store Should Have Live", summary: "Automated revenue you set up once." },
  { title: "Homepage Layouts That Guide Customers Instead of Overwhelming Them", summary: "Structuring a homepage around one clear next action." },
  { title: "How to Increase Average Order Value Without Annoying Customers", summary: "Bundling and upsell tactics that feel helpful." },
  { title: "Setting Up Shopify Analytics So You Can Trust Your Data", summary: "Tracking, attribution, and reporting done properly." },
  { title: "When It Is Time to Redesign Your Shopify Store", summary: "Five signals your current store is costing you money." },
];

export const caseStudy = {
  title: "Rebuilding a Premium Skincare Store on Shopify",
  disclaimer:
    "Sample case study. This is a demonstration project illustrating the agency's process and standards, not a named client engagement.",
  challenge:
    "A growing skincare brand had outgrown its template store: product discovery was buried, mobile checkout leaked customers at the shipping step, and generic theme styling undermined premium positioning. The team could not launch a collection without a developer.",
  solution:
    "A full store audit (analytics, heatmaps, technical review) followed by a rebuild around fewer decisions and faster purchases: redesigned collection architecture, sticky mobile add-to-cart, a simplified two-step checkout, and a custom Shopify section library for no-code page building.",
  results:
    "Sub-two-second mobile loads, consistent brand storytelling across product pages, campaign pages shipped in an afternoon instead of a sprint, and materially lower checkout drop-off after simplifying shipping and payment steps.",
  clientOutcome:
    "A Shopify store that matches the products' price point and scales with the catalogue, with ongoing support tracking speed, SEO, and conversion month over month.",
};

export const contact = {
  agency: "Triumph Agency",
  email: "triumphproagency@gmail.com",
  website: "https://triumphagency.lovable.app",
  location: "Available worldwide (remote)",
  consultation: "Free 30-minute Shopify strategy call, no obligation.",
  social: {
    instagram: "https://www.instagram.com/triumphproagency",
    facebook: "https://www.facebook.com/triumphproagency",
    x: "https://x.com/BolaTriump",
    tiktok: "https://www.tiktok.com/@thetriumphagency",
  },
};
