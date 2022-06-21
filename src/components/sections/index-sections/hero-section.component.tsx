import {
  Box,
  Container,
  Button,
  Typography,
  Grid,
  Backdrop,
  CircularProgress
} from '@mui/material/';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { translate } from '../../../utils/translate.util';

export const Hero = () => {
  const { push } = useRouter();
  const [backdrop, setBackdrop] = useState(false);

  const handleNavigation = (path: string) => {
    setBackdrop(true);
    push(path);
  };

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box component="section" id="home">
        <Container
          sx={{
            minHeight: {
              xs: '95vh',
              lg: '95vh'
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundImage: {
              lg: `url('/banner.png')`
            },
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right -2rem bottom',
            backgroundSize: 'contain'
          }}
        >
          <Box mb={7} textAlign={{ md: 'left', xs: 'center' }}>
            <Typography gutterBottom component="h4" variant="h5">
              {translate('home.heroData.greetings')}
              <Typography
                color="primary"
                component="span"
                variant="h3"
                sx={{ ml: 1 }}
              >
                {translate('home.heroData.name')}
              </Typography>
            </Typography>
            <Typography gutterBottom component="h1" variant="h4">
              {translate('home.heroData.role')}
            </Typography>

            <Typography
              color="textSecondary"
              component="p"
              variant="subtitle1"
              sx={{ maxWidth: 600 }}
            >
              {translate('home.heroData.paragraph')}
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item ml={{ md: 0, xs: 'auto' }}>
              <Button
                color="primary"
                onClick={() => handleNavigation('/projects')}
                size="large"
                variant="contained"
              >
                {translate('home.heroData.button1')}
              </Button>
            </Grid>
            <Grid item mr={{ md: 0, xs: 'auto' }}>
              <Button
                color="primary"
                onClick={() => handleNavigation('/contact')}
                size="large"
                variant="outlined"
              >
                {translate('home.heroData.button2')}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
