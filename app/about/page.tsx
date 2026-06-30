import type { Metadata } from 'next';
import AboutClient from './client';

export const metadata: Metadata = {
  title: 'About BCor Solutions | ERP Company in Bahrain',
  description:
    'BCor Solutions is a Bahrain-based ERP software company with a mission to empower enterprises across the Middle East. Learn about our vision, values, and team in Manama, Bahrain.',
  keywords: [
    'ERP company Bahrain',
    'BCor Solutions about',
    'ERP provider Manama',
    'enterprise software company Bahrain',
    'Middle East ERP company',
  ],
};

export default function AboutPage() {
  return <AboutClient />;
}
