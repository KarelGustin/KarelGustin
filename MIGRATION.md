# Migration to Next.js

This project has been migrated from vanilla HTML/CSS/JS to Next.js.

## What Changed

- **HTML** → React components in `components/` directory
- **JavaScript** → TypeScript React components with hooks
- **CSS** → Moved to `app/globals.css` (same styles)
- **GSAP** → Integrated with React useEffect hooks

## Old Files

The original files have been moved to `_old/` directory:
- `index.html` → Now split into React components
- `script.js` → Converted to TypeScript React components
- `styles.css` → Copied to `app/globals.css`

## New Structure

- `app/` - Next.js App Router files
- `components/` - React components
- `lib/` - Data and utilities
- `hooks/` - Custom React hooks

## Running the Project

```bash
npm install
npm run dev
```

The project now runs on Next.js with all the same features and animations!
