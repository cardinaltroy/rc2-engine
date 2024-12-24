import './Canvas.css';
import { useEvents } from '../../../../Engine/hooks/useEvents';
import { useState } from 'react';

const Canvas = (props) => {
    const [resize, setResize] = useState(Date.now());
    // Getting handlers for events
    const { setEvent } = useEvents();

    // Just fix
    window.onresize = () => {
        setResize(Date.now())
    }


    return (
        <canvas
            tabIndex={0}
            onClick={setEvent}
            onDoubleClick={setEvent}
            onContextMenu={setEvent}
            onMouseMove={setEvent}
            onWheel={setEvent}
            onKeyDown={setEvent}

            height={window.innerHeight}
            width={window.innerWidth}
            id="canvas"
        >Update: {resize}</canvas>
    );
};

export default Canvas;