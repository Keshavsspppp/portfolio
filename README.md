<div align="center">
  <img src="public/favicon.ico" alt="Logo" width="80" height="80">
  <h1 align="center">Keshav Prasad's Portfolio</h1>

  <p align="center">
    A beautiful, system-themed Next.js developer portfolio.
    <br />
    <a href="https://github.com/Keshavsspppp/portfolio"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://your-portfolio.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/Keshavsspppp/portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/Keshavsspppp/portfolio/issues">Request Feature</a>
  </p>
</div>

<!-- Badges -->
<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14.x-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

---

## 🌟 About The Project

This is a custom, Awwwards-inspired developer portfolio framed as a **"running system"** rather than a typical dev portfolio. Grounded in the reality of shipping code, it features:

- 💻 **Boot Sequence Hero:** An orchestrated typing animation that executes on load.
- 📄 **README About:** A biography rendered dynamically as a markdown file.
- 📦 **Dependencies Skills:** Skills categorized and displayed like a `package.json` object.
- ⚙️ **Running Processes:** Projects shown in a process-table layout with live status dots.
- 🖥️ **Interactive Terminal:** Aceternity UI integrated terminal contact form and an interactive virtual keyboard.
- 🔋 **IDE Status Bar:** Fixed footer showing real-time location, live clock, git branch, and status.

## 🛠️ Built With

* **Framework**: [Next.js (App Router)](https://nextjs.org/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler.io/icons)
* **Fonts**: Inter (Sans), Hack (Monospace), Pixelgrid

## 🎨 Design System

The portfolio leverages a meticulously crafted dark theme:

| Color | Hex | Usage |
|-------|-----|-------|
| **Graphite Black** | `#0B0D10` | Base background (slightly blue-black, not pure black) |
| **Slate Panel** | `#14171C` | Cards, code blocks, panels |
| **Off-White** | `#E8EAED` | Primary text |
| **Muted Gray** | `#8B92A0` | Secondary text, comments, timestamps |
| **Signal Amber** | `#FFA63D` | Primary accent — CTAs, cursor blink, active states |
| **Wire Blue** | `#3DA9FC` | Secondary accent — links, hover states only |

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need Node.js and npm installed on your machine.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Keshavsspppp/portfolio.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

All personal content (bio, projects, experience, skills, certifications) is centralized in `src/lib/constants.ts`. 

Simply update this single file to inject your own data into the entire portfolio automatically!

## ♿ Accessibility

The portfolio respects users' system preferences. It listens for the `prefers-reduced-motion` media query to automatically skip heavy animations (like the boot sequence) for users who prefer reduced motion.

---

<p align="center">
  Designed and built with ❤️ by Keshav Prasad
</p>
