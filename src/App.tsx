import * as React from 'react';
import "./App.css";
import  Question  from "./Question";
import  Result  from "./Result";

interface AppProps {}

interface AppState {
  showResult: boolean,
  showQuestion: boolean,
  waldNumber: number,
  bergNumber: number
}

export default class App extends React.PureComponent<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      showResult:false,
      showQuestion:false,
      waldNumber: 0,
      bergNumber: 0
    }
  }
  setShowNumber(waldNumber:number,  bergNumber: number){
    this.setState({
      waldNumber: waldNumber,
      bergNumber: bergNumber,
      showResult: true

    })

  }
  render() {
    return (
      <div>
        {!this.state.showResult?
        <Question
          setShowNumber={(waldNumber:number, bergNumber:number,) => this.setShowNumber(waldNumber, bergNumber)}
          />
        :
        <Result 
        back={()=>{this.setState({showResult:false})}}
        waldNumber={this.state.waldNumber}
        bergNumber={this.state.bergNumber}
      />
      }
       
      </div>
    );
  }
}