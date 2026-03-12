# AWS Cloud Club - Content Replacement Guide

This guide details exactly which files you need to edit to replace placeholder text and links with your actual club content.

## 1. Global Content (Navigation & Footer)
**File: `src/components/Navbar.jsx`**
- Line 50: Replace the club logo (`/images/aws-cloud-club-logo.png`).
- Line 55: Replace `"AWS Cloud Club"` with your official club name.
- Lines 77 & 116: Replace the Tally join link with your actual link, e.g.:
  ```jsx
  <a href="">Join Us</a>
  ```

**File: `src/components/Footer.jsx`**
- Line 20: Replace `"AWS Cloud Club"` with official club name.
- Line 24: Replace the Lorem Ipsum club description.
- Lines 70-105: Update the "Resources" links to point to relevant AWS or college resources, e.g.:
  ```jsx
  <a href="">AWS Console</a>
  <a href="">AWS Training</a>
  <a href="">Developer Center</a>
  ```
- Lines 116-154: Update the social profiles for LinkedIn, Instagram, and Meetup, e.g.:
  ```jsx
  <a href="" aria-label="LinkedIn">...</a>
  <a href="" aria-label="Instagram">...</a>
  <a href="" aria-label="Meetup">...</a>
  ```
- Line 32: Ensure the email `awscloudclubatria@gmail.com` is correct.

## 2. Home Page (`src/pages/HomePage.jsx`)
- Line 60: Replace the `HIGHLIGHTS` array (Workshops, Hackathons, etc).
- Line 64: Replace the `STATS` array (50+ Members, etc).
- Line 93: Replace the hero main headline `"BUILD THE FUTURE"`.
- Line 95: Replace the hero sub-headline `"FUTURE"`.
- Line 100: Replace the 2-3 sentence introductory paragraph.
- Line 106: Replace the Join link `https://tally.so/r/9q1QD5` with an empty anchor: `<a href="">Join the Club</a>`.
- Line 202: Replace the final CTA headline `"READY TO LAUNCH?"`.
- Line 213: Replace the final CTA Join link with `<a href="">Let's Go</a>`.

## 3. About Page (`src/pages/AboutPage.jsx`)
- Line 10-24: Update the `FEATURES` array with actual feature descriptions and titles.
- Line 48: Replace the banner heading `"EMPOWERING CLOUD LEADERS"`.
- Lines 60 & 67: Replace the two main paragraphs detailing the club's mission, vision, and history.
- Lines 75, 83, 91: Update the stats (`50+`, `20+`, `10+`) to match your real numbers.
- Line 108: Replace the Image 1 placeholder (`/images/about-1.webp`).
- Line 117: Replace the Image 2 placeholder (`/images/about-2.webp`).

## 4. Team Page (`src/pages/TeamPage.jsx`)
- Lines 11-30: Update the `MEMBERS` array for your 3 core members. For each member you must provide:
  - `name`: Full name
  - `role`: Official title (e.g., "Club Head", "Builder")
  - `bio`: A short 2-3 sentence biography.
  - `imageSrc`: Path to their professional headshot (e.g., `/images/members/head.webp`).
- Line 64: Replace the banner heading `"MEET THE CREATORS"`.
- Line 68: Replace the banner description.
- Line 98: Replace the Join the Team CTA heading `"BECOME A BUILDER."`.
- Line 102: Replace the Join the Team description.
- Line 107: Replace the Join the Team application link with `<a href="">Apply Now</a>`.

## 5. Events Page (`src/pages/EventsPage.jsx`)
- Lines 11-17: Update the **single event placeholder** in the `UPCOMING_EVENTS` array. Provide:
  - `month` (e.g., "APR")
  - `day` (e.g., "05")
  - `title`: Event name
  - `description`: 1-2 sentences about the event
  - `location`: Venue or link
  - `time`: e.g., "2:00 PM - 4:00 PM"
- Line 56: Replace the banner heading `"WHAT'S HAPPENING"`.
- Line 59: Replace the banner description.
- Line 91: Replace the "More Events Dropping Soon" placeholder text.

---
**Tip:** Search the whole codebase for `COMMENT:` to quickly jump to all placeholder markings!
