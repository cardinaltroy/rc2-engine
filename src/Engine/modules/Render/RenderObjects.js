import { UserToScreen } from "../Calc";
import { useCanvas } from "../../hooks/useCanvas";
import { useEvents } from "../../hooks/useEvents";
import Camera from "../Camera";
import DrawImage from "./DrawImage";
import DrawShape from "./DrawShape";
import DrawHitbox from "./DrawHitbox";
import SceneManager from "../SceneManager";

const RenderObjects = (props) => {
    const { ctx, canvas } = useCanvas();
    const { getEvent, dropEvent } = useEvents();
    const zoom = Camera.getScale.scale;
    const camPos = Camera.getPos;
    const objects = SceneManager.getObjects();
    const e = getEvent();
    let targetEvent;

    if (!objects) return;


    for (const obj of objects.values()) {
        if (!obj._show) continue;
        const className = obj._objtype;

        var pos;
        if (className === "TEffect" && obj._attach) { // Finding new coords for effect
            let parent = SceneManager.getObject({ name: obj._attach });
            if (!parent) {
                obj.destroy()
                continue;
            }

            var deg = Math.atan2(parent._y - obj._y, parent._x - obj._x) * (180 / Math.PI)
            deg = deg < 180 ? 180 + deg : 360 + deg - 180
            const angle = (parent._r + deg) * (Math.PI / 180);
            const dx = obj._x;
            const dy = obj._y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            pos = UserToScreen({
                x: parent._x + Math.cos(angle) * distance - obj._w / 2,
                y: parent._y + Math.sin(angle) * distance + obj._h / 2
            });
        } else { // Use default coords
            pos = UserToScreen({
                x: obj._x - obj._w / 2,
                y: obj._y + obj._h / 2
            });
        }

        ctx.save();

        //Translate to centre canvas
        ctx.translate(canvas.width / 2, canvas.height / 2);
        //Zoom
        ctx.scale(zoom, zoom);
        //Translate to camera position
        ctx.translate(-camPos.x, camPos.y);

        //Rotate object
        if (obj._r !== 0) {
            ctx.translate(pos.x + obj._w / 2, pos.y + obj._h / 2);
            ctx.rotate(-(obj._r * Math.PI / 180))
            ctx.translate(-(pos.x + obj._w / 2), -(pos.y + obj._h / 2))
        }

        //Draw Image
        if (className === "TImage" || className === "TEffect") DrawImage({ obj, pos });
        //Draw Shape
        if (className === "TShape") DrawShape({ obj, pos });
        //Draw hitbox for object
        DrawHitbox({ obj, pos });

        //Event on current object but we need the last object from list
        //in situation when second object on the first
        if (e.event && ctx.isPointInPath(e.props.canvasX, e.props.canvasY)) {
            targetEvent = obj;
        }

        ctx.restore();
    }

    if (targetEvent) {
        //If object have handler for event
        if (targetEvent[e.event]) targetEvent[e.event](e);

        //Event was on object
        dropEvent(true)

    } else {
        //Event was on empty space
        dropEvent(false)
    }


}

export default RenderObjects