# Personal Academic Website

A clean, academic-focused personal website built with [Astro](https://astro.build).

## Features

- 🌐 Bilingual support (English / 中文)
- 📄 Four main pages: Home, Publications, Awards, Journey
- 🎨 Minimal, academic design
- 📱 Fully responsive
- ⚡ Static site generation for fast performance
- 🔧 Easy to maintain and update

## Project Structure

```
/
├── public/
│   ├── images/          # Image assets
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Card.astro
│   ├── data/            # Content data files
│   │   ├── i18n.ts
│   │   ├── personal.ts
│   │   ├── publications.ts
│   │   ├── awards.ts
│   │   └── journey.ts
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # Page routes
│   │   ├── index.astro
│   │   ├── publications.astro
│   │   ├── awards.astro
│   │   ├── journey.astro
│   │   └── zh/          # Chinese versions
│   └── styles/          # Global styles
│       └── global.css
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and visit `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The static files will be generated in the `dist/` directory.

## Updating Content

All content is stored in TypeScript files under `src/data/`:

### Personal Information (`src/data/personal.ts`)
- Update your name, title, affiliation, research interests
- Add or modify experiences
- Change contact links

### Publications (`src/data/publications.ts`)
- Add new publications or preprints
- Each publication has bilingual title, abstract, and metadata
- Include paper/code links

### Awards (`src/data/awards.ts`)
- Add new awards (academic or competition)
- Include bilingual names and descriptions
- Add certificate images

### Journey (`src/data/journey.ts`)
- Add experiences beyond research
- Include reflections (optional)
- Support expandable content with images

## Adding Images

1. Add images to `public/images/` directory
2. Reference them in data files using `/images/your-image.jpg`
3. Organize by category: `publications/`, `awards/`, `journey/`

## Deployment to Cloudflare Pages

1. Push your code to GitHub

2. Connect your repository to Cloudflare Pages:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Framework preset: Astro

3. Your site will be automatically deployed on every push

## Customization

### Styling
- Edit `src/styles/global.css` for global styles
- Modify CSS variables in `:root` for colors and spacing
- Component-specific styles are in `<style>` blocks

### Colors
Change the accent color by modifying CSS variables:
```css
--color-accent: #2563eb;
--color-accent-hover: #1e40af;
```

### Languages
- Add new languages in `src/data/i18n.ts`
- Create new language directories under `src/pages/`

## License

This project is open source and available under the MIT License.

## Credits

Built with [Astro](https://astro.build)
