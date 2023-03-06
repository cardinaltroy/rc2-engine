# Getting Started with RC2 Engine

You can testing live demo: [Test Demo](https://github.com/facebook/create-react-app).

![alt text](https://github.com/cardinaltroy/rc2-engine/blob/main/scrn1.jpg?raw=true)

## Default control & hotkey

In the engine directory, you can use:

### `Move camera`

Click LMB (LeftMouseButton) on space or RMB on any object.\
Then thecamera will move to click point or center of object.

### `Zoom`

Just use mouse wheel.

### `On/Off debag mode`

Click Ctrl + LMB on space.\
When debag is on, you can see system information and objects hitbox area (green lines around of objects).

### `Interaction with objects`

LMB - select objects, RMB - move camera to center object, DoubleClick - delete object

## Simple start

All what you need its copy folder "Engine" to your project and create Canvas component:

```js
import './Canvas.css';
import { Start } from '../../Engine';
import { useEvents } from '../../Engine/hooks/useEvents';
import { useEffect } from 'react';

const Canvas = () => {

    //Getting handlers for events
    const { setEvent } = useEvents();
    
    // Starting engine after rendered canvas
    useEffect(() => Start(), [])

    return (
        <canvas
            onClick={setEvent}
            onDoubleClick={setEvent}
            onContextMenu={setEvent}
            onMouseMove={setEvent}
            onWheel={setEvent}

            height={window.innerHeight}
            width={window.innerWidth}
            id="canvas"
        >Your browser not support canvas</canvas>
    );
};

export default Canvas;
```
Done.

### What modules are already there?

### `AssetLoader`

### `SceneEditor`

### `Camera`

### `hook: useCanvas`

### `hook: useEvent`
