import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Register from './Register'
import Login from './Login';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
