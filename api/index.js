// Vercel serverless function entry point
// This imports and exports the Express app for Vercel
import { createApp } from "../dist/server/_core/server.js";

let appPromise = null;

async function getApp() {
  if (!appPromise) {
    appPromise = createApp();
  }
  return appPromise;
}

export default async function handler(req, res) {
  const app = await getApp();
  return app(req, res);
}
