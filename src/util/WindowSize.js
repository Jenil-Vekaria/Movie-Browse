import { useState, useEffect } from 'react';

export const WindowSize = () => {

    const hasWindow = typeof window != "undefined";

    const [windowSize, setWindowSize] = useState(hasWindow ? window.innerWidth : 0);



    useEffect(() => {
        const getWindowSize = () => {
            const windowWidth = hasWindow ? window.innerWidth : 0;

            return windowWidth;
        };

        if (hasWindow) {
            window.addEventListener('resize', () => {
                setWindowSize(getWindowSize());
            });
        }
    }, [hasWindow]);


    return windowSize;
};
