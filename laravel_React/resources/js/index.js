import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './components/App';

if(document.getElementById('root'))
{
    ReactDOM.render(<App />, document.getElementById('root'));
}


