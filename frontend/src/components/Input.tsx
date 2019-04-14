import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
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


export interface ILoginProps {
       inputValue: (textFieldValue: string) => void;
}

export interface ILoginState {

  textFieldValue: string;
}

class TextFields extends React.Component<ILoginProps, ILoginState> {
  state: ILoginState = {
    textFieldValue: "",
  };

 
      getInitialState() {
        return {
            textFieldValue: ''
        };
    };

    handleChange(e:any) {
        this.setState({
            textFieldValue: e.target.value
        });
       // this.setProps({   });
        //console.log(this.state.textFieldValue);
    };

  render() {
   

    return (
      <div>
        
        <MuiThemeProvider theme={theme}>
        <TextField
          className="inputField"
          label="Einmalcode"
          placeholder="XXXXXX"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          
          onChange={this.handleChange.bind(this)}
          
        />
        </MuiThemeProvider>
        <button onClick= {(e: any) => {console.log(this.state.textFieldValue)}} />
        
      </div>
    );
  }
}

(TextFields as React.ComponentClass<ILoginProps>).propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default TextFields;
