import { useCanvas } from "../../hooks/useCanvas";
import { useEvents } from "../../hooks/useEvents";
import DrawHitbox from "./DrawHitbox";
import SceneManager from "../SceneManager";
import EngineStore from "../../stores/engineStore";
import AssetManager from "../AssetManager";
import UserStore from "../../stores/userStore";

const RenderSpace = (props) => {
    const { ctx, canvas } = useCanvas();
    const { getEvent, dropEvent } = useEvents();
    const objects = SceneManager.getObjects();
    const e = getEvent();
    let targetEvent;

    if (!objects) return;

    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const star of objects.values()) {
        const sx = (star._x - canvas.width / 2) * (canvas.width / star._z);
        const sy = (star._y - canvas.height / 2) * (canvas.width / star._z);
        const size = Math.max(1, 10 - star._z / 100) * 5; // Размер звезды зависит от её глубины
        const alpha = Math.max(0, Math.min(1, 1 - (star._z / canvas.width)));

        if (UserStore._starsLight) {
            // Плавное появление свечения в зависимости от глубины звезды
            const glowRadius = 300; // Радиус свечения
            const glowAlpha = Math.max(0, Math.min(0.2, 0.8 - star._z / canvas.width)); // Прозрачность свечения также зависит от глубины

            // Создаем радиальный градиент для свечения
            const gradient = ctx.createRadialGradient(
                canvas.width / 2 + sx, // Начало градиента по X
                canvas.height / 2 + sy, // Начало градиента по Y
                0, // Внутренний радиус (в центре звезды)
                canvas.width / 2 + sx, // Конец градиента по X
                canvas.height / 2 + sy, // Конец градиента по Y
                glowRadius // Конечный радиус (дистанция до края свечения)
            );

            // Настроим цвета градиента (голубой, но с более мягким переходом)
            gradient.addColorStop(0, `rgba(${star._glowColor}, ${glowAlpha})`); // Голубой цвет в центре
            gradient.addColorStop(1, `rgba(0, 191, 255, 0)`); // Полная прозрачность на краю

            // Отрисовка свечения вокруг звезды
            ctx.globalAlpha = 1; // Устанавливаем непрозрачность на 1 для свечения
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(canvas.width / 2 + sx, canvas.height / 2 + sy, glowRadius, 0, Math.PI * 2);
            ctx.fill();
        }

        // Отрисовка самой звезды с изменяющейся прозрачностью
        const model = AssetManager.getOne(star._model);
        ctx.globalAlpha = alpha;  // Устанавливаем прозрачность для звезды
        ctx.drawImage(model.img, canvas.width / 2 + sx - size / 2, canvas.height / 2 + sy - size / 2, size, size);
        ctx.globalAlpha = 1;

        if (EngineStore.getHoverObject === star._name || EngineStore.isObjectSelected(star._name) !== -1) {
            // Координаты для прямоугольника и текста
            const rectX = canvas.width / 2 + sx + star._w;  // Расстояние между звездой и прямоугольником
            const rectY = canvas.height / 2 + sy - 30;  // Выравнивание по вертикали
            const rectWidth = 200;  // Ширина прямоугольника
            const rectHeight = 100;  // Высота прямоугольника

            // Отрисовка прямоугольника
            ctx.fillStyle = "rgba(52, 52, 52, 0.5)";  // Полупрозрачный черный
            ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

            // Отрисовка текста
            ctx.fillStyle = "white";
            ctx.font = "20px Arial";  // Размер и шрифт
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";  // Выравнивание текста по вертикали
            ctx.fillText(`STAR: ${star._name.toUpperCase()}`, rectX + 10, rectY + 20);
            ctx.font = "15px Arial";  // Размер и шрифт
            ctx.fillText(`class: UMapStar`, rectX + 10, rectY + 45);
            ctx.fillText(`model: ${star._model}`, rectX + 10, rectY + 70);
        }

        // Draw hitbox for object
        let pos = { x: sx + canvas.width / 2 - star._w / 2, y: sy + canvas.height / 2 - star._h / 2, }
        DrawHitbox({ obj: star, pos });

        // Event on current object but we need the last object from the list
        if (e.event && ctx.isPointInPath(e.props.canvasX, e.props.canvasY)) {
            targetEvent = star;
        }
    }

    if (targetEvent) {
        // If object has a handler for the event
        if (targetEvent[e.event]) targetEvent[e.event](e);

        // Event was on object
        dropEvent(true);

    } else {
        // Event was on empty space
        dropEvent(false);
    }
}

export default RenderSpace;
