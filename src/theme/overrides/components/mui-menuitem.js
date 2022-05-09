import { spacing } from '../../utils';
import palette from '../../palette';

const muiMenuItem = {
  MuiMenuItem: {
    styleOverrides: {
      root: {
        padding: `${spacing(1.6)} ${spacing(3.2)}`,
        '&:hover, &:focus': {
          backgroundColor: palette.almostBlack.l90,
        },
        // Selected Menu Item
        '&.Mui-selected': {
          backgroundColor: palette.almostBlack.l80,
          '&:hover, &:focus': {
            backgroundColor: palette.almostBlack.l80
          },
        },
      },
    },
  },
}

export default muiMenuItem;