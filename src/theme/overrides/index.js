import MuiButton from './components/mui-button';
import MuiTextField from './components/mui-textfield';
import MuiCheckbox from './components/mui-checkbox';
import MuiRadio from './components/mui-radio';
import MuiFormControl from './components/mui-formcontrol';
import MuiFormHelperText from './components/mui-formhelpertext';
import MuiSvgIcon from './components/mui-svgicon';
import MuiTooltip from './components/mui-tooltip';
import MuiMenuItem from './components/mui-menuitem';

const overrides = {
  ...MuiButton,
  ...MuiTextField,
  ...MuiCheckbox,
  ...MuiRadio,
  ...MuiFormControl,
  ...MuiFormHelperText,
  ...MuiSvgIcon,
  ...MuiTooltip,
  ...MuiMenuItem
};

export default overrides;
