import assetsList from "../content/assetsList";
import scenesList from "../content/scenesList";
import AssetManager from "./AssetManager";
import regLoopManager from "./LoopManager";
import regRenderManager from "./Render";
import SceneManager from "./SceneManager";

class PreLoader {
    constructor() {
        this.isLoaded = false;
    }

    async load() {
        if (this.isLoaded) return;
        this.isLoaded = true;

        await AssetManager.initAssets(assetsList);
        SceneManager.initScene(scenesList.default);

        regRenderManager();
        regLoopManager();
    }
}

const preLoaderInstance = new PreLoader();
export default preLoaderInstance