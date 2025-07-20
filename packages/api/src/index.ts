import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./router";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(
  "/api",
  createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(port, () => {
  console.log(`✅ API server listening on http://localhost:${port}`);
});
