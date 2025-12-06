# Abhishek's Portfolio 🚀

A stunning, modern portfolio website built with Next.js 14, TailwindCSS, and Framer Motion. Features premium animations, 3D effects, and a bold futuristic design.

![Portfolio Preview](https://via.placeholder.com/1200x630/000000/ffb703?text=Abhishek+Portfolio)

## ✨ Features

### Design
- **Bold Futuristic Aesthetic** - Dark theme with amber/orange accent colors
- **Premium Typography** - Clash Display for headings, Outfit for body text
- **Glass Morphism** - Backdrop blur effects on cards and navigation
- **Gradient Mesh Backgrounds** - Beautiful animated gradient backgrounds

### Animations
- **Smooth Page Transitions** - Framer Motion powered transitions
- **Parallax Scrolling** - Multi-layer parallax effects
- **3D Tilt Cards** - Interactive hover effects on project cards
- **Particle Field** - Canvas-based particle animation background
- **Custom Cursor** - Premium cursor with hover states (desktop only)
- **Scroll-triggered Animations** - Elements animate in as you scroll
- **Magnetic Buttons** - Buttons that attract to cursor

### Sections
1. **Hero** - Animated name reveal, parallax background, social links
2. **About** - Split layout with floating info cards
3. **Skills** - Categorized skill cards with progress bars
4. **Projects** - 3D tilt project cards with hover effects
5. **Contact** - Animated form with social links and glow effects

### Technical
- **Fully Responsive** - Pixel-perfect on desktop, tablet, and mobile
- **Performance Optimized** - Dynamic imports for client-only effects
- **Type-Safe** - Full TypeScript support
- **SEO Ready** - Meta tags and Open Graph support
- **Accessible** - Reduced motion support, semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Clash Display, Outfit, JetBrains Mono
- **Language**: TypeScript

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd abhishek-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
abhishek-portfolio/
├── app/
│   ├── components/
│   │   ├── effects/           # Background effects
│   │   │   ├── ParticleField.tsx
│   │   │   ├── GradientBlobs.tsx
│   │   │   └── CustomCursor.tsx
│   │   ├── sections/          # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── ui/                # Reusable UI components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── SmoothScrollProvider.tsx
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   ├── loading.tsx            # Loading animation
│   └── page.tsx               # Main page
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color palette:

```js
colors: {
  amber: '#ffb703',      // Primary accent
  orange: '#fb8500',     // Secondary accent
  navy: '#023047',       // Dark blue
  // Add your colors here
}
```

### Content
Update these files to personalize:

- **Hero**: `app/components/sections/HeroSection.tsx` - Name, subtitle, description
- **About**: `app/components/sections/AboutSection.tsx` - Bio, info cards
- **Skills**: `app/components/sections/SkillsSection.tsx` - Skill categories and levels
- **Projects**: `app/components/sections/ProjectsSection.tsx` - Project data
- **Contact**: `app/components/sections/ContactSection.tsx` - Contact info, social links

### Images
Replace placeholder areas with actual images:
1. Add images to the `public/` folder
2. Update image paths in the respective components

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Respects `prefers-reduced-motion`
- Keyboard navigation support
- High contrast text

## 🔧 Configuration Files

### tailwind.config.js
- Custom colors, fonts, animations
- Extended spacing and shadows
- Custom keyframes

### globals.css
- CSS custom properties
- Utility classes
- Background patterns
- Hover effects

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- **Fonts**: [Fontshare](https://www.fontshare.com/) (Clash Display), [Google Fonts](https://fonts.google.com/) (Outfit, JetBrains Mono)
- **Icons**: [Lucide](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

Built with 💛 by Abhishek
