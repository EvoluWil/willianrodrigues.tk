import { styled } from '@mui/material';
import Cursor from 'react-cursor-follow';

export const CursorStyled = styled(Cursor)`
  &.cursor {
    background-size: contain !important;
    position: fixed !important;
    transform: translate(-50%, -50%) !important;
    animation: spin 5s linear infinite !important;
    transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
    transition-duration: 0.8s !important;
    background-image: url('/images/vectors/triangle.png') !important;
    width: 50px !important;
    height: 50px !important;
    z-index: 10000 !important;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
