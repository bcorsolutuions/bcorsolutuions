import type { Metadata } from 'next';
import ProjectsSolutionClient from './client';

export const metadata: Metadata = {
  title: 'BCor Projects Solution | Project & Resource Management',
  description:
    'Plan, execute, and track projects with BCor Projects. Resource allocation, milestone tracking, budget control, and team collaboration.',
};

export default function ProjectsSolutionPage() {
  return <ProjectsSolutionClient />;
}
