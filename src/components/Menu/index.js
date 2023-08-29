import React, { useContext } from 'react';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import Mobile from './components/Mobile';
import Desktop from './components/Desktop';

const Menu = ({ children }) => {
    const { isMobile, isTablet, isDesktop  } = useContext(DeviceContext);

    return (
        <>
            { isDesktop && <Desktop/> }
            { (isMobile || isTablet) && <Mobile/>}
        </>
    );
};

export default Menu;
