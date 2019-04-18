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
import { connect } from "react-redux";
import { loginInput } from "../redux/actions";

const theme = createMuiTheme({
  palette: {

    type: 'dark',
  },
  typography: { useNextVariants: true },
});


export interface ILoginProps {
       inputValue: (textFieldValue: string) => void;
       idName: string;
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
        this.props.loginInput(e.tartget.value);
       // this.setProps({   });
        //console.log(this.state.textFieldValue);
    };

  render() {
   

    return (
      <div>
        
        <MuiThemeProvider theme={theme}>
        <TextField
            id={this.props.idName}
            className="inputField"
            label="Einmalcode"
            placeholder="XXXXXX"
            variant="outlined"

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
