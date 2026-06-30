import type { Metadata } from 'next';
import InventoryClient from './client';

export const metadata: Metadata = {
  title: 'BCor Inventory | Stock Control & Warehouse Management',
  description:
    'Optimize stock control and warehouse operations with BCor Inventory. Real-time tracking, batch management, multi-location support, and automated reordering.',
};

export default function InventoryPage() {
  return <InventoryClient />;
}
