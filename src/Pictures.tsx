import React from "react";
import Picture from "./Picture";
import { IPicture } from './Question';

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

    }
    render(){
        const body: JSX.Element[] = [];
        this.props.pictures.forEach((pic: IPicture, index: number) => {
            body.push(
                <Picture key={'pic-' + index} picName={pic.url} />
            );
        })

        return(
            <div className="pictureContainer">
                {body}
            </div>
        )
        
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