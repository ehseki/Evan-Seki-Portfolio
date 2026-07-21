# My Portfolio

A React + TypeScript + Vite portfolio site, styled with Tailwind CSS, deployed to GitHub Pages
via GitHub Actions. Structure adapted from a template with a homepage project grid and one
detail page per project.

## Structure

```
src/
  main.tsx              entry point — route list lives here; renders Header full-width,
                          everything else inside .app-shell (width-capped on large screens)
  Landing.tsx            homepage: hero, bio, project grid, footer
  All.css                global styles / design system (single stylesheet, no CSS modules)
  lib/
    asset.ts              prefixes a public/ path with Vite's base — use for every image src
  components/
    Header.tsx            top nav
    HeroCarousel.tsx       auto-advancing image carousel on the homepage
    PortfolioItem.tsx      one project card on the homepage grid
  templates/              reusable building blocks for project detail pages
    PageHero.tsx           title + summary banner, optional half-width image
    ProjectSidebar.tsx     sticky sidebar: Role (optional) / Year / Skills / Tools / Links
    ContentSection.tsx      text + image/video section (most flexible piece)
    ProjectNav.tsx          prev/next links at the bottom of a project page
  data/
    projects.ts             one entry per project — drives the homepage cards
  pages/
    ProjectOne.tsx           real project write-up
    ProjectTwo.tsx           template version of the same structure — copy this for new projects
public/                   images, PDFs, etc., one folder per project
```

## Adding a new project

1. Add an object to the `projects` array in `src/data/projects.ts` (category, names,
   description, tools, skills, image, and a `path` like `/my-project`).
2. Create `src/pages/MyProject.tsx` by copying `ProjectTwo.tsx` — it's the template version
   of the page structure: `PageHero` + a `.project-columns` wrapper (`ProjectSidebar` +
   stacked `ContentSection`s, some followed by a side-by-side photo row) + `ProjectNav`.
   Every image `src` should go through the `asset()` helper from `src/lib/asset.ts`.
3. Add a `<Route path="/my-project" element={<MyProject />} />` in `src/main.tsx`.
4. Drop your images/PDFs into a matching folder under `public/`.

## Replacing placeholder content

- `src/components/Header.tsx` — your name and LinkedIn (or other) link.
- `src/Landing.tsx` — headline, bio paragraph, footer name.
- `src/data/projects.ts` and `src/pages/*` — your actual projects.
- `public/hero/`, `public/project-one/`, `public/project-two/` — swap the placeholder
  `.svg` files for real photos/screenshots (same filenames, or update the paths that
  reference them).
- `index.html` — page `<title>`.

## Local development

```
npm install
npm run dev
```

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and deploys automatically
on every push to `main`. To enable it on a new repo:

1. Push this repo to GitHub (as `<your-username>.github.io` for a root domain, or any name
   for a project site under `<your-username>.github.io/<repo-name>`).
2. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds with `npm run build` and deploys the `dist/` folder.
4. If you're deploying under a subpath (a project site, not a root `<username>.github.io`
   repo), set `base` in `vite.config.ts` to `/<repo-name>/` to match.

Note: routing uses `HashRouter` (URLs like `/#/project-one`), specifically so that
refreshing or linking directly to a sub-route works on GitHub Pages without any extra
404-redirect workaround.
