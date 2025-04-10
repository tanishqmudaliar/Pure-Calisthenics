<img src="public/logo/pure calisthenics white.png" alt="Pure Calisthenics" width="500">

A modern website built with Next.js for a calisthenics gym, helping potential customers learn about the gym and connect with the owner.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Development Notes](#development-notes)

## Overview

Pure Calisthenics is a website designed to showcase a physical calisthenics gym. The site provides information about the gym, its facilities, and ways for potential customers to contact the owner. It also features a blog section that pulls content from the owner's Wix RSS feed.

## Features

- **Informative Landing Page**: Showcases the gym's facilities and offerings
- **Hero Video**: Autoplay muted video on the landing page using Mux for streaming
- **Contact Integration**: Direct call and WhatsApp buttons to easily reach the gym owner
- **Inquiry Form**: A form for potential clients to express interest and request information
- **Blog Section**: Displays the gym owner's blog posts pulled from Wix via RSS feed
- **Responsive Design**: Optimized for both desktop and mobile viewing
- **Modern UI**: Animated and visually appealing interface using various animation libraries

## Technology Stack

- [Next.js](https://nextjs.org/) (v15.1.4) - React framework for server-side rendering
- [React](https://reactjs.org/) (v19.0.0) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Material UI](https://mui.com/) - React component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [GSAP](https://greensock.com/gsap/) - Professional animation library
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library
- [Swiper](https://swiperjs.com/) - Modern mobile touch slider
- [Mux](https://mux.com/) - Video streaming via next-video integration
- [RSS Parser](https://github.com/rbren/rss-parser) - For fetching blog content

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/purecalisthenics.git
   cd purecalisthenics
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Project Structure

The project follows the standard Next.js project structure:

```
purecalisthenics/
├── app/              # Next.js app router files
│   ├── blogs/        # Blog page
│   └── page.js       # Home page
├── components/       # Reusable React components
├── public/           # Static assets like images
├── videos/           # Video assets for streaming via Mux
├── styles/           # CSS styles
├── package.json      # Project dependencies
├── next.config.js    # Next.js configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Running the Application

For development:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

For production build:

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Deployment

This Next.js application can be deployed on various platforms:

- [Vercel](https://vercel.com/) (recommended for Next.js apps)
- [Netlify](https://www.netlify.com/)
- Any hosting platform that supports Node.js applications

For Vercel deployment:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy

## Development Notes

### Video Streaming

The landing page features an autoplay muted video using Mux video streaming, implemented with the `next-video` package. This provides efficient video delivery with automatic optimization for different devices and bandwidths.

### RSS Feed Integration

The blog section uses `rss-parser` to fetch and display the gym owner's blog posts from their Wix site. The integration is set up in the blogs page component.

### Animations

The site uses multiple animation libraries to create an engaging experience:

- GSAP for complex animations
- Framer Motion for component transitions
- AOS for scroll-based animations

### Contact Functionality

The site includes direct contact links:

- Click-to-call buttons
- WhatsApp integration for instant messaging
- Inquiry form for lead generation
