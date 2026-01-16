# Brutalist Luxury Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign entire website with Brutalist + Luxury aesthetic using Rich Earth Tones palette

**Architecture:** Update Tailwind config with custom design tokens, refactor all page components to use new design system, maintain i18n support and responsive design

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, next-intl

---

## Task 1: Setup Design System in Tailwind Config

**Files:**
- Modify: `tailwind.config.ts`
- Reference: `docs/plans/2026-01-16-brutalist-luxury-redesign.md`

**Step 1: Backup current config**

```bash
cp tailwind.config.ts tailwind.config.ts.backup
```

**Step 2: Update Tailwind config with new colors**

Add to `tailwind.config.ts` in the `extend.colors` section:

```typescript
colors: {
  // Rich Earth Tones - Brutalist Luxury
  'deep-brown': '#2C1810',
  'forest-green': '#1A3A2E',
  'warm-cream': '#F5F1E8',
  'amber-gold': '#D4A574',
  'bronze': '#8B6F47',
  'warm-orange': '#E87B35',
  'charcoal': '#3A3A3A',
  'stone-gray': '#6B6B6B',
  'light-stone': '#D4CFCF',
},
```

**Step 3: Add custom spacing scale**

Add to `tailwind.config.ts` in the `extend` section:

```typescript
spacing: {
  '18': '4.5rem',   // 72px
  '22': '5.5rem',   // 88px
  '26': '6.5rem',   // 104px
  '30': '7.5rem',   // 120px
  '34': '8.5rem',   // 136px
  '38': '9.5rem',   // 152px
  '42': '10.5rem',  // 168px
  '46': '11.5rem',  // 184px
  '50': '12.5rem',  // 200px
},
```

**Step 4: Add custom font families**

Add to `tailwind.config.ts` in the `extend.fontFamily` section:

```typescript
fontFamily: {
  'display': ['Inter', 'system-ui', 'sans-serif'],
  'body': ['Merriweather', 'Georgia', 'serif'],
  'ui': ['Inter', 'system-ui', 'sans-serif'],
},
```

**Step 5: Add custom box shadows (hard shadows)**

Add to `tailwind.config.ts` in the `extend.boxShadow` section:

```typescript
boxShadow: {
  'brutal': '8px 8px 0px rgba(44, 24, 16, 0.15)',
  'brutal-lg': '12px 12px 0px rgba(44, 24, 16, 0.15)',
  'brutal-amber': '8px 8px 0px rgba(212, 165, 116, 0.3)',
},
```

**Step 6: Test config builds**

```bash
npm run build
```

Expected: Build succeeds with no errors

**Step 7: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat: add Brutalist Luxury design tokens to Tailwind config"
```

---

## Task 2: Add Google Fonts (Merriweather)

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Import Merriweather from next/font/google**

At top of `app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google';
import { Merriweather } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
});
```

**Step 2: Add font variables to body className**

Update body tag in `app/layout.tsx`:

```typescript
<body className={`${inter.variable} ${merriweather.variable} font-body`}>
```

**Step 3: Test fonts load**

```bash
npm run dev
```

Visit http://localhost:3000 and inspect element - verify CSS variables are present

**Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add Merriweather serif font for body text"
```

---

## Task 3: Create Reusable Button Component

**Files:**
- Create: `components/BrutalButton.tsx`
- Test: Manual visual test in dev

**Step 1: Create BrutalButton component**

Create `components/BrutalButton.tsx`:

```typescript
import React from 'react';
import Link from 'next/link';

interface BrutalButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function BrutalButton({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  external = false,
  className = '',
}: BrutalButtonProps) {
  const baseStyles = 'font-ui font-bold transition-all duration-200 border-3 inline-block';

  const variantStyles = {
    primary: 'bg-amber-gold text-deep-brown border-deep-brown hover:bg-bronze shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1',
    secondary: 'bg-transparent text-deep-brown border-deep-brown hover:bg-deep-brown hover:text-warm-cream shadow-brutal hover:shadow-brutal-lg',
  };

  const sizeStyles = {
    sm: 'px-6 py-3 text-sm rounded-lg',
    md: 'px-10 py-4 text-base rounded-xl',
    lg: 'px-12 py-6 text-lg rounded-xl',
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

**Step 2: Test button component**

Add temporary test to `app/[locale]/page.tsx` at top of Hero section:

```typescript
<div className="p-8">
  <BrutalButton variant="primary" size="lg">Primary Large</BrutalButton>
  <BrutalButton variant="secondary" size="md">Secondary Medium</BrutalButton>
</div>
```

**Step 3: Run dev server and verify**

```bash
npm run dev
```

Visit http://localhost:3000 - verify buttons render with hard shadows and correct colors

**Step 4: Remove test code and commit**

Remove test code from page.tsx

```bash
git add components/BrutalButton.tsx
git commit -m "feat: create BrutalButton component with hard shadows"
```

---

## Task 4: Create Reusable Card Component

**Files:**
- Create: `components/BrutalCard.tsx`

**Step 1: Create BrutalCard component**

Create `components/BrutalCard.tsx`:

```typescript
import React from 'react';

interface BrutalCardProps {
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
  noPadding?: boolean;
}

export default function BrutalCard({
  children,
  className = '',
  noBorder = false,
  noPadding = false,
}: BrutalCardProps) {
  const baseStyles = 'bg-warm-cream';
  const borderStyles = noBorder ? '' : 'border-3 border-deep-brown shadow-brutal';
  const paddingStyles = noPadding ? '' : 'p-8 md:p-10';

  return (
    <div className={`${baseStyles} ${borderStyles} ${paddingStyles} ${className}`}>
      {children}
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add components/BrutalCard.tsx
git commit -m "feat: create BrutalCard component with thick borders"
```

---

## Task 5: Redesign Hero Section (Homepage)

**Files:**
- Modify: `app/[locale]/page.tsx` (lines 88-195)
- Import: `components/BrutalButton.tsx`

**Step 1: Import BrutalButton**

Add to imports at top of `app/[locale]/page.tsx`:

```typescript
import BrutalButton from '@/components/BrutalButton';
```

**Step 2: Replace Hero section background**

Replace lines 79-81:

```typescript
<div className="min-h-screen bg-warm-cream text-charcoal overflow-hidden">
  {/* Background with geometric shapes */}
  <div className="fixed inset-0 z-0 bg-warm-cream">
    {/* Geometric decorations - Brutalist style */}
    <div className="absolute top-20 right-10 w-64 h-64 border-4 border-deep-brown opacity-20" />
    <div className="absolute bottom-40 left-20 w-96 h-96 border-8 border-forest-green opacity-10" />
    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-amber-gold opacity-20" />
  </div>
```

**Step 3: Update Hero section layout**

Replace Hero section (lines 88-195) with:

```typescript
{/* Hero Section - Brutalist Bold */}
<section id="hero" className="max-w-7xl mx-auto px-6 pt-42 pb-30 min-h-screen flex items-center">
  <div className="flex flex-col md:flex-row items-center gap-16 w-full">
    {/* Photo - Brutalist Frame */}
    <div className="flex-shrink-0">
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        {/* Thick border frame */}
        <div className="absolute inset-0 border-8 border-deep-brown shadow-brutal-lg" />

        <Image
          src="/images/young.jpg"
          alt="Young Tsai - AI Product Consultant"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>

    {/* Hero Content */}
    <div className="flex-1 max-w-2xl">
      {/* Badge */}
      <div className="inline-flex items-center px-6 py-3 bg-amber-gold border-3 border-deep-brown text-deep-brown text-base md:text-lg font-bold mb-8 shadow-brutal">
        <span className="w-3 h-3 bg-warm-orange mr-3" />
        {t('hero.badge')}
      </div>

      {/* Headline - Super Bold */}
      <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl mb-8 text-deep-brown leading-tight tracking-tight">
        {t('hero.headline')}
      </h1>

      {/* Subheadline - Serif */}
      <p className="font-body text-xl md:text-2xl text-charcoal mb-12 leading-relaxed">
        {t('hero.subheadline')}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-6 mb-12">
        <BrutalButton
          href="https://calendly.com/young-tsai/ai"
          external
          variant="primary"
          size="lg"
        >
          {t('hero.ctaPrimary')}
        </BrutalButton>
        <BrutalButton
          href="#projects"
          variant="secondary"
          size="lg"
        >
          {t('hero.ctaSecondary')}
        </BrutalButton>
      </div>

      {/* Social Links - Brutal Style */}
      <div className="flex gap-4">
        {[
          { href: 'https://www.linkedin.com/in/tzu-yang-tsai/', icon: FaLinkedin, label: 'LinkedIn' },
          { href: 'https://github.com/Youngger9765', icon: FaGithub, label: 'GitHub' },
          { href: 'https://medium.com/young-tsai', icon: FaMedium, label: 'Medium' },
        ].map(social => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-warm-cream border-3 border-deep-brown text-charcoal hover:bg-deep-brown hover:text-warm-cream transition-all duration-200 shadow-brutal hover:shadow-brutal-lg"
            aria-label={social.label}
          >
            <social.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  </div>
</section>
```

**Step 4: Test Hero section**

```bash
npm run dev
```

Visit http://localhost:3000 - verify:
- Photo has thick border
- Headline is super bold
- Buttons have hard shadows
- Social links have brutal style

**Step 5: Commit**

```bash
git add app/[locale]/page.tsx
git commit -m "feat: redesign Hero section with Brutalist style"
```

---

## Task 6: Redesign Services Section (Homepage)

**Files:**
- Modify: `app/[locale]/page.tsx` (lines 316-452)
- Import: `components/BrutalCard.tsx`

**Step 1: Import BrutalCard**

Add to imports:

```typescript
import BrutalCard from '@/components/BrutalCard';
```

**Step 2: Replace Services section**

Replace Services section (lines 316-452) with:

```typescript
{/* Services Section - Dark Forest Green */}
<section id="services" className="border-t-5 border-deep-brown bg-forest-green text-warm-cream">
  <div className="max-w-7xl mx-auto px-6 py-30">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="font-display font-black text-5xl md:text-6xl text-amber-gold mb-6">
        {t('services.title')}
      </h2>
      <p className="font-body text-2xl text-warm-cream/90 max-w-2xl mx-auto">
        {t('services.subtitle')}
      </p>
    </div>

    {/* Featured - Health Check */}
    <BrutalCard className="mb-16 bg-amber-gold border-deep-brown">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <div className="inline-block px-6 py-2 bg-deep-brown text-amber-gold font-bold text-sm mb-6 border-3 border-deep-brown">
            💡 {t('services.featured.recommended')}
          </div>

          <h3 className="font-display font-black text-4xl md:text-5xl text-deep-brown mb-4">
            {t('services.healthCheck.title')}
          </h3>

          <p className="font-body text-xl text-deep-brown/80 mb-6">
            {t('services.healthCheck.tagline')}
          </p>

          <div className="font-display font-black text-6xl text-deep-brown mb-4">
            {t('services.healthCheck.price')}
          </div>

          <p className="font-body text-deep-brown/70 mb-8">
            {t('services.healthCheck.timeline')} • {t('services.healthCheck.ideal')}
          </p>

          <BrutalButton variant="secondary" size="lg" href="https://calendly.com/young-tsai/ai" external>
            {locale === 'zh-TW' ? '立即預約' : 'Book Now'}
          </BrutalButton>
        </div>

        <div className="flex-1">
          <div className="bg-deep-brown/10 p-8 border-3 border-deep-brown">
            <h4 className="font-display font-bold text-2xl text-deep-brown mb-6">
              {locale === 'zh-TW' ? '你會得到' : 'What You Get'}
            </h4>
            <ul className="space-y-4">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex gap-3 items-start font-body text-deep-brown">
                  <span className="text-warm-orange font-bold text-2xl">✓</span>
                  <span className="text-lg">{t(`services.healthCheck.deliverables.${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BrutalCard>

    {/* Other Services */}
    <div className="grid lg:grid-cols-2 gap-8">
      {[
        { key: 'fastPrototype' },
        { key: 'mvp' },
      ].map((service) => (
        <BrutalCard key={service.key} className="flex flex-col">
          <h3 className="font-display font-black text-3xl text-deep-brown mb-3">
            {t(`services.${service.key}.title`)}
          </h3>

          <p className="font-body text-charcoal text-lg mb-6">
            {t(`services.${service.key}.tagline`)}
          </p>

          <div className="font-display font-black text-5xl text-amber-gold mb-2">
            {t(`services.${service.key}.price`)}
          </div>

          <p className="font-body text-stone-gray text-sm mb-8">
            {t(`services.${service.key}.timeline`)}
          </p>

          <ul className="space-y-3 mb-8 flex-1">
            {[0, 1, 2].map((i) => (
              <li key={i} className="flex gap-3 items-start font-body text-charcoal">
                <span className="text-warm-orange font-bold text-xl">✓</span>
                <span>{t(`services.${service.key}.deliverables.${i}`)}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t-3 border-deep-brown">
            <p className="font-body text-sm text-stone-gray mb-4">
              {t(`services.${service.key}.ideal`)}
            </p>
            <BrutalButton variant="primary" size="md" href="https://calendly.com/young-tsai/ai" external className="w-full">
              {t('projects.consultCta')}
            </BrutalButton>
          </div>
        </BrutalCard>
      ))}
    </div>
  </div>
</section>
```

**Step 3: Test Services section**

```bash
npm run dev
```

Verify:
- Forest green background
- Featured card has amber-gold background
- Cards have thick borders
- Pricing is super large and bold

**Step 4: Commit**

```bash
git add app/[locale]/page.tsx
git commit -m "feat: redesign Services section with Brutalist cards"
```

---

## Task 7: Redesign Projects Section (Homepage)

**Files:**
- Modify: `app/[locale]/page.tsx` (lines 461-581)

**Step 1: Replace Projects section**

Replace Projects section with:

```typescript
{/* Projects Section - Asymmetric Layout */}
<section id="projects" className="border-t-5 border-deep-brown bg-warm-cream">
  <div className="max-w-7xl mx-auto px-6 py-30">
    <div className="text-center mb-20">
      <h2 className="font-display font-black text-5xl md:text-6xl text-deep-brown mb-4">
        {t('projects.title')}
      </h2>
      <p className="font-body text-xl text-charcoal max-w-2xl mx-auto">
        {locale === 'zh-TW' ? '從概念到上線，打造真正有價值的 AI 產品' : 'From concept to launch, building AI products that matter'}
      </p>
    </div>

    <div className="space-y-16">
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <Link key={project.slug} href={`/${locale}/projects/${project.slug}`}>
            <div className={`group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 border-5 border-deep-brown shadow-brutal-lg hover:shadow-brutal hover:translate-x-2 hover:translate-y-2 transition-all duration-300 bg-warm-cream`}>
              {/* Project Visual - Square */}
              <div className="md:w-2/5 h-80 bg-gradient-to-br from-amber-gold/20 to-bronze/20 flex items-center justify-center border-b-5 md:border-b-0 md:border-r-5 border-deep-brown">
                <div className="w-24 h-24 border-5 border-deep-brown bg-deep-brown text-amber-gold flex items-center justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 p-10 md:p-12">
                <h3 className="font-display font-black text-4xl text-deep-brown mb-3 group-hover:text-bronze transition-colors">
                  {project.title}
                </h3>

                <p className="font-ui font-bold text-lg text-bronze mb-6">
                  {project.subtitle}
                </p>

                <p className="font-body text-charcoal text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Metrics - Brutal Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: FaQuestionCircle, text: project.summary.problem, label: t('projects.summary.problem'), color: 'text-warm-orange' },
                    { icon: FaLightbulb, text: project.summary.solution, label: t('projects.summary.solution'), color: 'text-amber-gold' },
                    { icon: FaCheckCircle, text: project.summary.result, label: t('projects.summary.result'), color: 'text-forest-green' },
                    { icon: FaClock, text: project.summary.timeline, label: t('projects.summary.timeline'), color: 'text-bronze' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 p-4 border-3 border-deep-brown">
                      <div className={`mt-1 ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-ui font-bold text-deep-brown text-sm mb-1">{item.label}</div>
                        <div className="font-body text-charcoal text-sm">{item.text}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <BrutalButton variant="primary" size="md" href="https://calendly.com/young-tsai/ai" external>
                  {t('projects.consultCta')} →
                </BrutalButton>
              </div>
            </div>
          </Link>
        );
      })}
    </div>

    {/* View All CTA */}
    <div className="text-center pt-16">
      <BrutalButton variant="secondary" size="lg" href={`/${locale}/projects`}>
        {locale === 'zh-TW' ? '查看所有專案' : 'View all projects'} →
      </BrutalButton>
    </div>
  </div>
</section>
```

**Step 2: Test Projects section**

```bash
npm run dev
```

Verify:
- Projects alternate left/right
- Thick 5px borders
- Hard shadows on hover
- Square icon placeholders

**Step 3: Commit**

```bash
git add app/[locale]/page.tsx
git commit -m "feat: redesign Projects section with asymmetric layout"
```

---

## Task 8: Update About Section (Homepage)

**Files:**
- Modify: `app/[locale]/page.tsx` (lines 290-313)

**Step 1: Replace About section**

```typescript
{/* About Section - Deep Brown Background */}
<section id="about" className="border-t-5 border-deep-brown bg-deep-brown text-warm-cream">
  <div className="max-w-5xl mx-auto px-6 py-30">
    <h2 className="font-display font-black text-5xl md:text-6xl text-amber-gold mb-16 text-center">
      {t('about.title')}
    </h2>

    <div className="space-y-8 font-body text-xl md:text-2xl leading-relaxed">
      <p className="first-letter:text-7xl first-letter:font-black first-letter:text-amber-gold first-letter:mr-3 first-letter:float-left">
        {t('about.intro')}
      </p>

      <p className="pl-8 border-l-5 border-amber-gold">
        {t('about.paragraph1')}
      </p>

      <p>{t('about.paragraph2')}</p>

      <p className="pl-8 border-l-5 border-bronze">
        {t('about.paragraph3')}
      </p>

      <p className="text-amber-gold/80 italic bg-deep-brown/50 p-8 border-3 border-amber-gold">
        {t('about.paragraph4')}
      </p>
    </div>
  </div>
</section>
```

**Step 2: Test and commit**

```bash
npm run dev
git add app/[locale]/page.tsx
git commit -m "feat: redesign About section with deep brown background"
```

---

## Task 9: Update Navigation Component

**Files:**
- Modify: `components/Navigation.tsx`

**Step 1: Read current Navigation**

```bash
cat components/Navigation.tsx
```

**Step 2: Update Navigation styles**

Replace Navigation component with Brutalist style:

```typescript
// Update navigation bar background and borders
className="fixed top-0 left-0 right-0 z-50 bg-warm-cream border-b-5 border-deep-brown shadow-brutal"

// Update navigation links
className="font-ui font-bold text-deep-brown hover:text-bronze transition-colors px-4 py-2 border-3 border-transparent hover:border-deep-brown"

// Update language switcher
className="border-3 border-deep-brown bg-transparent text-deep-brown hover:bg-deep-brown hover:text-warm-cream px-4 py-2 font-ui font-bold"
```

**Step 3: Test navigation**

```bash
npm run dev
```

Verify navigation has thick bottom border and brutal styling

**Step 4: Commit**

```bash
git add components/Navigation.tsx
git commit -m "feat: update Navigation with Brutalist styling"
```

---

## Task 10: Update ContactCTA Component

**Files:**
- Modify: `components/ContactCTA.tsx`

**Step 1: Read current ContactCTA**

```bash
cat components/ContactCTA.tsx
```

**Step 2: Redesign with Brutalist style**

Update ContactCTA to use:
- Deep brown or amber-gold background
- Thick borders
- BrutalButton for CTA
- Large bold typography

**Step 3: Test and commit**

```bash
npm run dev
git add components/ContactCTA.tsx
git commit -m "feat: redesign ContactCTA with Brutalist style"
```

---

## Task 11: Responsive Testing

**Files:**
- Test: All pages at breakpoints

**Step 1: Test mobile (375px)**

```bash
npm run dev
```

Open DevTools, set viewport to 375px width
Navigate through all pages, verify:
- Layout doesn't break
- Text is readable
- Buttons are tappable
- Borders scale appropriately

**Step 2: Test tablet (768px)**

Set viewport to 768px, verify same

**Step 3: Test desktop (1440px)**

Set viewport to 1440px, verify same

**Step 4: Document any issues**

Create `docs/responsive-issues.md` if issues found

---

## Task 12: i18n Testing

**Files:**
- Test: All pages in both languages

**Step 1: Test Chinese (zh-TW)**

```bash
npm run dev
```

Visit http://localhost:3000/zh-TW
Verify all text displays correctly

**Step 2: Test English (en)**

Visit http://localhost:3000/en
Verify all text displays correctly

**Step 3: Test language switcher**

Switch between languages, verify smooth transition

---

## Task 13: Build and Production Test

**Files:**
- Test: Production build

**Step 1: Build for production**

```bash
npm run build
```

Expected: Build succeeds with no errors or warnings

**Step 2: Test production build**

```bash
npm start
```

Visit http://localhost:3000
Verify everything works in production mode

**Step 3: Check bundle size**

Review build output for any unexpectedly large bundles

---

## Task 14: Final Cleanup and Documentation

**Files:**
- Update: `README.md`
- Create: `docs/design-system.md`

**Step 1: Document design system**

Create `docs/design-system.md` with:
- Color palette reference
- Typography scale
- Component usage examples
- Spacing system

**Step 2: Update README**

Add design system reference to README

**Step 3: Remove any console.logs or debug code**

**Step 4: Final commit**

```bash
git add .
git commit -m "docs: add design system documentation"
```

---

## Completion Checklist

- [ ] Tailwind config updated with design tokens
- [ ] Fonts loaded (Merriweather + Inter)
- [ ] BrutalButton component created
- [ ] BrutalCard component created
- [ ] Hero section redesigned
- [ ] Services section redesigned
- [ ] Projects section redesigned
- [ ] About section redesigned
- [ ] Navigation updated
- [ ] ContactCTA updated
- [ ] Responsive testing complete (mobile/tablet/desktop)
- [ ] i18n testing complete (zh-TW/en)
- [ ] Production build successful
- [ ] Documentation complete

---

**Estimated Time:** 4-6 hours for full implementation

**Testing Strategy:** Visual testing at each step, manual responsive testing, i18n verification

**Rollback Plan:** Git commits at each step allow easy rollback if needed
