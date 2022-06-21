import React from 'react';
import { SocialButtonContainer } from './social-button.styles';

interface SocialButtonProps {
  url: string;
  icon: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ url, icon }) => {
  return (
    <SocialButtonContainer href={url} target="_blank" rel="noreferrer">
      <i className={`fa fa-${icon}`} aria-hidden="true" />
    </SocialButtonContainer>
  );
};
