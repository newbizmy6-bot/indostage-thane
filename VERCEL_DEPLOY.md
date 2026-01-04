# Deploying to Vercel

This project has been configured for deployment on Vercel using a Serverless API approach.

## Prerequisities

1.  **Database**: You need a hosted PostgreSQL database (e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)).
2.  **Vercel Account**: [Create one here](https://vercel.com).

## Configuration

1.  **Project Settings**:
    *   **Build Command**: `npm run build` (Default)
    *   **Output Directory**: `dist/public`  <-- **IMPORTANT: Change this from `dist` to `dist/public`**
    *   **Install Command**: `npm install` (Default)

2.  **Environment Variables**:
    Add the following environment variables in your Vercel Project Settings:
    *   `DATABASE_URL`: Your PostgreSQL connection string.
    *   `NODE_ENV`: `production`

## How it works

*   **Frontend**: Built with Vite, output to `dist/public`. Served as static assets.
*   **Backend**: Reference `api/index.ts`. All requests to `/api/*` are rewritten to this serverless function.
*   **Routing**: `vercel.json` handles the routing logic, ensuring client-side routing works for the React app.

## Database Migrations

Since the deployment is serverless, you should run database migrations locally or in a CI/CD pipeline, connecting to your production database string.

```bash
# Run this locally to push schema changes to your production DB
DATABASE_URL="your-production-url" npm run db:push
```
