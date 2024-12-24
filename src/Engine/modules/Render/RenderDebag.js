import { useCanvas } from "../../hooks/useCanvas";
import Camera from "../Camera";
import SceneEditor from "../SceneManager";
import EngineStore from "../../stores/engineStore";

const RenderDebag = (props) => {
    const { ctx, canvas } = useCanvas();
    const debag = EngineStore.getDebag;
    const camPos = Camera.getPos;
    const cursor = EngineStore.getCursor;

    if (!EngineStore.getDebag) return;
    let marginTop = canvas.height - 150;
    let marginLeft = 10;

    //Debag
    ctx.fillStyle = "white";
    ctx.font = "15px segoe ui";
    ctx.fillText(`RC2 Engine [React+Canvas] by Cardinal Troy`, marginLeft, marginTop + 0);
    ctx.fillText(`FPS: ${props.fps}`, marginLeft, marginTop + 20);
    ctx.fillText(`Zoom scale:${Camera.getScale.scale}`, marginLeft, marginTop + 40);
    ctx.fillText(`Objects rendered: ${SceneEditor.getCountObjects({})}`, marginLeft, marginTop + 60);
    ctx.fillText(`Camera x:${camPos.x}, y:${camPos.y}`, marginLeft, marginTop + 80);
    ctx.fillText(`Scene: ${SceneEditor.getCurrentScene}`, marginLeft, marginTop + 100);
    ctx.fillText(`Hitbox visible: ${debag}`, marginLeft, marginTop + 120);
    ctx.fillText(`Screen x: ${cursor.canvasX}, y: ${cursor.canvasY}`, marginLeft, marginTop + 140);

}

export default RenderDebag;