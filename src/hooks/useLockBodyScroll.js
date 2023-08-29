import { useEffect } from 'react';

export const useLockBodyScroll = (lockScroll) => {
    useEffect(() => {
        if (lockScroll) {
            const originalStyle = window.getComputedStyle(document.body).overflow;

            document.body.style.overflow = 'hidden';

            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [lockScroll]);
};
