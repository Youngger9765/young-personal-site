"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useLocale, useTranslations } from 'next-intl';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('nav');
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (typeof window !== "undefined") {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const switchLocale = (newLocale: string) => {
    // Get current path without locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(en|zh-TW)/, '') || '/';
    // Navigate to same path with new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/projects`, label: t('projects') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/about`, label: t('about') },
  ];

  // Hide navigation on homepage (it has its own custom nav)
  if (pathname === `/${locale}` || pathname === '/') {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href={`/${locale}`} className="text-2xl font-bold">
            Young
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-blue-600 transition-colors ${
                  pathname === item.href ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-gray-300 dark:border-gray-600 pl-4">
              <button
                onClick={() => switchLocale('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === 'en'
                    ? 'text-purple-600 font-semibold'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => switchLocale('zh-TW')}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === 'zh-TW'
                    ? 'text-purple-600 font-semibold'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
                aria-label="切換到繁體中文"
              >
                繁中
              </button>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? "🌙" : "☀️"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Switcher Mobile */}
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => switchLocale('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === 'en'
                    ? 'text-purple-600 font-semibold'
                    : 'text-gray-600'
                }`}
              >
                EN
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => switchLocale('zh-TW')}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === 'zh-TW'
                    ? 'text-purple-600 font-semibold'
                    : 'text-gray-600'
                }`}
              >
                繁中
              </button>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? "🌙" : "☀️"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                    pathname === item.href ? "text-blue-600 font-semibold bg-gray-50 dark:bg-gray-800" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
