import { spacing } from '../../utils';
import palette from '../../palette';

const muiTooltip = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        color: palette.common.white,
        backgroundColor: palette.almostBlack.main,
        lineHeight: spacing(1.6),
        fontSize: spacing(1.6),
        maxWidth: spacing(42),
        padding: spacing(1.2),
        textAlign: 'justify',
      },
      arrow: {
        '&::before': {
          backgroundColor: palette.almostBlack.main,
        },
      },
    },
  },
};

export default muiTooltip;
