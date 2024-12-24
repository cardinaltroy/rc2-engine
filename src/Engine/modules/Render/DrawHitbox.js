import { useCanvas } from "../../hooks/useCanvas"
import EngineStore from "../../stores/engineStore"
import Camera from "../Camera"

const DrawHitbox = (props) => {
    const { ctx } = useCanvas()
    const { obj, pos } = props
    var color = 'transparent'
    
    ctx.beginPath()
    ctx.lineWidth = 1/Camera._scale*2;
    if(obj._hitbox === 'rect') ctx.rect(pos.x, pos.y, obj._w, obj._h)

    if(obj._hitbox === 'arc') ctx.arc(pos.x + obj._w / 2, pos.y + obj._h / 2, obj._h / 2, 0, (Math.PI / 180) * 360)
    
    if(EngineStore.isObjectSelected(obj._name) !== -1){ // Selected
        color = 'aqua'
    }else if(EngineStore.getHoverObject === obj._name){ // Mouse hover
        color = 'grey'
    }else{// Debag or transparent
        color = EngineStore.getDebag ? "green" : "transparent"
    }

    ctx.strokeStyle = color
    
    ctx.stroke()
}

export default DrawHitbox