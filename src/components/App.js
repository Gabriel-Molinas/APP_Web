import React from 'react';
import { BrowserRouter, Route }  from 'react-router-dom';
import Badge from './Badge';
import BadgeExito from './BadgeExito';
import BadgeError from './BadgeError';

function App(){
return(
    <BrowserRouter>
    <switch>
        <Route exact path="/badge" component={Badge} />
        <Route exact path="/badge/exito" component={BadgeExito} />
        <Route exact path="/badge/error" component={BadgeError} />
    </switch>
    </BrowserRouter>
);
}

export default App;