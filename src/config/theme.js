import {createTheme} from '@mui/material/styles';

export const defaultTheme = createTheme({
  palette: {
    mode: 'dark', // Set the theme mode to dark
    primary: {
      main: '#1ED760', // Green color for buttons
    },
    text: {
      primary: '#fff', // White text color
    },
  },
});
