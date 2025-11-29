# Tengku Faris Portfolio

A visually engaging personal portfolio themed around hiking, exploration, and trail maps—where each project is presented like a "trail," "checkpoint," or "summit."

## 🗺️ Theme

The portfolio uses hiking and trail-map metaphors to present three main "trails":
- **Engineering & Technical Innovation Trail** - High-altitude, high-precision engineering summits
- **Consulting Trail** - Decision forks, routes, and strategic viewpoints
- **Software Engineering Trail** - Digital paths, nodes, and interactive checkpoints

## 🎨 Design Features

- Topographical lines and elevation profiles
- Interactive trail map with animated paths
- Hiking-themed icons (compass, markers, signposts)
- Earth tone color palette (forest greens, sandstone, navy, muted greys)
- Smooth animations and hover effects
- Responsive design for all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Hero.tsx         # Hero section with bio
│   ├── TrailMap.tsx     # Interactive trail map
│   ├── EngineeringTrail.tsx  # Engineering projects
│   ├── ConsultingTrail.tsx   # Consulting projects
│   ├── SoftwareTrail.tsx     # Software projects
│   └── Footer.tsx       # Footer
└── public/              # Static assets
```

## 🎯 Features

- **Interactive Trail Map** - Navigate between three main portfolio sections
- **Project Showcases** - Detailed project descriptions with difficulty metrics
- **Smooth Animations** - Scroll-triggered animations and hover effects
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Accessibility** - Semantic HTML and ARIA-friendly components

## 📝 Content

The portfolio showcases:

1. **Engineering Projects**
   - Siemens Gamesa Wind Turbine Assembly Stability
   - Bioreactor Project — Stirring Subsystem Circuit

2. **Consulting Experience**
   - McKinsey & Company — Forward Programme
   - Eden Inc. Bhd — Business Development Intern
   - Practera (L&M Foundation) — Communication Lead Consultant

3. **Software Projects**
   - Universify — AI Platform for UCAS Applicants
   - MyOtherMentor — Mentoring Platform
   - Edtech Access Venture Programme — Teacher Dashboard

## 🎨 Customization

Colors and styling can be customized in:
- `tailwind.config.js` - Theme colors
- `app/globals.css` - Global styles and animations
- Individual component files for specific styling

## 📄 License

This project is private and proprietary.

---

Built with the spirit of exploration and the precision of engineering.

