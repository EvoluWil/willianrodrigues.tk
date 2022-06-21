import React from 'react';
import { Box } from '@mui/material';
import { CloseButtonStyled, ModalContainer, ModalStyled } from '../modal.style';
import { InlineWidget } from 'react-calendly';
import { format } from 'date-fns';

interface CalendlyModalProps {
  open: boolean;
  setOpen: () => void;
}
export const CalendlyModal: React.FC<CalendlyModalProps> = ({
  open,
  setOpen
}) => {
  const handleClose = () => {
    setOpen();
  };
  const body = (
    <ModalContainer>
      <>
        <CloseButtonStyled
          onClick={() => {
            handleClose();
          }}
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </CloseButtonStyled>
        <Box height={'100%'} marginBottom={1}>
          <InlineWidget
            styles={{
              height: '600px',
              width: '100%'
            }}
            pageSettings={{ textColor: '#000', primaryColor: '#000' }}
            url={`${
              process.env.NEXT_PUBLIC_CALENDLY_URL
            }30min?back=1&month=${format(new Date(), 'yyyy-MM')}`}
          />
        </Box>
      </>
    </ModalContainer>
  );

  return (
    <>
      <ModalStyled
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </ModalStyled>
    </>
  );
};
