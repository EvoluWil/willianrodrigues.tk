import { styled } from '@mui/material/styles';
import { Divider as DividerBase } from '@mui/material';

export const Divider = styled(DividerBase)`
  height: 4px;
  width: 60px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  margin: auto;
`;
