# Denys Zahorovskyi Portfolio

Modern bilingual portfolio website for **Denys Zahorovskyi**, a 2nd-year Software Engineering student at Zhytomyr Polytechnic.

Live site: `https://zagor-1.github.io/mysiteportfolio2/`

## Stack

- Next.js 14 App Router with static export
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- `next-themes` for dark/light mode
- Custom Ukrainian/English i18n
- GitHub Actions deployment to GitHub Pages

## Features

- Responsive polished landing portfolio design
- Ukrainian and English language switcher
- Dark/light theme switcher
- Hero, About, Skills, interactive JS Lab, Python Lab, UI Playground, Portfolio, and Contacts sections
- Scroll reveal animations and polished hover states
- Interactive browser-based JavaScript playground with run, auto-fix, delete-line, reset, and terminal output
- Real Python playground powered by Pyodide in a Web Worker, with examples and terminal output
- UI Playground with draggable cards, accent switcher, radius/tilt/glow/spacing sliders, glass mode, shuffle/spin actions, and copyable live config
- SEO metadata, Open Graph, sitemap, robots.txt, and JSON-LD
- Centralized site links in `src/data/site.ts`
- Easy project updates through `src/i18n/dictionaries.ts`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy with GitHub Actions

The repository includes `.github/workflows/pages.yml`, which builds the static Next.js export and deploys `out/` to GitHub Pages.

1. In GitHub, open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push or merge changes into `main`, or run **Deploy portfolio to GitHub Pages** manually from the **Actions** tab.

If deployment fails with `Branch "main" is not allowed to deploy to github-pages due to environment protection rules`, open **Settings → Environments → github-pages** and update **Deployment branches and tags** to allow `main` or select **No restriction**.

The workflow runs:

```bash
npm ci
npm run lint
npm run typecheck
GITHUB_PAGES=true npm run build
```

`GITHUB_PAGES=true` enables the repository base path in `next.config.mjs`, so the site works at `https://zagor-1.github.io/mysiteportfolio2/`.

## Update contacts and links

Main public links are stored in `src/data/site.ts`:

- portfolio URL
- GitHub profile
- email
- Telegram

Update this file first when changing accounts or domains.

## Add a new project

Project cards, JS Lab texts, Python Lab texts, and UI Playground texts are localized in `src/i18n/dictionaries.ts`.

1. Add the Ukrainian project to `dictionaries.uk.projects.items`.
2. Add the English version to `dictionaries.en.projects.items`.
3. Include `title`, `description`, `tech`, `repo`, and optional `demo`.

The UI will render the new card automatically.
