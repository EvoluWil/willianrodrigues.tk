import { Typography } from '@mui/material';
import { ContactCardContainer, Icon, MeetIcon } from './contact-card.styles';

interface ContactCardProps {
  icon: string;
  title: string;
  message: string;
  onClick?: () => void;
}
export const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  message,
  onClick
}) => {
  return (
    <ContactCardContainer onClick={onClick}>
      <Typography zIndex={1} color="primary" variant="h4" component="p" mb={2}>
        {title}
      </Typography>
      <Typography zIndex={1} color="text.secondary">
        {message}
      </Typography>
      {icon === 'meet' ? (
        <MeetIcon title="Google-Meet" />
      ) : (
        <Typography variant="h1" fontSize={15}>
          <Icon className={icon} />
        </Typography>
      )}
    </ContactCardContainer>
  );
};
