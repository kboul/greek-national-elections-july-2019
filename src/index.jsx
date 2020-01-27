import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.sass';
import App from './App';
import Provider from './Provider';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Provider>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
