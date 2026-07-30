import { defineTool } from "@lovable.dev/mcp-js";
import { caseStudy } from "../data";

export default defineTool({
  name: "get_case_study",
  title: "Get case study",
  description: "Return Triumph Agency's sample Shopify case study, including challenge, solution, results, and client outcome. Clearly labelled as a demonstration project.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(caseStudy, null, 2) }],
    structuredContent: { caseStudy },
  }),
});
