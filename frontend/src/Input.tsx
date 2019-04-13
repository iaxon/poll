import React from 'react';
import PropTypes from 'prop-types';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';




const theme = createMuiTheme({
  palette: {

    type: 'dark',
  },
  typography: { useNextVariants: true },
});

interface Props{

}

function CustomizedInputs(props: Props) {


  return (
    <div className="inputFieldDiv">


      <MuiThemeProvider theme={theme}>
        <TextField
          className="inputField"
          label="Einmalcode"
          placeholder="XXXXXX"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
      </MuiThemeProvider>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default CustomizedInputs;
