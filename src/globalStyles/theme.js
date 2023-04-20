import { ThemeProvider } from 'styled-components';

const walletTheme = {
  colors: {
    white: '#fff',
    black: '#000',
    text: '#000000',
    border: '#e0e0e0',
    secondaryText: '#BDBDBD',
    backgroundFirst: '#E5E5E5',
    backgroundSecond: '#FFFFFF',
    backgroundLightGrey: 'rgba(255, 255, 255, 0.4)',
    backgroundPurple: '#C5BAFF',
    backgroundPink: '#FFD8D0',
    backgroundBlue: '#4A56E2',
    inputTxt: '#535353',
    cardLabelBg: 'rgba(255, 255, 255, 0.6)',
    accentBtn: '#FF6101',
    expense: '#FF6596',
    income: '#24CCA7',
    error: '#d50c0c',
    modalBackdrop: 'rgba(0, 0, 0, 0.25)',
    transparent: 'transparent',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    baseFont: 'Circe',
    secondaryFont: 'Poppins',
  },
  fontSizes: [
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '28px',
    '32px',
    '36px',
    '48px',
    '68px',
  ],
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  lineHeights: {
    logo: 1.5,
    text: 1.375,
  },
  letterSpacing: {
    button: '0.1em',
    logo: '0.07em',
    text: '0.04em',
    title: '-0.01em',
  },
  borders: {
    none: 'none',
    normal: '1px solid',
    bold: '2px solid',
    transparent: '1px solid transparent',
    input: '1px solid rgba(245, 146, 86, 0.5)',
    inputError: '1px solid #E2001A',
    inputSuccess: '1px solid #3CBC81',
  },
  radii: {
    none: '0',
    small: '20px',
    big: '40px',
    circular: '50%',
  },
  shadows: {
    section: '7px 4px 14px rgba(0, 0, 0, 0.11)',
    avatar: '0px 4px 14px rgba(0, 0, 0, 0.11)',
  },
  transition: {
    main: '400ms ease',
  },
  breakpoints: ['320px', '768px', '1280px'],
};

export function Theme({ children }) {
  return <ThemeProvider theme={walletTheme}>{children}</ThemeProvider>;
}
