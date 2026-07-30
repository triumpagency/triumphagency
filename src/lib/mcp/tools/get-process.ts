import { defineTool } from "@lovable.dev/mcp-js";
import { processSteps } from "../data";

export default defineTool({
  name: "get_process",
  title: "Get project process",
  description: "Return Triumph Agency's six-step Shopify project process from discovery call to launch and support.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(processSteps, null, 2) }],
    structuredContent: { steps: processSteps },
  }),
});
