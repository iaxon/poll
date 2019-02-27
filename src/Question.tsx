import React from "react";
import logo from "./logo.svg";
import wald from "./wald.jpeg";
import berg from "./berg.jpeg";
import  Picture  from "./Picture";
import Pictures from "./Pictures";

interface IQuestionProps {
  setShowNumber: (waldNumber: number, bergNumber: number) => void;
}
export interface IPicture {
  id:number;
  url: any;
}
interface IQuestionState {
  showLogo: boolean;
  waldNumber: number;
  bergNumber: number;
  submit: boolean;
  opacityNum: number;
  opacity1: number;
  opacity2: number;
  counter: number;
  picName:string;
  pictures: IPicture[];
}

export default class Question extends React.PureComponent<
  IQuestionProps,
  IQuestionState
> {
  constructor(props: IQuestionProps) {
    super(props);
    this.state = {
      showLogo: true,
      waldNumber: 0,
      bergNumber: 0,
      submit: false,
      opacityNum: 0,
      opacity1: 1,
      opacity2: 1,
      counter: 0,
      picName: "wald",
      pictures: []
    };
  }
wahl(){

}

  render() {
    return (
      <div className="QuestionContainer">
        <a>
          Welches Bild ist besser?
        </a>
        <div className="container">
          {/* <Picture 
          picName={wald}
          />
          <Picture 
          picName={berg}
          /> */}
          <Pictures pictures={[
            {id:0, url:wald},
            {id:1, url:berg},
            {id:2, url:wald},
            {id:3, url:berg},
            {id:4, url:wald},
            {id:5, url:berg},
            {id:6, url:wald},
            {id:7, url:berg},

          ]}/>
        </div>
        <button
          onClick={(e: any) => {
            this.props.setShowNumber(
              this.state.waldNumber,
              this.state.bergNumber
            );
          }}
        >
          Weiter
        </button>
      </div>
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
  moreOpacity = (opacityNum: number) => {
    if (opacityNum == 1 && this.state.counter == 0) {
      //wird ausgeführt, wenn wald angetippt wird
      this.setState({ opacity2: 0.1 });
      //this.setState(
      //prevState => ({opacity1: prevState.opacity1 + 0.9}));
      this.setState(prevState => ({ counter: 1 }));
      console.log("transparent");
    } else {
      //wird ausgeführt, wenn berg angetippt wird
      if (opacityNum == 2 && this.state.counter == 0) {
        this.setState(prevState => ({ opacity1: 0.1 }));
        this.setState(prevState => ({ counter: 1 }));
        // this.setState(
        //   prevState => ({opacity2: prevState.opacity2 + 0.9}));
      }
    }

    //    if(opacityNum == 1 && this.state.opacity2 == 0.1 && this.state.counter == 0) { //waldclick && opacity von Berg == 0.1 &&  counter == 1
    //     this.setState(
    //       prevState => ({opacity1: 0.1}));
    //     this.setState(
    //       prevState => ({opacity2: 1}));
    //     this.setState(
    //       prevState => ({counter: 0}));
    //       console.log("transparent");
    //  } else {
    //   if(opacityNum == 2 && this.state.opacity1 == 0.1&& this.state.counter == 0) { //bergclick && opacity von wald == 0.1 &&  counter == 1
    //     this.setState(
    //       prevState => ({opacity2: 0.1}));
    //     this.setState(
    //       prevState => ({opacity1: 1}));
    //     this.setState(
    //       prevState => ({counter: 0}));
    //     }
    //  }
  };

  switchLogo(e: any) {
    this.setState({ showLogo: !this.state.showLogo });
    console.log("lool");
  }

  submit(e: any) {
    this.setState({ submit: !this.state.submit });
  }
}
