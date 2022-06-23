import React from 'react';
import { CursorStyled } from './cursor-follow.styles';

export const CursorFollow = () => {
  return (
    <div>
      <CursorStyled
        color="transparent"
        duration={0.8}
        size={45}
        className="cursor"
      />
    </div>
  );
};
