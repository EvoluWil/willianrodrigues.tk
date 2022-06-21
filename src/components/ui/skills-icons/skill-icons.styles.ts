import { styled } from '@mui/material';

export const Icon = styled('img')`
  padding: ${({ theme }) => theme.spacing(1)};
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 60px;
  }
`;
