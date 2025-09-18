# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"What Did You Learn That Isn't True?" is a React web application that allows users to explore outdated "facts" they learned in school by entering their graduation year. The app displays scientific knowledge that has since been updated or debunked, with a voting system that lets users rate the helpfulness of each fact.

## Development Commands

### Primary Commands
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview production build locally

### Database Commands
- `npm run db:setup` - Set up database schema and sample data
- `npm run db:schema` - Apply schema only (for updates)

### Testing
Currently no tests are configured. To add testing, you would typically add:
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Backend**: Vercel serverless functions
- **Database**: Neon PostgreSQL (serverless)
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Routing**: React Router DOM
- **State Management**: React Query for server state, React hooks for local state
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Notifications**: Sonner for toast notifications
- **Session Management**: Crypto-js for hashing, UUID for session tokens

## Architecture

### Directory Structure
```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   └── FactCard.tsx    # Main fact display component with voting
├── data/               # Static data (legacy - being migrated to database)
│   └── outdatedFacts.ts # Original TypeScript facts data
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and API services
│   ├── api.ts          # API service layer for backend communication
│   ├── database.ts     # Database connection and utilities
│   └── session.ts      # Session management utilities
├── pages/              # Route components
├── types/              # TypeScript type definitions
│   └── fact.ts         # Unified fact type definitions
└── main.tsx           # Application entry point

api/                     # Vercel serverless functions
├── facts.ts            # Facts API endpoint
├── session.ts          # Session creation endpoint
└── votes.ts            # Voting API endpoint

database/               # Database schema and setup
├── schema.sql          # PostgreSQL schema definition
└── sample-data.sql     # Sample data for development

scripts/                # Development utilities
└── setup-db.js        # Database setup script
```

### Key Architectural Patterns

1. **Component Composition**: Heavy use of Radix UI primitives composed into custom components
2. **API-First Architecture**: Frontend communicates with backend via REST API
3. **Session-Based Voting**: Anonymous voting with browser fingerprinting and rate limiting
4. **Progressive Enhancement**: Facts load with animation delays, expandable explanations, and voting
5. **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
6. **Serverless Functions**: Vercel functions handle API endpoints with zero configuration

### Core Data Model

The `OutdatedFact` interface defines the structure:
```typescript
interface OutdatedFact {
  id: string;
  fact: string;           // What was taught
  correction: string;     // What we know now
  explanation?: string;   // Optional detailed explanation
  category: string;       // Subject area
  debunkedYear?: number;  // When it was debunked
  taughtUntilYear?: number; // When it stopped being taught
}
```

Facts are organized by decade keys ("1970s", "1980s", etc.) with duplicates for overlapping teaching periods.

### State Management

- **Local UI State**: React useState for form inputs, expanded states, loading states
- **Global State**: React Query for any future server state (currently all data is static)
- **Routing State**: React Router for navigation between Index and NotFound pages

### Styling System

- **Tailwind CSS**: Utility-first styling with custom design tokens
- **CSS Variables**: Theme colors defined as CSS custom properties
- **Component Variants**: Class Variance Authority for component style variants
- **Animations**: Tailwind animations with custom timing delays

## Component Architecture

### UI Component System (shadcn/ui)
- Located in `src/components/ui/`
- Based on Radix UI primitives
- Customized with Tailwind classes
- Consistent design tokens and color schemes

### Main Components
- **Index**: Landing page with form and results display
- **FactCard**: Individual fact display with expandable details
- **App**: Root component with providers and routing setup

### Styling Conventions
- Use Tailwind utility classes
- Follow shadcn/ui component patterns
- Responsive design with mobile-first approach
- Consistent spacing and typography scales

## Important Implementation Details

### Fact Filtering Logic
The `getFactsForGraduationYear()` function in `src/data/outdatedFacts.ts` filters facts by:
1. Including all facts from graduation decade and earlier
2. Removing duplicates by ID
3. Returning chronologically relevant facts

### Animation System
- Staggered animations using CSS animation delays
- Cards animate in with `slide-in-from-bottom` and `fade-in`
- Timing calculated as `index * 100ms` for cascade effect

### Category System
Each fact has a category with corresponding emoji mapping in `FactCard.tsx`. Categories span multiple scientific disciplines.

### Path Aliases
- `@/` maps to `./src/` directory (configured in `vite.config.ts`)
- Use `@/components`, `@/data`, etc. for imports

## Development Guidelines

### Adding New Facts
1. Add to appropriate decade in `src/data/outdatedFacts.ts`
2. Ensure unique ID across all facts
3. Include category that exists in emoji mapping
4. Add `explanation` for complex topics

### Styling New Components
1. Use existing shadcn/ui components where possible
2. Follow Tailwind utility patterns
3. Use consistent spacing scale (4, 6, 8, etc.)
4. Implement responsive design

### Performance Considerations
- Static data keeps bundle size manageable
- Lazy loading could be implemented for large fact sets
- Images are minimal (just emoji)
- Vite provides fast development builds