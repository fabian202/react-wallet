import React, { Component } from 'react';
import{ BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/layout/NavBar';
import DetailMovement from './components/movement/DetailMovement';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movement/:id' component={DetailMovement} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
