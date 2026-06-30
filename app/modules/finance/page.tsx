import type { Metadata } from 'next';
import FinanceClient from './client';

export const metadata: Metadata = {
  title: 'BCor Finance Module | Accounting & Financial Management',
  description:
    "Take full control of your finances with BCor's Finance module. General ledger, AP/AR automation, dynamic budgeting, VAT compliance, and real-time dashboards.",
};

export default function FinancePage() {
  return <FinanceClient />;
}
