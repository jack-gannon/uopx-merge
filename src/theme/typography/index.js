import { spacing, fontWeights } from '../utils';

const typography = {
  // this along with giving html font-size 62.5% in globals.css allows
  // us to have 1rem == 10px for easier calculation
  // for example, 24px will be equal to 2.4rem, see: https://material-ui.com/customization/typography/#font-size
  htmlFontSize: 16,
  h1: {
    fontSize: spacing(7.2),
    letterSpacing: spacing(0),
    lineHeight: spacing(8.6),
    fontWeight: fontWeights.bold,
    marginBottom: spacing(3.2),
  },
  h2: {
    fontSize: spacing(5.6),
    letterSpacing: spacing(0),
    lineHeight: spacing(6.8),
    fontWeight: fontWeights.bold,
    marginBottom: spacing(2.4),
  },
  h3: {
    fontSize: spacing(4),
    letterSpacing: spacing(0),
    lineHeight: spacing(4.8),
    fontWeight: fontWeights.bold,
    marginBottom: spacing(1.6),
  },
  h4: {
    fontSize: spacing(3.2),
    letterSpacing: spacing(0),
    lineHeight: spacing(3.8),
    fontWeight: fontWeights.bold,
    marginBottom: spacing(1.6),
  },
  h5: {
    fontSize: spacing(2.4),
    letterSpacing: spacing(0),
    lineHeight: spacing(2.8),
    fontWeight: fontWeights.bold,
    marginBottom: spacing(0.8),
  },
  h3light: {
    fontSize: spacing(4),
    letterSpacing: spacing(0),
    lineHeight: spacing(4.8),
    fontWeight: fontWeights.light,
    marginBottom: spacing(1.6),
  },
  h4light: {
    fontSize: spacing(3.2),
    letterSpacing: spacing(0),
    lineHeight: spacing(3.8),
    fontWeight: fontWeights.light,
    marginBottom: spacing(1.6),
  },
  h5light: {
    fontSize: spacing(2.4),
    letterSpacing: spacing(0),
    lineHeight: spacing(2.8),
    fontWeight: fontWeights.light,
    marginBottom: spacing(0.8),
  },
  body2: {
    fontSize: spacing(2.4),
    letterSpacing: spacing(0),
    lineHeight: spacing(3.6),
    font: 'Plex-Serif',
  },
  body3: {
    fontSize: spacing(2),
    letterSpacing: spacing(0),
    lineHeight: spacing(3),
  },
  body4: {
    fontSize: spacing(1.6),
    letterSpacing: spacing(0),
    lineHeight: spacing(2.4),
  },
  body5: {
    fontSize: spacing(1.2),
    letterSpacing: spacing(0),
    lineHeight: spacing(1.8),
  },
  body4eyebrow: {
    fontSize: spacing(1.6),
    letterSpacing: spacing(0.2),
    lineHeight: spacing(1.6),
    textTransform: 'uppercase',
  },
  body5eyebrow: {
    fontSize: spacing(1.2),
    letterSpacing: spacing(0.2),
    lineHeight: spacing(1.2),
    textTransform: 'uppercase',
  },
  tooltip: {
    fontSize: spacing(1.6),
    letterSpacing: spacing(0),
    lineHeight: spacing(1.5),
    marginLeft: spacing(0.4),
    borderBottom: `${spacing(0.25)} solid`,
    marginBottom: spacing(2.4),
    display: 'inline-block',
  },
};

export default typography;
