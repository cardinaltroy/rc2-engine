import TImage from "./TImage";

class TEffect extends TImage{
    constructor(props){
        super(props)
        this._objtype = 'TEffect'
        this._attach = props.attach ? props.attach : null
        this._loop = props.loop
    }
    onClick(e){
        return;
    }
    onDoubleClick(e){
        return;
    }
    onContextMenu(e){
        return;
    }
    onWheel(e){
        return;
    }
    onMouseMove(e){
        return;
    }
}

export default TEffect