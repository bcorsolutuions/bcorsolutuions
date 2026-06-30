import type { Metadata } from 'next';
import CRMSolutionClient from './client';

export const metadata: Metadata = {
  title: 'BCor CRM Solution | Customer Relationship Management',
  description:
    'BCor CRM helps you manage leads, track sales opportunities, automate follow-ups, and build lasting customer relationships across your entire team.',
};

export default function CRMSolutionPage() {
  return <CRMSolutionClient />;
}
