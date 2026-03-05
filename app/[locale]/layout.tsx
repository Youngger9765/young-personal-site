import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Navigation from '@/components/Navigation';
import StructuredData, { getPersonSchema, getWebSiteSchema } from '@/components/StructuredData';
import { DM_Sans, Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google';
import '../globals.css';

const SITE_URL = 'https://young-tsai.vercel.app';

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

const notoSerifTC = Noto_Serif_TC({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif-tc',
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
      <head>
        <StructuredData data={getPersonSchema(locale)} />
        <StructuredData data={getWebSiteSchema()} />
      </head>
      <body className={`${dmSans.variable} ${notoSansTC.variable} ${notoSerifTC.variable} font-sans antialiased`}>
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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const isZh = locale === 'zh-TW';
  const siteName = 'Young Tsai';

  const title = isZh
    ? 'Young Tsai | AI 產品顧問 & Full-Stack 開發者'
    : 'Young Tsai | AI Product Consultant & Full-Stack Developer';
  const description = isZh
    ? 'AI 產品顧問與 Full-Stack 開發者，專精 FastAPI、Next.js 與 GCP 雲端架構。提供 AI 產品開發、技術諮詢與企業培訓服務。'
    : 'AI Product Consultant and Full-Stack Developer specializing in FastAPI, Next.js, and GCP cloud architecture. Offering AI product development, consulting, and corporate training.';

  return {
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: isZh ? 'zh_TW' : 'en_US',
      alternateLocale: isZh ? 'en_US' : 'zh_TW',
      siteName,
      url: `/${locale}`,
      images: [
        {
          url: '/images/young.jpg',
          width: 800,
          height: 800,
          alt: isZh ? 'Young Tsai - AI 產品顧問' : 'Young Tsai - AI Product Consultant',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/young.jpg'],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'zh-TW': '/zh-TW',
        en: '/en',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  };
}
