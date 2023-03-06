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