import type { Metadata } from 'next';
import ProjectsClient from './client';

export const metadata: Metadata = {
  title: 'BCor Projects | Project Planning & Team Collaboration',
  description:
    'Deliver projects on time and within budget with BCor Projects. Task tracking, resource planning, milestone management, and team collaboration tools.',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
