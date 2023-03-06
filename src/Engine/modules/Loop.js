//import Camera from "./Camera";
import SceneEditor from "./SceneEditor";
import { UpdateAnimation } from "./AnimationHandler";

//Game Speed
const tick = 1000/60

const LoopEvent = () => {

    // eslint-disable-next-line 
    const timer = setInterval(()=>{
        
        UpdateAnimation()


        // DEMO CODE START


        //  Rotate object
        const obj = SceneEditor.getObject({name: "object1"});
        if(obj) obj.setPosition({
            x: obj._x-0.05,
            y: obj._y+0.05
        });
        //  Move object
        const obj2 = SceneEditor.getObject({name: "object4"});
        if(obj2) obj2.setRotate({
            r: obj2._r+0.05
        });

        
        //  Move camera
        /*const cam = Camera.getPos;
        Camera.setPos({
            x: cam.x+0.1,
            y: cam.y-0.1 
        })*/

        
        // DEMO CODE END 

        

    }, tick);
}

export default LoopEvent;