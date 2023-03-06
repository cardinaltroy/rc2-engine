import SceneEditor from "../modules/SceneEditor";
import Camera from "../modules/Camera";

class TObject{
    constructor(props){
        this._name = props.name
        this._hitbox = props.hitbox
        this._x = props.x
        this._y = props.y
        this._r = props.r
        this._h = props.h
        this._w = props.w
        this._show = true
        this._select = false
    }

    select(){
        this._select = true
    }
    unselect(){
        this._select = false
    }
    

    show(){
        this._show = true;
    }

    hide(){
        this._show = false;
    }

    setPosition(props){
        this._x = props.x;
        this._y = props.y;
    }

    setRotate(props){
        this._r = props.r;
    }

    setSize(props){
        this._h = props.h;
        this._w = props.w;
    }


    onClick(e){
        console.log(`Object: ${this._name}, Event: ${e.event}`);
        this._select ? this.unselect() : this.select()
    }
    onDoubleClick(e){
        console.log(`Object: ${this._name}, Event: ${e.event}`);
        SceneEditor.removeObject({name: this._name});
    }
    onContextMenu(e){
        console.log(`Object: ${this._name}, Event: ${e.event}`);
        Camera.setPos({x: this._x, y: this._y});
    }
    onWheel(e){
        console.log(`Object: ${this._name}, Event: ${e.event}`);
        Camera.setScale(e.props.deltaY);
    }
}

export default TObject
