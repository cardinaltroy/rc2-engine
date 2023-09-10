import objectStore from "../stores/objectStore";


class sceneEditor{
    constructor(){
        this._current = '';
        this._scenes = new Map();
    }

    get getCurrentScene(){
        return this._current;
    }

    initScene(props){   // expect {scene,objects}
        const store = new objectStore();
        store.setListObjects(props.objects);

        this._scenes.set(props.scene, store);
        this._current = props.scene;
    }
    showScene(scene){
        if(!this._scenes.has(scene)) return;

        return this._current = scene;
    }

    spawnObjects(props){    // expect [{},{},{}]
        if(!props) return;

        const scene = this._scenes.get( this._current );
        scene.setListObjects(props);
    }
    removeObject(props){    // expect {name}
        if(!props) return;

        const scene = this._scenes.get( this._current );
        scene.delObject(props);
    }   

    getObject(props){   // expect {name}
        if(!props || (this._current === '')) return;
        
        const scene = this._scenes.get( this._current );
        return scene.getObject(props)
    }

    getObjects(){
        if(this._current === '') return false;

        const scene = this._scenes.get( this._current );
        return scene.getObjects;
    }
    
    getCountObjects(){
        if(this._current === '') return false;
        
        const scene = this._scenes.get( this._current );
        return scene.getSize();
    }




}


const SceneEditor = new sceneEditor();
export default SceneEditor;