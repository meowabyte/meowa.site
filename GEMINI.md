# Project Overview

This is a personal portfolio website for "meowabyte" (Jake). It is a modern, single-page application built with Preact and Vite. The styling is done with TailwindCSS, and it includes some fun, animated components like a fake terminal that runs `neofetch`. The backend is powered by Cloudflare Workers, although it is currently minimal.

## Building and Running

### Development

To run the development server:

```bash
npm run dev
```

This will start a local server at `http://localhost:5173/`.

### Production

To build the project for production:

```bash
npm run build
```

This will create a `dist/` directory with the optimized and pre-rendered static files.

To preview the production build locally:

```bash
npm run preview
```

This will start a local server at `http://localhost:4173/`.

### Deployment

To deploy the website to Cloudflare Pages:

```bash
npm run deploy
```

This command will first build the project and then publish it using `wrangler`.

## Development Conventions

*   **Framework:** Preact with Vite
*   **Styling:** TailwindCSS
*   **Language:** TypeScript
*   **Backend:** Cloudflare Workers with `itty-router`
*   **Linting:** ESLint with the `preact` configuration.
*   **Package Manager:** The `bun.lock` file suggests that `bun` is the preferred package manager.
