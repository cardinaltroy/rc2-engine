import { useCanvas } from "../../hooks/useCanvas";
import AssetLoader from "../AssetManager";

const DrawImage = (props) => {
    const { ctx } = useCanvas();
    const { obj, pos } = props;
    const model = AssetLoader.getOne(obj._model);

    if(model.type === 'animation'){
        const animX = obj._animX;
        const animY = obj._animY;
        
        ctx.drawImage(
            model.img,

            animX*model.w, 
            animY*model.h, 
            model.w, 
            model.h,

            pos.x,
            pos.y,
            obj._w,
            obj._h
        )
    }

    if(model.type === "static"){
        ctx.drawImage(
            model.img,
            pos.x,
            pos.y,
            obj._w,
            obj._h
        )
    }

}

export default DrawImage;