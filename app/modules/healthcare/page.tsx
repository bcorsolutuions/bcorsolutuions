import type { Metadata } from 'next';
import HealthcareModuleClient from './client';

export const metadata: Metadata = {
  title: 'BCor Healthcare Module | Hospital & Clinic Management System',
  description:
    'Manage patient records, appointments, billing, and clinical workflows with BCor Healthcare — purpose-built for hospitals, clinics, and medical centers.',
};

export default function HealthcareModulePage() {
  return <HealthcareModuleClient />;
}
