import * as React from 'react';
import "./App.scss";
import  Question  from "./Question";
import  Result  from "./Result";
import Login from "./Login";

interface IAppProps {}

interface IAppState {
  showResult: boolean,
  showQuestion: boolean,
  waldNumber: number,
  bergNumber: number,
  showLogin: boolean,
}

export default class App extends React.PureComponent<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      showResult:false,
      showQuestion:false,
      waldNumber: 0,
      bergNumber: 0,
      showLogin: true,

    }
    localStorage.removeItem('chosen')
  }
  setShowNumber(waldNumber:number,  bergNumber: number){
    this.setState({
      waldNumber: waldNumber,
      bergNumber: bergNumber,
      showResult: true,

    })

  }
  render() {
    return (
      <div>
        {this.state.showLogin?
        (<Login
          login={()=>{this.setState({showLogin:false})}}
        />)
         : null}
         {/* <Login
           login={()=>{this.setState({showLogin:false})}}
         />}
        </div> */}

         {!this.state.showResult && !this.state.showLogin?
         <Question
           setShowNumber={(waldNumber:number, bergNumber:number,) => this.setShowNumber(waldNumber, bergNumber)}
           />
         : null}
         {this.state.showResult && !this.state.showLogin?
         <Result
         back={()=>{this.setState({showResult:false})}}
         waldNumber={this.state.waldNumber}
         bergNumber={this.state.bergNumber}
       ></Result>
       : null}


          {/* {
            (() => {
                  if (this.state.showLogin)
                      return
                      <Login
                        login={()=>{this.setState({showLogin:false})}}
                      />
                  if (!this.state.showResult)
                      return
                        <Question
                          setShowNumber={(waldNumber:number, bergNumber:number,) => this.setShowNumber(waldNumber, bergNumber)}
                        />

            })()
          } */}
    </div>
    );
  }
}
