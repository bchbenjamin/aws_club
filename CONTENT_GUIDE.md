# AWS Cloud Club - Content Replacement Guide

This guide details exactly which files you need to edit to replace placeholder text and links with your actual club content.

## 1. Global Content (Navigation & Footer)
**File: `src/components/Navbar.jsx`**
- Line 50: Replace the club logo (`/images/aws-cloud-club-logo.png`).
- Line 55: Replace `"AWS Cloud Club"` with your official club name.
- Lines 77 & 116: Replace `https://tally.so/r/9q1QD5` with your actual Join link.

**File: `src/components/Footer.jsx`**
- Line 16: Replace `"AWS Cloud Club"` with official club name.
- Line 20: Replace the Lorem Ipsum club description.
- Lines 65-100: Update the "Resources" links to point to relevant AWS or college resources.
- Lines 111-149: Update the `href` attributes for LinkedIn, Instagram, and Meetup to your club's actual social profiles.
- Line 152: Ensure the email `awscloudclubatria@gmail.com` is correct.
- Lines 161 & 165: Replace placeholder text with your actual college/university name.

## 2. Home Page (`src/pages/HomePage.jsx`)
- Line 70: Replace the hero background image (`/images/hero-bg.webp`).
- Line 83: Replace the main headline `"Build the Future"`.
- Line 85: Replace the sub-headline `"in the Cloud"`.
- Line 93: Replace the 2-3 sentence introductory paragraph.
- Line 102: Replace the Join link `https://tally.so/r/9q1QD5`.
- Lines 14-61: Update the `HIGHLIGHTS` array with your actual club activities (e.g., Workshops, Hackathons), including their titles and descriptions.
- Lines 64-69: Update the `STATS` array with your actual numbers (Members, Events, Projects, Certs).
- Line 202: Replace the final CTA headline `"Ready to Start Your Cloud Journey?"`.
- Line 207: Replace the final CTA descriptive text.
- Line 213: Replace the final CTA Join link.

## 3. About Page (`src/pages/AboutPage.jsx`)
- Line 48: Replace the banner heading `"Empowering Future Cloud Leaders"`.
- Lines 58 & 65: Replace the two main paragraphs detailing the club's mission, vision, and history.
- Lines 73, 80, 87: Update the stats (`50+`, `20+`, `10+`) to match your real numbers.
- Line 101: Replace the about section image (`/images/about-club.webp`).
- Lines 11-40: Update the `FEATURES` array with actual feature descriptions and titles.

## 4. Team Page (`src/pages/TeamPage.jsx`)
- Lines 60 & 63: Replace the banner heading and description.
- Lines 11-39: Update the `MEMBERS` array. For each member you must provide:
  - `name`: Full name
  - `role`: Official title (e.g., "Club Head", "Builder")
  - `bio`: A short 2-3 sentence biography.
  - `imageSrc`: Path to their professional headshot (e.g., `/images/members/head.webp`).
- Line 96: Replace the Join the Team CTA heading.
- Line 101: Replace the Join the Team description.
- Line 106: Replace the Join the Team application link.

## 5. Events Page (`src/pages/EventsPage.jsx`)
- Lines 50 & 53: Replace the banner heading and description.
- Lines 11-38: Update the `UPCOMING_EVENTS` array. For each event you must provide:
  - `month` (e.g., "APR")
  - `day` (e.g., "05")
  - `title`: Event name
  - `description`: 1-2 sentences about the event
  - `location`: Venue or link
  - `time`: e.g., "2:00 PM - 4:00 PM"

---
**Tip:** Search the whole codebase for `COMMENT:` to quickly jump to all placeholder markings!
