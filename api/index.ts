
import { createServer } from 'http';
import express from 'express';
// @ts-ignore
import { registerRoutes } from '../server/routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = createServer(app);

// Register routes
// Note: registerRoutes is async but doesn't await anything critical for route definition in the current implementation.
// Vercel serverless requires the app to be exported, but we need side-effects of registration.
registerRoutes(server, app);

export default app;
