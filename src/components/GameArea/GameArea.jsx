import { useState } from 'react';
import PreLoader from '../../Engine/modules/PreLoader';
import Canvas from './Game/Canvas/Canvas';
import { useCanvas } from '../../Engine/hooks/useCanvas';
import UI from '../UI/UI';

const GameArea = () => {
    const [isPreLoading, setPreLoading] = useState(true);

    PreLoader.load().then(() => setPreLoading(false));

    const HotKeyHandler = e => {
        const { canvas } = useCanvas();

        // Game on pause or loading
        if (!canvas) return;

        // User using input or textarea
        const activeElement = document.activeElement;
        if (activeElement && ['INPUT', 'TEXTAREA'].includes(activeElement.tagName)) {
            return;
        }

        //console.log(e.code)
    }
    return (
        <div className="GameArea"
            onKeyDown={HotKeyHandler}
        >
            {isPreLoading
                ? "LOADING SCREEN..."
                : <><Canvas /><UI /></>
                }
        </div>
    );
};

export default GameArea;