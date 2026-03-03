import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Navigation from '@/components/Navigation';
import { DM_Sans, Noto_Sans_TC } from 'next/font/google';
import '../globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
});

const notoSansTC = Noto_Sans_TC({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-tc',
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
      <body className={`${dmSans.variable} ${notoSansTC.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const title = locale === 'zh-TW' ? 'Young Tsai — Full-Stack AI 開發者' : 'Young Tsai — Full-Stack AI Developer';
  const description = locale === 'zh-TW'
    ? 'Full-Stack AI 開發者，專精 FastAPI、Next.js 與 GCP 雲端架構，提供接案與技術顧問服務'
    : 'Full-Stack AI Developer specializing in FastAPI, Next.js, and GCP cloud architecture';

  return {
    title,
    description,
    metadataBase: new URL('https://young-tsai.vercel.app'),
    openGraph: {
      title,
      description,
      type: 'website' as const,
      locale: locale === 'zh-TW' ? 'zh_TW' : 'en_US',
      url: '/',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: '/',
      languages: {
        'zh-TW': '/zh-TW',
        'en': '/en',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
