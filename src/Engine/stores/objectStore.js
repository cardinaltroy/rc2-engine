import TObject from '../classes/TObject';
import TImage from '../classes/TImage';
import TShape from '../classes/TShape';
import UMapStar from '../classes/UMapStar';
import TEffect from '../classes/TEffect';

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
        let result = [];
        
        for(const obj of list){
            const name = 'object' + this.getUID;
            const store = this._objects;

            obj.name = name;
            result.push(name);

            const classMap = {
                TObject: TObject,
                TShape: TShape,
                TImage: TImage,
                TEffect: TEffect,
                UMapStar: UMapStar,
            };

            if (classMap.hasOwnProperty(obj.class)) {
                store.set(obj.name, new classMap[obj.class](obj));
            }
        }
        return result;
    }
}


export default objectStore;