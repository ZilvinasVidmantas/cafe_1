import { createTheme } from '@mui/material/styles';

// https://mui.com/customization/default-theme/
const themeBase = createTheme({
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1760,
    },
  },
});

const lightTheme = createTheme(themeBase, {
  mixins: {
    toolbar: {
      [themeBase.breakpoints.up('sm')]: {
        minHeight: 80,
      },
    },
  },
  palette: {
    primary: {
      main: '#e31238',
      dark: '#e31238',
      light: '#ff6984',
    },
  },
});

export default lightTheme;
