# Pure Calisthenics

A high-performance, modern, animated website built with Next.js 16 for a premier calisthenics personal training gym in Mumbai.

![Next.js](https://img.shields.io/badge/Next.js-16.3.6-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?logo=tailwind-css&logoColor=white)
![WebP](https://img.shields.io/badge/Assets-WebP%20Optimized-brightgreen)
![Mux Video](https://img.shields.io/badge/Video-Mux-FF5733.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Pure Calisthenics** is a modern website designed to showcase a physical and online calisthenics gym based in Mumbai, India. The platform provides comprehensive information about calisthenics training systems, group and personal batches, corporate workshops, member transformations, and multiple direct consultation channels.

The website features an immersive hero section with autoplay streaming video powered by Mux, fluid scroll animations driven by GSAP, Framer Motion, and AOS, server-side rendered blog feeds via Next.js ISR, and automated WebP asset optimization for fast page loads and search engine visibility.

---

## Features

### Landing Page & Experience
- **Hero Video Streaming**: Autoplay video integrated through Mux (`next-video`) with blurred WebP thumbnail placeholders.
- **Micro-Interactions & Animations**: Multi-layered animations using GSAP ScrollTrigger, Framer Motion transitions, and AOS reveal effects.
- **Card Swiper**: Interactive touch/drag card stack showcasing physical and mental benefits of calisthenics via Swiper.
- **Infinite Testimonial Marquee**: CSS-animated looping ticker of authentic member quotes.
- **Responsive Layout**: Zero layout shift, fully adaptive across mobile, tablet, and desktop viewports.

### Search Engine Optimization & Discovery
- **Server-Side Pre-Rendering (SSR/ISR)**: Blog posts from the Wix RSS feed are pre-fetched on the server every hour, ensuring instant crawler indexing.
- **Heading Hierarchy**: Strictly maintains one primary `<h1>` tag per page for clean semantic ranking.
- **Structured Data (JSON-LD)**: Rich `SportsActivityLocation` schema markup detailing gym location in Mumbai, phone number, and social profiles.
- **Metadata & Social Graph**: Canonical tags, dynamic title templates, and Open Graph / Twitter Card previews for WhatsApp, Instagram, and X link sharing.
- **Discovery Endpoints**: Native dynamic `robots.txt` and `sitemap.xml` generated automatically by Next.js.

### Lead Generation & Consultation Form
- **Direct Communication**: One-click WhatsApp chat, direct phone dialer, and Google Maps location deep-linking.
- **Automated Submission**: Direct integration with Google Apps Script Web App saving inquiries to Google Sheets.
- **Double-Submission Prevention**: The submit button disables during transmission with a loading spinner.
- **7-Second Feedback Snackbar**: Auto-dismissing Material UI notification informing the user of successful submission.

### Performance & Asset Optimization
- **WebP Asset Pipeline**: 100% of images served in compressed WebP format, achieving 70% to 90% bandwidth reduction.
- **Automated Conversion Utility**: Built-in CLI command (`npm run convert-images`) powered by `sharp`.
- **Native Lazy Loading**: Below-the-fold image assets load on demand to preserve mobile Core Web Vitals.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16.3.6 (App Router with Turbopack) |
| **Frontend** | React 19.0.0 |
| **Styling** | Tailwind CSS 3.4.1, PostCSS 8 |
| **UI Components** | Material UI 6.4.2 (Icons, Themes, Snackbars, Tooltips) |
| **Animations** | GSAP 3.12.7, Framer Motion 11.18.2, AOS 2.3.4 |
| **Video Streaming** | Mux Video (`next-video` 2.2.0) |
| **Touch Sliders** | Swiper 14.3.0 |
| **Layouts** | react-masonry-css 1.0.16 |
| **Content Integration** | rss-parser 3.13.0 |
| **Image Processing** | Sharp (WebP compression pipeline) |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                   PURE CALISTHENICS - WEBSITE ARCHITECTURE                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                     NEXT.JS 16 APP ROUTER (TURBOPACK)                │   │
│  │                                                                      │   │
│  │   ┌─────────────────────────────┐  ┌─────────────────────────────┐   │   │
│  │   │        Landing Page         │  │         Blog Page           │   │   │
│  │   │                             │  │                             │   │   │
│  │   │  • Mux video streaming      │  │  • Server Component (ISR)   │   │   │
│  │   │  • Single H1 hierarchy      │  │  • Wix RSS Feed (1h cache)  │   │   │
│  │   │  • GSAP & AOS animations    │  │  • Responsive Masonry grid  │   │   │
│  │   │  • WebP compressed images   │  │  • Pre-rendered metadata    │   │   │
│  │   │  • 7-second form snackbar   │  │                             │   │   │
│  │   └──────────────┬──────────────┘  └──────────────┬──────────────┘   │   │
│  │                  │                                │                  │   │
│  │                  ▼                                ▼                  │   │
│  │   ┌──────────────────────────────────────────────────────────────┐   │   │
│  │   │                   API ROUTE HANDLERS                         │   │   │
│  │   │                                                              │   │   │
│  │   │   • POST /api/form    --> Submits leads to Google Sheets     │   │   │
│  │   │   • GET  /api/blogs   --> RSS parser fallback endpoint       │   │   │
│  │   │   • GET  /robots.txt  --> Crawler instructions               │   │   │
│  │   │   • GET  /sitemap.xml --> XML index of all pages             │   │   │
│  │   └──────────────────────────────────────────────────────────────┘   │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Getting Started

### Prerequisites

- **Node.js**: v18.17.0 or higher
- **npm** or **yarn** / **pnpm**
- **Git**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tanishqmudaliar/purecalisthenics.git
   cd purecalisthenics
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in a `.env` file (see [Configuration](#configuration)).

4. Convert any newly added images to WebP (optional):
   ```bash
   npm run convert-images
   ```

5. Run the local development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
purecalisthenics/
├── public/
│   ├── favicon.ico
│   ├── images/              # Optimized WebP & source images
│   └── logo/                # Brand logos and app icons
├── scripts/
│   └── convert-to-webp.js   # Automated WebP image generation utility
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── blogs/       # Wix RSS proxy route
│   │   │   └── form/        # Google Apps Script form handler
│   │   ├── blogs/           # Server-side rendered blogs page
│   │   ├── privacy-policy/  # Legal & privacy documentation page
│   │   ├── globals.css      # Tailwind & custom scrollbar styles
│   │   ├── layout.js        # Root layout, metadata & JSON-LD schema
│   │   ├── not-found.js     # Custom branded 404 page
│   │   ├── page.js          # Homepage orchestrator
│   │   ├── robots.js        # Dynamic robots.txt route
│   │   └── sitemap.js       # Dynamic sitemap.xml route
│   ├── components/          # Reusable UI widgets, navigation & footer
│   ├── fonts/               # Local custom fonts (Aspekta, Editorial Old)
│   └── pages/               # Individual landing page sections (SectionOne-Seven)
├── videos/                  # Video assets and Mux JSON manifests
├── next.config.mjs          # Next.js & next-video configuration
├── package.json             # Scripts & dependencies
└── tailwind.config.mjs      # Tailwind theme extensions
```

---

## Configuration

Create a `.env` file in the root directory with the following environment variables:

| Variable | Description | Default / Example |
|---|---|---|
| `MUX_TOKEN_ID` | Mux API Access Token for video streaming | `your_mux_token_id` |
| `MUX_TOKEN_SECRET` | Mux API Secret Key for video streaming | `your_mux_token_secret` |
| `GOOGLE_SCRIPT_URL` | Google Apps Script Web App endpoint for form leads | `https://script.google.com/macros/s/.../exec` |

---

## Troubleshooting

### "Video not playing or module not found"
- Verify that `landing.mp4.json` exists in `videos/`.
- Ensure Mux credentials are valid in your `.env` file.
- Videos are muted by default to comply with browser autoplay policies.

### "Image not found or 404 on WebP"
- Run `npm run convert-images` to regenerate any missing `.webp` files from your source `.jpg` or `.png` files.

### "Blog posts not loading"
- Ensure internet connectivity to `https://punitkshah5.wixsite.com`.
- The Wix RSS feed revalidates every 3600 seconds (1 hour); check console output for upstream network timeouts.

### "Turbopack Build Issues"
- Clear the `.next` cache directory and rebuild:
  ```bash
  rm -rf .next
  npm run build
  ```

---

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/improvement-name
   ```
3. Commit your changes with meaningful commit messages:
   ```bash
   git commit -m "feat: description of improvement"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/improvement-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by [Tanishq Mudaliar](https://github.com/tanishqmudaliar)

**Stop scrolling, start training. Discover the gym, explore the moves, transform your body! 💪**
