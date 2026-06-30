import type { Metadata } from 'next';
import POSClient from './client';

export const metadata: Metadata = {
  title: 'BCor POS | Point of Sale System for Retail',
  description:
    'BCor POS delivers fast retail checkout, inventory sync, customer loyalty management, and real-time reporting for retail businesses.',
};

export default function POSPage() {
  return <POSClient />;
}
