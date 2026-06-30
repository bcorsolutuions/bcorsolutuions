import type { Metadata } from 'next';
import ProductionClient from './client';

export const metadata: Metadata = {
  title: 'BCor Production | Manufacturing & Shop Floor Control',
  description:
    'Support manufacturing operations with BCor Production. Work orders, BOM management, shop floor control, quality tracking, and production scheduling.',
};

export default function ProductionPage() {
  return <ProductionClient />;
}
