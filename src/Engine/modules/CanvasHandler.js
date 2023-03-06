import Camera from "./Camera";
import EngineStore from "../stores/engineStore";

class CHandler {
    constructor(){
        this._name = 'space';
    }

    onClick(e) {
        console.log(`Object: ${this._name}, Event: ${e.event}`);

        if(e.props.ctrlKey){
            EngineStore.setDebag(
                EngineStore.getDebag ? false : true
            )
        }else{
            Camera.setPos({
                x: e.props.x,
                y: e.props.y
            })
        }
    }
    
    onWheel(e){
        console.log(`Object: ${this._name}, Event: ${e.event}`);
        Camera.setScale(e.props.deltaY);
    }
    
}



const handler = new CHandler();

const registerCanvas = e => {
    if (handler[e.event]) handler[e.event](e);
}

export {
    registerCanvas
}