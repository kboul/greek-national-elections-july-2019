import { useEffect, useState } from 'react';

export default function useBrowserHeight() {
    const [browserHeight, setBrowserHeight] = useState(window.innerHeight);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newBowserHeight = window.innerHeight;
            setBrowserHeight(newBowserHeight);
        };

        window.addEventListener('resize', updateWindowDimensions);

        return () =>
            window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    return browserHeight;
}
