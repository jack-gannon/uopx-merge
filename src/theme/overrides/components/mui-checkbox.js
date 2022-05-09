import palette from '../../palette';
import { spacing } from '../../utils';

const muiCheckbox = {
  MuiCheckbox: {
    styleOverrides: {
      root: {
        // All states
        paddingRight: spacing(0.8),
        '&:hover': {
          backgroundColor: palette.almostBlack.translucid,
        },
        // Un-checked state
        '&:not(.Mui-checked)': {
          color: palette.almostBlack.l30,
          '&:hover + .MuiFormControlLabel-label': {
            color: palette.almostBlack.main
          },
          '& svg path': {
            fill: palette.almostBlack.l30,
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

export default muiCheckbox;
