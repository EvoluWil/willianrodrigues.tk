import { useTheme } from '@mui/material';
import { FloatingWhatsApp } from 'react-floating-whatsapp-button';
import 'react-floating-whatsapp-button/dist/index.css';
import { translate } from '../../../utils/translate.util';

const WhatsappFloatButton = () => {
  const theme = useTheme();
  return (
    <FloatingWhatsApp
      headerTitle="Whatsapp"
      headerColor={theme.palette.primary.main}
      popupMessage={translate('whatsapp.message')}
      phone="+5512982277740"
      autoOpenTimeout={10000}
      zIndex={20}
    />
  );
};

export default WhatsappFloatButton;
