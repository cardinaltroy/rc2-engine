import { observer } from 'mobx-react-lite';
import './StarView.scss';
import EngineStore from '../../../Engine/stores/engineStore';
import SceneManager from '../../../Engine/modules/SceneManager';
import AssetManager from '../../../Engine/modules/AssetManager';

const StarView = observer(() => {
    if (EngineStore._select.length === 0) return null;

    let target = SceneManager.getObject({ name: EngineStore._select[0] })
    let img = AssetManager.getOne(target._model)
    return (
        <div className='UI StarView'>
            <img src={img.path} alt='target' />
        </div>
    );
});

export default StarView;