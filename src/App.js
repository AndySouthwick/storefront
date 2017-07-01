import React, { Component } from 'react';
import './App.css';
import ProductList from './products/ProductList'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Switch>

                    <Route path="/list" component={ProductList}/>
                </Switch>
            </div>
        );
    }
}

export default App;
