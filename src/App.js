import React, { Component } from 'react';
import{ BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/layout/NavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
