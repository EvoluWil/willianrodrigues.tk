import React, { ReactNode } from 'react';
import LinkStatic from 'next/link';
import { LinkStyled } from './link.styles';

export interface LinkComponentProps {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Link: React.FC<LinkComponentProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <LinkStatic
      href={{
        pathname: href
      }}
    >
      <LinkStyled style={{ cursor: 'pointer' }} {...props}>
        {children}
      </LinkStyled>
    </LinkStatic>
  );
};

export default Link;
