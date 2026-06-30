import type { Metadata } from 'next';
import TradingSolutionClient from './client';

export const metadata: Metadata = {
  title: 'BCor Trading Solution | Distribution & Trade Management ERP',
  description:
    'Complete trading ERP for distribution businesses — purchase orders, sales orders, pricing management, supplier tracking, and real-time analytics.',
};

export default function TradingSolutionPage() {
  return <TradingSolutionClient />;
}
