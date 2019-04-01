import * as React from "react";

interface ILoginProps {
   login: ()=> void;
}

interface ILoginState {
showLogin:boolean;
value: string;
}

export default class Login extends React.PureComponent<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      showLogin:true,
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event:any) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event:any) {
    alert('Ein Code wurde übermittelt: '+ this.state.value);
    event.preventDefault();
  }

  render() {
  return (

<div className="LoginContainer">
      <form onSubmit={this.handleSubmit}>
      <label>
      Einmalcode:
        <input className="loginButton" type="text" name="login" value={this.state.value} onChange={this.handleChange}/>
        </label>
        </form>
         <button className="loginButton" onClick={(e:any) => {this.props.login();}}>
           Login
         </button>

    </div>
    );
  }


}
