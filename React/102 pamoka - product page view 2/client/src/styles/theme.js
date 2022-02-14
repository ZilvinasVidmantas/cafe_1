import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#fafafa',
    },
  },
  mixins: {
    drawer: {
      width: 240,
    },
  },
});

export default theme;
