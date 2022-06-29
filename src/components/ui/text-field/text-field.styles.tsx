import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TextFieldStyled = styled(TextField)`
  .MuiOutlinedInput-root {
    background: ${({ theme }) => theme.palette.background.paper};
  }
  .MuiInputLabel-root {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const InputContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InputIconStyled = styled('i')`
  text-align: center;
`;
