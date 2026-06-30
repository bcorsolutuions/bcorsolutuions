import type { Metadata } from 'next';
import VanSalesClient from './client';

export const metadata: Metadata = {
  title: 'BCor Van Sales | Mobile Sales Force Automation',
  description:
    'BCor Van Sales automates route planning, mobile order-taking, on-van inventory management, payment collection, and real-time sync for distribution teams.',
};

export default function VanSalesPage() {
  return <VanSalesClient />;
}
