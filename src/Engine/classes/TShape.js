import TObject from "./TObject";

class TShape extends TObject{
    constructor(props){
        super(props)
        this._type = props.type;
        this._color = props.color;
    }
}

export default TShape;