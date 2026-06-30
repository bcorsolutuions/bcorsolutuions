import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bcorsolutions.com'),
  title: {
    default: 'BCor Solutions | ERP Software in Bahrain & Middle East',
    template: '%s | BCor Solutions Bahrain',
  },
  description:
    'BCor Solutions is a leading ERP software provider in Bahrain. Complete ERP system for finance, HR, inventory, trading, and manufacturing. Serving 150+ enterprises across Bahrain, GCC, and the Middle East.',
  keywords: [
    'ERP solutions Bahrain',
    'ERP software Bahrain',
    'enterprise resource planning Bahrain',
    'ERP system Bahrain',
    'accounting software Bahrain',
    'HR software Bahrain',
    'inventory management Bahrain',
    'ERP Manama',
    'ERP GCC',
    'Middle East ERP',
    'BCor Solutions',
    'business management software Bahrain',
    'ERP company Bahrain',
    'cloud ERP Bahrain',
  ],
  openGraph: {
    type: 'website',
    siteName: 'BCor Solutions',
    title: 'BCor Solutions | Leading ERP Software Provider in Bahrain',
    description:
      'Bahrain\'s trusted ERP software for finance, HR, inventory, trading, and manufacturing. 150+ enterprises across Bahrain and the Middle East rely on BCor.',
    images: [
      {
        url: '/BCorLogoLatest4.png',
        width: 1200,
        height: 630,
        alt: 'BCor Solutions â€” Enterprise ERP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BCor Solutions | Leading ERP Software in Bahrain',
    description:
      "Bahrain's trusted ERP for finance, HR, inventory, trading & manufacturing. 150+ enterprises across Bahrain and the Middle East.",
    images: ['/BCorLogoLatest4.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BCor Solutions',
  url: 'https://www.bcorsolutions.com',
  logo: 'https://www.bcorsolutions.com/BCorLogoLatest4.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+97377086230',
    email: 'info@bcorsolutions.com',
    contactType: 'customer support',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'BMB Tower, Diplomatic Area',
    addressLocality: 'Manama',
    addressCountry: 'BH',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
