import palette from '../../palette';
import { spacing } from '../../utils';


const muiRadio = {
  MuiFormLabel: {
    styleOverrides: {
      root: {
        '&.Mui-focused.MuiFormLabel-root:not(.Mui-error)': {
          color: palette.text.primary,
        },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        // All states
        paddingRight: spacing(0.8),
        '&:hover': {
          backgroundColor: palette.almostBlack.translucid,
        },
        // Un-checked state
        '&:not(.Mui-checked)': {
          '&:hover + .MuiFormControlLabel-label': {
            color: palette.almostBlack.main
          },
        },
        // Checked state
        '&.Mui-checked:not(.Mui-disabled)': {
          color: palette.almostBlack.main,
          '& + .MuiFormControlLabel-label': {
            color: palette.almostBlack.main,
          }
        },
      },
    },
  },
};

export default muiRadio;
