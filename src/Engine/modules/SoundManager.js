import { Howl } from 'howler';
import { makeObservable, observable, runInAction } from 'mobx';

class soundLoader {
    constructor() {
        this._sounds = new Map()
        this._mute = true

        makeObservable(this,{
            _mute: observable,
        })
    }

    initAsset(name, src, vol=1) { //async for preloads in other libs except howlerjs...
        return new Promise((resolve) => {
            const sound = new Howl({
                src, volume: vol,
            });

            this._sounds.set(name, sound)   
            resolve(true)
        })
    }

    async initAssets(list) {
        for (const item of list) {
            await this.initAsset(item.name, item.path, item.vol);
        }
    }

    play(name) {
        if(this._mute) return;

        let sound = this._sounds.get(name);
        sound.loop(false)
        sound.play();
    }

    loop(name) {
        if(this._mute) return;

        let sound = this._sounds.get(name);
        sound.loop(true)
        sound.play();
    }

    stop(name) {
        let sound = this._sounds.get(name);
        sound.stop();
    }

    mute(){
        runInAction(()=>{
            this._mute = true;
        })
    }
    unmute(){
        runInAction(()=>{
            this._mute = false;
        })
    }
}

const SoundManager = new soundLoader();
export default SoundManager;