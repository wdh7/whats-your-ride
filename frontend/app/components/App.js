import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import HomeContainer from '../containers/HomeContainer';
import CarContainer from '../containers/CarContainer';
import UserProfileFormContainer from '../containers/UserProfileFormContainer';
import LoginFormContainer from '../containers/LoginFormContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='main-wrapper'>
          <NavBar />

          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/register' component={UserProfileFormContainer} />
            <Route path='/login' component={LoginFormContainer} />
            <Route path='/profile' component={UserProfileFormContainer} />
            <Route path='/cars/:id' component={CarContainer} />
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
