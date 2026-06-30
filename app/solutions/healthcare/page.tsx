import type { Metadata } from 'next';
import HealthcareSolutionClient from './client';

export const metadata: Metadata = {
  title: 'BCor Healthcare Solution | Complete Hospital ERP System',
  description:
    'Integrated ERP for hospitals, clinics, and medical centers. Patient management, billing, pharmacy, lab, HR, and finance — all in one system.',
};

export default function HealthcareSolutionPage() {
  return <HealthcareSolutionClient />;
}
