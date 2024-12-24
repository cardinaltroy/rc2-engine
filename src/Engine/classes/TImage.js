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
}

export default TImage;