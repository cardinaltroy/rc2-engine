import { useCanvas } from "../../hooks/useCanvas";
import Camera from "../Camera";
import SceneEditor from "../SceneEditor";
import EngineStore from "../../stores/engineStore";

const RenderDebag = (props) => {
    const { ctx } = useCanvas();
    const debag = EngineStore.getDebag;
    const camPos = Camera.getPos;
    const cursor = EngineStore.getCursor;

    if(!EngineStore.getDebag) return;


    //Debag
    ctx.fillStyle = "white";
    ctx.font = "15px segoe ui";
    ctx.fillText(`RC2 Engine [React+Canvas] by Cardinal Troy`, 10, 25);
    ctx.fillText(`FPS: ${props.fps}`, 10, 45);
    ctx.fillText(`Zoom scale:${Camera.getScale.scale}`, 10, 65);
    ctx.fillText(`Objects rendered: ${SceneEditor.getCountObjects({})}`, 10, 85);
    ctx.fillText(`Camera x:${camPos.x}, y:${camPos.y}`, 10, 105);
    ctx.fillText(`Scene: ${SceneEditor.getCurrentScene}`, 10, 125);
    ctx.fillText(`Hitbox visible: ${debag}`, 10, 145);
    ctx.fillText(`Canvas x: ${cursor.canvasX}, y: ${cursor.canvasY}`, 10, 165);

}

export default RenderDebag;