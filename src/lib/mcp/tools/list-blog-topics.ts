import { defineTool } from "@lovable.dev/mcp-js";
import { blogTopics } from "../data";

export default defineTool({
  name: "list_blog_topics",
  title: "List blog topics",
  description: "List Triumph Agency's Shopify blog topics covering development, CRO, design, SEO, speed, branding, AI tools, and eCommerce growth.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(blogTopics, null, 2) }],
    structuredContent: { topics: blogTopics },
  }),
});
