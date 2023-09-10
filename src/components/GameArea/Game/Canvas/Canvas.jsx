import './Canvas.css';
import { useEvents } from '../../../../Engine/hooks/useEvents';
import { useEffect, useState } from 'react';
import SceneEditor from '../../../../Engine/modules/SceneManager';

const Canvas = (props) => {
    const [resize, setResize] = useState(Date.now());

    // Getting handlers for events
    const { setEvent } = useEvents();

    // Just fix
    window.onresize = () => setResize(Date.now());
    

    return (
        <canvas 
            tabIndex={0}
            onClick={setEvent}
            onDoubleClick={setEvent}
            onContextMenu={setEvent}
            onMouseMove={setEvent}
            onWheel={setEvent}
            //onKeyDown={e => console.log(e.code)}

            height={window.innerHeight}
            width={window.innerWidth}
            id="canvas"
        >Update: </canvas>
    );
};

export default Canvas;