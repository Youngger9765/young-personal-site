"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Get current path without locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(en|zh-TW)/, '') || '/';
    // Navigate to same path with new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="relative inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
      {/* Sliding background indicator */}
      <div
        className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] bg-gradient-to-r from-slate-blue to-coral-orange rounded-full transition-all duration-300 ease-in-out ${
          locale === 'en' ? 'left-1' : 'left-[calc(50%+0.125rem)]'
        }`}
        aria-hidden="true"
      />

      {/* EN Button */}
      <button
        onClick={() => switchLocale('en')}
        className={`relative z-10 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
          locale === 'en'
            ? 'text-white'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
        aria-label="Switch to English"
        aria-pressed={locale === 'en'}
      >
        EN
      </button>

      {/* 繁中 Button */}
      <button
        onClick={() => switchLocale('zh-TW')}
        className={`relative z-10 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
          locale === 'zh-TW'
            ? 'text-white'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
        aria-label="切換到繁體中文"
        aria-pressed={locale === 'zh-TW'}
      >
        繁中
      </button>
    </div>
  );
}
