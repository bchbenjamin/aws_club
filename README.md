# AWS Cloud Club Website

A highly creative, modern, and developer-focused website for a college AWS Cloud Club, inspired by the aesthetics of [Hackfest](https://hackfest.dev/) and [Antigravity](https://antigravity.google/). 

Featuring an AMOLED-black theme, neon glowing orb animations, massive edge-to-edge typography, a global grid background, and a buttery-smooth custom mouse cursor.

## Tech Stack
- React 18
- Vite
- Tailwind CSS v4
- Framer Motion (for physics-based custom cursor)
- Lucide React (Icons)
- React Router DOM (Multi-page navigation)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Run the development server**:
   ```bash
   npm run dev
   ```
3. **Build for production**:
   ```bash
   npm run build
   ```

## Adding Your Own Content

The website currently uses placeholders (`Lorem Ipsum` and demo images). To replace these with your actual club content, please refer to the `CONTENT_GUIDE.md` file in the root directory. It contains an exact mapping of which files and line numbers you need to edit.

For tracking image assets and their specific required formats/visual vibe, refer to `IMAGES.md`.

## Features
- **Custom Framer Motion Cursor**: A glowing purple/orange orb follows the user's mouse and expands natively over buttons and links via DOM element detection and `mix-blend-mode: difference`. (Automatically disables on touch/mobile devices).
- **Extreme Hover Animations**: 3D CSS tilt and rotations on all interactive cards, accompanied by intense neon box-shadows.
- **Vite @tailwindcss/vite Plugin**: Fast compiler using the absolute bleeding edge Tailwind CSS v4.
- **System-driven Dark Mode**: Fully responsive AMOLED dark mode (Black/Purple/Neon Orange) and Stark Light Mode (White/Deep Purple/Vibrant Orange) mapped natively via CSS variables without a toggle.

## Deployment
Please see `DEPLOYMENT.md` for a comprehensive guide to hosting this site on Vercel for free.
