class assetLoader {
    constructor() {
        this._assets = new Map();
    }

    initAsset(src) {
        return new Promise((resolve) => {
            let img = new Image()
            img.onload = () => resolve(img)
            img.src = src
        })
    }

    async initAssets(list) {
        for (const item of list) {
            item.img = await this.initAsset(item.path);
            this._assets.set(item.name, item);
        }
    }

    getAll() {
        return this._assets;
    }
    getOne(name) {
        return this._assets.get(name);
    }

}


const AssetLoader = new assetLoader();
export default AssetLoader;