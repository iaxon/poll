import React from "react";
import wald from "./wald.jpeg";
import berg from "./berg.jpeg";

interface IPictureProps {
    picName:any;
}
interface IPictureState {
  transparentCounter: number;
  clickCounter: number;
  opacity: number;
}

export default class Picture extends React.Component<IPictureProps, IPictureState> {
  constructor(props: any) {
    super(props);
    this.state = {
      transparentCounter: 0,
      clickCounter: 0,
      opacity: 1,
    };
  }
  render() {
    return (
      <div className="clickFrame" id="picture" style={{ opacity: this.state.opacity, display: 'inline-block' }}           
        onClick={(e: any) => {
        this.wahl(this.props.picName);
        this.moreOpacity(2);
      }}>
        <img src={this.props.picName} id="pic1" className="picture" alt="logo"  />
      </div>
    );
  }
  moreOpacity = (opacityNum: number) => {
    if (opacityNum == 1 && this.state.transparentCounter == 0) {
      //wird ausgeführt, wenn wald angetippt wird
      this.setState({ opacity: 0.1 });
      //this.setState(
      //prevState => ({opacity1: prevState.opacity1 + 0.9}));
      this.setState(prevState => ({ transparentCounter: 1 }));
      console.log("transparent");
    } else {
      //wird ausgeführt, wenn berg angetippt wird
      if (opacityNum == 2 && this.state.transparentCounter == 0) {
        this.setState(prevState => ({ opacity: 0.1 }));
        this.setState(prevState => ({ transparentCounter: 1 }));
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

  wahl(choice: string) {
    if (choice == wald) {
      this.setState({ clickCounter: this.state.clickCounter + 1 });
      console.log("wald");
      console.log(this.state.clickCounter);
    } else {
      if (choice == berg) {
        this.setState({ clickCounter: this.state.clickCounter + 1 });
        console.log("berg");
        console.log(this.state.clickCounter);
      }
    }
  }
}
