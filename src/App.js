import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from './components/dashboard/dashboard';
import Order from './components/order/order';
import Error from './components/error/error';

class App extends Component {
  render() {
    return (

        <div className="App">
            <Switch>
              <Route path="/" component={DashBoard} exact/>
              <Route path="/dashboard" component={DashBoard} exact/>
              <Route component={Error} />
            </Switch>
        </div>

    );
  }
}

export default App;
