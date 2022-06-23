import { styled } from '@mui/material';

interface LanguageIconProps {
  locale: string;
}
export const LanguageIcon = styled('img')<LanguageIconProps>`
  height: 20px;
  width: 20px;
  object-fit: cover;
  object-position: ${({ locale }) => (locale === 'pt' ? '0px' : '-40px')} 0px;
`;
