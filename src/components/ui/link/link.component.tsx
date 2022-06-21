import React, { ReactNode } from 'react';
import LinkStatic from 'next/link';
import { Link as LinkBase } from '@mui/material';

export interface LinkComponentProps {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  textDecoration?: boolean;
}

export const Link: React.FC<LinkComponentProps> = ({
  href,
  children,
  textDecoration = true,
  ...props
}) => {
  return (
    <LinkStatic
      href={{
        pathname: href
      }}
    >
      <LinkBase
        style={{ cursor: 'pointer' }}
        className="linkMUI"
        {...props}
        sx={{ textDecoration: textDecoration ? 'underline' : 'none' }}
      >
        {children}
      </LinkBase>
    </LinkStatic>
  );
};

export default Link;
