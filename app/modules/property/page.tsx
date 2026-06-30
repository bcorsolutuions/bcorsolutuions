import type { Metadata } from 'next';
import PropertyClient from './client';

export const metadata: Metadata = {
  title: 'BCor Property | Real Estate & Lease Management',
  description:
    'Simplify property management with BCor. Lease tracking, rent collection, maintenance scheduling, and tenant management for real estate operations.',
};

export default function PropertyPage() {
  return <PropertyClient />;
}
