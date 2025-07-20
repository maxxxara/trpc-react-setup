import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../api/src/router";

export const trpc = createTRPCReact<AppRouter>();

// Get the base URL based on environment
function getBaseUrl() {
  if (typeof window !== "undefined") {
    // Browser should use relative URL
    return "";
  }

  if (import.meta.env.VERCEL_URL) {
    // Reference for vercel.com
    return `https://${import.meta.env.VERCEL_URL}`;
  }

  if (import.meta.env.MODE === "production") {
    // Replace with your actual production domain
    return "https://your-domain.vercel.app";
  }

  // Assume localhost for development
  return "http://localhost:3000";
}

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api`,
      // Optional: add headers, credentials, etc.
      headers() {
        return {
          // Add any auth headers here if needed
        };
      },
    }),
  ],
});
