import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "../src/router";

const app = express();

app.use(
  cors({
    origin: true, // Accepts all origins
    credentials: true,
  })
);

app.use(express.json());

app.use(
  "/api",
  createExpressMiddleware({
    router: appRouter,
  })
);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

export default app;
