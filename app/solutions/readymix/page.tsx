import type { Metadata } from 'next';
import ReadymixClient from './client';

export const metadata: Metadata = {
  title: 'BCor Readymix | Concrete Production & Delivery Management',
  description:
    'End-to-end ready-mix concrete management — batching plant control, delivery scheduling, quality assurance, and customer order tracking.',
};

export default function ReadymixPage() {
  return <ReadymixClient />;
}
