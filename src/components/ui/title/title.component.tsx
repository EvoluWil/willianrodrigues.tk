import { SxProps, Theme, Typography } from '@mui/material';
import { TitleContainer } from './title.style';

interface TitleProps {
  title?: string;
  subtitle?: string | JSX.Element;
  sx?: SxProps<Theme>;
}
export const Title: React.FC<TitleProps> = ({ title, subtitle, sx }) => {
  return (
    <TitleContainer sx={sx}>
      {title && (
        <Typography variant="h3" color="primary">
          {title}
        </Typography>
      )}
      {subtitle && <Typography variant="body1">{subtitle}</Typography>}
    </TitleContainer>
  );
};
