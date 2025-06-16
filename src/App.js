import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTES } from './route';

function App() {
    const routing = useRoutes(ROUTES);
    return routing;
}


export default App;

