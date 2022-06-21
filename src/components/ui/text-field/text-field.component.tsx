import { InputAdornment, OutlinedTextFieldProps } from '@mui/material';
import React from 'react';
import { Control, useController } from 'react-hook-form';
import { InputContainer, TextFieldStyled } from './text-field.styles';

export interface TextFieldProps extends OutlinedTextFieldProps {
  control: Control;
  helperText: string;
  name: string;
  icon?: string;
  defaultValue?: string;
  error?: boolean;
}
export const TextField: React.FC<TextFieldProps> = ({
  control,
  helperText,
  name,
  icon,
  defaultValue,
  error,
  ...rest
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue || ''
  });
  return (
    <InputContainer>
      <TextFieldStyled
        helperText={helperText}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        fullWidth
        error={error}
        {...rest}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {icon && <i className={`fa fa-${icon}`} />}
            </InputAdornment>
          )
        }}
      />
    </InputContainer>
  );
};
