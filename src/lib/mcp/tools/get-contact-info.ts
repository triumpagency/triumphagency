import { defineTool } from "@lovable.dev/mcp-js";
import { contact } from "../data";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Return Triumph Agency's public contact details, website, social profiles, and how to book a free Shopify strategy call.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: { contact },
  }),
});
