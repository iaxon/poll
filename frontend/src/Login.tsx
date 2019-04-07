import * as React from "react";
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

interface ILoginProps {
  login: () => void;
}

interface ILoginState {
  showLogin: boolean;
  value: string;
  textmask: string;
}


export default class Login extends React.PureComponent<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      showLogin: true,
      value: '',
      textmask: '    -    ',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event: any) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event: any) {
    alert('Ein Code wurde übermittelt: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className= "LoginContainer" >
      <FormControl className="CodeInput">
        <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
        <Input
          value={this.state.textmask}
          onChange={this.handleChange('textmask')}
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom as any}
        />
      </FormControl>
          <form className="test" noValidate autoComplete = "off" >
                <TextField
                id="outlined-with-placeholder"
                label = "Einmalcode"
                placeholder = "XXX-XXX"
                className = "test"
                margin = "normal"
                variant = "outlined"
                />
          </form>
          {// <form onSubmit={this.handleSubmit}>
            // <label>
            // Einmalcode:
            //   <input className="loginButton" type="text" name="login" value={this.state.value} onChange={this.handleChange}/>
            //   </label>
            //</form>
          }
          <button className="loginButton" onClick = {(e: any) => { this.props.login(); }}>
              Login
          </button>

    </div>
    );
  }


}
