import React, { useState } from 'react';
import PreGameLoader from '../../Engine/modules/PreGameLoader';
import Game from './Game/Game';

const GameArea = () => {
    const [isPreLoading, setPreLoading] = useState(true);

    PreGameLoader().then(() => setPreLoading(false) );

    return (
        isPreLoading 
        ? "LOADING..."
        : <Game />
    );
};

export default GameArea;