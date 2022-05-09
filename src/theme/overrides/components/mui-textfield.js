import { spacing } from '../../utils';
import palette from '../../palette';

const muiTextField = {
  // Label for all variants of TextField
  MuiInputLabel: {
    styleOverrides: {
      root: {
        '&.MuiInputLabel-root:not(.Mui-error)': {
          color: palette.almostBlack.l30,
        },
        '&.MuiInputLabel-shrink': {
          transform: 'translate(16px, 4px) scale(0.75)',
        }
      },
    },
  },
  // Outlined TextField
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        border: `${spacing(0.1)} solid ${palette.almostBlack.l30}`,
        borderRadius: spacing(0.1),
        height: spacing(5.6),
        '& .MuiOutlinedInput-notchedOutline': {
          border: "none",
        },
        '& .MuiInputBase-input': {
          padding: `${spacing(2.4)} ${spacing(1.6)} ${spacing(0.8)} ${spacing(1.6)}`,
          lineHeight: spacing(2.4),
          height: spacing(2.4),
        },
        // Focus State
        '&.MuiInputBase-root.Mui-focused': {
          borderColor: palette.almostBlack.main,
          outline: `${spacing(0.1)} solid ${palette.almostBlack.main}`,
        },
        // Error state
        '&.Mui-error': {
          borderColor: palette.primary.main,
          borderRadius: `${spacing(0.1)} ${spacing(0.1)} 0 0`,
        },
        // Select Input - Outlined
        '& .MuiNativeSelect-select, & .MuiSelect-select': {
          paddingRight: `${spacing(4)} !important`,
          '&:focus': {
            backgroundColor: "transparent",
          }
        },
        // Select Input Icon
        '& .MuiSvgIcon-root': {
          fontSize: spacing(4),
          right: spacing(0),
          color: palette.almostBlack.l50,
          '.Mui-focused &': {
            color: palette.almostBlack.main,
          }
        },
        // Select Input Hover - Icon
        '&:hover .MuiSvgIcon-root': {
          color: palette.almostBlack.main,
        },
      },
    },
  },
  // Filled TextField
  MuiFilledInput: {
    styleOverrides: {
      root: {
        '&::before, &::after': {
          display: "none",
        },
        '&:not(.Mui-error)::after': {
          borderColor: palette.almostBlack.main,
        },
        backgroundColor: "#FFF",
        border: `${spacing(0.1)} solid ${palette.almostBlack.l30}`,
        borderRadius: spacing(0.1),
        height: spacing(5.6),
        '&:hover': {
          backgroundColor: "#FFF",
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: "none",
        },
        '& .MuiInputBase-input': {
          padding: `${spacing(2.4)} ${spacing(1.6)} ${spacing(0.8)} ${spacing(1.6)}`,
          lineHeight: spacing(2.4),
          height: spacing(2.4),
        },
        // Focus State
        '&.MuiInputBase-root.Mui-focused': {
          borderColor: palette.almostBlack.main,
          outline: `${spacing(0.1)} solid ${palette.almostBlack.main}`,
          backgroundColor: "#FFF",
        },
        // Error state
        '&.Mui-error': {
          borderColor: palette.primary.main,
          borderRadius: `${spacing(0.1)} ${spacing(0.1)} 0 0`,
        },
        // Select Input - Filled
        '& .MuiNativeSelect-select, & .MuiSelect-select': {
          paddingRight: `${spacing(4)} !important`,
          '&:focus': {
            backgroundColor: "transparent",
          }
        },
        // Select Input Icon
        '& .MuiSvgIcon-root': {
          fontSize: spacing(4),
          right: spacing(0),
          color: palette.almostBlack.l50,
          '.Mui-focused + &': {
            color: palette.almostBlack.main,
          }
        },
        // Select Input Hover - Icon
        '&:hover .MuiSvgIcon-root': {
          color: palette.almostBlack.main,
        },
      },
    },
  },
  // Standard TextField
  MuiInput: {
    styleOverrides: {
      root: {
        borderRadius: spacing(0.1),
        borderColor: palette.almostBlack.l30,
        '&:not(.Mui-error)::after': {
          borderColor: palette.almostBlack.main,
        },
      },
    },
  },
  // Boxed error message for text fields
  MuiTextField: {
    styleOverrides: {
      root: {
        '& p.MuiFormHelperText-root.MuiFormHelperText-contained': {
          border: `${spacing(0.1)} solid`,
          borderTop: 0,
          margin: 0,
          padding: `${spacing(0.3)} ${spacing(1.4)} 0 ${spacing(1.4)}`,
        },
      },
    },
  },
};

export default muiTextField;
