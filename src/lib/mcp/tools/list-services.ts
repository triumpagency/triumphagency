import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "../data";

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the Shopify services Triumph Agency offers, with a short description of each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
