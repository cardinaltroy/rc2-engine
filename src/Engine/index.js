import registerRenderHandler from './modules/Render';
import registerLoopHandler from './modules/Loop';
import AssetLoader from './modules/AssetLoader';
import SceneEditor from './modules/SceneEditor';

import assetsDefault from './content/assetsDefault';
import sceneDefault from './content/sceneDefault';



//Init engine
const Start = () => {
    //INIT ASSETS
    AssetLoader.initAssets(assetsDefault).then(() =>{

        //INIT SCENE
        SceneEditor.initScene(sceneDefault);

        //RUN HANDLERS
        registerRenderHandler();
        registerLoopHandler();
    });
}
export { Start }