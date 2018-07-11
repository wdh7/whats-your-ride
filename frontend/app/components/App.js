import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Register from './Register'
import Login from './Login';
import NavBar from './NavBar';
import HomeContainer from '../containers/HomeContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='main-wrapper'>
          <NavBar />

          <Switch>
            <Route exact path='/' component={HomeContainer} />
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
