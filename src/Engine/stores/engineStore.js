import { makeObservable, observable } from "mobx"


class Engine {
    constructor() {
        this._pause = false //LoopManager + AnimationManager
        this._debag = false
        this._dev = true
        this._maxSelect = 1

        this._cursor = { canvasX: 0, canvasY: 0 }
        this._canvasSize = {canvasW: 1920, canvasH: 1080} // only when you cant use useCanvas()
        this._select = []
        this._hover = ''
        makeObservable(this,{
            _select: observable
        })
    }

    get getCursor() {
        return this._cursor
    }
    get getDebag() {
        return this._debag
    }
    get getSelectedObjects() {
        return this._select
    }
    get getHoverObject() {
        return this._hover
    }
    get getPause() {
        return this._pause
    }

    setPause(value = false) {
        this._pause = value
    }

    setCursor(props) {
        if (!props) return
        this._cursor = props
    }

    setDebag(status) {
        this._debag = status
    }

    setMaxSelected(value = 1) {
        this._maxSelect = value
    }

    setHoverObject(name = '') {
        this._hover = name
    }

    selectObject(name) {
        let max = this._maxSelect;
        let objects = this._select;
    
        let index = objects.findIndex(elem => elem === name);
    
        if (index !== -1) { // Если объект уже выбран
            objects.splice(index, 1); // Удаляем его
        } else { // Если объект еще не выбран
            if (objects.length >= max) {
                objects.shift(); // Убираем первый элемент из массива
            }
            objects.push(name); // Добавляем новый объект
        }
    }
    

    dropSelectedObject() {
        this._select = []
    }

    isObjectSelected(name) {
        return this._select.indexOf(name)
    }
}

const EngineStore = new Engine()
export default EngineStore