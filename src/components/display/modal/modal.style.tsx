import { Button, Modal, styled } from '@mui/material';

export const ModalStyled = styled(Modal)`
  background-color: rgb(107, 105, 105, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled('div')`
  position: relative;
  background-color: ${({ theme }) => theme.palette.grey[800]};
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing(3) + ' ' + theme.spacing(3)};
  border-radius: 8px;
  overflow: auto;
  overflow-x: hidden;
  min-width: 50vw;
  max-height: 80vh;
  max-width: 90vw;
  row-gap: ${({ theme }) => theme.spacing(1)};
  gap: ${({ theme }) => theme.spacing(3)};
  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: 70%;
  }
`;
export const TwoColumnsContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
    row-gap: ${({ theme }) => theme.spacing(1)};
  }
`;

export const ThreeColumnsContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
  }
`;

export const CloseButtonStyled = styled(Button)`
  position: absolute;
  right: 0;
  top: 8px;
  font-size: 25px;
`;

export const ButtonsContainer = styled('div')`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing(2)} 0;
  gap: ${({ theme }) => theme.spacing(0.2) + ' ' + theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1) + ' ' + theme.spacing(0)};
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-wrap: wrap-reverse;
    flex-direction: row;
    flex-direction: row-reverse;
  }
`;
