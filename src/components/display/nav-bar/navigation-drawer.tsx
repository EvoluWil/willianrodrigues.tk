import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
  Typography,
  IconButton
} from '@mui/material';
import { useRouter } from 'next/router';
import { Link } from '../../ui/link/link.component';

interface MenuItems {
  link: string;
  name: string;
  icon: JSX.Element;
}

interface NavigationDrawerProps {
  menuItems: MenuItems[];
  open: boolean;
  onClose: () => void;
}

export default function NavigationDrawer(props: NavigationDrawerProps) {
  const { menuItems, open, onClose } = props;
  const { route } = useRouter();
  return (
    <Drawer anchor="right" open={open} variant="temporary" onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          px: 1,
          minHeight: { xs: 48, sm: 64 }
        }}
        bgcolor={theme => theme.palette.background.default}
      >
        <IconButton
          color="primary"
          sx={{ mr: 'auto', fontSize: 24 }}
          onClick={onClose}
        >
          <i className="fa fa-angle-right" />
        </IconButton>
      </Box>
      <Divider />
      <List
        sx={{
          bgcolor: theme => theme.palette.background.default,
          height: '100vh'
        }}
      >
        {menuItems.map(item => (
          <Link key={item.name} href={item.link} onClick={onClose}>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              px={2}
              py={1}
              width={160}
              bgcolor={theme =>
                route === item.link ? theme.palette.primary.main : 'inherit'
              }
            >
              <Box width={'20%'}>
                <Typography
                  color={route === item.link ? 'text.primary' : 'primary'}
                >
                  {item.icon}
                </Typography>
              </Box>
              <Typography
                color={route === item.link ? 'text.primary' : 'primary'}
                variant="body1"
                mr={'auto'}
              >
                {item.name}
              </Typography>
            </Box>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}
