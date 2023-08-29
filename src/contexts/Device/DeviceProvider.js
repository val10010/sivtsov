import React from 'react';
import { useMediaQuery } from '@mui/material';
import { DeviceContext } from './DeviceContext';

function DeviceProvider({ children }) {
    const isDesktop = useMediaQuery('(min-width: 1200px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1199px)');
    const isMobile = useMediaQuery('(max-width: 767px)');

    const value = {
        isDesktop,
        isTablet,
        isMobile,
    };

    return (
        <DeviceContext.Provider value={value}>
            {children}
        </DeviceContext.Provider>
    );
}

export default DeviceProvider;
