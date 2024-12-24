import Camera from "../modules/Camera";
import EngineStore from "../stores/engineStore";
import SceneManager from "../modules/SceneManager";

class TObject {
    constructor(props) {
        this._name = props.name
        this._hitbox = props.hitbox
        this._x = props.x
        this._y = props.y
        this._r = props.r
        this._h = props.h
        this._w = props.w
        this._show = true
        this._alpha = 1 // add to render
    }
    update(){
        this._r +=0.1
    }

    destroy() {
        SceneManager.removeObject({ name: this._name });
    }

    show() {
        this._show = true;
    }

    hide() {
        this._show = false;
    }

    setPosition(props) {
        this._x = props.x;
        this._y = props.y;
    }

    setRotate(props) {
        this._r = props.r;
    }

    setSize(props) {
        this._h = props.h;
        this._w = props.w;
    }


    onClick(e) {
        console.log(`Object: ${this._name}, Event: ${e.event}`);
        EngineStore.selectObject(this._name)
        // For example: if you need onClick on your child class, use super.onClick() at first in your method. 
    }
    onDoubleClick(e) {
        console.log(`Object: ${this._name}, Event: ${e.event}`);
        SceneManager.removeObject({ name: this._name });
    }
    onContextMenu(e) {
        console.log(`Object: ${this._name}, Event: ${e.event}`);
        Camera.setPos({ x: this._x, y: this._y });
    }
    onWheel(e) {
        console.log(`Object: ${this._name}, Event: ${e.event}`);
        Camera.setScale(e.props.deltaY);
    }
    onMouseMove(e) {
        EngineStore.setHoverObject(this._name);
    }
}

export default TObject
