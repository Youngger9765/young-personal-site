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
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 rounded text-sm transition-colors ${
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
        className={`px-2 py-1 rounded text-sm transition-colors ${
          locale === 'zh-TW'
            ? 'text-purple-600 font-semibold'
            : 'text-gray-600 hover:text-purple-600'
        }`}
        aria-label="切換到繁體中文"
      >
        繁中
      </button>
    </div>
  );
}
