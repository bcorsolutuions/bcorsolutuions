import type { Metadata } from 'next';
import FixedAssetSolutionClient from './client';

export const metadata: Metadata = {
  title: 'BCor Fixed Asset Solution | Enterprise Asset Management',
  description:
    'Track and manage fixed assets across your organization with BCor. Depreciation scheduling, maintenance records, and disposal management.',
};

export default function FixedAssetSolutionPage() {
  return <FixedAssetSolutionClient />;
}
