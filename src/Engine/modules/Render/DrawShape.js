import { useCanvas } from "../../hooks/useCanvas";

const DrawShape = (props) => {
    const { ctx } = useCanvas();
    const { obj, pos } = props;

    ctx.fillStyle = obj._color;
    ctx.fillRect(
        pos.x,
        pos.y,
        obj._w,
        obj._h
    )
}

export default DrawShape;