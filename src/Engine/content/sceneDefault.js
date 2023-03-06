const sceneDefault = {
    scene: 'default',
    objects:[
        {class: 'TImage', hitbox:'arc', model:'test', x:0,y:0,w:50,h:50,r:0},
        {class: 'TShape', hitbox:'rect', type: 'rect', color: "white", x:50,y:100,w:100,h:50,r:0},
        {class: 'TImage', hitbox:'arc', model:'test_anim', x:100,y:-100,w:100,h:100,r:0},
        {class: 'TImage', hitbox:'arc', model:'test', x:-50,y:-700,w:1000,h:1000,r:15}
    ]
} 

export default sceneDefault;