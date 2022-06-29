export interface Project {
  isApp?: boolean;
  id: number;
  name: string;
  projectUrl?: string;
  repoUrl: string;
  src: string;
  description: string;
  stacks: string[];
  tasks: string[];
  credentials?: string;
}
