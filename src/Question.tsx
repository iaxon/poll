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
}

export default class Question extends React.PureComponent<QuestionProps, QuestionState> {
  constructor(props: QuestionProps) {
    super(props);
    this.state = {
      showLogo: true,
      waldNumber: 0,
      bergNumber: 0,
      submit: false
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
              }}
            >
              <img src={wald} id="pic1"className="picture" alt="logo" />
            </div>
            <div className="space" />
            <div
              className="clickFrame"
              id='picture'
              onClick={(e: any) => {
                this.wahl("berg");
                let choosed = document.body.classList.add('choosed');
                console.log("click")
                }
              }            >
              <img src={berg} className="picture" alt="logo" />
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

