# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BerksAI is a business website for an AI automation consulting service targeting Berks County businesses. The site is built as a React single-page application using Vite as the build tool and React Router for client-side routing.

## Development Commands

```bash
# Start development server (runs on http://localhost:5173 by default)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Architecture

### Routing Structure

The application uses React Router with a simple flat routing hierarchy defined in `src/App.jsx`:
- `/` - Home page with hero section, services grid, and company highlights
- `/about` - About page with founder profile and company values
- `/demo` - Interactive demo page with AI email generation form
- `/contact` - Contact form page

All routes render within the same layout with a persistent Header component.

### Component Organization

- **src/App.jsx**: Root component with Router setup and route definitions
- **src/components/Header.jsx**: Navigation header with responsive hamburger menu and scroll-to-top behavior on navigation
- **src/pages/**: Page components (Home, About, Demo, Contact) - each page is self-contained with its own CSS

### State Management

This is a simple application with local component state only:
- Header uses `useState` for mobile menu toggle
- Contact and Demo pages use `useState` for form handling
- No global state management library is used

### Demo Page API Integration

The Demo page (`src/pages/Demo.jsx:27-48`) makes a POST request to `/api/generate-email` endpoint. This API is not implemented in this frontend-only codebase and would need to be set up separately (likely as a backend service or serverless function).

### Styling Approach

Each component/page has its own CSS file co-located with the component:
- Global styles in `src/index.css` and `src/App.css`
- Component-specific styles follow the pattern: `src/components/ComponentName.css` or `src/pages/PageName.css`
- CSS uses custom properties for theming and responsive design with media queries

### Public Assets

Static assets are in `/public/`:
- `logo.png` - BerksAI logo used in Header
- `about-image.jpg` - Founder photo used on About page

## Project Configuration

- **Build tool**: Vite 4.4.5
- **React version**: 18.2.0
- **React Router**: 6.15.0
- **Linting**: ESLint with React plugins
- **Module type**: ES modules (`"type": "module"` in package.json)

## Notes

- This repository is not currently a git repository
- The Contact form (`src/pages/Contact.jsx:19-24`) only logs to console and shows an alert - no actual form submission is implemented
- The Demo page expects a backend API at `/api/generate-email` that doesn't exist in this codebase
