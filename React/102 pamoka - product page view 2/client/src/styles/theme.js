import { createTheme } from '@mui/material';

const theme = createTheme({
  shape: {
    borderRadius: 0,
  },
  palette: {
    background: {
      default: '#fafafa',
    },
    primary: {
      main: '#252525',
      dark: '#151515',
      light: '#353535',
      contrastText: '#fafafa',
    },
  },
  mixins: {
    drawer: {
      width: 240,
    },
  },
  typography: {
    fontFamily: '\'Lato\', sans-serif',
  },
});

export default theme;
