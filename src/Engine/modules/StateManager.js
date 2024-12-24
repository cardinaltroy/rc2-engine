import SceneManager from "./SceneManager"


class StateHandler{
    update(){
        const objects = SceneManager.getObjects()

        objects.forEach(object => {
            if(object.update) object.update()
        })
    }
}

const StateManager = new StateHandler()
export default StateManager