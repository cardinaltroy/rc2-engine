import Camera from "./Camera";
import { useCanvas } from "../hooks/useCanvas";

const UserToScreen = (props) => { // we have objects X, Y and translate to screen X,Y

    let x = props.x;
    let y = -props.y;

    return { x, y }
}

const ScreenToUser = (props) => { // we have screen X, Y and translate to objects X,Y
    let camPos = Camera.getPos;
    const zoom = Camera.getScale.scale;
    const { canvas } = useCanvas();


    let x = Math.round(camPos.x - (canvas.width / 2 - props.x) / zoom);
    let y = Math.round(camPos.y + (canvas.height / 2 - props.y) / zoom);

    return { x, y }
}

const UserToCanvas = (props) => { // method for isPointInPath()
    let camPos = Camera.getPos;
    const zoom = Camera.getScale.scale;
    const { canvas } = useCanvas();

    let x = Math.round(Math.abs(camPos.x * zoom - (props.x * zoom + canvas.width / 2)))
    let y = Math.round(Math.abs(camPos.y * zoom + (-props.y * zoom + canvas.height / 2)))

    return { x, y }
}
const GetLabelSpeed = (speed) => {
    return speed*60 // 60 - gamespeed
}

// Random
const GetRand = (props) => {
    const { min, max } = props;

    let one = ((Math.random() < 0.5) ? -1 : 1) // 1 or -1
    let result = Math.round(min + Math.random() * (max - min)) * one
    return result
}
const GetRandColor = () => {
    var r = Math.floor(Math.random() * 180);
    var g = Math.floor(Math.random() * 60);
    var b = Math.floor(Math.random() * 100);
    return "rgb(" + r + "," + g + "," + b + ")";
}


// For rotating ships
const RotateToXY = (props) => {
    const { object, target } = props;
    try {

        let deg = Math.atan2(object.y - target.y, object.x - target.x) * (180 / Math.PI)
        deg = deg < 180 ? 180 + deg : 360 + deg - 180
        return deg

    } catch (error) {
        console.log(target, object, error)
    }

}
const GetRotateDiff = (props) => {
    // its just a hell :c
    const { object, target } = props;
    let diff, vector;

    if (object > target) {
        diff = object - target
        vector = diff < 180 ? 0 : 1
    } else {
        diff = target - object
        vector = diff > 180 ? 0 : 1
    }
    diff = diff > 180 ? diff = Math.abs(diff - 360) : diff = Math.abs(diff)

    return { diff, vector }
}

// Move object
const MoveToXY = (props) => { 
    const { object } = props;
    const deg = object.deg ? object.deg : RotateToXY(props);// Working strange...


    let x = object.x + Math.cos(deg * (Math.PI / 180)) * object.speed;
    let y = object.y + Math.sin(deg * (Math.PI / 180)) * object.speed;

    return { x, y }
}

const ToRadian = (deg) => {
    return deg * Math.PI / 180;
}

const ToDeg = (rad) => {
    return rad * (180 / Math.PI);
}
const GetOppositeAngle = (deg) => {
    let result = deg - 180;

    if (result < 0) result += 360;

    return result;
}

// For thruster effect
const GetEnginePoint = (props) => {
    const { x, y, distance, deg } = props;

    return {
        x: x + distance * Math.cos(ToRadian(deg + 90) - Math.PI / 2),
        y: y + distance * Math.sin(ToRadian(deg + 90) - Math.PI / 2),
    }
}

// Getting distance to object
const GetDist = (props) => {
    const { object, target } = props;

    return Math.round(Math.sqrt(Math.pow((target.x - object.x), 2) + Math.pow((target.y - object.y), 2)));
}

const GetShortenNumber = (number) => {
    // 3000 -> 3k, 5000000 -> 5M
    if (number < 0) {
        return "-" + GetShortenNumber(-number);
    }
    if (number < 1000) {
        return number.toString();
    }

    var suffixes = ["", "K", "M", "B", "T", "P", "E"];
    var exp = Math.floor(Math.log10(number) / 3);
    var suffix = suffixes[exp];
    var divisor = Math.pow(10, exp * 3);
    var shortNumber = Math.round(number / divisor * 100) / 100;
    return shortNumber.toString() + suffix;
}

const MsToTime = (duration) => {
    let seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

const GetObjectState = (object, exception = []) => {
    return JSON.stringify(object, (key, value) => {

        // Dont save methods
        if (typeof value === 'function') {
            return undefined;
        }

        // We need to skip some params
        if (Array.isArray(exception) && exception.length !== 0) {
            return exception.filter(param => key !== param).length !== exception.length ? undefined : value;
        }

        return value;
    })
}

export {
    ScreenToUser,
    UserToScreen,
    UserToCanvas,
    GetRand,
    GetRandColor,
    GetDist,
    RotateToXY,
    MoveToXY,
    GetRotateDiff,
    GetOppositeAngle,
    GetShortenNumber,
    ToRadian,
    ToDeg,
    GetEnginePoint,
    MsToTime,
    GetObjectState,
    GetLabelSpeed,
}