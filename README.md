# HIV Education Interactive Static Site

This folder is the deploy-ready static website package.

## Files Required for Deployment

- `index.html`
- `AcrossHIV_VCT Education Material_TW_SE_2021.pdf`
- `hiv0105/`
- `hiv0610/`
- `hiv1116/`
- `.nojekyll`

Do not include the original `.ai` files when deploying to GitHub Pages, because GitHub has file size limits and the AI source files are not required by the website.

## GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this `public_site` folder to the repository root.
3. Go to `Settings` > `Pages`.
4. Set source to `Deploy from a branch`.
5. Choose the `main` branch and `/root`.
6. Open the generated Pages URL after deployment finishes.

## Cloudflare Pages

1. Create a new Cloudflare Pages project.
2. Connect a Git repository or upload this folder through Direct Upload.
3. Use these build settings:
   - Framework preset: `None`
   - Build command: leave blank
   - Build output directory: `/` for Direct Upload, or repository root
4. Deploy.

## Firebase Project

This static site is connected to Firebase project `database-3dd5b`.

- `.firebaserc` maps the default Firebase project.
- `firebase-client.js` initializes the Firebase Web App.
- `database.rules.json` currently denies all Realtime Database reads/writes by default.

The Firebase project currently has no Realtime Database instance. Create Firestore or Realtime Database in Firebase Console before adding any data-writing feature.

## GPT Question Feature

The question panel uses local keyword summary replies only. It does not require or store API keys.
