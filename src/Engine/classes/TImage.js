import TObject from "./TObject";

class TImage extends TObject{
    constructor(props){
        super(props)
        this._objtype = 'TImage';
        this._model = props.model
        this._animCounter = 0
        this._animX = 0
        this._animY = 0
    }

    setAnimationFrame(props){
        if(!props && !props.x && !props.y ) return;
        
        this._animX = props.x;
        this._animY = props.y;
    }
    setCounter(value){
        this._animCounter = value
    }

}

export default TImage;