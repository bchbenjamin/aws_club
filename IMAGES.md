# AWS Cloud Club - Required Images & Assets Catalog

This document details every image required for the website. The frontend has been fully redesigned to represent a "Hackfest/Antigravity" aesthetic (neon/grid/AMOLED black), so photography should ideally match this vibe (e.g. low light, vivid colors, neon signs, tech/hacking vibes).

All images should be placed in the `/public/` directory (or its subdirectories) so Vite can serve them directly via absolute paths (e.g., `/images/hero-bg.webp`).

| Component | Intended Usage | Expected File Path | Format | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **`Navbar.jsx`** | Club Logo (Global Header) | `/images/aws-cloud-club-logo.png` | `.png` | Needs a transparent background. Ideally features white/orange/purple text to stand out against the glassmorphism dark Navbar background. |
| **`HomePage.jsx`** | Hero Background | `/images/hero-bg.webp` | `.webp` | High-quality image covering the full screen. Due to the black opacity overlay, an atmospheric, dark, neon-lit photo of a hackathon or code on a screen works perfectly here. |
| **`AboutPage.jsx`** | Image Grid 1 (Workshops) | `/images/about-1.webp` | `.webp` | A photo of members collaborating or a speaker presenting. Used in a stylized hovering 3D card layout. |
| **`AboutPage.jsx`** | Image Grid 2 (Hackathons) | `/images/about-2.webp` | `.webp` | A photo of a hackathon, laptops, or an energetic tech event. Used alongside image 1 in the 3D card layout. |
| **`TeamPage.jsx`** | Club Head Headshot | `/images/members/head.webp` | `.webp` | Professional headshot, square aspect ratio (e.g., 800x800). Will be cropped into a circle. |
| **`TeamPage.jsx`** | Builder 1 Headshot | `/images/members/builder-1.webp` | `.webp` | Headshot, square aspect ratio. Cropped to circle. |
| **`TeamPage.jsx`** | Builder 2 Headshot | `/images/members/builder-2.webp` | `.webp` | Headshot, square aspect ratio. Cropped to circle. |

## Fonts
The site natively uses **Amazon Ember**. The `@font-face` declarations look for the `.woff2` files in the following paths. If they are missing, the site will cleanly fallback to system sans-serif fonts (Helvetica, Arial, etc).

- `/fonts/AmazonEmber_Rg.woff2` (Regular 400)
- `/fonts/AmazonEmber_Bd.woff2` (Bold 700)
- `/fonts/AmazonEmber_Lt.woff2` (Light 300)

## Optimization Tips
- Convert all photographic images to `.webp` to significantly improve load times.
- Try to compress Hero backgrounds heavily; they are obscured by black/neon overlays, so compression artifacts will be largely invisible.
- Headshots should ideally be centered and have a consistent background style across the team.
