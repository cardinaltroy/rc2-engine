import SceneManager from "./SceneManager"
import AssetLoader from "./AssetManager"

class AnimationHandler {
    setFrame(props) {
        if (!props && !props.x && !props.y) return

        this._animX = props.x
        this._animY = props.y
    }

    updateFrame(object, model) {
        const animX = object._animX
        const animY = object._animY
        const counter = object._animCounter
        const delay = model.delay
        let x, y

        if (delay && (counter < delay)) return object._animCounter = counter + 1

        object._animCounter = 0

        //Move frame
        if (animX < model.steps - 1) {
            x = animX + 1
            y = animY
        } else {
            x = 0
            //Move line
            if (animY < model.lines - 1) {
                y = animY + 1
            } else {
                y = 0
            }
        }

        object._animX = x
        object._animY = y

        // Only for TEffect class. Destroy object when animation is over
        if(x === model.steps-1 && y === model.lines-1 && object._objtype === 'TEffect' && !object._loop) object.destroy()
    }

    update() {
        const objects = SceneManager.getObjects()

        objects.forEach(object => {
            //Getting model from object
            let model = AssetLoader.getOne(object._model)

            //Object is not image
            if (!model) return

            //Render next sprite
            if (model.type !== 'static') {
                this.updateFrame(object, model)
            }
        })
    }
}


const AnimationManager = new AnimationHandler()
export default AnimationManager