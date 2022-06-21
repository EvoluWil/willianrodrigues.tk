import { ListItem as ListStyledBase, styled } from '@mui/material';

export const ListItem = styled(ListStyledBase)`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(4)} 0;
`;
