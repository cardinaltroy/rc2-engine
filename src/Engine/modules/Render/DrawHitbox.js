import { useCanvas } from "../../hooks/useCanvas";
import EngineStore from "../../stores/engineStore";

const DrawHitbox = (props) => {
    const { ctx } = useCanvas();
    const { obj, pos } = props;
    const debagColor = EngineStore.getDebag ? "green" : "transparent";
    
    ctx.beginPath();

    if(obj._hitbox === 'rect') ctx.rect(pos.x, pos.y, obj._w, obj._h);

    if(obj._hitbox === 'arc') ctx.arc(pos.x + obj._w / 2, pos.y + obj._h / 2, obj._h / 2, 0, (Math.PI / 180) * 360);

    ctx.strokeStyle = obj._select ? "blue" : debagColor;
    
    ctx.stroke();
}

export default DrawHitbox;