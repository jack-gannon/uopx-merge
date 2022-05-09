export const spacing = (factor) => `${(factor * 10)}px`;
export const mediaLabel = (breakpoint) => `@media (max-width: ${breakpoint}px)`;
export const fontWeights = {
  black: 900,
  bold: 800,
  semiBold: 700,
  medium: 500,
  regular: 300,
  light: 200,
  thin: 100,
};

export default {
  spacing,
  mediaLabel,
  fontWeights,
};
