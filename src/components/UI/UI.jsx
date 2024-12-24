
import Dev from './Dev/Dev';
import Git from './Git/Git';
import StarView from './StarView/StarView';
import './UI.scss';

const UI = () => {
    return (
        <>
            <Dev/>
            <StarView/>
            <Git/>
        </>
    );
};

export default UI;