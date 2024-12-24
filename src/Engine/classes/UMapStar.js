import EngineStore from "../stores/engineStore";
import UserStore from "../stores/userStore";
import TImage from "./TImage";
import TShape from "./TShape";

class UMapStar extends TImage {
    constructor(props) {
        super(props)
        this._z = props.z
        this._speed = props.speed
        this._glowColor = props.glowColor
    }
    update() {
        let speed = UserStore._speed;
        if (speed === 0) return;
        let direction = UserStore._direction;

        const { canvasH, canvasW } = EngineStore._canvasSize;
        this._z -= this._speed * direction; // Двигаем звезды по оси Z

        if (this._z <= 0) {
            // Star behind the window
            this._z = UserStore._z - 1;
            this._x = Math.random() * canvasW;
            this._y = Math.random() * canvasH;
            this._speed = speed + Math.random() * 0.3; // случайная скорость для разнообразия
        }
        // Star in deep space
        else if (this._z >= canvasW) {
            this._z = Math.random() * UserStore._z;
            this._x = Math.random() * canvasW;
            this._y = Math.random() * canvasH;
            this._speed = speed + Math.random() * 0.3;
        }
    }
}
export default UMapStar