import { createTheme } from "@mui/material/styles";

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
    }
  },
});

export const lightTheme = createTheme(themeBase, {
  mixins: {
    toolbar: {
      [themeBase.breakpoints.up('sm')]: {
        minHeight: themeBase.spacing(10)
      }
    }
  },
  palette: {
    primary: {
      main: '#ff385c',
      dark: '#e31238',
      light: '#ff6984'
    }
  }
});