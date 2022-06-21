import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3599fd'
    },
    secondary: {
      main: '#10d7fd'
    },
    text: {
      primary: '#707070',
      secondary: '#9B9B9B',
      disabled: '#D3D3D3'
    },
    error: {
      main: '#cf4a4d'
    },
    warning: {
      main: '#FCA600'
    },
    success: {
      main: '#00D34D'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F0F0F0',
      200: '#D7D9DD',
      300: '#C4C4C4',
      400: '#9B9B9B',
      800: '#0a0a0a'
    },
    background: {
      paper: '#2d2d2d',
      default: '#121212'
    }
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 14
  },
  shape: {
    borderRadius: 3
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      },
      variants: [
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            color: 'white'
          }
        }
      ]
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 0px 39px rgba(0, 0, 0, 0.05)'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#121214'
        }
      }
    }
  }
});

export default theme;
