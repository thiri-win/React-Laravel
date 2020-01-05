import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Nav from './Nav';
import Task from './Task/Task';
import Blog from './Blog';
import Example from './Example';
import Product from './Product/Product';

function App(){
    return (
        <Router>
            <div className="App">
                <Nav /> <br/>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/tasks" component={Task} exact />                
                    <Route path="/blog" component={Blog} exact />
                    <Route path="/example" component={Example} exact />
                    <Route path="/product" component={Product} exact />
                </Switch>
                
            </div>
        </Router>



    )
}

const Home = ()=> (
    <div>
        <h1>Home Page</h1>
    </div>
)


export default App;