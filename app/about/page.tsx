import type { Metadata } from 'next';
import AboutClient from './client';

export const metadata: Metadata = {
  title: 'About BCor Solutions',
  description:
    'Learn about BCor Solutions — our mission, vision, and values as a leading ERP software provider in the Middle East.',
};

export default function AboutPage() {
  return <AboutClient />;
}
