import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
  Typography
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
      ></Box>
      <Divider />
      <List>
        {menuItems.map(item => (
          <Link
            key={item.name}
            href={item.link}
            onClick={onClose}
            textDecoration={false}
          >
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
