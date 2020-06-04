import React from 'react';
import { Route, BrowserRouter }  from 'react-router-dom';

import Home from './Pages/Home';
import CreatePoints from './Pages/CreatePoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home}  exact path="/"/>
            <Route component={CreatePoints}  path="/create-point"/>
        </BrowserRouter>
    )
};


export default Routes;