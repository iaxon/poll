import React from 'react';
import Input from "./Input";
import FormattedInputs from "./FormattedInputs";

interface ILoginProps {
   login: () => void;
}

interface ILoginState {
  showLogin: boolean;
  value: string;
  inputValue: string;
}


export default class Login extends React.PureComponent<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      showLogin: true,
      value: '',
      inputValue: '1',
    };
  }

  render() {
    return (
      <div className= "LoginContainer" >

      <Input  inputValue={(inputValue: string) => this.setState({inputValue})}
      idName="inputLogin"
      />
        
          {// <form onSubmit={this.handleSubmit}>
            // <label>
            // Einmalcode:
            //   <input className="loginButton" type="text" name="login" value={this.state.value} onChange={this.handleChange}/>
            //   </label>
            //</form>
          }
          {//<button className="loginButton" onClick = {(e: any) => { this.props.login(); }}>
           //   Login
         // </button>
        }

        <button className="loginButton" onClick = {(e: any) => {console.log(this.state.inputValue)}}>
              Login
          </button>
         
    </div>
    );
  }


}
