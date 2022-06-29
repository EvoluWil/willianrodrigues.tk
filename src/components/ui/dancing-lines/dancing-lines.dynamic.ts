import dynamic from 'next/dynamic';

export const DancingLines = dynamic(() => import('./dancing-lines.component'), {
  ssr: false
});
