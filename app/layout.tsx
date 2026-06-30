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
  metadataBase: new URL('https://bcorsolutions.com'),
  title: {
    default: 'BCor Solutions | Enterprise ERP Software',
    template: '%s | BCor Solutions',
  },
  description:
    'BCor Solutions delivers complete ERP software for finance, HR, inventory, trading, manufacturing, and more. Trusted by 150+ enterprises across the Middle East.',
  keywords: [
    'ERP software',
    'enterprise resource planning',
    'BCor',
    'accounting software',
    'HR management',
    'inventory management',
    'Middle East ERP',
    'Bahrain ERP',
  ],
  openGraph: {
    type: 'website',
    siteName: 'BCor Solutions',
    title: 'BCor Solutions | Enterprise ERP Software',
    description:
      'Complete ERP software for finance, HR, inventory, trading, manufacturing, and more. Trusted by 150+ enterprises across the Middle East.',
    images: [
      {
        url: '/BCorLogoLatest4.png',
        width: 1200,
        height: 630,
        alt: 'BCor Solutions — Enterprise ERP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BCor Solutions | Enterprise ERP Software',
    description:
      'Complete ERP software for finance, HR, inventory, trading, manufacturing, and more.',
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
  url: 'https://bcorsolutions.com',
  logo: 'https://bcorsolutions.com/BCorLogoLatest4.png',
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
