import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../api/src/router";

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${import.meta.env.VITE_API_URL}/api`,
      // Optional: add headers, credentials, etc.
      headers() {
        return {
          // Add any auth headers here if needed
        };
      },
    }),
  ],
});
