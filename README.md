# My Portfolio

A React + TypeScript + Vite portfolio site, styled with Tailwind CSS, deployed to GitHub Pages
via GitHub Actions. Structure adapted from a template with a homepage project grid and one
detail page per project.

## Structure

```
src/
  main.tsx              entry point — route list lives here
  Landing.tsx            homepage: hero, bio, project grid, footer
  All.css                global styles / design system
  components/
    Header.tsx            top nav
    HeroCarousel.tsx       auto-advancing image carousel on the homepage
    PortfolioItem.tsx      one project card on the homepage grid
  templates/              reusable building blocks for project detail pages
    PageHero.tsx           category badge + title + summary banner
    SpecBar.tsx            tools/skills strip
    ContentSection.tsx      text + image/video section (most flexible piece)
    ImageGrid.tsx          multi-image gallery
    ProjectNav.tsx          prev/next links at the bottom of a project page
  data/
    projects.ts             one entry per project — drives the homepage cards
  pages/
    ProjectOne.tsx, ProjectTwo.tsx   example project detail pages
public/                   images, PDFs, etc., one folder per project
```

## Adding a new project

1. Add an object to the `projects` array in `src/data/projects.ts` (category, names,
   description, tools, skills, image, and a `path` like `/my-project`).
2. Create `src/pages/MyProject.tsx`. Copy `ProjectOne.tsx` or `ProjectTwo.tsx` as a starting
   point — it's just `PageHero` + `SpecBar` + one or more `ContentSection`s + `ProjectNav`.
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

This repo includes `.github/workflows/deploy.yaml`, which builds and deploys automatically
on every push to `main`. To enable it on a new repo:

1. Push this repo to GitHub (as `<your-username>.github.io` for a root domain, or any name
   for a project site under `<your-username>.github.io/<repo-name>`).
2. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds with `npm run build` and deploys the `dist/` folder.

Note: because routing is client-side, the workflow copies `dist/index.html` to
`dist/404.html` so refreshing on a sub-route (e.g. `/project-one`) doesn't 404.
