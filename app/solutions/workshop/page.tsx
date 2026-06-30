import type { Metadata } from 'next';
import WorkshopClient from './client';

export const metadata: Metadata = {
  title: 'BCor Workshop | Repair Shop & Maintenance Management',
  description:
    'Manage job cards, spare parts, technician assignments, and customer billing for repair shops and maintenance businesses with BCor Workshop.',
};

export default function WorkshopPage() {
  return <WorkshopClient />;
}
