import { Box, styled } from '@mui/material';

export const WorkCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(4)};
`;
