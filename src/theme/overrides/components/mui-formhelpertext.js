import { spacing } from '../../utils';
import palette from '../../palette';

const muiFormHelperText = {
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginLeft: 0,
        '.MuiFilledInput-root + &': {
          backgroundColor: "#FFF",
        },
        '&.MuiFormHelperText-contained': {
          border: `${spacing(0.1)} solid`,
          borderTop: 0,
          margin: 0,
          padding: `${spacing(0.3)} ${spacing(1.4)} 0 ${spacing(1.4)}`,
        },
      },
    },
  },
};

export default muiFormHelperText;
