import TObject from "./TObject";

class TShape extends TObject{
    constructor(props){
        super(props)
        this._objtype = 'TShape';
        this._type = props.type; // arc, rect
        this._color = props.color;
    }
}

export default TShape;