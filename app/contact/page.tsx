import type { Metadata } from 'next';
import ContactClient from './client';

export const metadata: Metadata = {
  title: 'Contact BCor Solutions | ERP Software Bahrain',
  description:
    'Contact BCor Solutions in Manama, Bahrain. Get a free ERP demo, pricing, or support. BMB Tower, Diplomatic Area, Manama, Bahrain. Phone: +97377086230 | Email: info@bcorsolutions.com',
  keywords: [
    'contact ERP company Bahrain',
    'BCor Solutions contact',
    'ERP demo Bahrain',
    'ERP pricing Bahrain',
    'BCor Manama Bahrain',
  ],
};

export default function ContactPage() {
  return <ContactClient />;
}
