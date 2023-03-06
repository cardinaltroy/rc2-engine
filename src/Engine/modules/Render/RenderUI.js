import { useCanvas } from "../../hooks/useCanvas";
import EngineStore from "../../stores/engineStore";

const RenderUI = (props) => {
    const {ctx, canvas} = useCanvas();
    const cursor = EngineStore.getCursor;
    


    //Center lines
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    //horizontal
    ctx.fillRect(0, cursor.canvasY, canvas.width, 1);
    //vertical
    ctx.fillRect(cursor.canvasX, 0, 1, canvas.height);

}

export default RenderUI;