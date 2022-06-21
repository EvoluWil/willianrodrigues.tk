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
          background: ${theme.palette.background.default};
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
        }
        .typewriter {
          font-size: ${theme.spacing(6)};
          color: ${theme.palette.primary.main};
        }
        ._34Oew ._22mst {
          background-color: ${theme.palette.background.paper} !important;
          textarea {
            border-color: ${theme.palette.background.default} !important;
            background-color: ${theme.palette.background.paper} !important;
            color: ${theme.palette.text.primary} !important;
          }
        }
        ._34Oew ._1jTF6._3sodH {
          background: ${theme.palette.background.default};
          border: 1px solid ${theme.palette.primary.main};
        }
        ._34Oew ._1jTF6._3sodH ._uThfQ {
          background: ${theme.palette.background.paper};
        }
      `}
    />
  );
};
