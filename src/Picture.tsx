import React from "react";
import wald from "./wald.jpeg";
import berg from "./berg.jpeg";
import { IPicture } from './Question';

interface IPictureProps {
    picture:IPicture;
    highlighted: boolean;
    setSelectedPicture: (id:number) => void;


}
interface IPictureState {
  transparentCounter: number;
  clickCounter: number;

}

export default class Picture extends React.Component<IPictureProps, IPictureState> {
  constructor(props: IPictureProps) {
    super(props);
    this.state = {
      transparentCounter: 0,
      clickCounter: 0,

    };
  }
  render() {
    return (
      <div className="clickFrame" id="picture" style={{ opacity: this.props.highlighted ?1:0.1, display: 'inline-block' }}           
        >
        <img src={this.props.picture.url} id="pic1" className="picture" alt="logo"  onClick={(e: any) => {
        // this.wahl(this.props.picName);
        // this.moreOpacity(1);
        console.log("click")
        localStorage.setItem('choosen', "choosen");
        this.props.setSelectedPicture(this.props.picture.id)
      }}/>
      </div>
    );
  }
  // moreOpacity = (opacityNum: number) => {
  //   if (opacityNum == 1 && this.state.transparentCounter == 0) {
  //     //wird ausgeführt, wenn wald angetippt wird
  //     this.setState({ opacity: 0.1 });
  //     //this.setState(
  //     //prevState => ({opacity1: prevState.opacity1 + 0.9}));
  //     this.setState(prevState => ({ transparentCounter: 1 }));
  //     console.log("transparent");
  //   } else {
  //     //wird ausgeführt, wenn berg angetippt wird
  //     if (opacityNum == 2 && this.state.transparentCounter == 0) {
  //       this.setState(prevState => ({ opacity: 0.1 }));
  //       this.setState(prevState => ({ transparentCounter: 1 }));
  //       // this.setState(
  //       //   prevState => ({opacity2: prevState.opacity2 + 0.9}));
  //     }
  //   }

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
  // };

  // wahl(choice: string) {
  //   if (choice == wald) {
  //     this.setState({ clickCounter: this.state.clickCounter + 1 });
  //     console.log("wald");
  //     console.log(this.state.clickCounter);
  //   } else {
  //     if (choice == berg) {
  //       this.setState({ clickCounter: this.state.clickCounter + 1 });
  //       console.log("berg");
  //       console.log(this.state.clickCounter);
  //     }
  //   }
  // }
}
