import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { translate } from '../../../../utils/translate.util';
import { TextField } from '../../../ui/text-field/text-field.component';
import { Title } from '../../../ui/title/title.component';
import {
  ButtonsContainer,
  CloseButtonStyled,
  ModalContainer,
  ModalStyled,
  TwoColumnsContainer,
} from '../modal.style';

interface ContactModalProps {
  open: boolean;
  setOpen: () => void;
}
const sendEmail = yup.object().shape({
  email: yup
    .string()
    .required(translate('contact.email.modal.email.required'))
    .email(translate('contact.email.modal.email.invalid')),
  name: yup.string().required(translate('contact.email.modal.name.required')),
  subject: yup
    .string()
    .required(translate('contact.email.modal.subject.required')),
  message: yup
    .string()
    .required(translate('contact.email.modal.message.required')),
});

export const ContactModal: React.FC<ContactModalProps> = ({
  open,
  setOpen,
}) => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(sendEmail),
  });

  const handleClose = () => {
    setOpen();
  };

  const handleSubmitEmail = async (data: FieldValues) => {
    setLoading(true);
    try {
      await axios.post('/api/mail', data);
      toast.success(translate('contact.email.modal.success'));
      handleClose();
    } catch (err) {
      toast.error(translate('contact.email.modal.error'));
    }
    setLoading(false);
  };

  const body = (
    <ModalContainer>
      <CloseButtonStyled
        onClick={() => {
          handleClose();
        }}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </CloseButtonStyled>
      <Title
        title={translate('contact.email.modal.title')}
        subtitle={translate('contact.email.modal.subtitle')}
      />
      <TwoColumnsContainer>
        <TextField
          label={translate('contact.email.modal.name.label')}
          fullWidth
          placeholder={translate('contact.email.modal.name.placeholder')}
          icon="user"
          size="small"
          control={control}
          helperText={errors?.name?.message as string}
          error={!!errors?.name}
          name={'name'}
          variant={'outlined'}
        />
        <TextField
          label={translate('contact.email.modal.email.label')}
          fullWidth
          placeholder={translate('contact.email.modal.email.placeholder')}
          icon="envelope"
          size="small"
          control={control}
          helperText={errors?.email?.message as string}
          error={!!errors?.email}
          name={'email'}
          variant={'outlined'}
        />
      </TwoColumnsContainer>
      <TextField
        label={translate('contact.email.modal.subject.label')}
        fullWidth
        placeholder={translate('contact.email.modal.subject.placeholder')}
        icon="car"
        size="small"
        control={control}
        helperText={errors?.subject?.message as string}
        error={!!errors?.subject}
        name={'subject'}
        variant={'outlined'}
      />
      <TextField
        label={translate('contact.email.modal.message.label')}
        fullWidth
        placeholder={translate('contact.email.modal.message.placeholder')}
        size="small"
        control={control}
        helperText={errors?.message?.message as string}
        error={!!errors?.message}
        name={'message'}
        variant={'outlined'}
        multiline
        minRows={5}
      />
      <ButtonsContainer>
        <Button
          onClick={handleSubmit(handleSubmitEmail)}
          disabled={loading}
          variant="contained"
          color="primary"
          sx={{ minWidth: 104 }}
        >
          {loading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            translate('contact.email.modal.submit')
          )}
        </Button>
        <Button onClick={handleClose} variant="outlined" color="error">
          {translate('contact.email.modal.cancel')}
        </Button>
      </ButtonsContainer>
    </ModalContainer>
  );

  return (
    <>
      <ModalStyled
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-message"
      >
        {body}
      </ModalStyled>
    </>
  );
};
