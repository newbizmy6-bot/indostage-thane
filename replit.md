# IndoStage Creative & Production Website

## Overview

This is a cultural event management website for IndoStage Creative & Production Pvt. Ltd., a premier Indian cultural and entertainment company. The website showcases their services including classical music and dance performances, folk arts, fusion concerts, corporate events, film production, and training workshops. The site emphasizes Indian heritage meeting global stages, with a royal/heritage-themed design using golden/saffron colors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom theme variables for a royal/heritage aesthetic
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Fonts**: Playfair Display (serif) for headings, Lato (sans-serif) for body text

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Build Tool**: Vite for frontend, esbuild for server bundling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains all database table definitions
- **Current Tables**: 
  - `users` - Basic user authentication
  - `contactInquiries` - Contact form submissions

### Project Structure
- `client/` - React frontend application
- `server/` - Express backend server
- `shared/` - Shared code between frontend and backend (schemas, types)
- `attached_assets/` - Static assets and reference materials

### Key Design Decisions
1. **Monorepo Structure**: Frontend and backend share types through the `shared/` directory, ensuring type safety across the stack
2. **Component Library**: Uses shadcn/ui for consistent, accessible UI components that can be customized via CSS variables
3. **Heritage Theme**: Custom color scheme with golden/saffron primary colors to reflect Indian cultural aesthetics
4. **Static Assets**: Generated images stored in `attached_assets/` for cultural performance visuals

## External Dependencies

### Database
- PostgreSQL database (connection via `DATABASE_URL` environment variable)
- Drizzle Kit for database migrations (`npm run db:push`)

### Third-Party Libraries
- `@tanstack/react-query` - Data fetching and caching
- `drizzle-orm` / `drizzle-zod` - Database ORM and validation
- `wouter` - Client-side routing
- `lucide-react` - Icon library
- Radix UI primitives - Accessible component foundations

### Development Tools
- Vite development server with HMR
- Replit-specific plugins for development experience (cartographer, dev-banner, runtime-error-modal)