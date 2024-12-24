# Getting Started with RC2 Engine

You can testing live demo: [Demo build at 03.2023](https://idyllic-ganache-2809ec.netlify.app/).

![alt text](https://github.com/cardinaltroy/rc2-engine/blob/spacetravel/12.png?raw=true)
![alt text](https://github.com/cardinaltroy/rc2-engine/blob/spacetravel/123.png?raw=true)

### `Interaction with objects`

LMB - select objects, DoubleClick - delete object


## What modules are already there?

### `Event system in Canvas`

Game objects on Canvas at now is clickable and etc. Almost all reat events translate to objects

### `AssetManager`

[ Object ] Loading assets (static/animation)

### `SceneManager`

[ Object ] Add/Remove objects, load/change scenes, etc

### `Camera`

[ Object ] Just camera

### `hook: useCanvas`

Getting access to canvas,context and offScreenCanvas. { canvas, ctx, offCanvas, offCtx }

### `hook: useEvent`

Use only in component Canvas. Hook sends react events to objects in canvas

### `store: objectStore`

[ Object ] Here storing all objects for render at current scene

### `store: engineStore`

[ Object ] Engine settings

### `store: userStore`

[ Object ] Your stuff
