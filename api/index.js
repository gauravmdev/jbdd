// Vercel serverless function entry point
// This imports and exports the Express app for Vercel
import { createApp } from "../dist/server/_core/server.js";

// Create the app and export it as the default handler
const app = await createApp();
export default app;
