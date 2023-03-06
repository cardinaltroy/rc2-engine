import { useCanvas } from "../../hooks/useCanvas";
import RenderObjects from "./RenderObjects";
import RenderDebag from "./RenderDebag";
import RenderUI from "./RenderUI";

const RenderStart = (props) => {
    const { ctx, canvas } = useCanvas();
    let [fpsCounter, lastDate] = [0, Date.now()];
    let fps = 0;

    //GET FPS
    const updateFps = () => {

        if ((Date.now() - lastDate) > 1000) {
            //debag fps
            fps = fpsCounter;
            //drop counter
            [fpsCounter, lastDate] = [0, Date.now()];
            //exit
            return
        }
        fpsCounter++;
    }



        
    //RENDER CANVAS

    const render = () => {
        
        //Clear previously layer
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        RenderObjects({});  

        RenderDebag({fps});

        RenderUI({});
        
        updateFps();
        requestAnimationFrame(render);
    }

    render();
}

export default RenderStart