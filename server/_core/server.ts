import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic } from "./vite";

/**
 * Creates and configures the Express app for both development and production
 * This can be used by both the standalone server and Vercel serverless functions
 */
export async function createApp() {
  const app = express();

  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);

  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  // In production, serve static files
  // On Vercel, static files are served automatically from outputDirectory
  // but we still need to handle client-side routing for SPA
  if (process.env.NODE_ENV === "production" && !process.env.VERCEL) {
    serveStatic(app);
  }

  return app;
}

