# 12간지 띠 궁합 서비스 (Korean Zodiac Compatibility Service)

## Overview

A Korean zodiac compatibility checking service that allows users to determine relationship compatibility based on the 12 traditional zodiac animals (12간지). The application provides a simple two-step process: users input their birth years or select zodiac animals directly, then receive a compatibility score with detailed explanations. The service is designed with Korean cultural sensibilities in mind, featuring intuitive UI patterns familiar to Korean users of astrology and fortune-telling apps.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in SPA (Single Page Application) mode
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React's built-in state management with React Query for server state
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom design tokens for Korean zodiac theming
- **Build Tool**: Vite with custom alias configuration for clean imports

### Component Structure
- **Page Components**: Home and ResultPage for main application flow
- **Feature Components**: ZodiacSelector, BirthYearInput, CompatibilityResult for core functionality
- **UI Components**: Complete shadcn/ui component library for consistent design
- **Business Logic**: Centralized zodiac calculation and compatibility scoring in `/lib/zodiac.ts`

### Design System
- **Color Palette**: Custom mystical purple and pink theme optimized for both light and dark modes
- **Typography**: Noto Sans KR for optimal Korean text rendering
- **Layout**: Mobile-first responsive design with Tailwind spacing units
- **Interaction**: Hover and active states with custom elevation utilities

### Data Architecture
- **Zodiac Data**: Static configuration with 12 animals, emojis, and Korean names
- **Compatibility Matrix**: Pre-calculated 12x12 scoring matrix stored as static data
- **Year Calculation**: Algorithm to convert birth years to zodiac animals using 1900 as base year
- **Scoring Logic**: Functions to retrieve compatibility scores and generate contextual messages

### Database Setup
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Basic user table structure with UUID primary keys
- **Connection**: Neon Database serverless PostgreSQL via connection string
- **Migrations**: Automated schema management through drizzle-kit

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Development**: Hot module replacement via Vite middleware integration
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development
- **API Structure**: RESTful endpoints under `/api` prefix (currently minimal, extensible)

### Development Workflow
- **Build Process**: Separate client and server builds with esbuild for production
- **Development Server**: Integrated Vite dev server with Express backend
- **Type Safety**: Shared TypeScript types between client and server
- **Code Organization**: Monorepo structure with clear separation of concerns

## External Dependencies

### UI and Styling
- **@radix-ui/react-***: Complete set of accessible UI primitives for all interactive components
- **tailwindcss**: Utility-first CSS framework with custom configuration for Korean zodiac theming
- **class-variance-authority**: Type-safe component variant management
- **lucide-react**: Icon library for consistent iconography

### Data and State Management
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form** + **@hookform/resolvers**: Form handling with validation
- **drizzle-orm**: Type-safe database ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL database connection

### Development and Build Tools
- **vite**: Fast build tool and development server
- **typescript**: Type safety across the entire application
- **wouter**: Lightweight routing solution for React
- **nanoid**: Unique ID generation for various use cases

### Backend Infrastructure
- **express**: Web application framework for Node.js
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **date-fns**: Date manipulation and formatting utilities

The application is designed to be easily deployable on cloud platforms with minimal configuration, leveraging serverless database connections and static asset serving for optimal performance and cost efficiency.