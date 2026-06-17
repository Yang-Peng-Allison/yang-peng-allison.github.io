# Yang Peng Portfolio Website

Static single-page portfolio for GitHub Pages. It uses only HTML, CSS, and vanilla JavaScript, so there is no build step and nothing to install.

## Files

- `index.html` contains the page content, project cards, SEO metadata, and social preview tags.
- `styles.css` contains the responsive layout, theme, card styling, and accessibility states.
- `script.js` contains the mobile navigation toggle, light/dark theme toggle, and footer year.
- `assets/images/` contains project screenshots.
- `assets/resume.pdf` is the resume PDF linked from the hero section.
- `assets/reports/` contains portfolio report deliverables linked from project cards.
- `favicon.svg` is the site icon.

## Deploy To GitHub Pages

1. Create a GitHub repo named exactly `yang-peng-allison.github.io` using your GitHub username in lowercase.
2. Keep all files at the repo root, with `index.html` at the top level.
3. Run these commands from the project folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Yang-Peng-Allison/yang-peng-allison.github.io.git
git push -u origin main
```

4. In GitHub, open the repo and go to `Settings` → `Pages`.
5. Set `Source` to `Deploy from a branch`.
6. Set `Branch` to `main` and folder to `/ (root)`.
7. Your site will go live at `https://yang-peng-allison.github.io`.

## What To Edit First

- In `index.html`, replace `<<LINKEDIN URL>>` with your public LinkedIn profile URL.
- In `index.html`, edit project cards if you want different wording, links, or ordering.
- In `assets/resume.pdf`, replace the resume with a newer version using the same filename when needed.
- In `assets/images/`, replace or add screenshots when you update projects.
- In `index.html`, update the `og:url` and `og:image` metadata if you want a different link preview image.

## Add A New Project Card

1. Copy one existing `<article class="project-card">...</article>` block in `index.html`.
2. Paste it inside `<div class="project-grid">`.
3. Replace the title, summary, tags, image path, alt text, and links.
4. Add the screenshot to `assets/images/`.
5. Keep external links in this format:

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Live / Report</a>
```

## Local Preview

Open `index.html` directly in your browser. No server, npm, or build tools are required.
