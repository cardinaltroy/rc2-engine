

class Engine{
    constructor(){
        this._debag = true
        this._cursor = { canvasX: 0, canvasY: 0 }
    }

    setCursor(props){
        if(!props) return;
        this._cursor = props;
    }
    get getCursor(){
        return this._cursor;
    }

    setDebag(status){
        this._debag = status;
    }
    get getDebag(){
        return this._debag;
    }
}

const EngineStore = new Engine();
export default EngineStore;