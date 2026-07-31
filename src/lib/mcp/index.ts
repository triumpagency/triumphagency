import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list-services";
import getProcess from "./tools/get-process";
import searchFaq from "./tools/search-faq";
import listBlogTopics from "./tools/list-blog-topics";
import getCaseStudy from "./tools/get-case-study";
import getContactInfo from "./tools/get-contact-info";

// Issuer must be the direct Supabase host, built from the project ref literal.
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "bola-triumph-portfolio",
  title: "Bola Triumph Portfolio",
  version: "0.1.0",
  instructions:
    "Information tools for Triumph Agency, a premium Shopify design and development agency. Use `list_services` for what the agency offers, `get_process` for the six-step project process, `search_faq` for pricing, timelines, migrations, support and other client questions, `list_blog_topics` for published Shopify insights, `get_case_study` for a sample project write-up, and `get_contact_info` to reach the agency or book a free strategy call. Callers must sign in to this app.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listServices, getProcess, searchFaq, listBlogTopics, getCaseStudy, getContactInfo],
});
