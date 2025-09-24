import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
        color: 'inherit',
      },
      styleOverrides: {
        root: {
          // ensure link takes current text color and doesn't force blue
          color: 'inherit',
        },
      },
    },
  },
});
