import { createTheme } from '@mui/material';

const theme = createTheme({
  mixins: {
    drawer: {
      width: 240,
    },
  },
});

export default theme;
