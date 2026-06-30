import type { Metadata } from 'next';
import HomeClient from './client';

export const metadata: Metadata = {
  title: 'BCor Solutions | Enterprise ERP Software',
  description:
    'Complete ERP software for finance, HR, inventory, trading, manufacturing, and more. Trusted by 150+ enterprises across the Middle East.',
};

export default function HomePage() {
  return <HomeClient />;
}
