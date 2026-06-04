# PDF-to-HTML Static Site Workflow

## 1. Source Audit

Run:

```bash
rg --files
du -sh <candidate files/folders>
file <pdf-or-images>
```

Identify:

- PDF source.
- Extracted page images.
- Draft HTML or text sources.
- Source/editor files to exclude from deployment.

## 2. Text And Image Extraction

Try `pdftotext -layout` or PDF libraries. If output is empty, treat the PDF as scanned/image-heavy. Check OCR language availability before using OCR.

Preserve original images if requested. Insert images in meaningful content positions rather than a raw gallery when the user asks for a polished education page.

## 3. HTML Build Pattern

Recommended structure:

- `header.hero`
- sticky nav / TOC
- tab list with four or more panels
- content cards
- `details/summary` explainers
- embedded source images in relevant sections
- local question panel
- footer with material/source note

Keep it static: HTML, CSS, JS, images, PDF.

## 4. Local Q&A Pattern

Use a `pdfContext` summary and `localAnswers` keyword map. If the user does not explicitly request an external AI service, avoid API key fields and external calls.

For each answer:

- Use traditional Chinese when source/user context is Taiwanese.
- Keep medical guidance educational.
- Tell users to consult healthcare professionals for personal risk, medication, symptoms, or exposure decisions.

## 5. Deployment Package

Create a clean deployment root such as `public_site/`:

```text
public_site/
├── index.html
├── .nojekyll
├── README.md
├── PROJECT_LOG.md
├── firebase-client.js       # optional
├── firebase.json            # optional
├── .firebaserc              # optional
├── database.rules.json      # optional
├── source.pdf
└── image-folders/
```

Exclude:

- `.ai`, `.psd`, `.indd`
- old drafts
- local screenshots
- `.DS_Store`
- `node_modules`
- `.wrangler`
- `.firebase`

## 6. GitHub

If no repo exists:

```bash
git init
git add .
git commit -m "Deploy PDF education static site"
gh repo create <repo-name> --public --source . --remote origin --push
```

If repo exists:

```bash
git status --short
git add <changed files>
git commit -m "<message>"
git push
```

Do not push unrelated source files from the parent working directory.

## 7. Cloudflare Pages

Deploy with:

```bash
npx wrangler@latest pages deploy <deploy-root> --project-name <project-name>
```

Expect a stable production URL and a new preview URL on each deployment.

After deploy:

```bash
curl -I <production-url>
curl -L <production-url> | rg -n "<expected text>"
```

## 8. Firebase Optional Setup

Check access:

```bash
npx -y firebase-tools@latest projects:list
npx -y firebase-tools@latest apps:list --project <project-id>
npx -y firebase-tools@latest apps:sdkconfig WEB <app-id> --project <project-id>
npx -y firebase-tools@latest database:instances:list --project <project-id>
```

Add client config only. If no database instance exists, add deny-all rules and document the limitation.

## 9. Verification

Use headless browser checks to verify:

- Desktop/mobile width.
- Active tab after clicking.
- Image count and successful image load.
- No horizontal overflow.
- No JS/page errors.
- Removed sections or strings are actually gone.

## 10. Final Report

Include:

- What changed.
- Files changed.
- GitHub URL.
- Production URL.
- Latest preview URL if relevant.
- Verification performed.
*** End Patch
 
