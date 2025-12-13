"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('nav');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomepage = pathname === `/${locale}` || pathname === '/';

  // Navigation items with hash links for homepage, regular links for other pages
  const getNavHref = (section: string) => {
    // Projects section always links to the projects page
    if (section === 'projects') {
      return `/${locale}/projects`;
    }

    if (isHomepage) {
      return `#${section}`;
    }
    return `/${locale}#${section}`;
  };

  // Check if a nav link is active
  const isActive = (path: string) => {
    // Exact match for homepage (don't highlight on sub-pages)
    if (path === `/${locale}`) {
      return pathname === `/${locale}` || pathname === '/' || pathname === `/${locale}/`;
    }
    // For other pages, check exact match or if it's a sub-page
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href={`/${locale}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="Young Tsai Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-gray-900">
              Young Tsai
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-base">
            <a href={`/${locale}`} className={`${isActive(`/${locale}`) ? 'text-slate-blue' : 'text-gray-700'} hover:text-slate-blue transition-colors font-semibold`}>{t('home')}</a>
            <a href={`/${locale}/about`} className={`${isActive(`/${locale}/about`) ? 'text-slate-blue' : 'text-gray-700'} hover:text-slate-blue transition-colors font-semibold`}>{t('about')}</a>
            <a href={getNavHref('projects')} className={`${isActive(`/${locale}/projects`) ? 'text-slate-blue' : 'text-gray-700'} hover:text-slate-blue transition-colors font-semibold`}>{t('projects')}</a>
            <a href={`/${locale}/speaking`} className={`${isActive(`/${locale}/speaking`) ? 'text-slate-blue' : 'text-gray-700'} hover:text-slate-blue transition-colors font-semibold`}>{t('speaking')}</a>
            <a href={`/${locale}/blog`} className={`${isActive(`/${locale}/blog`) ? 'text-slate-blue' : 'text-gray-700'} hover:text-slate-blue transition-colors font-semibold`}>{t('blog')}</a>
            <div className="border-l border-gray-300 pl-4">
              <LanguageSwitcher />
            </div>
            <a
              href="https://calendly.com/young-tsai/ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-coral-orange text-white rounded-lg hover:bg-[#FF7043] transition-all font-medium"
            >
              {t('contact')}
            </a>
          </div>
          {/* Mobile navigation */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-gray-200 mt-4">
            <div className="flex flex-col gap-2">
              <a
                href={`/${locale}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 ${isActive(`/${locale}`) ? 'text-slate-blue bg-gray-50' : 'text-gray-700'} hover:text-slate-blue hover:bg-gray-50 rounded-lg transition-colors font-semibold`}
              >
                {t('home')}
              </a>
              <a
                href={`/${locale}/about`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 ${isActive(`/${locale}/about`) ? 'text-slate-blue bg-gray-50' : 'text-gray-700'} hover:text-slate-blue hover:bg-gray-50 rounded-lg transition-colors font-semibold`}
              >
                {t('about')}
              </a>
              <a
                href={getNavHref('projects')}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 ${isActive(`/${locale}/projects`) ? 'text-slate-blue bg-gray-50' : 'text-gray-700'} hover:text-slate-blue hover:bg-gray-50 rounded-lg transition-colors font-semibold`}
              >
                {t('projects')}
              </a>
              <a
                href={`/${locale}/speaking`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 ${isActive(`/${locale}/speaking`) ? 'text-slate-blue bg-gray-50' : 'text-gray-700'} hover:text-slate-blue hover:bg-gray-50 rounded-lg transition-colors font-semibold`}
              >
                {t('speaking')}
              </a>
              <a
                href={`/${locale}/blog`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 ${isActive(`/${locale}/blog`) ? 'text-slate-blue bg-gray-50' : 'text-gray-700'} hover:text-slate-blue hover:bg-gray-50 rounded-lg transition-colors font-semibold`}
              >
                {t('blog')}
              </a>
              <a
                href="https://calendly.com/young-tsai/ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-coral-orange text-white rounded-lg hover:bg-[#FF7043] transition-all font-medium text-center mt-2"
              >
                {t('contact')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
