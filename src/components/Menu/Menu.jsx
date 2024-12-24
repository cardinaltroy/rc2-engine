import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
    return (
        <div className='Menu'>
            <div className="listbox">
                <div className="logo">JSE 2D</div>
                <Link to='/gamearea'><div className="button">START GAME</div></Link>
                <div className="button">SETTINGS</div>
                <div className="button">AUTHORS</div>

                <div className="button">EXIT</div>
            </div>
        </div>
    );
};

export default Menu;