import type { Metadata } from 'next';
import TradingClient from './client';

export const metadata: Metadata = {
  title: 'BCor Trading Module | Sales & Procurement Management',
  description:
    "Manage sales, procurement, and vendor relationships efficiently with BCor's Trading module. Integrated analytics, logistics, and order management.",
};

export default function TradingPage() {
  return <TradingClient />;
}
