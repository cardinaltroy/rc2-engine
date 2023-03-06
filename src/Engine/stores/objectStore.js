import TObject from '../classes/TObject';
import TImage from '../classes/TImage';
import TShape from '../classes/TShape';

class objectStore{
    constructor(){
        this._uid = 0;
        this._objects = new Map();
    }

    //For naming objects
    get getUID(){
        this._uid ++;
        return this._uid;
    }
    getSize(){
        return this._objects.size;
    }

    //Get one object
    getObject(props){
        return this._objects.get(props.name);
    }

    get getObjects(){
        return this._objects;
    }

    //Delete object
    delObject(props){
        this._objects.delete(props.name);
    }

    //Add new objects to scene
    setListObjects(list){
        for(const obj of list){
            obj.name = 'object'+this.getUID;

            if(obj.class === "TObject") this._objects.set(obj.name, new TObject(obj));
            if(obj.class === "TImage") this._objects.set(obj.name, new TImage(obj));
            if(obj.class === "TShape") this._objects.set(obj.name, new TShape(obj));
        }
    }
}


export default objectStore;