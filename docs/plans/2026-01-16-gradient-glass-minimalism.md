# Gradient Glass Minimalism Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Replace Brutalist design with Gradient Glass Minimalism (gradients, glass-morphism, rounded corners, soft shadows)

**Architecture:** Redefine Tailwind design tokens → Replace Brutal components → Redesign all page sections with gradient + glass aesthetic

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion

**Design Principles:**
- ✅ Purple-orange gradients (user's signature style)
- ✅ Glass-morphism with backdrop-blur (twjoin.com inspiration)
- ✅ Pill-shaped buttons with gradient fills (vpon.com inspiration)
- ✅ Soft multi-layer shadows (not hard brutal shadows)
- ✅ Rounded corners everywhere (16px-24px)
- ✅ Sans-serif only (Inter + Noto Sans TC, remove Merriweather)
- ✅ Clean whitespace (bebit-tech.com inspiration)
- ❌ NO thick borders (3px/5px)
- ❌ NO hard offset shadows
- ❌ NO earth tones (brown/bronze)

---

## Task 1: Design System Foundation - Tailwind Config

**Goal:** Replace Brutalist design tokens with Gradient Glass Minimalism tokens

**Files:**
- Modify: `tailwind.config.ts` (lines 12-62)

**Step 1: Update color palette**

Replace Rich Earth Tones with modern gradient colors:

```typescript
// In tailwind.config.ts, replace lines 12-27:
colors: {
  background: "var(--background)",
  foreground: "var(--foreground)",
  // Gradient Glass Minimalism - Modern & Refined
  'purple-primary': '#6366f1',      // Indigo-600
  'purple-light': '#818cf8',        // Indigo-400
  'purple-dark': '#4f46e5',         // Indigo-700
  'orange-primary': '#f97316',      // Orange-500
  'orange-light': '#fb923c',        // Orange-400
  'orange-dark': '#ea580c',         // Orange-600
  'pink-accent': '#ec4899',         // Pink-500
  'glass-white': 'rgba(255, 255, 255, 0.1)',
  'glass-dark': 'rgba(0, 0, 0, 0.1)',
},
```

**Step 2: Remove thick borders, add rounded corners**

Replace lines 54-57:

```typescript
// Remove borderWidth custom values (use default Tailwind)
// Add more rounded corner sizes
borderRadius: {
  'xl': '16px',
  '2xl': '24px',
  '3xl': '32px',
  'pill': '100px',  // Pill-shaped buttons (vpon.com style)
},
```

**Step 3: Replace brutal shadows with soft layered shadows**

Replace lines 58-62:

```typescript
boxShadow: {
  'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
  'soft-md': '0 4px 16px rgba(0, 0, 0, 0.12)',
  'soft-lg': '0 8px 32px rgba(0, 0, 0, 0.16)',
  'soft-xl': '0 12px 48px rgba(0, 0, 0, 0.20)',
  'glass': '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  'gradient-glow': '0 4px 24px rgba(99, 102, 241, 0.3)',  // Purple glow
},
```

**Step 4: Remove serif font (Merriweather)**

Replace lines 40-53:

```typescript
fontFamily: {
  sans: [
    'var(--font-inter)',
    'var(--font-noto-sans-tc)',
    'PingFang TC',
    'Microsoft JhengHei',
    'system-ui',
    '-apple-system',
    'sans-serif',
  ],
  // Remove 'display', 'body', keep only 'ui' for consistency
  'ui': ['Inter', 'system-ui', 'sans-serif'],
},
```

**Step 5: Add backdrop-blur utilities**

Add after boxShadow:

```typescript
backdropBlur: {
  'glass': '12px',
  'glass-lg': '24px',
  'glass-xl': '30px',
},
```

**Step 6: Add gradient background utilities**

Add after backdropBlur:

```typescript
backgroundImage: {
  'gradient-purple-orange': 'linear-gradient(135deg, #6366f1 0%, #f97316 100%)',
  'gradient-purple-pink': 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
  'gradient-orange-pink': 'linear-gradient(315deg, #f97316 0%, #ec4899 100%)',
  'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
},
```

**Step 7: Verify build**

Run: `npm run build`

Expected: ✅ Build succeeds with no errors

**Step 8: Commit**

```bash
git add tailwind.config.ts
git commit -m "refactor: replace Brutalist tokens with Gradient Glass Minimalism design system"
```

---

## Task 2: GradientButton Component

**Goal:** Replace BrutalButton with modern gradient button component

**Files:**
- Modify: `components/BrutalButton.tsx` → Rename to `components/GradientButton.tsx`

**Step 1: Rename file**

```bash
mv components/BrutalButton.tsx components/GradientButton.tsx
```

**Step 2: Replace component code**

Replace entire file content with:

```typescript
import React from 'react';
import Link from 'next/link';

interface GradientButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function GradientButton({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  external = false,
  className = '',
}: GradientButtonProps) {
  const baseStyles = 'font-sans font-semibold transition-all duration-300 inline-block text-center';

  const variantStyles = {
    primary: 'bg-gradient-purple-orange text-white hover:shadow-gradient-glow hover:scale-105 shadow-soft-md',
    secondary: 'bg-gradient-purple-pink text-white hover:shadow-soft-lg hover:scale-105 shadow-soft',
    outline: 'bg-transparent text-purple-primary border-2 border-purple-primary hover:bg-purple-primary hover:text-white shadow-soft hover:shadow-soft-md',
  };

  const sizeStyles = {
    sm: 'px-6 py-2.5 text-sm rounded-pill',
    md: 'px-8 py-3.5 text-base rounded-pill',
    lg: 'px-10 py-4 text-lg rounded-pill',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
```

**Step 3: Update import in page.tsx**

In `app/[locale]/page.tsx`, replace line 11:

```typescript
// Old: import BrutalButton from '@/components/BrutalButton';
import GradientButton from '@/components/GradientButton';
```

**Step 4: Replace all BrutalButton usages**

Search and replace in `app/[locale]/page.tsx`:
- Find: `<BrutalButton`
- Replace: `<GradientButton`

**Step 5: Preview changes**

Run: `npm run dev`

Open: http://localhost:3000

Expected: Buttons now have gradient fills, pill shape, soft shadows

**Step 6: Commit**

```bash
git add components/GradientButton.tsx app/\[locale\]/page.tsx
git rm components/BrutalButton.tsx
git commit -m "feat: replace BrutalButton with GradientButton component"
```

---

## Task 3: GlassCard Component

**Goal:** Replace BrutalCard with glass-morphism card component

**Files:**
- Modify: `components/BrutalCard.tsx` → Rename to `components/GlassCard.tsx`

**Step 1: Rename file**

```bash
mv components/BrutalCard.tsx components/GlassCard.tsx
```

**Step 2: Replace component code**

Replace entire file content with:

```typescript
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = false,
  gradient = false,
}: GlassCardProps) {
  const baseStyles = 'backdrop-blur-glass bg-white/80 rounded-2xl shadow-glass border border-white/20';
  const hoverStyles = hover ? 'hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300' : '';
  const gradientStyles = gradient ? 'bg-gradient-to-br from-white/90 to-purple-primary/10' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}>
      {children}
    </div>
  );
}
```

**Step 3: Update import in page.tsx**

In `app/[locale]/page.tsx`, replace line 12:

```typescript
// Old: import BrutalCard from '@/components/BrutalCard';
import GlassCard from '@/components/GlassCard';
```

**Step 4: Replace all BrutalCard usages**

Search and replace in `app/[locale]/page.tsx`:
- Find: `<BrutalCard`
- Replace: `<GlassCard`

Remove `noBorder` prop (no longer needed):
- Find: `noBorder={true}`
- Replace: (delete this prop)

**Step 5: Preview changes**

Run: `npm run dev`

Expected: Cards now have glass-morphism effect, rounded corners, soft shadows

**Step 6: Commit**

```bash
git add components/GlassCard.tsx app/\[locale\]/page.tsx
git rm components/BrutalCard.tsx
git commit -m "feat: replace BrutalCard with GlassCard component"
```

---

## Task 4: Hero Section Redesign

**Goal:** Redesign hero section with gradient background and glass elements

**Files:**
- Modify: `app/[locale]/page.tsx` (lines 86-178)

**Step 1: Replace background with gradient**

Replace lines 86-93 (background section):

```typescript
<div className="min-h-screen bg-gradient-to-br from-white via-purple-primary/5 to-orange-primary/5 text-gray-900 overflow-hidden">
  {/* Gradient orbs - subtle background decoration */}
  <div className="fixed inset-0 z-0">
    <div className="absolute top-20 right-10 w-96 h-96 bg-purple-primary/20 rounded-full blur-3xl" />
    <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-orange-primary/15 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-accent/10 rounded-full blur-3xl" />
  </div>
```

**Step 2: Redesign hero content**

Replace lines 100-142 (hero section):

```typescript
<section id="hero" className="max-w-6xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
  <div className="grid md:grid-cols-2 gap-12 items-center w-full">
    {/* Left: Text Content */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-purple-pink text-white rounded-pill text-sm font-medium mb-6 shadow-gradient-glow">
        <FaRocket className="w-4 h-4" />
        <span>{t('hero.badge')}</span>
      </div>

      <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
        <span className="bg-gradient-purple-orange bg-clip-text text-transparent">
          {t('hero.title')}
        </span>
      </h1>

      <p className="font-sans text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
        {t('hero.subtitle')}
      </p>

      <div className="flex flex-wrap gap-4">
        <GradientButton
          href={`/${locale}/services`}
          size="lg"
          variant="primary"
        >
          {t('hero.cta.primary')}
        </GradientButton>
        <GradientButton
          href={`/${locale}/projects`}
          size="lg"
          variant="outline"
        >
          {t('hero.cta.secondary')}
        </GradientButton>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 mt-8">
        <a href="https://www.linkedin.com/in/young-ai-consultant/" className="text-purple-primary hover:text-purple-dark transition-colors">
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a href="https://github.com/jyaunches" className="text-purple-primary hover:text-purple-dark transition-colors">
          <FaGithub className="w-6 h-6" />
        </a>
        <a href="https://medium.com/@jyaunches" className="text-purple-primary hover:text-purple-dark transition-colors">
          <FaMedium className="w-6 h-6" />
        </a>
      </div>
    </motion.div>

    {/* Right: Photo with Glass Card */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <GlassCard hover className="p-2">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src="/young-photo.jpg"
            alt="Young - AI Consultant & Full-Stack Developer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </GlassCard>
      {/* Gradient glow behind photo */}
      <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-purple-orange blur-2xl opacity-30 rounded-2xl" />
    </motion.div>
  </div>
</section>
```

**Step 3: Preview changes**

Run: `npm run dev`

Expected: Hero has gradient background, glass card photo, gradient text, pill buttons

**Step 4: Commit**

```bash
git add app/\[locale\]/page.tsx
git commit -m "refactor: redesign hero section with gradient glass aesthetic"
```

---

## Task 5: Services Section Redesign

**Goal:** Replace forest-green background with gradient cards

**Files:**
- Modify: `app/[locale]/page.tsx` (lines 299-464)

**Step 1: Replace section background**

Find the Services section (around line 299), replace background:

```typescript
{/* Services Section - Glass Cards on Gradient */}
<section id="services" className="max-w-6xl mx-auto px-6 py-20">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="font-sans text-4xl md:text-5xl font-black mb-4 text-center">
      <span className="bg-gradient-purple-orange bg-clip-text text-transparent">
        {t('services.title')}
      </span>
    </h2>
    <p className="font-sans text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
      {t('services.subtitle')}
    </p>
```

**Step 2: Redesign service cards**

Replace the services grid with glass cards:

```typescript
    <div className="grid md:grid-cols-3 gap-8">
      {/* AI Product Development */}
      <GlassCard hover className="p-8">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-purple-orange rounded-2xl flex items-center justify-center mb-4 shadow-gradient-glow">
            <FaBrain className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-sans text-2xl font-bold text-gray-900 mb-2">
            {t('services.aiProduct.title')}
          </h3>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="w-5 h-5 text-purple-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{t('services.aiProduct.items.0')}</span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="w-5 h-5 text-purple-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{t('services.aiProduct.items.1')}</span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="w-5 h-5 text-purple-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{t('services.aiProduct.items.2')}</span>
          </li>
        </ul>
        <div className="mt-auto">
          <div className="text-3xl font-black text-purple-primary mb-2">
            {t('services.aiProduct.price')}
          </div>
          <div className="text-sm text-gray-500">{t('services.aiProduct.unit')}</div>
        </div>
      </GlassCard>

      {/* Full-Stack Development - Featured with gradient */}
      <GlassCard hover gradient className="p-8 md:scale-105">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-purple-pink rounded-2xl flex items-center justify-center mb-4 shadow-gradient-glow">
            <FaCode className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-sans text-2xl font-bold text-gray-900 mb-2">
            {t('services.fullStack.title')}
          </h3>
          <div className="inline-block px-3 py-1 bg-gradient-orange-pink text-white text-xs font-semibold rounded-pill">
            {t('services.fullStack.badge')}
          </div>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="w-5 h-5 text-purple-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{t('services.fullStack.items.0')}</span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="w-5 h-5 text-purple-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{t('services.fullStack.items.1')}</span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="w-5 h-5 text-purple-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{t('services.fullStack.items.2')}</span>
          </li>
        </ul>
        <div className="mt-auto">
          <div className="text-3xl font-black bg-gradient-purple-orange bg-clip-text text-transparent mb-2">
            {t('services.fullStack.price')}
          </div>
          <div className="text-sm text-gray-500">{t('services.fullStack.unit')}</div>
        </div>
      </GlassCard>

      {/* Technical Consulting */}
      <GlassCard hover className="p-8">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-purple-orange rounded-2xl flex items-center justify-center mb-4 shadow-gradient-glow">
            <FaLightbulb className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-sans text-2xl font-bold text-gray-900 mb-2">
            {t('services.consulting.title')}
          </h3>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="w-5 h-5 text-purple-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{t('services.consulting.items.0')}</span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="w-5 h-5 text-purple-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{t('services.consulting.items.1')}</span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="w-5 h-5 text-purple-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{t('services.consulting.items.2')}</span>
          </li>
        </ul>
        <div className="mt-auto">
          <div className="text-3xl font-black text-purple-primary mb-2">
            {t('services.consulting.price')}
          </div>
          <div className="text-sm text-gray-500">{t('services.consulting.unit')}</div>
        </div>
      </GlassCard>
    </div>
  </motion.div>
</section>
```

**Step 3: Preview changes**

Run: `npm run dev`

Expected: Services section has glass cards with gradient icons, clean white/gradient backgrounds

**Step 4: Commit**

```bash
git add app/\[locale\]/page.tsx
git commit -m "refactor: redesign services section with glass cards"
```

---

## Task 6: Projects Section Redesign

**Goal:** Lighter, more refined project showcase with glass cards

**Files:**
- Modify: `app/[locale]/page.tsx` (lines 479-566)

**Step 1: Replace section header**

Find Projects section, update header:

```typescript
{/* Projects Section */}
<section id="projects" className="max-w-6xl mx-auto px-6 py-20">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="font-sans text-4xl md:text-5xl font-black mb-4 text-center">
      <span className="bg-gradient-purple-pink bg-clip-text text-transparent">
        {t('projects.sectionTitle')}
      </span>
    </h2>
    <p className="font-sans text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
      {t('projects.sectionSubtitle')}
    </p>
```

**Step 2: Redesign project cards with glass effect**

Replace project cards grid:

```typescript
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {projects.slice(0, 4).map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <GlassCard hover className="p-6 h-full flex flex-col">
            <h3 className="font-sans text-2xl font-bold text-gray-900 mb-2">
              {project.title}
            </h3>
            <p className="text-purple-primary font-medium text-sm mb-3">
              {project.subtitle}
            </p>
            <p className="text-gray-600 mb-4 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-purple-primary/10 to-orange-primary/10 text-purple-dark text-xs font-medium rounded-pill border border-purple-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <GradientButton
              href={`/${locale}/projects/${project.slug}`}
              variant="outline"
              size="sm"
            >
              {t('projects.viewDetails')}
            </GradientButton>
          </GlassCard>
        </motion.div>
      ))}
    </div>

    {/* View All Projects Button */}
    <div className="text-center">
      <GradientButton
        href={`/${locale}/projects`}
        variant="primary"
        size="lg"
      >
        {t('projects.viewAll')}
      </GradientButton>
    </div>
  </motion.div>
</section>
```

**Step 3: Preview changes**

Run: `npm run dev`

Expected: Projects in glass cards, gradient tech stack tags, refined appearance

**Step 4: Commit**

```bash
git add app/\[locale\]/page.tsx
git commit -m "refactor: redesign projects section with glass cards and gradient tags"
```

---

## Task 7: About Section Redesign

**Goal:** Remove dark brown background, add gradient accents

**Files:**
- Modify: `app/[locale]/page.tsx` (lines 279-378)

**Step 1: Replace section with gradient background**

Find About section, replace with:

```typescript
{/* About Section - Gradient Background */}
<section id="about" className="relative py-20 overflow-hidden">
  {/* Gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/10 via-pink-accent/5 to-orange-primary/10" />

  <div className="relative max-w-6xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-sans text-4xl md:text-5xl font-black mb-4 text-center">
        <span className="bg-gradient-purple-orange bg-clip-text text-transparent">
          {t('about.title')}
        </span>
      </h2>
      <p className="font-sans text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
        {t('about.subtitle')}
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="space-y-6">
          <GlassCard className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-purple-orange rounded-xl flex items-center justify-center flex-shrink-0 shadow-gradient-glow">
                <FaBrain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-gray-900 mb-2">
                  {t('about.experience.title')}
                </h3>
                <p className="text-gray-600">
                  {t('about.experience.description')}
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-purple-pink rounded-xl flex items-center justify-center flex-shrink-0 shadow-gradient-glow">
                <FaCode className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-gray-900 mb-2">
                  {t('about.technical.title')}
                </h3>
                <p className="text-gray-600">
                  {t('about.technical.description')}
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-orange-pink rounded-xl flex items-center justify-center flex-shrink-0 shadow-gradient-glow">
                <FaLightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-gray-900 mb-2">
                  {t('about.consulting.title')}
                </h3>
                <p className="text-gray-600">
                  {t('about.consulting.description')}
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right: Stats or Image */}
        <div className="space-y-6">
          <GlassCard gradient className="p-8 text-center">
            <div className="text-5xl font-black bg-gradient-purple-orange bg-clip-text text-transparent mb-2">
              10+
            </div>
            <p className="text-gray-700 font-medium">{t('about.stats.projects')}</p>
          </GlassCard>

          <GlassCard gradient className="p-8 text-center">
            <div className="text-5xl font-black bg-gradient-purple-pink bg-clip-text text-transparent mb-2">
              5+
            </div>
            <p className="text-gray-700 font-medium">{t('about.stats.years')}</p>
          </GlassCard>

          <GlassCard gradient className="p-8 text-center">
            <div className="text-5xl font-black bg-gradient-orange-pink bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-gray-700 font-medium">{t('about.stats.satisfaction')}</p>
          </GlassCard>
        </div>
      </div>
    </motion.div>
  </div>
</section>
```

**Step 2: Preview changes**

Run: `npm run dev`

Expected: About section has gradient background, glass cards with gradient icons, stats with gradient text

**Step 3: Commit**

```bash
git add app/\[locale\]/page.tsx
git commit -m "refactor: redesign about section with gradient background and glass cards"
```

---

## Task 8: Contact CTA Redesign

**Goal:** Replace amber-gold background with gradient CTA

**Files:**
- Modify: `components/ContactCTA.tsx`

**Step 1: Read current ContactCTA**

```bash
cat components/ContactCTA.tsx
```

**Step 2: Replace with gradient version**

Replace entire file:

```typescript
"use client";

import { useTranslations, useLocale } from 'next-intl';
import GradientButton from './GradientButton';
import GlassCard from './GlassCard';

export default function ContactCTA() {
  const t = useTranslations('contact');
  const locale = useLocale();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-purple-orange opacity-90" />

      {/* Gradient orbs for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-dark/30 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <GlassCard className="p-12 md:p-16 backdrop-blur-glass-lg">
          <h2 className="font-sans text-4xl md:text-5xl font-black text-white mb-6">
            {t('title')}
          </h2>
          <p className="font-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <GradientButton
              href={`/${locale}/services`}
              variant="secondary"
              size="lg"
              className="bg-white text-purple-primary hover:bg-white/90"
            >
              {t('cta.primary')}
            </GradientButton>
            <GradientButton
              href={`mailto:young@example.com`}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-primary"
            >
              {t('cta.secondary')}
            </GradientButton>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
```

**Step 3: Preview changes**

Run: `npm run dev`

Expected: Contact CTA has gradient background with glass card overlay

**Step 4: Commit**

```bash
git add components/ContactCTA.tsx
git commit -m "refactor: redesign contact CTA with gradient background"
```

---

## Task 9: Navigation Glass-morphism

**Goal:** Update navigation with glass-morphism effect

**Files:**
- Modify: `components/Navigation.tsx`

**Step 1: Read current Navigation**

```bash
cat components/Navigation.tsx
```

**Step 2: Replace sticky header styles**

Find the header element, update className:

Old:
```typescript
className="sticky top-0 z-50 bg-warm-cream border-b-3 border-deep-brown shadow-brutal"
```

New:
```typescript
className="sticky top-0 z-50 backdrop-blur-glass-lg bg-white/80 border-b border-white/20 shadow-soft-md"
```

**Step 3: Update link hover styles**

Find navigation links, update hover colors from `deep-brown` to `purple-primary`:

Example:
```typescript
className="text-gray-700 hover:text-purple-primary transition-colors font-medium"
```

**Step 4: Update mobile menu background**

Find mobile menu, update background:

Old:
```typescript
className="bg-warm-cream border-t-3 border-deep-brown"
```

New:
```typescript
className="backdrop-blur-glass-lg bg-white/95 border-t border-white/20 shadow-soft-lg"
```

**Step 5: Preview changes**

Run: `npm run dev`

Expected: Navigation has glass-morphism effect, purple hover states

**Step 6: Commit**

```bash
git add components/Navigation.tsx
git commit -m "refactor: update navigation with glass-morphism effect"
```

---

## Task 10: Remove All Brutalist References

**Goal:** Clean up any remaining Brutalist CSS classes

**Files:**
- Modify: `app/[locale]/page.tsx`

**Step 1: Search for brutal references**

```bash
grep -n "brutal\|deep-brown\|forest-green\|warm-cream\|amber-gold\|bronze" app/\[locale\]/page.tsx
```

**Step 2: Replace remaining brutalist colors**

- `deep-brown` → `gray-900` or `purple-dark`
- `forest-green` → `purple-primary` or `gray-700`
- `warm-cream` → `white` or `gray-50`
- `amber-gold` → `orange-primary` or gradient
- `bronze` → `orange-dark`

**Step 3: Remove brutal shadow classes**

- `shadow-brutal` → `shadow-soft-md`
- `shadow-brutal-lg` → `shadow-soft-lg`

**Step 4: Verify no brutal classes remain**

```bash
grep -r "brutal" components/ app/
```

Expected: No results (except in old plan docs)

**Step 5: Commit**

```bash
git add .
git commit -m "refactor: remove all remaining Brutalist design references"
```

---

## Task 11: Responsive Testing

**Goal:** Verify all breakpoints work correctly

**Files:**
- None (visual testing only)

**Step 1: Test mobile (375px)**

```bash
npm run dev
```

Open Chrome DevTools → Responsive mode → iPhone SE (375px)

Check:
- ✅ Hero stacks properly
- ✅ Services cards stack vertically
- ✅ Projects cards stack vertically
- ✅ Navigation hamburger menu works
- ✅ Glass cards render correctly
- ✅ Buttons fit within viewport

**Step 2: Test tablet (768px)**

Set viewport to iPad (768px)

Check:
- ✅ Hero has 2 columns
- ✅ Services has 1-2 columns
- ✅ Projects has 2 columns
- ✅ About section responsive

**Step 3: Test desktop (1280px)**

Set viewport to desktop (1280px)

Check:
- ✅ Hero has 2 columns
- ✅ Services has 3 columns
- ✅ Projects has 2 columns
- ✅ All spacing looks balanced

**Step 4: Test large desktop (1920px)**

Set viewport to 1920px

Check:
- ✅ Content doesn't stretch too wide (max-w-6xl/7xl)
- ✅ Gradient backgrounds cover full width

**Step 5: Document results**

If all tests pass, no commit needed. If issues found, fix and commit.

---

## Task 12: i18n Testing

**Goal:** Verify both zh-TW and en locales render correctly

**Files:**
- None (visual testing only)

**Step 1: Test Chinese (zh-TW)**

```bash
npm run dev
```

Open: http://localhost:3000/zh-TW

Check:
- ✅ All content in Chinese
- ✅ Noto Sans TC font renders correctly
- ✅ No layout breaking with Chinese characters
- ✅ Gradient text displays correctly with Chinese

**Step 2: Test English (en)**

Open: http://localhost:3000/en

Check:
- ✅ All content in English
- ✅ Inter font renders correctly
- ✅ Layout consistent with Chinese version
- ✅ No translation keys showing (e.g., "hero.title")

**Step 3: Test language switcher**

Click language switcher in navigation

Check:
- ✅ Switches between zh-TW and en
- ✅ URL changes correctly (/zh-TW vs /en)
- ✅ Content updates immediately
- ✅ No flash of untranslated content

**Step 4: Document results**

If all tests pass, no commit needed. If missing translations found, update and commit.

---

## Task 13: Production Build Test

**Goal:** Verify production build succeeds with no errors

**Files:**
- None (build verification only)

**Step 1: Run production build**

```bash
npm run build
```

Expected output:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (25/25)
✓ Finalizing page optimization
✓ Collecting build traces

Route (app)                              Size     First Load JS
┌ ○ /                                   128 B          102 kB
├ ● /[locale]                           X kB           XXX kB
...
```

**Step 2: Check for errors**

Expected:
- ✅ 0 TypeScript errors
- ✅ 0 ESLint errors
- ✅ All pages generated successfully
- ✅ No warnings about missing translations

**Step 3: Check bundle size**

Compare bundle size to before:
- Previous First Load JS: ~175 kB
- Expected after: Similar or smaller (no new dependencies)

**Step 4: Run production preview**

```bash
npm run build && npm start
```

Open: http://localhost:3000

Visual check:
- ✅ All gradients render correctly
- ✅ Glass-morphism effects visible
- ✅ Animations smooth
- ✅ No console errors

**Step 5: Commit if any fixes needed**

```bash
git add .
git commit -m "fix: resolve production build issues"
```

---

## Task 14: Final Cleanup & Documentation

**Goal:** Update documentation and clean up old files

**Files:**
- Create: `docs/plans/2026-01-16-gradient-glass-migration.md`
- Update: `CLAUDE.md` (if needed)

**Step 1: Document design migration**

Create migration doc:

```markdown
# Gradient Glass Minimalism Migration

**Date**: 2026-01-16
**Designer**: Claude + Young
**Migration**: Brutalist → Gradient Glass Minimalism

## What Changed

### Design Tokens (tailwind.config.ts)
- ❌ Removed: Rich Earth Tones (deep-brown, forest-green, warm-cream, amber-gold, bronze)
- ✅ Added: Modern gradient colors (purple-primary, orange-primary, pink-accent)
- ❌ Removed: Hard brutal shadows (8px offset, no blur)
- ✅ Added: Soft layered shadows (4-32px with blur)
- ❌ Removed: Thick borders (3px, 5px)
- ✅ Added: Rounded corners (pill shape, 16-32px)
- ✅ Added: Glass-morphism (backdrop-blur-12/24/30px)

### Components
- ❌ Deleted: `BrutalButton.tsx`, `BrutalCard.tsx`
- ✅ Created: `GradientButton.tsx`, `GlassCard.tsx`

### Page Sections
- Hero: Gradient background + glass card photo
- Services: Glass cards with gradient icons
- Projects: Glass cards with gradient tags
- About: Gradient background + glass info cards
- Contact CTA: Full gradient background with glass overlay
- Navigation: Glass-morphism header

## Design Philosophy

**Gradient Glass Minimalism** = User's old gradient style + Modern glass-morphism

Inspired by:
- User's original purple-orange gradient design
- twjoin.com (glass-morphism, backdrop-blur)
- vpon.com (pill buttons, orange gradients)
- bebit-tech.com (clean whitespace, minimal borders)

## Future Improvements

- Dark mode toggle (optional)
- Micro-interactions on hover (subtle scale/glow)
- Animated gradient backgrounds (optional)

**Status**: ✅ Migration complete, production-ready
```

**Step 2: Update CLAUDE.md if needed**

No changes needed (stack remains Next.js 15 + Tailwind CSS)

**Step 3: Remove old Brutalist plan**

Keep for reference, but mark as superseded:

```bash
echo "**SUPERSEDED by 2026-01-16-gradient-glass-migration.md**" >> docs/plans/2026-01-16-brutalist-luxury-redesign.md
```

**Step 4: Final commit**

```bash
git add docs/
git commit -m "docs: add Gradient Glass Minimalism migration documentation"
```

---

## Execution Handoff

Plan complete and saved to `docs/plans/2026-01-16-gradient-glass-minimalism.md`.

**Two execution options:**

**1. Subagent-Driven (this session)** - I dispatch fresh subagent per task, review between tasks, fast iteration

**2. Parallel Session (separate)** - Open new session with executing-plans, batch execution with checkpoints

**Which approach?**
