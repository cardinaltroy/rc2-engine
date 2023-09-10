import SceneEditor from "./SceneManager";
import AssetLoader from "./AssetManager";


const updateFrame = (object, model) => {
    const animX = object._animX;
    const animY = object._animY;
    const counter = object._animCounter;
    const delay = model.delay;
    let x, y;

    if( delay && (counter < delay) ) return object.setCounter(counter+1);

    object.setCounter(0);

    //Move frame
    if (animX < model.steps - 1) {
        x = animX + 1;
        y = animY;
    } else {
        x = 0;
        //Move line
        if (animY < model.lines - 1) {
            y = animY + 1;
        } else {
            y = 0;
        }
    }
    object.setAnimationFrame({ x, y });
}

const UpdateAnimation = () => {
    const objects = SceneEditor.getObjects();

    objects.forEach(object => {
        //Getting model from object
        let model = AssetLoader.getOne(object._model);

        //Object is not image
        if (!model) return; 

        //Render next sprite
        if (model.type !== 'static') {
            updateFrame(object, model)
        }


        /*if(e.type === 'Planet' || e.type === 'Star'){
            objectStore.setDeg(e.name,e.r+0.025)
        }*/
    })
}




export {
    UpdateAnimation
}