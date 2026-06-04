# TANA HIV Education Interactive Site: Project Log

## Current Public URLs

- Production site: <https://hiv-education-interactive.pages.dev>
- Recent deployment preview from the Firebase/GitHub sync step: <https://633f79c4.hiv-education-interactive.pages.dev>
- Documentation deployment preview: <https://692ad183.hiv-education-interactive.pages.dev>
- Note: Cloudflare Pages creates a new preview URL for each deployment. The production URL remains stable.
- GitHub repository: <https://github.com/profmonicako-cmyk/hiv-education-interactive>

## Source Material

- Original PDF: `AcrossHIV_VCT Education Material_TW_SE_2021.pdf`
- Original page images:
  - `hiv0105/` for pages 1-5
  - `hiv0610/` for pages 6-10
  - `hiv1116/` for pages 11-16
- Large `.ai` source files were intentionally excluded from deployment and GitHub because they are not needed by the public static site and may exceed GitHub file-size limits.

## Build Process

1. Reviewed local project files and confirmed the PDF, JPG page-image folders, and earlier HTML drafts.
2. Tried text extraction from the PDF. The PDF behaved like image/scanned content, so usable text was taken from the existing draft HTML and manually organized into a clearer education flow.
3. Built a single-file static HTML experience with responsive layout, tab navigation, expandable detail sections, PDF link, image assets, and a local question panel.
4. Created a deploy-ready `public_site/` folder containing only the public website assets.
5. Added `.nojekyll` for GitHub Pages compatibility.
6. Packaged a direct-upload ZIP for static hosting during the deployment preparation stage.

## Content Structure

The site is organized into four main tabs:

- `預防愛滋`: page title `認識 HIV 傳染與篩檢`
- `預防性病`: page title `安全性行為，安心享性福`
- `自我保護`: page title `我的健康「性」福我決定`
- `預防性投藥`: page title `PrEP 與 PEP`

Additional section:

- `本地問答`: uses local keyword summary replies only.

## Optimization Timeline

### Initial Interactive Version

- Added table-of-contents navigation.
- Added four tabbed topic pages.
- Kept original PDF images.
- Added expandable detail blocks for important explanations.
- Added a question panel based on the PDF summary.
- Made the layout responsive for desktop and mobile.

### Static Deployment Package

- Created `public_site/` as the clean deployment root.
- Included only required website assets: `index.html`, PDF, image folders, `.nojekyll`, and README.
- Excluded `.ai` source files and old draft HTML files.

### Cloudflare Pages Deployment

- Installed/ran Wrangler through `npx wrangler@latest`.
- Logged in to Cloudflare through OAuth.
- Created Cloudflare Pages project `hiv-education-interactive`.
- Deployed the first public version to Cloudflare Pages.

### Hand-Drawn Visual Redesign

- Reworked the site into `design-hand-drawn` style.
- Added notebook-paper grid background, rough borders, sticky-note cards, crayon circle marks, hand-drawn arrows, and highlighted text.
- Moved images into the relevant content tabs.
- Removed the standalone `原始 PDF 圖片展示` section.

### Question Panel Simplification

- Removed `OpenAI API Key` field.
- Removed `API Endpoint` field.
- Removed API key safety explanation text.
- Removed external OpenAI request logic.
- Kept only local keyword summary replies.

### Branding And Navigation Updates

- Changed `AcrossHIV VCT Education Material TW SE 2021` to `TANA 愛滋病護理學會 v.2021`.
- Changed top brand text to `TANA 愛滋病護理學會`.
- Linked the brand to the TANA website:
  <https://www.tananurse.org.tw/index.aspx?lang=cht>
- Changed the hero `開始閱讀` button to open the PDF directly.
- Removed the duplicate `開啟 PDF` button from the navigation bar.
- Cleaned the navigation to repeated page links plus `本地問答`.

## Firebase Connection

Firebase project connected:

- Project ID: `database-3dd5b`
- Web App display name found in Firebase: `wordcloud`
- Web App ID: `1:924885924242:web:d12a5d45dcdb1be414a94b`

Files added:

- `.firebaserc`
- `firebase.json`
- `firebase-client.js`
- `database.rules.json`

Safety note:

- The Firebase Web SDK config is public client configuration, not an Admin SDK secret.
- Realtime Database instances were checked and none were found.
- `database.rules.json` currently denies all Realtime Database reads and writes by default.
- A database instance or Firestore should be created before adding real data-writing features.

## GitHub Workflow

1. Initialized Git in `public_site/`.
2. Added deployment-ready files only.
3. Committed the first deployable version:
   - `Deploy HIV education static site`
4. Created GitHub repository:
   - <https://github.com/profmonicako-cmyk/hiv-education-interactive>
5. Pushed `main` to GitHub.

## Verification Performed

Local and public checks included:

- Desktop and mobile viewport checks with headless Chrome.
- Confirmed no horizontal overflow.
- Confirmed tabs switch correctly.
- Confirmed inserted images load successfully.
- Confirmed `source-images` section was removed.
- Confirmed API fields and OpenAI wording were removed.
- Confirmed local keyword summary replies work.
- Confirmed public Cloudflare Pages URLs return HTTP 200.
- Confirmed the production HTML contains:
  - TANA official website link
  - `firebase-client.js`
  - Updated tab titles

## Current Files To Review

- `index.html`: main page
- `firebase-client.js`: Firebase Web App initialization
- `firebase.json`: Firebase hosting/database config
- `database.rules.json`: database security rules
- `README.md`: deployment summary
- `PROJECT_LOG.md`: full workflow record

## Possible Future Changes

- Add real Firestore or Realtime Database features after creating a database instance.
- Add analytics or event logging if privacy policy wording is prepared.
- Add a custom domain in Cloudflare Pages.
- Compress or resize very large source JPG pages for faster first load.
- Add more local keyword answers for the question panel.
- Convert PDF page image filenames to ASCII names if future cross-platform hosting tools have trouble with Chinese characters.
