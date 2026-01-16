"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('nav');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links configuration
  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/projects`, label: t('projects') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/speaking`, label: t('speaking') },
  ];

  // Check if a nav link is active
  const isActive = (path: string) => {
    // Exact match for homepage (don't highlight on sub-pages)
    if (path === `/${locale}`) {
      return pathname === `/${locale}` || pathname === '/' || pathname === `/${locale}/`;
    }
    // For other pages, check exact match or if it's a sub-page
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  // Language switcher logic
  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|zh-TW)/, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  // Focus trap for mobile menu accessibility
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Focus first link when menu opens
      const firstLink = document.querySelector('[data-mobile-menu] a');
      if (firstLink) (firstLink as HTMLElement).focus();

      // Handle Escape key to close menu
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-glass-lg bg-white/80 border-b border-white/20 shadow-soft-md h-20 md:h-24">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="font-sans font-black text-2xl md:text-3xl bg-gradient-purple-orange bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
        >
          Young
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans font-semibold text-base pb-1 transition-colors duration-200 ${
                isActive(link.href)
                  ? 'text-purple-primary border-b-2 border-purple-primary'
                  : 'text-gray-700 hover:text-purple-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <button
            onClick={() => switchLocale(locale === 'zh-TW' ? 'en' : 'zh-TW')}
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/50 border border-purple-primary/20 hover:bg-purple-primary text-gray-700 hover:text-white font-sans font-semibold text-sm transition-all duration-200 flex items-center justify-center shadow-soft"
            aria-label={locale === 'zh-TW' ? 'Switch to English' : '切換到繁體中文'}
          >
            {locale === 'zh-TW' ? 'EN' : '中'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-white/50 border border-purple-primary/20 hover:bg-purple-primary hover:text-white text-gray-700 transition-colors duration-200 flex items-center justify-center text-xl font-bold shadow-soft"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 backdrop-blur-glass-lg bg-white/95 border-b border-white/20 shadow-soft-lg pt-24 px-6"
          onClick={(e) => {
            // Close menu if clicking on backdrop (not on links)
            if (e.target === e.currentTarget) {
              setIsMobileMenuOpen(false);
            }
          }}
        >
          <div className="flex flex-col gap-6" data-mobile-menu>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-sans font-black text-3xl transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-purple-primary'
                    : 'text-gray-900 hover:text-purple-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher (Mobile) */}
            <button
              onClick={() => {
                switchLocale(locale === 'zh-TW' ? 'en' : 'zh-TW');
                setIsMobileMenuOpen(false);
              }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/50 border border-purple-primary/20 hover:bg-purple-primary text-gray-700 hover:text-white font-sans font-semibold text-sm transition-all duration-200 flex items-center justify-center shadow-soft"
              aria-label={locale === 'zh-TW' ? 'Switch to English' : '切換到繁體中文'}
            >
              {locale === 'zh-TW' ? 'EN' : '中'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
