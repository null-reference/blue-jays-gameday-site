'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(19, 74, 142, 1)', // blue jays primary blue
      light: 'rgba(0, 107, 166, 1)', // blue jays light blue
      dark: 'rgb(29, 45, 92)', // navy blue
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    secondary: {
      // main: 'rgb(203, 41, 28, 1)', // blue jays red
      main: 'rgba(128, 176, 216, 1)', // blue jays baby blue
      contrastText: 'rgb(255, 255, 255, 1)',
    },
    text: {
      primary: 'rgb(33, 43, 54, 1)',
      secondary: 'rgb(99, 115, 129, 1)',
      disabled: 'rgba(145, 158, 171, 1)',
    },
    grey: {
      500: 'rgb(177, 179, 179, 1)', // blue jays gray
    },
    background: {
      // default: 'rgba(255, 255, 255, 1)',
      default: 'rgba(128, 176, 216, 0.2)', // blue jays baby blue
      paper: 'rgba(255, 255, 255, 1)',
    },
    divider: 'rgba(145, 158, 171, 0.2)',
    // error: {
    //   main: 'rgba(255, 86, 48, 1)',
    //   light: 'rgba(255, 233, 213, 1)',
    //   contrastText: 'rgba(122, 9, 22, 1)',
    // },
    // success: {
    //   main: 'rgba(17, 141, 87, 1)',
    //   light: 'rgba(211, 252, 210, 1)',
    //   contrastText: 'rgba(6, 94, 73, 1)',
    // },
  },
  typography: {
    fontFamily: 'var(--public-sans), sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '64px',
      lineHeight: '80px',
    },
    h2: {
      fontWeight: 800,
      fontSize: '48px',
      lineHeight: '64px',
    },
    h3: {
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '48px',
    },
    h4: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '36px',
    },
    h5: {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '30px',
    },
    h6: {
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '28px',
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '22px',
    },
    body1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
    body2: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '22px',
    },
    caption: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
    },
    overline: {
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '18px',
      case: 'uppercase',
    },
  },
});

const themeWithComponents = createTheme(theme, {
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'secondary',
      },
      styleOverrides: {
        root: {
          fontWeight: 700,
          fontSize: '15px',
          lineHeight: '26px',
          height: '48px',
          padding: '8px 16px',
          textTransform: 'none',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: '1px solid',
          borderColor: theme.palette.primary.light,
          '&.MuiPaper-outlined': {
            border: '1px solid',
            borderColor: theme.palette.primary.light,
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.light,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td, &:last-child th': {
            border: 0,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${theme.palette.background.default}`,
        },
        head: {
          color: theme.palette.primary.contrastText,
          fontWeight: 'bold',
        },
      },
    },
  },
});

const responsiveTheme = createTheme(themeWithComponents, {
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          [theme.breakpoints.down('md')]: {
            fontWeight: 800,
            fontSize: '40px',
            lineHeight: '50px',
          },
        },
        h2: {
          [theme.breakpoints.down('md')]: {
            fontWeight: 800,
            fontSize: '32px',
            lineHeight: '42px',
          },
        },
        h3: {
          [theme.breakpoints.down('md')]: {
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '36px',
          },
        },
        h4: {
          [theme.breakpoints.down('md')]: {
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '30px',
          },
        },
        h5: {
          [theme.breakpoints.down('md')]: {
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '27px',
          },
        },
        h6: {
          [theme.breakpoints.down('md')]: {
            fontWeight: 700,
            fontSize: '17px',
            lineHeight: '26px',
          },
        },
      },
    },
  },
});

export default responsiveTheme;
