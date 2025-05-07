# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js project bootstrapped with `create-next-app`. It uses:

- Next.js 15.3.2 with App Router
- React 19
- TypeScript
- Tailwind CSS 4

## Development Commands

```bash
# Start development server with turbopack
pnpm dev

# Build the application for production
pnpm build

# Start the production server
pnpm start

# Run linting
pnpm lint

# Format all files with Prettier
pnpm format
```

## Project Structure

- `app/` - Contains the Next.js application using the App Router

  - `layout.tsx` - Root layout component that includes global styles and fonts
  - `page.tsx` - Main page component
  - `globals.css` - Global CSS styles

- `public/` - Static assets (images, icons)

## Key Features and Implementations

- Uses Geist and Geist Mono fonts from Google Fonts
- Implements responsive design using Tailwind CSS classes
- Uses Next.js Image component for optimized image loading

## Configuration Files

- `next.config.ts` - Next.js configuration
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS
- `tsconfig.json` - TypeScript configuration

## Important Directives

- Never read or modify files in `node_modules/`, `.next/`, `build/`, and `.idea/` folders
- These directories contain dependencies, build artifacts, and IDE configurations that should not be directly edited
