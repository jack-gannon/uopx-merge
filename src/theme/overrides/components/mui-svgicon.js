import { spacing } from '../../utils';

const muiSvgIcon = {
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        '&.tooltip-icon': {
          fontSize: spacing(2),
          verticalAlign: 'middle',
          margin: `0 ${spacing(0.4)}`,
          marginTop: spacing(-0.6),
        },
      },
    },
  },
};

export default muiSvgIcon;
