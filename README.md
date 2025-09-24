# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # Curriculum Vitae — React + TypeScript + Vite

    A small personal curriculum-vitae site built with React, TypeScript and Vite.
    The project uses Material UI (MUI) for UI components and theming and includes a basic ESLint setup with import sorting and TypeScript-friendly rules.

    ## Features

    - Vite + React + TypeScript starter
    - Material UI (MUI) theme with Roboto as the default font
    - Import sorting via `eslint-plugin-simple-import-sort`
    - ESLint rules for common formatting and best practices
    - `tsc --noEmit --watch` script for continuous type checking

    ## Prerequisites

    - Node.js 18+ (or LTS)
    - npm

    ## Install

    ```bash
    npm install
    ```

    ## Scripts

    - `npm run dev` — start Vite dev server
    - `npm run build` — build production bundle (runs `tsc -b` then `vite build`)
    - `npm run preview` — preview the production build locally
    - `npm run lint` — run ESLint across the project
    - `npm run lint -- --fix` — run ESLint and auto-fix fixable issues
    - `npm run typecheck:watch` — run TypeScript in watch mode (no emit)

    ## Theming

    The app uses a shared MUI theme in `src/theme.ts`. Roboto is loaded in `src/main.tsx`. You can update the theme (palette, typography, components) in `src/theme.ts`.

    ## Contributing

    - Keep components using MUI primitives (Box, Typography, Link, Paper, Stack) instead of raw HTML tags to ensure consistent theming.
    - Run `npm run lint -- --fix` before committing to keep imports and formatting consistent.
    - Use `npm run typecheck:watch` while developing to catch type errors early.

    ## Troubleshooting

    - If ESLint reports import-sort errors, run `npm run lint -- --fix` to fix them automatically.
    - If types look off, run `npm run typecheck:watch` to inspect type errors.

    ## License

    This project is your personal repository. Add a license file if you intend to share or publish it.
````
