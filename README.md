# Presentation Loveable

An animated presentation app for the FinSight admin dashboard story. It is built with Vite, React, TanStack Router, Tailwind CSS, and Framer Motion, with a live slide editor for updating content while the presentation is running.

## Features

- Full-screen slide deck with animated transitions
- Live slide editor for changing titles, bullets, and media
- Keyboard navigation and replay controls
- Responsive presentation layout built with Tailwind CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the app for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Presentation Controls

- `ArrowLeft` / `PageUp`: previous slide
- `ArrowRight` / `Space` / `PageDown`: next slide
- `E`: toggle the slide editor
- `R`: replay the current slide animation
- `F`: enter fullscreen

## Project Structure

- `src/routes/` contains the TanStack Router pages
- `src/components/slides.tsx` defines the presentation slides
- `src/components/slide-editor.tsx` powers the live editing panel
- `src/lib/slide-content.ts` stores and resolves editable slide content

## Notes

The app is centered on the FinSight presentation flow, so the homepage opens directly into the slide deck rather than a traditional landing page.
