import type { Metadata } from 'next';
import ModulesClient from './client';

export const metadata: Metadata = {
  title: 'BCor ERP Modules',
  description:
    "Explore BCor's comprehensive ERP modules: Finance, Trading, Inventory, HCM, Projects, Production, CRM, Property, and more.",
};

export default function ModulesPage() {
  return <ModulesClient />;
}
