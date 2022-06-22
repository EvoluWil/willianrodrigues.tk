import { AppBar, styled } from '@mui/material';
import { Link } from '../../ui/link/link.component';

export const AppBarComponent = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const AnimatedLink = styled(Link)`
  padding: 12px 15px;
  text-decoration: none !important;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.palette.primary.main};
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &.active::before,
  :hover::before {
    visibility: visible;
    width: 100%;
  }
`;
