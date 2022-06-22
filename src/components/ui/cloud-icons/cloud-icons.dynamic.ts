import dynamic from 'next/dynamic';

export const CloudIcons = dynamic(() => import('./cloud-icons.component'), {
  ssr: false
});
