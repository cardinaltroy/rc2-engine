//import Camera from "./Camera";
import EngineStore from "../stores/engineStore";
import AnimationManager from "./AnimationManager";
import SkyboxManager from "./SkyboxManager";
import StateManager from "./StateManager";

//Game Speed
const tick = 1000/60 // move to enginestore

const LoopEvent = () => {

    // eslint-disable-next-line 
    const timer = setInterval(()=>{
        if(EngineStore.getPause) return;
        
        AnimationManager.update()
        StateManager.update()
        SkyboxManager.update()


        // START TEST SECTION
        //let test = SceneManager.getObject({name: 'object1'})
        //if(test) test._r +=0.1;
        // END TEST SECTION
    }, tick);
}

export default LoopEvent;