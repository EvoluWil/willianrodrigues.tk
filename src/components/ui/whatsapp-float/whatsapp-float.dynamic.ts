import dynamic from 'next/dynamic';

export const WhatsappFloatButton = dynamic(
  () => import('./whatsapp-float.component'),
  {
    ssr: false
  }
);
