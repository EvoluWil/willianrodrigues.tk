import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from '../components/display/footer/footer.component';
import { NavBar } from '../components/display/nav-bar/nav-bar.component';
import { WhatsappFloatButton } from '../components/ui/whatsapp-float/whatsapp-float.dynamic';
import { Global } from '../global/styles/globals';
import theme from '../global/styles/theme';
import { useI18n } from '../hook/i18n.hook';
import { AppContainer } from '../styles/_app.styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { i18nConfig } = useI18n();
  i18nConfig();
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <ToastContainer autoClose={5000} />
      <AppContainer>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
        <WhatsappFloatButton />
      </AppContainer>
    </ThemeProvider>
  );
};

export default MyApp;
