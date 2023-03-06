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


    let x = Math.round(camPos.x - (canvas.width/2 - props.x) /zoom);
    let y = Math.round(camPos.y + (canvas.height/2 - props.y) /zoom);

    return { x, y }
}

const GetRand = (props) => {
    let one = ((Math.random() < 0.5) ? -1 : 1) // 1 or -1
    let result = Math.round(props.min + Math.random() * (props.max - props.min)) * one
    return result
}


export {
    ScreenToUser,
    UserToScreen,
    GetRand
}