# meowa.site

Welcome to `meowa.site`, the personal portfolio website for meowabyte! This project showcases a modern, single-page application experience, built with cutting-edge web technologies.

## Features

*   **Sleek & Modern UI/UX:** Designed with a focus on aesthetics and user experience.
*   **Interactive Terminal:** A fun, fake terminal component running `neofetch` for a unique touch.
*   **Blazing Fast Performance:** Leverages Preact, Vite, and Cloudflare Workers for optimal speed.
*   **Responsive Design:** Optimized for seamless viewing across all devices.

## Tech Stack

*   **Frontend:** [Preact](https://preactjs.com/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [TailwindCSS](https://tailwindcss.com/)
*   **Backend:** [Cloudflare Workers](https://workers.cloudflare.com/), [itty-router](https://github.com/kwhitley/itty-router)
*   **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (which includes npm) or [Bun](https://bun.sh/) installed on your system. Bun is the preferred package manager for this project.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/meowabyte/meowa.site.git
    cd meowa.site
    ```
2.  **Install dependencies:**
    ```bash
    bun install
    # or npm install
    ```

### Development

To start the development server:

```bash
bun dev
# or npm run dev
```

This will open the application in your browser at `http://localhost:5173/`.

### Building for Production

To build the optimized production-ready files:

```bash
bun build
# or npm run build
```

The build output will be located in the `dist/` directory.

### Previewing Production Build

To preview the production build locally:

```bash
bun preview
# or npm run preview
```

This will start a local server at `http://localhost:4173/` to serve the built files.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please ensure your code adheres to the project's linting standards. You can run the linter with:

```bash
bun lint
# or npm run lint
```

# Credits

A big thank you to all the tools, libraries, and resources that made this project possible. You can find a detailed list in the [CREDITS.md](CREDITS.md) file.


