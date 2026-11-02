import React from 'react';
import { getAllWorkflows } from '@/lib/serverStore';
import { DashboardView } from '@/components/DashboardView';

export const revalidate = 0;

export default async function DashboardPage() {
  const workflows = await getAllWorkflows();
  return <DashboardView initialWorkflows={workflows} />;
}
