import scenesList from "../content/scenesList"
import SceneManager from "./SceneManager"

class SkyboxHandler{
    constructor(){
        this._sun = false
        this._sunColor = 'white'
        this._sunShadowColor = 'white'
        this._sunTime = 220 // 0 -> 360
        this._sunRadius = 3
        this._sunLightAlphaBackground = 0.4
        this._sunLightAlphaObjects = 0.3

        this._sunObjectsColor0 = '#fad797'
        this._sunObjectsColor01 = '#ebb44f'
        this._sunObjectsColor03 = '#9b4b34'
        this._sunObjectsColor05 = '#4e2835'
        this._sunObjectsColor06 = '#361e36'
        this._sunObjectsColor09 = '#271a36'
        this._sunObjectsColor1 = '#0b0a22'

        this._sunBackgroundColor0 = '#fad797'
        this._sunBackgroundColor01 = '#ebb44f'
        this._sunBackgroundColor03 = '#9b4b34'
        this._sunBackgroundColor05 = '#4e2835'
        this._sunBackgroundColor06 = '#361e36'
        this._sunBackgroundColor09 = '#271a36'
        this._sunBackgroundColor1 = '#0b0a22'
    }
    get getCurrentSkybox(){
        return scenesList[SceneManager.getCurrentScene].skybox
    }
    update(){
        //this._sunTime +=1;
    }

    calcSunPosition(deg){
        return {}
    }
}

const SkyboxManager = new SkyboxHandler()
export default SkyboxManager