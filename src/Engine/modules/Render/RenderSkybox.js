import { useCanvas } from "../../hooks/useCanvas"
import AssetManager from "../AssetManager"
import { ToRadian } from "../Calc"
import SkyboxManager from "../SkyboxManager"

const RenderSkybox = (props) => {
    const { ctx, canvas } = useCanvas()
    let skybox = SkyboxManager.getCurrentSkybox
    let sceneBackground = AssetManager.getOne(skybox.background);

    // Sky
    if (sceneBackground) {
        const { img } = sceneBackground;
        if (skybox.repeat) {
            const pattern = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    }

    //Sun & Light
    if (!SkyboxManager._sun) return
    /* Background Gradient */
    //let pos = {x:EngineStore.getCursor.canvasX, y: EngineStore.getCursor.canvasY}

    const angle = SkyboxManager._sunTime
    const radius = SkyboxManager._sunRadius
    const sunX = canvas.width / 2 + (canvas.width / 2 - radius) * Math.cos(ToRadian(angle))
    const sunY = canvas.height / 2 + (canvas.height / 2 - radius) * Math.sin(ToRadian(angle))

    ctx.globalAlpha = SkyboxManager._sunLightAlphaBackground
    let gradient = ctx.createRadialGradient(sunX, sunY, 1, sunX, sunY, canvas.width)
    gradient.addColorStop(0, '#a2c8f7');   // Светлый голубой
    gradient.addColorStop(0.1, '#7aade7');  // Легкий синий
    gradient.addColorStop(0.3, '#4b6b9d');  // Тёмно-синий
    gradient.addColorStop(0.5, '#2e3b5f');  // Глубокий синий
    gradient.addColorStop(0.6, '#1d2a4a');  // Тёмно-синий с фиолетовым оттенком
    gradient.addColorStop(0.9, '#101e34');  // Очень тёмный синий
    gradient.addColorStop(1, '#0a0f21');   // Почти чёрный синий
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 1

    /* Sun */
    ctx.shadowColor = "red"
    ctx.shadowBlur = 30


    ctx.beginPath()
    ctx.arc(sunX, sunY, radius, 0, 2 * Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.shadowBlur = 0

}

export default RenderSkybox