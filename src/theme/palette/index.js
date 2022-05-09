// Based on the colors found in https://uopx.atlassian.net/wiki/spaces/DS/pages/1133085062/UOPX+Design+System#Embedded-colors-Built-into-our-Styling-using-scss

const palette = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
    green: '#007D21',
    warning: '#F67B37', // Same as sunrise orange main
    darkGray: '#CCCCCC',
    focus: '#808B91',
    transparent: '#FFFFFF00',
  },
  background: {
    paper: '#FFFFFF',
  },
  primary: {
    main: '#DB3725',
    contrastText: '#FFFFFF',
    light: '#FC9489', // Same as l40
    dark: '#8A1500', // Same as d40
    d90: '#150504',
    d80: '#2C0B07',
    d60: '#58160F', // Active
    d40: '#8A1500', // Hover
    d20: '#B21F13',
    l20: '#EA695B',
    l40: '#FC9489',
    l60: '#FFB5AD',
    l80: '#FCDBD7',
    l90: '#FBEBEA',
  },
  secondary: {
    main: '#30718D',
    contrastText: '#FFFFFF',
    light: '#74AEBF', // Same as l20
    dark: '#13262D', // Same as d40
    d40: '#13262D',
    d20: '#1A3D4D',
    l20: '#74AEBF',
    l40: '#97CACF',
  },
  almostBlack: {
    main: '#001823',
    translucid: '#00182308', // Translates to 'rgba(0,24,35,0.04)',
    d20: '#000304',
    l10: '#1D333D',
    l20: '#3A4F59',
    l30: '#5E7079',
    l40: '#7B8A92',
    l50: '#97A3A9',
    l60: '#B2BBBF',
    l70: '#D2D7D9',
    l80: '#E3E6E7',
    l90: '#F2F3F3',
  },
  sunriseOrange: {
    main: '#F67B37',
    d40: '#BC340E',
    d20: '#D84C08',
    l20: '#F89A43',
    l40: '#F6B563',
  },
  cactusGreen: {
    main: '#567248',
    d40: '#182A10',
    d20: '#1D3D26',
    l20: '#5D8B67',
    l40: '#93CBA4',
  },
  clayBrown: {
    main: '#756254',
    d40: '#44332B',
    d20: '#554238',
    l20: '#B49C7A',
    l40: '#E9E3CA',
  },
  error: {
    main: '#DB3725', // Same as primary main
    light: '#EA695B', // Same as primary l20
    dark: '#B21F13', // Same as primary d20
    contrastText: '#FFFFFF',
  },
  text: {
    primary: '#001823', // Same as almost black main
    secondary: '#001823',
    disabled: '#5E7079', // Same as almost black l30
    hint: '#E3E6E7', // Same as almost black l80
  },
  action: {
    disabledBackground: '#E3E6E7',
    disabled: '#5E7079',
  },
};

export default palette;
