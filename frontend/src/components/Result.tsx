import * as React from "react";

interface IResultProps {
  back: ()=> void;
  waldNumber: number;
  bergNumber: number;
}

interface IResultState {
  percentageWald:number
  percentageBerg:number
}

export default class Result extends React.PureComponent<IResultProps, IResultState> {
  constructor(props: IResultProps) {
    super(props);
    this.state = {
      percentageWald: Math.round((this.props.waldNumber/(this.props.waldNumber + this.props.bergNumber))*10000)/100,
      percentageBerg: Math.round((this.props.bergNumber/(this.props.waldNumber + this.props.bergNumber))*10000)/100
    };
  }
  render() {
    const percentageWaldStyle = this.state.percentageWald * 0.76;
    const percentageBergStyle = this.state.percentageBerg * 0.76;
    const waldStyle = {
      backgroundColor: '#CCCCCC',
      width: percentageWaldStyle + '%',
    };

    const bergStyle = {
      backgroundColor: '#FFFFFF',
      width: percentageBergStyle + '%',
    };


    return (

      <div className="ResultContainer">
        <span className="text">Wald</span>
        <div className="percentage" style={waldStyle}>
          <div className="percentageNum"> {this.state.percentageWald + "%"}</div>
        </div>
        <span className="text">Berg</span>
            
        <div className="percentage" style={bergStyle}>
        <div className="percentageNum"> {this.state.percentageBerg + "%"}</div>
        </div>
        <button onClick={(e:any) => {this.props.back();}}>
          zurück
        </button>
    
    </div>
    );
  }
  

}


