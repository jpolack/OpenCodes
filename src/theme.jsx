import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#AE3939',
      main: '#770000',
      dark: '#5F0101',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#FFFFFF',
      main: '#f44336',
      dark: '#1C1C1C',
      contrastText: '#ffffff',
    },
  },
});

export default theme;
