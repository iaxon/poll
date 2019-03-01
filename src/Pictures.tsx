import React from "react";
import Picture from "./Picture";
import { IPicture } from './Question';
import {isUndefined} from "util";

interface IPicturesProps {
    pictures: IPicture[];
}
interface IPicturesState{
    selectedId?: number;
}
export default class Pictures extends React.PureComponent<
IPicturesProps,
IPicturesState
>{
    constructor(props:IPicturesProps) {
        super(props);
        this.state = {
            selectedId:undefined,
        }
    }
    render(){
        const body: JSX.Element[] = [];
        this.props.pictures.forEach((pic: IPicture, index: number) => {
            body.push(
                <Picture key={'pic-' + index} picture={pic}  highlighted={this.state.selectedId === undefined || this.state.selectedId === pic.id} setSelectedPicture={(id: number) => this.setSelectedId(id)}/>
            );
        })

        return(
            <div className="pictureContainer">
                {body}
            </div>
        )
        
    }
    setSelectedId(id:number){
        this.setState({selectedId:id})

    }
}



/*render(){
    return(
        <>
        {this.props.pictures.map((element, index) => {
            return(
                <Picture key={index} picName={element.url}/>
            )
            
        })}
        </>
    )
    
}*/