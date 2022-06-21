import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider
} from '@mui/material';
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

  return (
    <Drawer anchor="right" open={open} variant="temporary" onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          px: 1,
          // TODO: Remove hardcoded values when theme.mixins.toolbar gets adapted to MUI v5
          minHeight: { xs: 48, sm: 64 }
        }}
      ></Box>
      <Divider />
      <List>
        {menuItems.map(item => (
          <ListItem
            key={item.name}
            button
            onClick={onClose}
            {...{ component: Link, href: item.link, noLinkStyle: true }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
