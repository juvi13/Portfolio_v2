import { Code, Database, Dna, GitMerge, LayoutTemplate, MonitorSmartphone, Palette, PenTool, Pilcrow, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Skill = {
  name: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  category: string;
};

export const skills: Skill[] = [
  { name: 'HTML5', icon: Code, category: 'Frontend' },
  { name: 'CSS3', icon: Palette, category: 'Frontend' },
  { name: 'JavaScript', icon: Code, category: 'Frontend' },
  { name: 'TypeScript', icon: Pilcrow, category: 'Frontend' },
  { name: 'React', icon: Dna, category: 'Frontend' },
  { name: 'Next.js', icon: LayoutTemplate, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: Palette, category: 'Frontend' },
  { name: 'Node.js', icon: Server, category: 'Backend' },
  { name: 'Firebase', icon: Database, category: 'Backend' },
  { name: 'PostgreSQL', icon: Database, category: 'Backend' },
  { name: 'Git & GitHub', icon: GitMerge, category: 'Tools' },
  { name: 'Figma', icon: PenTool, category: 'Tools' },
  { name: 'Responsive Design', icon: MonitorSmartphone, category: 'Concepts' },
];
