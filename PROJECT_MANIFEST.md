# Project Manifest: ProfitWise Accountancy

## 1. Core Tech Stack

### Framework & Build Tool
- **Build Tool**: Vite 7.2.4
- **Language**: TypeScript 5.9.3
- **React**: 19.2.3
- **Router**: React Router DOM 7.11.0

### Styling
- **CSS Framework**: Tailwind CSS 3.4.19
- **CSS Modules**: No (using Tailwind utility classes)
- **CSS-in-JS**: No
- **Global Styles**: `src/index.css` with CSS custom properties

### Animation Libraries
- **GSAP**: 3.14.2 (for complex animations, character-by-character text animations)
- **Framer Motion**: 11.11.17 (for component animations, scroll-triggered animations)
- **Lenis**: 1.3.17 (smooth scrolling)

### 3D Graphics
- **Spline**: @splinetool/react-spline 4.1.0 (3D scene integration)
- **Three.js**: 0.182.0 (underlying 3D engine)
- **React Three Fiber**: 9.5.0 (optional, for advanced 3D)
- **React Three Drei**: 10.7.7 (Three.js helpers)

---

## 2. Project Architecture

### Directory Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Container)
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── HeroModern.tsx  # Main hero section with 3D background
│   ├── ServiceHighlights.tsx  # Service cards grid
│   ├── Testimonials.tsx
│   ├── WhyChooseUs.tsx
│   └── ...
├── pages/              # Route-level page components
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   ├── About.tsx
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useDebounce.ts
│   └── useLocalStorage.ts
├── services/           # API services
│   └── api.ts
├── store/              # State management (Zustand)
│   └── useStore.ts
├── utils/              # Utility functions
│   └── cn.ts           # Tailwind class name merger
├── types/              # TypeScript type definitions
│   └── index.ts
├── index.css           # Global styles & CSS variables
└── main.tsx            # App entry point
```

### Component Patterns
- **Functional Components**: All components use function syntax
- **TypeScript**: Strict typing throughout
- **Props Interfaces**: Defined inline or in separate types files
- **Composition**: Components are composable and reusable
- **Container Component**: `Container.tsx` wrapper for consistent spacing

---

## 3. Design Tokens

### Colors (HSL Format)
```css
/* Primary - Rich Gold */
--primary: 38 75% 55%
--primary-foreground: 0 0% 100%

/* Background */
--background: 0 0% 100% (light) / 222.2 84% 4.9% (dark)
--foreground: 222.2 84% 4.9% (light) / 210 40% 98% (dark)

/* Slate Scale (Tailwind) */
- slate-50, slate-100, slate-200, etc.
- slate-900: Dark backgrounds
- slate-600: Secondary text
- slate-400: Muted text
```

### Typography
- **Font Family**: Inter (sans-serif) - primary
- **Heading Font**: Montserrat (sans-serif) - optional, currently using Inter
- **Font Features**: `rlig` (required ligatures), `calt` (contextual alternates)

### Spacing
- **Base Unit**: Tailwind default (0.25rem = 4px increments)
- **Container Padding**: `px-4 sm:px-6 lg:px-8` (responsive)
- **Section Padding**: `py-16 sm:py-24` or `py-24` (consistent vertical rhythm)
- **Gap Patterns**: `gap-4`, `gap-6`, `gap-8` for grids/flex

### Border Radius
- **Base**: `--radius: 0.5rem` (8px)
- **Variants**: 
  - `lg`: `var(--radius)` (8px)
  - `md`: `calc(var(--radius) - 2px)` (6px)
  - `sm`: `calc(var(--radius) - 4px)` (4px)
- **Cards**: `rounded-2xl` (1rem / 16px) - preferred for modern look

### Shadows
- **Default**: `shadow-sm` (subtle)
- **Hover**: `shadow-lg` or `shadow-xl` (elevated)
- **Primary Buttons**: `shadow-xl` for emphasis

---

## 4. Hero Section Code

```tsx
import { useRef, useLayoutEffect, Suspense } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import Spline from '@splinetool/react-spline'

export function HeroModern() {
  const charsRef = useRef<HTMLSpanElement[]>([])

  // Split text into characters and store refs
  const text = "Financial Clarity For Your Future"
  const words = text.split(' ')

  useLayoutEffect(() => {
    // Animate characters in with stagger
    gsap.fromTo(
      charsRef.current,
      { 
        opacity: 0, 
        y: 50,
        rotationX: -90
      },
      { 
        opacity: 1, 
        y: 0,
        rotationX: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3
      }
    )

    // Cleanup
    return () => {
      gsap.killTweensOf(charsRef.current)
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900 text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
              <div className="text-slate-400 text-sm tracking-widest uppercase animate-pulse">Loading Experience</div>
            </div>
          </div>
        }>
          <Spline scene="https://prod.spline.design/inTyBAsCyiY4aWGe/scene.splinecode" />
        </Suspense>
      </div>
      
      {/* Overlay Gradient for readability - Reduced opacity to show more 3D detail */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-slate-900/60 pointer-events-none z-10" />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center sm:text-left sm:items-start sm:px-12 lg:px-24">
        
        {/* Badge */}
        <div className="mb-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.1s_forwards]">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-sm font-medium tracking-wide text-white">
            Premium Financial Services
          </span>
        </div>

        {/* Animated H1 Heading */}
        <h1 
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
          style={{ perspective: '1000px' }}
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-4 sm:mr-6">
              {word.split('').map((char, charIndex) => {
                const globalIndex = words.slice(0, wordIndex).join('').length + wordIndex + charIndex
                return (
                  <span
                    key={charIndex}
                    ref={(el) => {
                      if (el) charsRef.current[globalIndex] = el
                    }}
                    className={`inline-block ${
                      word === 'Financial' || word === 'Clarity'
                        ? 'text-primary'
                        : 'text-white'
                    }`}
                    style={{ 
                      display: 'inline-block',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {char}
                  </span>
                )
              })}
              {wordIndex < words.length - 1 && (
                <span 
                  ref={(el) => {
                    if (el) {
                      const globalIndex = words.slice(0, wordIndex + 1).join('').length + wordIndex
                      charsRef.current[globalIndex] = el
                    }
                  }}
                  className="inline-block"
                  style={{ 
                    width: '0.25em',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {' '}
                </span>
              )}
            </span>
          ))}
        </h1>

        {/* Description */}
        <p 
          className="text-lg sm:text-2xl text-slate-200 max-w-2xl leading-relaxed mb-10 font-light opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]"
        >
          Elevating financial clarity for modern businesses. 
          Expert audit, tax, and advisory services tailored for growth.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-[fadeIn_0.8s_ease-out_0.9s_forwards]"
        >
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-full overflow-hidden transition-all hover:bg-slate-100 hover:shadow-lg hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Partner with us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          
          <Link 
            to="/services" 
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/40 rounded-full backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/60"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* Drifting Background Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none overflow-hidden opacity-[0.03] flex select-none">
         <div className="whitespace-nowrap text-[20vw] font-bold leading-none text-white animate-marquee-ltr shrink-0">
            AUDIT • TAX • ADVISORY • GROWTH • COMPLIANCE •&nbsp;
         </div>
         <div className="whitespace-nowrap text-[20vw] font-bold leading-none text-white animate-marquee-ltr shrink-0">
            AUDIT • TAX • ADVISORY • GROWTH • COMPLIANCE •&nbsp;
         </div>
      </div>
    </div>
  )
}
```

**Key Patterns:**
- Uses `useLayoutEffect` for GSAP animations (runs before paint)
- Character-by-character animation with refs array
- Conditional styling for specific words (`text-primary` for "Financial" and "Clarity")
- Suspense wrapper for async Spline component
- Layered z-index system (background: z-0, overlay: z-10, content: z-20)
- CSS animations for fade-in effects with delays
- Responsive text sizing (`text-5xl sm:text-7xl lg:text-8xl`)

---

## 5. Example Component: Service Card

```tsx
import { Link } from 'react-router-dom'
import { Calculator, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function ServiceHighlights() {
  const services = [
    {
      id: 'tax',
      title: 'Tax Planning & Returns',
      description: 'Strategic tax planning to minimize liabilities and ensure full compliance with HMRC regulations.',
      icon: Calculator,
      link: '/services#tax',
    },
    // ... more services
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <Container>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                 <service.icon className="h-32 w-32 text-primary" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
```

**Key Patterns:**
- **Framer Motion**: Staggered animations with `containerVariants` and `itemVariants`
- **Viewport Detection**: `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations
- **Group Hover**: Uses Tailwind `group` class for coordinated hover effects
- **Dark Mode**: Supports `dark:` variants throughout
- **Icon Integration**: Lucide React icons with dynamic component usage
- **Container Component**: Wraps content in `Container` for consistent spacing
- **Responsive Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Layered Design**: Absolute positioned decorative icon, relative content layer

---

## 6. Package Analysis

### Core Dependencies

#### UI & Styling
- **tailwindcss**: 3.4.19 - Utility-first CSS framework
- **tailwind-merge**: 3.4.0 - Merge Tailwind classes intelligently
- **clsx**: 2.1.1 - Conditional class names (used in `cn` utility)

#### Animation
- **gsap**: 3.14.2 - Advanced animation library (character animations, complex timelines)
- **framer-motion**: 11.11.17 - React animation library (scroll animations, component transitions)
- **lenis**: 1.3.17 - Smooth scrolling library

#### 3D Graphics
- **@splinetool/react-spline**: 4.1.0 - Spline 3D scene integration
- **@splinetool/r3f-spline**: 1.0.2 - React Three Fiber integration (optional)
- **three**: 0.182.0 - 3D graphics library
- **@react-three/fiber**: 9.5.0 - React renderer for Three.js
- **@react-three/drei**: 10.7.7 - Useful helpers for R3F

#### Icons & UI Components
- **lucide-react**: 0.562.0 - Icon library (primary icon source)

#### State & Data
- **zustand**: 5.0.9 - Lightweight state management
- **@tanstack/react-query**: 5.90.16 - Data fetching and caching
- **axios**: 1.13.2 - HTTP client

#### Routing
- **react-router-dom**: 7.11.0 - Client-side routing

### Development Dependencies
- **vite**: 7.2.4 - Build tool and dev server
- **typescript**: 5.9.3 - Type safety
- **@vitejs/plugin-react**: 5.1.2 - Vite React plugin
- **vitest**: 4.0.16 - Testing framework
- **eslint**: Various plugins for linting
- **prettier**: 3.7.4 - Code formatting

### Key Patterns in Dependencies
1. **Dual Animation Libraries**: GSAP for complex/performance-critical animations, Framer Motion for React component animations
2. **3D Integration**: Spline for designer-friendly 3D, Three.js/R3F for programmatic control
3. **Modern React**: React 19 with latest features
4. **Type Safety**: Full TypeScript support
5. **Testing**: Vitest for unit/integration tests

---

## Additional Notes

### Code Style
- **Functional Components**: All components use function syntax
- **TypeScript**: Strict mode enabled
- **Naming**: PascalCase for components, camelCase for functions/variables
- **File Naming**: PascalCase for components (`HeroModern.tsx`), camelCase for utilities (`cn.ts`)

### Animation Philosophy
- **GSAP**: Use for text animations, complex timelines, performance-critical animations
- **Framer Motion**: Use for component-level animations, scroll-triggered reveals, hover effects
- **CSS Animations**: Use for simple fade-ins, loading spinners (via Tailwind `animate-*` classes)

### Responsive Design
- **Mobile First**: Base styles for mobile, then `sm:`, `md:`, `lg:` breakpoints
- **Breakpoints**: Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Container**: Uses Tailwind `container` class with responsive padding

### Accessibility
- **Semantic HTML**: Proper heading hierarchy, button/link distinction
- **ARIA Labels**: Used where needed (e.g., `aria-label` on icon buttons)
- **Keyboard Navigation**: Standard React Router navigation

---

**Last Updated**: January 2026
**Project**: ProfitWise Accountancy Website
**Framework**: Vite + React + TypeScript + Tailwind CSS
