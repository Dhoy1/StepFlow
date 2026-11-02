import React from 'react';
import { notFound } from 'next/navigation';
import { getWorkflowById } from '@/lib/serverStore';
import { GuideViewer } from './GuideViewer';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const workflow = await getWorkflowById(params.id);
  if (!workflow) {
    return { title: 'Panduan Tidak Ditemukan - StepFlow' };
  }
  return {
    title: `${workflow.title} - StepFlow Tutorial`,
    description: workflow.description || 'Panduan langkah demi langkah interaktif.'
  };
}

export default async function GuidePage({
  params
}: {
  params: { id: string };
}) {
  const workflow = await getWorkflowById(params.id);

  if (!workflow) {
    notFound();
  }

  return <GuideViewer workflow={workflow} />;
}

