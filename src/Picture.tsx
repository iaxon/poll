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
  choosen: boolean;

}

export default class Picture extends React.Component<IPictureProps, IPictureState> {
  constructor(props: IPictureProps) {
    super(props);
    this.state = {
      transparentCounter: 0,
      clickCounter: 0,
      choosen: false,

    };
  }
  render() {
    return (
      <div className="clickFrame" id="picture" style={{ opacity: this.props.highlighted ?1:0.1, display: 'inline-block' }}           
        >
        <img src={this.props.picture.url} id="pic1" className="picture" alt="logo"  onClick={() => {
          // this.wahl(this.props.picName);
          // this.moreOpacity(1);
          console.log("click")
          localStorage.setItem('choosen', 'choosen');
          

          this.props.setSelectedPicture(this.props.picture.id)
        }}/>
      </div>
    );
  }

}
