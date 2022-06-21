import { useEffect, useState } from 'react';
import {
  Toolbar,
  useScrollTrigger,
  Slide,
  IconButton,
  Container,
  Typography,
  Backdrop,
  CircularProgress,
  Box
} from '@mui/material/';

import { useRouter } from 'next/router';

import NavigationDrawer from './navigation-drawer';
import LanguageSelector from '../../ui/language-selector/language-selector.component';
import { Link } from '../../ui/link/link.component';
import { AnimatedLink, AppBarComponent } from './nav-bar.style';
import { translate } from '../../../utils/translate.util';

interface Props {
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export const NavBar = () => {
  const [backdrop, setBackdrop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { route } = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    {
      link: '/',
      name: translate('navbar.home'),
      icon: <i className="fa fa-home" />
    },
    {
      link: '/work',
      name: translate('navbar.work'),
      icon: <i className="fa fa-briefcase" />
    },
    {
      link: '/projects',
      name: translate('navbar.projects'),
      icon: <i className="fa fa-briefcase" />
    },
    {
      link: '/contact',
      name: translate('navbar.contact'),
      icon: <i className="fa fa-envelope" />
    }
  ];

  useEffect(() => {
    setBackdrop(false);
  }, [route]);

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <nav id="navbar">
        <HideOnScroll>
          <AppBarComponent elevation={0} position={'sticky'}>
            <Container maxWidth="lg">
              <Toolbar disableGutters sx={{ display: 'flex' }}>
                <Link href="/">
                  <img src="/logo.png" alt="WrsTech" width={'120px'} />
                </Link>
                <Box ml="auto">
                  {menuItems.map(item => (
                    <AnimatedLink
                      onClick={() => {
                        setBackdrop(true);
                      }}
                      className={route === item.link ? 'active' : 'inative'}
                      key={item.name}
                      href={item.link}
                    >
                      {item.name}
                    </AnimatedLink>
                  ))}

                  <LanguageSelector />

                  <IconButton
                    aria-label="Open Navigation"
                    size="large"
                    sx={{ display: { md: 'none' } }}
                    onClick={handleDrawerToggle}
                  >
                    <Typography color="primary" className="fa fa-bars" />
                  </IconButton>
                </Box>
              </Toolbar>
            </Container>
          </AppBarComponent>
        </HideOnScroll>

        <NavigationDrawer
          menuItems={menuItems}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        />
      </nav>
    </>
  );
};
