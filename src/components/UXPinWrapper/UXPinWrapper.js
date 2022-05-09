// eslint-disable-next-line no-unused-vars
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import uopxTheme from '../../theme';

const theme = createTheme(uopxTheme);

export default function UXPinWrapper({ children }) {

  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}