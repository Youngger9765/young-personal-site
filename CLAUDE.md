# CLAUDE.md - Personal Site Development Guide

---

## 🎯 Core Principle: Quality with Speed

**What we're building:**
- ✅ Personal portfolio site (Next.js 15 + TypeScript)
- ✅ Bilingual content (Chinese/English)
- ✅ Production-ready, deployed on Vercel
- ✅ Professional presentation

**What this is NOT:**
- ❌ Prototype/MVP
- ❌ Backend API project
- ❌ Over-engineered solution

---

## ⚡ Development Workflow

```
1. Plan changes (define requirements)
   ↓
2. Implement features (with TypeScript)
   ↓
3. Test manually (visual + functional)
   ↓
4. Format code (automatic with tools)
   ↓
5. Commit (with meaningful messages)
   ↓
6. Push → Deploy to Vercel
```

**Time allocation:**
- Development: 70%
- Testing/QA: 20%
- Refactoring: 10%

---

## 🔧 Tech Stack

### Core Technologies
- **Next.js 15**: App Router, React Server Components
- **React 19**: Latest features
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **next-intl**: i18n (Chinese/English)
- **Framer Motion**: Animations

### Development Tools
- **ESLint**: Code quality
- **Prettier**: Code formatting (if needed)
- **TypeScript Compiler**: Type checking
- **Vercel**: Deployment platform

---

## 📦 Git Workflow

### Branch Strategy
- `main`: Production (deployed to Vercel)
- Feature branches: For new features/fixes

### Commit Principles
1. **Functional code** → Commit when it works
2. **Clean formatting** → Ensure consistent style
3. **Meaningful messages** → Describe what changed

### Commit Message Format
```
feat: add Duotopia project with anonymized data
fix: center-align About page text content
docs: update project documentation
style: improve image compression for performance
refactor: extract image mapping to separate object
```

### Commit & Push Flow
```bash
# 1. Check current branch
git branch --show-current

# 2. Stage changes
git add .

# 3. Commit with meaningful message
git commit -m "feat: add new project to portfolio"

# 4. Push to remote
git push

# Vercel automatically deploys on push to main
```

---

## 🧪 Testing Strategy

### Required Testing
1. **Visual Testing**
   - Check all pages render correctly
   - Test on different screen sizes (responsive)
   - Verify bilingual content (zh-TW/en)
   - Ensure animations work smoothly

2. **Functional Testing**
   - Navigation links work
   - External links open correctly
   - Images load properly
   - Forms submit (if any)

### Manual Testing Checklist
```
Before each push:
✅ Home page displays correctly
✅ Projects gallery shows all items
✅ Speaking events page loads
✅ About page renders properly
✅ Navigation works on all pages
✅ Language switcher functions
✅ Mobile responsive design works
✅ Images are optimized and load fast
```

### Optional (For larger features)
- Component testing (Jest/Vitest)
- E2E testing (Playwright)

---

## 🚀 Deployment

### Vercel Auto-Deployment
- Push to `main` → Automatic deployment
- Preview deployments for branches
- Environment variables in Vercel dashboard

### Health Check
After deployment:
1. ✅ Site loads at production URL
2. ✅ All images display correctly
3. ✅ Navigation works
4. ✅ No console errors
5. ✅ Both languages work

---

## 💡 AI Collaboration Principles

### Human Responsibilities
- Define requirements clearly
- Review code changes
- Make design decisions
- Approve final implementations
- Update content (translations, project details)

### AI Responsibilities
- Generate code implementations
- Suggest optimizations
- Create documentation
- Format and organize code
- Handle repetitive tasks

### Collaboration Flow
```
1. Human: Define what needs to be done
2. AI: Implement the solution
3. Human: Review and test
4. AI: Refine based on feedback
5. Human: Approve and commit
```

---

## 🤖 Agent-Manager System

### Overview
This project uses a **specialized agent system** to handle complex development tasks efficiently. When you encounter professional or complex problems, the AI will automatically delegate to specialized agents using the `Task` tool.

### When Agent-Manager is Auto-Invoked

**Complex Development Tasks:**
- Adding new features across multiple files
- Implementing new pages or sections
- Bulk content updates (multiple projects, events)
- Complex layout modifications
- Multi-language content synchronization

**Specialized Operations:**
- Image optimization and compression
- Translation management
- Component refactoring
- Performance optimization
- Accessibility improvements

### Available Specialized Agents

**general-purpose Agent:**
- Handles complex multi-step tasks
- Coordinates file searches and updates
- Manages bulk operations
- Research and codebase analysis

**Future Agents (Planned):**
- `translation-manager`: Bilingual content sync
- `image-optimizer`: Automatic image compression
- `component-builder`: React component generation
- `style-manager`: Tailwind CSS optimization

### How It Works

```yaml
User Request → Agent-Manager Analysis → Specialized Agent

Examples:
  "Add 3 new projects" → general-purpose agent
  "Optimize all images" → image-optimizer agent
  "Update all translations" → translation-manager agent
  "Fix responsive design" → style-manager agent
```

### When Agent-Manager is Used

**✅ AUTO-INVOKED for:**
- Multi-file modifications
- Complex feature additions
- Bulk content operations
- System-wide changes

**❌ DIRECT handling for:**
- Simple text edits
- Single translation updates
- Minor styling tweaks
- Quick bug fixes

### Example Workflow

```
User: "Add Duotopia project with images and translations"

Agent-Manager Analysis:
🎯 Task: Add new project with complete setup
📊 Complexity: HIGH (multiple files, images, translations)
🤖 Agent: general-purpose
⏱️ Steps:
  1. Add project to gallery
  2. Create translation entries (zh-TW, en)
  3. Add and optimize banner image
  4. Update image mappings
  5. Test both language versions

[Invoking general-purpose agent...]
```

### Benefits of Agent System

1. **Context Preservation**: Main conversation stays clean
2. **Specialized Expertise**: Each agent optimized for specific tasks
3. **Parallel Processing**: Multiple agents can work simultaneously
4. **Quality Assurance**: Agents follow strict standards
5. **Efficiency**: Faster completion of complex tasks

### User Guidelines

**When you need help:**
- Describe your requirement clearly
- Mention if it's complex or urgent
- Agent-Manager will auto-route to appropriate specialist
- You don't need to manually select agents

**For complex/professional problems:**
- Just ask naturally
- Agent-Manager handles the delegation
- Receive comprehensive solutions
- Maintain consistent quality

---

## 📝 Content Management

### Translation Files
- `messages/zh-TW.json`: Chinese content
- `messages/en.json`: English content

### Adding New Content
1. Define in both language files
2. Use `useTranslations` hook in components
3. Test both language versions
4. Ensure consistency

### Image Management
- Store in `public/images/`
- Optimize before adding (compress large images)
- Use Next.js `Image` component for optimization
- Use descriptive alt text

---

## 🎨 Design Principles

### Color Palette
- `slate-blue`: Primary brand color
- `coral-orange`: Accent color
- `warm-cream`: Background accent
- Gradients for visual interest

### Typography
- Clear hierarchy
- Readable font sizes
- Consistent spacing
- Center-aligned hero sections

### Layout
- Responsive design (mobile-first)
- Consistent spacing (Tailwind classes)
- Smooth animations (Framer Motion)
- Professional appearance

---

## 🔒 Non-Negotiable Rules

1. **❌ DO NOT commit broken code**
   - Always test before committing
   - Ensure site builds successfully

2. **✅ MUST maintain bilingual content**
   - Every new feature needs both zh-TW and en translations
   - Keep translation files in sync

3. **✅ MUST optimize images**
   - Compress large images before adding
   - Use appropriate formats (JPG for photos, PNG for logos)
   - Typical target: < 500KB per image

4. **✅ MUST test responsive design**
   - Check mobile, tablet, desktop views
   - Ensure all content is accessible

5. **❌ DO NOT expose sensitive information**
   - Anonymize company names where needed (e.g., "知名教育平台")
   - Remove any API keys or credentials
   - Keep personal contact info minimal

6. **✅ MUST maintain consistent styling**
   - Follow existing Tailwind patterns
   - Keep component structure consistent
   - Use established color scheme

---

## 📊 Quality Standards

### Code Quality
- TypeScript types properly defined
- No console errors in browser
- Clean, readable code structure
- Consistent naming conventions

### Content Quality
- Professional language
- Accurate project descriptions
- Proper grammar in both languages
- No placeholder text in production

### Performance
- Fast page loads (< 3 seconds)
- Optimized images
- Minimal bundle size
- Good Lighthouse scores

---

## 🔄 Common Tasks

### Adding a New Project
1. Update `messages/zh-TW.json` and `messages/en.json`
2. Add to project array in `app/[locale]/projects/page.tsx`
3. Add banner image to `public/images/`
4. Update image mapping in gallery
5. Test both languages
6. Commit and push

### Adding a Speaking Event
1. Update translation files
2. Add to events array in `app/[locale]/speaking/page.tsx`
3. Add to valid slugs in detail page
4. Add event image if available
5. Add media coverage if applicable
6. Test and deploy

### Updating About Page
1. Modify translation files
2. Test text alignment and formatting
3. Ensure readability on all devices
4. Push changes

---

## 📈 Future Enhancements (Optional)

- Blog integration
- Contact form
- Newsletter signup
- Analytics integration
- SEO optimization
- Performance monitoring

---

## 🆘 Troubleshooting

### Build Fails
- Check TypeScript errors: `npm run build`
- Verify all images exist
- Check translation keys match

### Images Not Loading
- Ensure files are in `public/images/`
- Check file names match code references
- Verify Next.js Image component usage

### Translations Missing
- Check both language files have the key
- Verify `useTranslations` usage
- Restart dev server if needed

---

**Remember: This is a professional portfolio site. Quality and presentation matter.**

**Version**: v1.0 (Personal Site)
**Last Updated**: 2025-12-14
