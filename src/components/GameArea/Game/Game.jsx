import React, { useState } from 'react';
import Canvas from './Canvas/Canvas';

const Game = () => {
    /*const isMenu = EngineStore.isMenu;

    return (
        isMenu 
            ? <Menu /> wad
            : <div>
                <Canvas />
                <UI />
            </div>
    );*/
    return (
        <>
            <Canvas />
        </>
    )
};

export default Game;