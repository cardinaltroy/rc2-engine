import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import GameArea from './components/GameArea/GameArea';
import Menu from './components/Menu/Menu';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/gamearea" element={<GameArea />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
