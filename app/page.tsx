import type { Metadata } from 'next';
import HomeClient from './client';

export const metadata: Metadata = {
  title: 'BCor Solutions | #1 ERP Software Provider in Bahrain',
  description:
    'BCor Solutions — Bahrain\'s leading ERP software company. Complete ERP system covering finance, HR, inventory, trading, manufacturing, and 12+ modules. Trusted by 150+ enterprises in Bahrain, GCC, and the Middle East. Request a free demo today.',
  keywords: [
    'ERP solutions Bahrain',
    'ERP software Bahrain',
    'best ERP Bahrain',
    'ERP company Bahrain',
    'enterprise software Bahrain',
    'ERP system Manama',
    'accounting software Bahrain',
    'HR payroll software Bahrain',
    'inventory management Bahrain',
    'BCor ERP',
  ],
};

export default function HomePage() {
  return <HomeClient />;
}
