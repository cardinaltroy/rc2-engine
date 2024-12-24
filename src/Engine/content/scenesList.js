import { GetRand } from "../modules/Calc";
import UserStore from "../stores/userStore";

const scenesList = {
    default: {
        scene: 'default',
        title: 'Test scene',
        skybox: {
            background: '',
            repeat: false
        },
        objects: [
            //{ class: 'TImage', hitbox: 'arc', model: 'test', x: -200, y: 0, w: 500, h: 500, r: 0 },
            //{ class: 'TImage', hitbox: 'arc', model: 'test2', x: 1000, y: 0, w: 500, h: 500, r: 0 },
            //{ class: 'TImage', hitbox: 'rect', model: 'test3', x: -1000, y: 0, w: 1000, h: 164, r: 0 },
            //{ class: 'TEffect', hitbox: 'arc', model: 'test_anim', x: 100, y: 0, w: 100, h: 100, r: 0, attach: 'object3', loop:true },
            //{class: 'TImage', hitbox:'arc', model:'test', x:0,y:0,w:50,h:50,r:0},
            //{ class: 'UMapStar', hitbox: 'arc', type: 'arc', color: "rgba(255, 255, 255, 0.5)", x: 50, y: 100, w: 50, h: 50, r: 0 },
        ],
    },
}

const stars = scenesList.default.objects;
const numStars = UserStore._stars 
const speed = UserStore._speed;
// Инициализация звезд
for (let i = 0; i < numStars; i++) {
    let id = Math.abs(GetRand({min:1,max:4}))
    let glowColor = id === 1 ? '0, 191, 255' : id === 2 ? '255, 0, 72' : 3 ? '250, 235, 128' : '250, 67, 92'

    stars.push({
        class: 'UMapStar', hitbox: 'arc', type: 'arc', color: "white",
        x: Math.random() * 2000, y: Math.random() * 1000, z: Math.random() * UserStore._z,
        speed: speed + Math.random() * 0.3, w: 50, h: 50, r: 0, 
        model: `star${id}`, glowColor
    });
}

export default scenesList;