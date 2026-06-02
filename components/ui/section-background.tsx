'use client';

import { cn } from '@/lib/utils';

interface SectionBackgroundProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function SectionBackground({ children, className, ...props }: SectionBackgroundProps) {
  return (
    <section className={cn("section-background", className)} {...props}>
      {children}
    </section>
  );
}