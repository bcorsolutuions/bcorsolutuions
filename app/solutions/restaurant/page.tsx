import type { Metadata } from 'next';
import RestaurantClient from './client';

export const metadata: Metadata = {
  title: 'BCor Restaurant | Restaurant & Café Management System',
  description:
    'From table to kitchen to cashier — BCor Restaurant handles orders, KDS, menu pricing, delivery management, recipe costing, and analytics for food businesses.',
};

export default function RestaurantPage() {
  return <RestaurantClient />;
}
