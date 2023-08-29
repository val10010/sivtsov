import React from 'react';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import DeviceProvider from './contexts/Device/DeviceProvider';

import './App.scss';




const App =  () => {
    const content = useRoutes(routes);

    return (
       <DeviceProvider>
           { content }
       </DeviceProvider>
    );
};

export default App;
