import assetsDefault from "../content/assetsDefault"
import sceneDefault from "../content/sceneDefault";
import AssetLoader from "./AssetManager"
import regLoopManager from "./LoopManager";
import regRenderManager from "./Render";
import SceneEditor from "./SceneManager";

let state = false;

const PreGameLoader = async() => {
    if(state) return;
    state = true;
    
    await AssetLoader.initAssets(assetsDefault);

    SceneEditor.initScene(sceneDefault)

    regRenderManager();
    regLoopManager();
    
}

export default PreGameLoader