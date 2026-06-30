import type { Metadata } from 'next';
import FinanceSolutionClient from './client';

export const metadata: Metadata = {
  title: 'BCor Finance Solution | Financial Management ERP',
  description:
    'BCor Finance provides complete accounting, multi-entity budgeting, VAT/tax compliance, and financial reporting for growing businesses.',
};

export default function FinanceSolutionPage() {
  return <FinanceSolutionClient />;
}
