import { styled } from '@mui/material';
import Cursor from 'react-cursor-follow';

export const CursorStyled = styled(Cursor)`
  &.cursor {
    background-size: contain !important;
    border-radius: 0 !important;
    animation: spin 5s linear infinite !important;
    background-image: url('/images/vectors/triangle.png') !important;
    z-index: 10000;
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
