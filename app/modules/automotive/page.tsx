import type { Metadata } from 'next';
import AutomotiveModuleClient from './client';

export const metadata: Metadata = {
  title: 'BCor Automotive | Service Center & Dealership Software',
  description:
    'Streamline automotive service bookings, spare parts management, job cards, and customer engagement with BCor Automotive module.',
};

export default function AutomotiveModulePage() {
  return <AutomotiveModuleClient />;
}
