import { css, Global as GlobalStyles } from '@emotion/react';
import { useTheme } from '@mui/material';

export const Global: React.FC = () => {
  const theme = useTheme();
  return (
    <GlobalStyles
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;

          ${theme.breakpoints.down('md')} {
            font-size: 11px;
          }
        }
        body {
          cursor: arrow;
          color: ${theme.palette.text.primary};
        }

        body,
        input,
        textarea,
        select,
        button {
          font: 400 1rem 'Poppins', sans-serif;
        }

        button {
          cursor: pointer;
        }

        a {
          color: inherit;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
            text-decoration-color: ${theme.palette.primary.main};
          }
        }
        .typewriter {
          font-size: ${theme.spacing(6)};
          color: ${theme.palette.primary.main};
        }
        ._34Oew ._22mst {
          background-color: ${theme.palette.background.default} !important;
          textarea {
            border-color: #121212 !important;
            background-color: ${theme.palette.background.default} !important;
            color: ${theme.palette.text.primary} !important;
          }
        }
        ._34Oew ._1jTF6._3sodH {
          background: #121212;
          border: 1px solid ${theme.palette.primary.main};
        }
        ._34Oew ._1jTF6._3sodH ._uThfQ {
          background: ${theme.palette.background.default};
        }
      `}
    />
  );
};
