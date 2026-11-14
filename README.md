# mhdkerol.github.io

My data portfolio website, hosted free on GitHub Pages: **https://mhdkerol.github.io**

The website gives plain-English overviews of each project (what it does, why it matters, how it works). The full code for each project lives in its own GitHub repo.

## Structure

```
index.html                       ← homepage: intro, projects, about, skills
projects/youtube-analytics.html  ← full project story with code highlights
assets/css/style.css             ← all styling
assets/js/main.js                ← project filter buttons
assets/img/                      ← diagrams and screenshots
```

## Adding a new project

1. Copy the project card `<article class="card" ...>` in `index.html` and update the text. Set `data-tags` to the filters it belongs to (`data-engineering`, `sql`, `python`).
2. Copy `projects/youtube-analytics.html` to `projects/<new-project>.html` and update it.
3. Put images in `assets/img/`.
4. Commit and push. The site updates in about a minute.

No build step: plain HTML, CSS and a little JavaScript.
