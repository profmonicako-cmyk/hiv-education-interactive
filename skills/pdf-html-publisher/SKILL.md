---
name: pdf-html-publisher
description: Convert PDF education or presentation materials into responsive single-file or static HTML websites, preserve/use extracted page images, add interactive navigation/tabs/expandable explanations/local Q&A, package for GitHub Pages or Cloudflare Pages, connect optional Firebase project config, push to GitHub, and deploy. Use when the user asks to turn a PDF into an HTML webpage/site/app, optimize a PDF-derived HTML site, publish static pages, or document/deploy a PDF-to-HTML workflow.
---

# PDF HTML Publisher

## Overview

Use this skill to turn a PDF-based education or presentation asset into a polished static HTML website and publish it. It covers content extraction, image handling, interactive UI, responsive design, local question-answer summaries, GitHub push, Cloudflare Pages deployment, optional Firebase client configuration, and project documentation.

For a full workflow checklist, read `references/workflow.md`.

## Default Workflow

1. Inventory source files with `rg --files`, `find`, and size checks.
2. Extract text from the PDF when possible. If the PDF is scanned/image-only, use provided draft text, OCR only when suitable language data is installed, and preserve original page images.
3. Build or update a static site with:
   - Clear table-of-contents navigation.
   - Topic tabs or sections matching the user’s requested information architecture.
   - Images inserted where they support the content, not only as a raw gallery unless requested.
   - Expandable `details/summary` blocks for important explanations.
   - Responsive layout verified on desktop and mobile.
4. Add local Q&A only unless the user explicitly asks for a live AI/API integration. Avoid exposing private API keys in frontend code.
5. Package a deploy-ready folder such as `public_site/` containing only required public assets.
6. Exclude source/editor files that are not needed by the website, especially large `.ai`, `.psd`, or draft files.
7. Verify locally with a static server and browser automation.
8. Push the deployment folder to GitHub.
9. Deploy to Cloudflare Pages or GitHub Pages as requested.
10. Write a concise project log documenting the build and optimization process.

## Design Guidance

Match the user’s requested visual style. For hand-drawn/sketch requests, use:

- Paper/grid backgrounds.
- High-contrast ink text.
- Rough borders and irregular radii.
- Sticky-note cards.
- Crayon/highlighter accents.
- Small rotations used carefully without breaking readability.

Do not add a marketing landing page when the user asks for an education/app/tool experience. Put the usable education experience on the first screen.

## Static Hosting Rules

- Use `index.html` as the static entry point.
- Use relative asset paths.
- Add `.nojekyll` for GitHub Pages compatibility.
- For Cloudflare Pages direct/static deploy, leave build command blank and use the deployment folder as the output root.
- When using Wrangler, deploy from the deployment root or pass the deployment folder explicitly.

## Firebase Rules

When the user asks to connect Firebase:

- Use Firebase CLI (`npx -y firebase-tools@latest`) to verify project access.
- Retrieve Web SDK config only for client initialization.
- Do not expose Admin SDK credentials or private service-account JSON.
- If no database instance exists, say so clearly.
- Default database rules should deny reads/writes until a concrete data feature and security model are defined.

## Verification Checklist

Before finalizing:

- Confirm key public URLs return HTTP 200.
- Confirm tab switching works.
- Confirm all referenced images load.
- Confirm no horizontal overflow on desktop and mobile.
- Confirm old/removed text does not remain with `rg`.
- Confirm Git worktree status and pushed commits.
- Confirm deployment URL and production URL.

## Documentation

Maintain `README.md` for deployment instructions and `PROJECT_LOG.md` for the process history when the user asks to preserve the workflow. Include:

- Source materials.
- Major iterations/optimizations.
- Deployment destinations.
- GitHub repository.
- Firebase project status if applicable.
- Future changes the user may consider.
