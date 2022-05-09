import { spacing, mediaLabel, fontWeights } from '../../utils';
import palette from '../../palette';
import breakpoints from '../../breakpoints';

const muiButton = {
  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        height: spacing(4),
        letterSpacing: '0rem',
        borderRadius: spacing(3),
        textTransform: 'none',
        minWidth: spacing(16),
        fontSize: spacing(1.6),
        fontWeight: fontWeights.medium,
        '&:focus-visible': {
          boxShadow: 'none',
          outline: `${spacing(0.2)} solid ${palette.common.focus}`,
          outlineOffset: spacing(0.2),
          '&>.MuiTouchRipple-root>.MuiTouchRipple-ripplePulsate': {
            display: 'none',
          },
        },
        '&.MuiButton-contained': {
          '&:active': {
            backgroundColor: `${palette.primary.d20}`,
          },
        },
        '&.MuiButton-outlined': {
          '&.MuiButton-outlined:not(.Mui-disabled)': {
            border: `${spacing(0.2)} solid ${palette.primary.main}`,
            '&:hover': {
              border: `${spacing(0.2)} solid ${palette.primary.d40}`,
              color: `${palette.primary.d40}`,
              backgroundColor: "transparent",
            },
          },
          '&.Mui-disabled': {
            border: `${spacing(0.2)} solid ${palette.almostBlack.l70}`,
          }
        },
        '&:hover': {
          boxShadow: 'none',
        },
        '&.large': {
          height: spacing(5.6),
          minWidth: spacing(24.5),
          [mediaLabel(breakpoints.values.sm)]: {
            width: '100%',
          },

        },
      },
    },
  },
};

export default muiButton;
