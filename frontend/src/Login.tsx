import React from 'react';
import Input from "./Input";
import FormattedInputs from "./FormattedInputs";

interface ILoginProps {
   login: () => void;
}

interface ILoginState {
  showLogin: boolean;
  value: string;
}


export default class Login extends React.PureComponent<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      showLogin: true,
      value: '',
    };
  }

  render() {
    return (
      <div className= "LoginContainer" >

      <Input/>

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
