import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Map from './features/Map';
import ResultTable from './features/ResultTable';

const App = () => {
    return (
        <Switch>
            <Route path="/parties/:id" component={ResultTable} />
            <Route path="/parties" component={ResultTable} />
            <Route path="/" component={Map} />
        </Switch>
    );
};

export default App;
