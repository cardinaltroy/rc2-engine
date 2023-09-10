import './App.css';
import GameArea from './components/GameArea/GameArea';
import { useCanvas } from './Engine/hooks/useCanvas';

function App() {
    const HotKeyHandler = e => {
        const { canvas } = useCanvas();

        // Game on pause or loading
        if(!canvas) return;

        // User using input or textarea
        const activeElement = document.activeElement;
        if (activeElement && ['INPUT', 'TEXTAREA'].includes(activeElement.tagName)) {
            return;
        }

        console.log(e.code)
    } 


    return (
        <div className="App"
            onKeyDown={HotKeyHandler}
        >
            <GameArea />
        </div>
    );
}

export default App;
