import { UserToScreen } from "../Calc";
import { useCanvas } from "../../hooks/useCanvas";
import { useEvents } from "../../hooks/useEvents";
import Camera from "../Camera";
import SceneEditor from "../SceneEditor";
import DrawImage from "./DrawImage";
import DrawShape from "./DrawShape";
import DrawHitbox from "./DrawHitbox";

const RenderObjects = (props) => {
    const { ctx, canvas } = useCanvas();
    const { getEvent, dropEvent } = useEvents();
    const zoom = Camera.getScale.scale;
    const camPos = Camera.getPos;
    const objects = SceneEditor.getObjects();
    const e = getEvent();
    let targetEvent;
    
    if(!objects) return;

    for (const obj of objects.values()) {
        if(!obj._show) continue;

        const pos = UserToScreen({ 
            x: obj._x-obj._w/2, 
            y: obj._y+obj._h/2
        });

        ctx.save();

        //Translate to centre canvas
        ctx.translate( canvas.width / 2, canvas.height / 2 );
        //Zoom
        ctx.scale(zoom, zoom);
        //Translate to camera position
        ctx.translate(-camPos.x, camPos.y);

        //Rotate object
        if(obj._r !== 0){
            ctx.translate(pos.x+obj._w/2, pos.y+obj._h/2);
            ctx.rotate(-(obj._r*Math.PI/180))
            ctx.translate(-(pos.x+obj._w/2), -(pos.y+obj._h/2))
        }

        const className = obj.constructor.name;

        //Draw Image
        if(className === "TImage") DrawImage({obj, pos});
        //Draw Shape
        if(className === "TShape") DrawShape({obj, pos});
        console.log(className);
        //Draw hitbox for object
        DrawHitbox({obj, pos});

        //Event on current object but we need the last object from list
        //in situation when second object on the first
        if (e.event && ctx.isPointInPath(e.props.canvasX, e.props.canvasY)) {
            targetEvent = obj;
        }

        ctx.restore();
    }

    if(targetEvent){
        //If object have handler for event
        if(targetEvent[e.event]) targetEvent[e.event](e);

        //Event was on object
        dropEvent(true)
        
    }else{
        //Event was on empty space
        dropEvent(false)
    }
    

}

export default RenderObjects