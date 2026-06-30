import type { Metadata } from 'next';
import HCMClient from './client';

export const metadata: Metadata = {
  title: 'BCor HCM | HR, Payroll & Attendance Management',
  description:
    'Streamline human capital management with BCor HCM. Payroll, attendance, leave management, recruitment, and compliance for your workforce.',
};

export default function HCMPage() {
  return <HCMClient />;
}
