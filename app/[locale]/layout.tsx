import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Navigation from '@/components/Navigation';
import AIChatWidget from '@/components/AIChatWidget';
import { Inter, Noto_Sans_TC, Merriweather } from 'next/font/google';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const notoSansTC = Noto_Sans_TC({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-tc',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.variable} ${notoSansTC.variable} ${merriweather.variable} font-body antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          {/* <AIChatWidget /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return {
    title: locale === 'zh-TW' ? 'Young 的個人網站' : "Young's Personal Site",
    description: locale === 'zh-TW'
      ? '展示專案、部落格和 AI 助理的個人品牌網站'
      : 'Personal brand website showcasing projects, blog, and AI assistant',
  };
}
