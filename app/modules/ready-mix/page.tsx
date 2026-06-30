import type { Metadata } from 'next';
import ReadyMixClient from './client';

export const metadata: Metadata = {
  title: 'BCor Ready Mix | Concrete Batching & Delivery Management',
  description:
    'Manage concrete batching, delivery scheduling, and quality control with BCor Ready Mix module. Built for concrete production plants.',
};

export default function ReadyMixPage() {
  return <ReadyMixClient />;
}
