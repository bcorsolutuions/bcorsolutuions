import type { Metadata } from 'next';
import CRMClient from './client';

export const metadata: Metadata = {
  title: 'BCor CRM | Customer Relationship Management',
  description:
    'Build lasting customer relationships with BCor CRM. Lead management, sales pipeline tracking, and customer interaction history in one platform.',
};

export default function CRMPage() {
  return <CRMClient />;
}
