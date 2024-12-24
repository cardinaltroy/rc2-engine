import { useCanvas } from "../../hooks/useCanvas";

const DrawShape = (props) => {
    const { ctx } = useCanvas();
    const { obj, pos } = props;

    ctx.beginPath()
    ctx.fillStyle = obj._color

    switch (obj._type) {
        case 'arc':
            ctx.arc(pos.x + obj._w / 2, pos.y + obj._h / 2, obj._h / 2, 0, (Math.PI / 180) * 360)
            break
        case 'rect':
            ctx.fillRect(pos.x, pos.y, obj._w, obj._h)
            break;
        default:
            ctx.fillRect(pos.x, pos.y, obj._w, obj._h)

    }


    ctx.fill()
    ctx.closePath()
}

export default DrawShape;