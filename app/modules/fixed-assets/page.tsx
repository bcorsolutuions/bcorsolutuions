import type { Metadata } from 'next';
import FixedAssetsClient from './client';

export const metadata: Metadata = {
  title: 'BCor Fixed Assets | Asset Lifecycle & Depreciation Management',
  description:
    'Manage fixed assets from acquisition to disposal with BCor. Automated depreciation, maintenance scheduling, and compliance reporting.',
};

export default function FixedAssetsPage() {
  return <FixedAssetsClient />;
}
