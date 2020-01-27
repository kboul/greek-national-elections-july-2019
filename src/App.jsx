import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Map from './Map';
import ResultTable from './ResultTable';

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
