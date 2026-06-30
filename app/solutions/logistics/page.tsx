import type { Metadata } from 'next';
import LogisticsClient from './client';

export const metadata: Metadata = {
  title: 'BCor Logistics | Fleet & Delivery Management',
  description:
    'Manage fleet operations, delivery routing, driver tracking, and warehouse logistics with BCor Logistics — built for distribution and transport companies.',
};

export default function LogisticsPage() {
  return <LogisticsClient />;
}
