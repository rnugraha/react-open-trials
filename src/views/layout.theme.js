import {createMuiTheme} from '@material-ui/core';

export const drawerWidth = 240;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#243DDD',
      dark: '#222',
    },
    secondary: {
      main: '#FFF',
      contrastText: '#F1F6FE',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'sans-serif',
    ],
    fontSize: 13,
    subtitle1: {
      fontWeight: 600,
      color: '#333'
    },
    h3: {
      fontFamily: 'Roboto',
      fontWeight: 500,
    },
    h4: {
      fontFamily: 'Roboto',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'Roboto',
      fontWeight: 500,
    },
  },
  overrides: {
    MUIDataTableHeadCell: {
      sortActive: {
        color: "#FFFFFF",
        fontWeight: 'bold',
      },
      fixedHeader: {
        fontSize: 14,
        color: "#F1F6FE",
        backgroundColor: "#3786C2",
      }
    },
    MuiTableSortLabel: {
      active: {
        color: "#FFFFFF",
      }
    }
  }
});

export default theme;
