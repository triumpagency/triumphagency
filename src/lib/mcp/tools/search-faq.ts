import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { faqs } from "../data";

export default defineTool({
  name: "search_faq",
  title: "Search FAQ",
  description:
    "Search Triumph Agency's frequently asked questions about timelines, pricing, migrations, custom development, SEO, CRO, support, payment terms, revisions, ownership, and integrations. Omit the query to return every FAQ.",
  inputSchema: {
    query: z.string().trim().min(1).optional().describe("Optional keyword to filter FAQs by."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const needle = query?.toLowerCase();
    const matches = needle
      ? faqs.filter(
          (f) => f.question.toLowerCase().includes(needle) || f.answer.toLowerCase().includes(needle),
        )
      : faqs;

    return {
      content: [
        {
          type: "text",
          text: matches.length
            ? JSON.stringify(matches, null, 2)
            : `No FAQ entries matched "${query}".`,
        },
      ],
      structuredContent: { matches },
    };
  },
});
