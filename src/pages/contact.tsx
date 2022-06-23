import { Box, Container, Grid } from '@mui/material';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { CalendlyModal } from '../components/display/modal/calendly/calendly.modal';
import { ContactModal } from '../components/display/modal/contact/contact.modal';
import { ContactCard } from '../components/ui/contact-card/contact-card.component';
import { Title } from '../components/ui/title/title.component';
import { translate } from '../utils/translate.util';

const Contact = () => {
  const [calendly, setCalendly] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <>
      <Head>
        <title>{translate('contact.titleHead')} | Willian Rodrigues</title>
      </Head>
      <CalendlyModal open={calendly} setOpen={() => setCalendly(false)} />
      <ContactModal open={contact} setOpen={() => setContact(false)} />
      <Box
        sx={{
          py: 4,
          bgcolor: theme => theme.palette.background.default
        }}
      >
        <Container>
          <Grid
            container
            sx={{
              pb: 4
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Title
                title={translate('contact.title')}
                subtitle={translate('contact.subtitle')}
              />
            </Grid>
            <Grid
              item
              md={6}
              display={{
                md: 'flex',
                xs: 'none'
              }}
            >
              <img
                src="/images/contact/contact.png"
                alt={translate('contact.titleHead')}
                width={'80%'}
              />
            </Grid>
          </Grid>
          <Box
            display="flex"
            flexDirection={{ md: 'row', xs: 'column' }}
            alignItems="center"
            gap={2}
            justifyContent="space-evenly"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5512982277740"
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <ContactCard
                icon="fa fa-whatsapp"
                title="WhatsApp"
                message={translate('contact.whatsapp.subtitle')}
              />
            </a>
            <ContactCard
              icon="fa fa-envelope"
              title="Email"
              message={translate('contact.email.subtitle')}
              onClick={() => setContact(true)}
            />
            <ContactCard
              onClick={() => setCalendly(true)}
              icon="meet"
              title="Google Meet"
              message={translate('contact.meet.subtitle')}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 * 7 // 7 dias
  };
};
