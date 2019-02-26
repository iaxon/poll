import React from "react";
import logo from "./logo.svg";
import wald from "./wald.jpeg";
import berg from "./berg.jpeg";


interface QuestionProps {
    setShowNumber:(waldNumber:number,  bergNumber: number)=> void;
}

interface QuestionState {
  showLogo: boolean;
  waldNumber: number;
  bergNumber: number;
  submit: boolean;
  opacityNum:number;
  opacity1:number;
  opacity2:number;
  counter:number;

}

export default class Question extends React.PureComponent<QuestionProps, QuestionState> {
  constructor(props: QuestionProps) {
    super(props);
    this.state = {
      showLogo: true,
      waldNumber: 0,
      bergNumber: 0,
      submit: false,
      opacityNum:0,
      opacity1: 1,
      opacity2: 1,
      counter:0,
    };
}

  render() {
    return (
        [<div className="QuestionContainer">
          <a>Welches Bild ist besser?</a>
          <div className="container">
            <div
              className="clickFrame"
              id='picture'
              onClick={(e: any) => {
                this.wahl("wald");
                this.moreOpacity(1);
              }}
              style={{opacity: this.state.opacity1}}
            >
              <img src={wald} id="pic1"className="picture" alt="logo" />
            </div>
            <div className="space" />
            <div
              className="clickFrame"
              id='picture'              
              onClick={(e: any) => {
                this.wahl("berg");
                this.moreOpacity(2);
                console.log("click")
                }
              } style={{opacity: this.state.opacity2}}>           
              <img src={berg} id="pic2" className="picture" alt="logo" />
            </div>
          </div>
        <button onClick={(e:any) => {this.props.setShowNumber(this.state.waldNumber, this.state.bergNumber);}}>
            Weiter
          </button>
        </div>]
    );
  }
//   document.getElementById('picture').addEventListener('change', function () {
//     let darkThemeEnabled = document.body.classList.toggle('light-theme');
//     localStorage.setItem('light-theme-enabled', darkThemeEnabled);
// });

// if (JSON.parse(localStorage.getItem('light-theme-enabled'))) {
//     document.body.classList.add('light-theme');
// }
  // opacity(id:string, choose:string){
    
  //   document.getElementsByName(id).classList.add(choose);
  // }
  moreOpacity = (opacityNum:number) => {

    if(opacityNum == 1 && this.state.counter==0) { //wird ausgeführt, wenn wald angetippt wird
      this.setState(
        prevState => ({opacity2: prevState.opacity2 - 0.9}));
      this.setState(
        prevState => ({opacity1: prevState.opacity1 + 0.9}));
      this.setState(
        prevState => ({counter: prevState.counter + 1}));
        console.log("transparent");
   } else {             //wird ausgeführt, wenn wald angetippt wird  
    if(opacityNum == 2 && this.state.counter==0)    {        
      this.setState(
        prevState => ({opacity1: prevState.opacity1 - 0.9}));
      this.setState(
        prevState => ({opacity2: prevState.opacity2 + 0.9}));
      }
   }

   if(opacityNum == 1 && this.state.opacity2 == 0.1 && this.state.counter > 0) { 
    this.setState(
      prevState => ({opacity2: prevState.opacity2 + 0.9}));
    this.setState(
      prevState => ({opacity1: prevState.opacity1 - 0.9}));
    this.setState(
      prevState => ({counter: prevState.counter + -1}));
      console.log("transparent");
 } else {
  if(opacityNum == 2 && this.state.opacity1 == 0.1&& this.state.counter > 0) {
    this.setState(
      prevState => ({opacity1: prevState.opacity1 - 0.9}));
    this.setState(
      prevState => ({opacity2: prevState.opacity2 + 0.9}));
    this.setState(
      prevState => ({counter: prevState.counter + -1}));
    }
 }
  }
















  
  switchLogo(e: any) {
    this.setState({ showLogo: !this.state.showLogo });
    console.log("lool");
  }

  wahl(choice: string) {
    if (choice == "wald") {
      this.setState({ waldNumber: this.state.waldNumber + 1 });
      console.log("wald");
      console.log(this.state.waldNumber);
    } else {
      if (choice == "berg") {
        this.setState({ bergNumber: this.state.bergNumber + 1 });
        console.log("berg");
        console.log(this.state.bergNumber);
      }
    }
    
  }
  submit(e: any){this.setState({ submit: !this.state.submit });
   }
  
}

