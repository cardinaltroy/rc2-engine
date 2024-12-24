import { useCanvas } from "../../hooks/useCanvas";
import EngineStore from "../../stores/engineStore";
import AssetManager from "../AssetManager";
import { RotateToXY, ToRadian, UserToCanvas } from "../Calc";
import SkyboxManager from "../SkyboxManager";

const DrawImage = (props) => {
    const { ctx, canvas, offCanvas, offCtx } = useCanvas();
    const { obj, pos } = props;
    const model = AssetManager.getOne(obj._model);

    const drawCtx = (ctxType, posType) => {
        if (model.type === 'animation') {
            const animX = obj._animX;
            const animY = obj._animY;

            ctxType.drawImage(
                model.img, animX * model.w, animY * model.h, model.w, model.h, posType.x, posType.y, obj._w, obj._h
            );
        }

        if (model.type === "static") {
            ctxType.drawImage(
                model.img, posType.x, posType.y, obj._w, obj._h
            );
        }
    };

    if (!SkyboxManager._sun) { // Draw without light
        drawCtx(ctx, pos);
    } else { // Sunlight on object
        drawCtx(offCtx, { x: 0, y: 0 });

        // Getting position & angle sun and object
        const angle = SkyboxManager._sunTime;
        const radius = SkyboxManager._sunRadius;
        const sunX = canvas.width / 2 + (canvas.width / 2 - radius) * Math.cos(ToRadian(angle));
        const sunY = canvas.height / 2 + (canvas.height / 2 - radius) * Math.sin(ToRadian(angle));
        let xy = UserToCanvas({ x: obj._x, y: obj._y });
        let diff = RotateToXY({
            object: { ...xy },
            target: { x: sunX, y: sunY },
        });

        // Calculate gradient start and end points based on rotation
        const gradientAngle = ToRadian(diff + obj._r);
        const halfWidth = obj._w / 2;
        const halfHeight = obj._h / 2;

        // Use the smaller dimension (width or height) to calculate the gradient points
        const minDimension = Math.min(obj._w, obj._h) / 2;

        // Calculate the start and end points of the gradient using the smaller dimension
        const startX = halfWidth + Math.cos(gradientAngle) * minDimension;
        const startY = halfHeight + Math.sin(gradientAngle) * minDimension;
        const endX = halfWidth - Math.cos(gradientAngle) * minDimension;
        const endY = halfHeight - Math.sin(gradientAngle) * minDimension;

        const gradient = offCtx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, '#fad797')
        gradient.addColorStop(0.1, '#ebb44f')
        gradient.addColorStop(0.3, '#9b4b34')
        gradient.addColorStop(0.5, '#4e2835')
        gradient.addColorStop(0.6, '#361e36')
        gradient.addColorStop(0.9, '#271a36')
        gradient.addColorStop(1, '#0b0a22')
        

        offCtx.save();
        offCtx.globalCompositeOperation = 'source-atop';
        offCtx.globalAlpha = SkyboxManager._sunLightAlphaObjects;
        offCtx.fillStyle = gradient;
        offCtx.fillRect(0, 0, obj._w, obj._h);
        offCtx.restore();

        ctx.drawImage(offCanvas, pos.x, pos.y);
        if(!EngineStore.getDebag) return;

        // Draw gradient points and connecting line
        ctx.beginPath();
        ctx.moveTo(pos.x + startX, pos.y + startY);
        ctx.lineTo(pos.x + endX, pos.y + endY);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw start point
        ctx.beginPath();
        ctx.arc(pos.x + startX, pos.y + startY, 10, 0, Math.PI * 2);
        ctx.fillStyle = 'blue';
        ctx.fill();

        // Draw end point
        ctx.beginPath();
        ctx.arc(pos.x + endX, pos.y + endY, 10, 0, Math.PI * 2);
        ctx.fillStyle = 'green';
        ctx.fill();

    }
};



export default DrawImage;
