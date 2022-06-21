export interface Project {
  id: number;
  name: string;
  projectUrl?: string;
  repoUrl: string;
  src: string;
  description: string;
  stacks: string[];
  tasks: string[];
}
