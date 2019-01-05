import React, { Component } from 'react';
import{ BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/layout/NavBar';
import DetailMovement from './components/movement/DetailMovement';
import SignIn from './components/auth/SignIn' 
import SignUp from './components/auth/SignUp' 
import CreateMovement from './components/movement/CreateMovement'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={SignIn} />
            <Route path='/register' component={SignUp} />
            <Route path='/movement/:id' component={DetailMovement} />
            <Route path='/movement' component={CreateMovement} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
