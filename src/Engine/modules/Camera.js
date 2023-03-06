class UserCamera{
    constructor(){ 
        /*
            +
            |
            |
    - ------0------ +
            |
            |
            -
        */

        this._x = 0;
        this._y = 0;
        this._scale = 1;
        this._scaleMin = 0.1;
        this._scaleMax = 3;
    }

    setPos(props){ 
        this._x = +(props.x).toFixed(2);
        this._y = +(-props.y).toFixed(2);
    }
    get getPos(){
        return {
            x: this._x, y: -this._y
        };
    }

    setScale(scale){ 
        // we getting scale -100 or 100, for step 1 we 100 *.01

        const sum = this._scale + 0.001*scale;

        if( (sum > this._scaleMax) || (sum < this._scaleMin) ) return false;

        this._scale = +(sum).toFixed(1);
    }
    get getScale(){ 
        return {
            scale: this._scale,
            min: this._scaleMin,
            max: this._scaleMax
        };
    }

}

const Camera = new UserCamera()
export default Camera;