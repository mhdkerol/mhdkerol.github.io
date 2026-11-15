# mhdkerol.github.io

Personal portfolio of Khairul Ikhwan, hosted on GitHub Pages: **https://mhdkerol.github.io**

Plain HTML, CSS and a little JavaScript. No framework and no build step.

## Structure

```
index.html                        homepage: intro, about, tech stack, featured project, contact
projects/youtube-analytics.html   project detail page
404.html                          not-found page
assets/css/style.css              all styles
assets/js/main.js                 mobile menu, active nav link, header border
assets/img/icons.svg              technology logos (SVG sprite, from Simple Icons, CC0)
assets/img/                       screenshots, diagrams and social preview image
favicon.svg, favicon-32.png, apple-touch-icon.png
```

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` directly as a file also mostly works, but the logos load more reliably through a local server.

## Deploy

Push to the `main` branch. GitHub Pages (Settings → Pages → Deploy from a branch → `main` / root) publishes the site within a minute or two.

## Common edits

- **Add the resume:** put the PDF in `assets/` (e.g. `assets/Khairul-Ikhwan-Resume.pdf`) and uncomment the resume button in the hero section of `index.html`.
- **Add a logo:** add a `<symbol id="i-name">` to `assets/img/icons.svg`, then use `<svg class="icon"><use href="assets/img/icons.svg#i-name"></use></svg>`.
- **Add a project:** copy the `<article class="feature">` block in `index.html` and `projects/youtube-analytics.html` as a starting point.
