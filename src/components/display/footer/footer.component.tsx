import { Box, Container, Fab, Link, Typography } from '@mui/material/';
import { useRouter } from 'next/router';
import { translate } from '../../../utils/translate.util';
import { SocialButton } from '../../ui/social-button/social-buttom.component';

export const Footer = () => {
  const { route, push } = useRouter();

  const handleHome = () => {
    push('/');
  };

  const handleTop = () => {
    push(route);
  };

  return (
    <Box
      component="footer"
      sx={{ py: 3, bgcolor: theme => theme.palette.grey[900], mt: 'auto' }}
    >
      <Container>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
            <img
              onClick={handleHome}
              src="/logo.png"
              alt="WrsTech"
              width="20%"
            />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Fab
                color="primary"
                size="small"
                aria-label="add"
                onClick={handleTop}
                sx={{ mb: 2 }}
              >
                <i className="fa fa-arrow-up" />
              </Fab>
              <Typography gutterBottom align="center" variant="caption">
                WrsTech ©2022
              </Typography>
            </Box>
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              width="20%"
            >
              <Typography variant={'h6'}>
                {translate('footer.follow')}
              </Typography>
              <Box alignItems="center" display="flex" gap={1}>
                <SocialButton
                  url="https://www.linkedin.com/in/willianrsilva/"
                  icon="linkedin-square"
                />
                <SocialButton
                  url="https://github.com/Willian-Rodrigues"
                  icon="github"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
