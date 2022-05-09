import palette from '../../palette';
import { spacing } from '../../utils';


const muiFormControl = {
  // This component wraps over all input components
  MuiFormControl: {
    styleOverrides: {
      root: {
        marginBottom: spacing(2.4),
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        '& .MuiCheckbox-root, .MuiRadio-root': {
          // Unchecked
          '&:not(.Mui-checked)': {
            "& svg path": {
              fill: palette.almostBlack.l30
            },
            "& + .MuiFormControlLabel-label": {
              color: palette.almostBlack.l30,
            },
            "&.Mui-focusVisible + .MuiFormControlLabel-label": {
              color: palette.almostBlack.l20,
            },
          },
          // Unchecked - Disabled
          '&.Mui-disabled': {
            "& svg path": {
              fill: palette.almostBlack.l60
            },
            "& + .MuiFormControlLabel-label": {
              color: palette.almostBlack.l50,
            }
          },
        },
        // Hover 
        '&:hover': {
          '&:not(.Mui-disabled)': {
            '& .MuiCheckbox-root, .MuiRadio-root': {
              backgroundColor: palette.almostBlack.translucid,
              // Hover - unchecked
              '&:not(.Mui-checked) + .MuiFormControlLabel-label': {
                color: palette.almostBlack.l20,
              },
            },
          },
        },
        // Styles for form control label when displayed in a row
        '.MuiFormGroup-row &': {
          marginRight: spacing(3.2),
        }
      },
    },
  }
};

export default muiFormControl;
