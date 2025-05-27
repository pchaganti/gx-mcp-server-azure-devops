import {
  CallToolRequest,
  CallToolResult,
} from '@modelcontextprotocol/sdk/types.js';
import { WebApi } from 'azure-devops-node-api';

/**
 * Function type for identifying if a request belongs to a specific feature.
 */
export interface RequestIdentifier {
  (request: CallToolRequest): boolean;
}

/**
 * Function type for handling feature-specific requests.
 * Returns either the standard MCP CallToolResult or a simplified response structure
 * for backward compatibility.
 */
export interface RequestHandler {
  (
    connection: WebApi,
    request: CallToolRequest,
  ): Promise<
    CallToolResult | { content: Array<{ type: string; text: string }> }
  >;
}
