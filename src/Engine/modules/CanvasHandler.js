import Camera from "./Camera";
import EngineStore from "../stores/engineStore";
import UserStore from "../stores/userStore";

class CHandler {
    constructor() { // only read!
        this._name = 'space';
    }

    onClick(e) {
        console.log(`Object: ${this._name}, Event: ${e.event}`);

        EngineStore.dropSelectedObject()

        if (e.props.ctrlKey) {
            /*EngineStore.setDebag(
                EngineStore.getDebag ? false : true
            )*/
        } else {
            Camera.setPos({
                x: e.props.x,
                y: e.props.y
            })
        }
    }

    onWheel(e) {
        console.log(`Object: ${this._name}, Event: ${e.event}`);
        Camera.setScale(e.props.deltaY);
    }
    onMouseMove(e) {
        EngineStore.setHoverObject()
    }
    onKeyDown(e) {
        switch (e.props.code) {
            case "KeyH":
                EngineStore._debag = !EngineStore._debag
                break;
            case "KeyL":
                UserStore._starsLight = !UserStore._starsLight
                break;
            case "KeyW":
                UserStore._direction = 1
                break;
            case "KeyS":
                UserStore._direction = -1
                break;
            case "Space":
                UserStore._speed = UserStore._speed === 0 ? 2 : 0
                break;
            default:
                console.log(e.props.code)
        }

    }
}



const handler = new CHandler();

const registerCanvas = e => {
    if (handler[e.event]) handler[e.event](e);
}

export {
    registerCanvas
}