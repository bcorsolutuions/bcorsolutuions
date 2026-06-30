import type { Metadata } from 'next';
import ContactClient from './client';

export const metadata: Metadata = {
  title: 'Contact BCor Solutions',
  description:
    'Get in touch with the BCor Solutions team. Located in Manama, Bahrain. Email: info@bcorsolutions.com | Phone: +97377086230',
};

export default function ContactPage() {
  return <ContactClient />;
}
