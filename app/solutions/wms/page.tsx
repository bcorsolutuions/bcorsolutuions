import type { Metadata } from 'next';
import WMSClient from './client';

export const metadata: Metadata = {
  title: 'BCor WMS | Warehouse Management System',
  description:
    'BCor WMS manages receiving, put-away, picking, packing, stock counting, and multi-warehouse operations with barcode, QR, and RFID support.',
};

export default function WMSPage() {
  return <WMSClient />;
}
