import type { Metadata } from 'next';
import HCMSolutionClient from './client';

export const metadata: Metadata = {
  title: 'BCor HCM Solution | HR, Payroll & Workforce Management',
  description:
    'Complete HR and payroll management for enterprises. BCor HCM covers recruitment, onboarding, attendance, leave management, and regulatory compliance.',
};

export default function HCMSolutionPage() {
  return <HCMSolutionClient />;
}
