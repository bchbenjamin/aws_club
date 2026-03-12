# Deploying to Vercel

Step-by-step instructions for deploying this Vite + React application on Vercel.

---

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier is sufficient).
- The project pushed to a Git repository (GitHub, GitLab, or Bitbucket).
- All placeholder images replaced with real assets (see `IMAGES.md`).
- Amazon Ember font files placed in `/public/fonts/` (see `IMAGES.md`).

---

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1 -- Push to GitHub

Make sure your project is committed and pushed to a GitHub repository:

```bash
git add .
git commit -m "Initial commit: AWS Cloud Club website"
git push origin main
```

### Step 2 -- Import Project on Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. Click **"Import Git Repository"**.
3. Select your GitHub account and find the `AWS_Cloud_Club` repository.
4. Click **"Import"**.

### Step 3 -- Configure Build Settings

Vercel will auto-detect Vite. Verify these settings:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |
| **Node.js Version** | 18.x or 20.x |

### Step 4 -- Deploy

1. Click **"Deploy"**.
2. Wait for the build to complete (usually under 1 minute).
3. Once deployed, Vercel provides a live URL (e.g., `https://aws-cloud-club.vercel.app`).

### Step 5 -- Custom Domain (Optional)

1. Go to **Project Settings** > **Domains**.
2. Add your custom domain (e.g., `awscloudclub.example.edu`).
3. Update your DNS records as instructed by Vercel.
4. Vercel will automatically provision an SSL certificate.

---

## Method 2: Deploy via Vercel CLI

### Step 1 -- Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2 -- Login

```bash
vercel login
```

### Step 3 -- Deploy

From the project root directory:

```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** Yes
- **Which scope?** Select your account
- **Link to existing project?** No (for first deploy)
- **Project name?** `aws-cloud-club` (or your preferred name)
- **Directory?** `./`
- **Want to modify settings?** No (auto-detection for Vite works)

### Step 4 -- Production Deploy

The first deploy creates a preview URL. To deploy to production:

```bash
vercel --prod
```

---

## Automatic Deployments

Once connected to a Git repository, Vercel automatically deploys:

- **Production Deploy**: Every push to the `main` branch.
- **Preview Deploy**: Every push to any other branch or pull request.

---

## Environment Variables

This project does not currently require environment variables. When a backend is added in the future, add variables via:

1. **Vercel Dashboard**: Project Settings > Environment Variables.
2. **Vercel CLI**: `vercel env add VARIABLE_NAME`.

Prefix client-side variables with `VITE_` so Vite exposes them to the browser:

```
VITE_API_URL=https://api.example.com
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails with dependency errors | Delete `node_modules` and `package-lock.json`, then run `npm install` and re-deploy. |
| Fonts not loading | Verify font files exist in `/public/fonts/` and paths in `index.css` match exactly. |
| Images not showing | Ensure image files are placed in the correct `/public/images/` subdirectory as documented in `IMAGES.md`. |
| Dark mode not working | Dark mode relies on system preferences (`prefers-color-scheme: dark`). Test by changing your OS theme. |
| Page not found on refresh | Vite SPA apps need Vercel rewrites. Add a `vercel.json` file (see below). |

### vercel.json (for SPA routing, if needed in the future)

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## Post-Deployment Checklist

- [ ] Verify all sections load correctly on the live URL.
- [ ] Test on mobile devices (responsive layout).
- [ ] Check that "Join the Club" button links to `https://tally.so/r/9q1QD5`.
- [ ] Verify dark mode works based on system preference.
- [ ] Test page load performance (aim for Lighthouse score above 90).
- [ ] Set up a custom domain if available.
