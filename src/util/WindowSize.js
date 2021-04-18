import React, { useState, useEffect } from 'react';

export const WindowSize = () => {

    const hasWindow = typeof window != "undefined";

    const getWindowSize = () => {
        const windowHeight = hasWindow ? window.innerHeight : 0;
        const windowWidth = hasWindow ? window.innerWidth : 0;

        return { windowWidth, windowHeight };
    };

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        if (hasWindow) {
            window.addEventListener('resize', () => {
                setWindowSize(getWindowSize());
            });
        }
    }, [hasWindow]);


    return windowSize;
};
