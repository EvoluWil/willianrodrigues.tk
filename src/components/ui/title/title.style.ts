import { Box, styled } from '@mui/material';

export const TitleContainer = styled(Box)`
  gap: ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => theme.breakpoints.down('md')} {
    text-align: center;
  }
`;
