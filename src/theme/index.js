import palette from './palette';
import overrides from './overrides';
import breakpoints from './breakpoints';
import typography from './typography';
import { spacing } from './utils';

export { default as palette } from './palette';
export { default as overrides } from './overrides';
export { default as breakpoints } from './breakpoints';
export { default as typography } from './typography';

const theme = {
  palette,
  components: { ...overrides },
  breakpoints,
  typography,
  spacing,
};

export default theme;
