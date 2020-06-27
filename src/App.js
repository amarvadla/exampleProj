import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home';
import Profile from './components/Profile';
import { connect } from 'react-redux';
import Login from './components/Login';
import * as userActions from './store/actions';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {

    var app = null;

    if (this.props.authentication) {
      app =
        <div>
          <NavBar />
          <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/profile' component={Profile}></Route>
            <Route path='/' component={Home}></Route>
          </Switch>
        </div>
    } else {
      app = <Login />
    }

    return (
      <div className="App">
        {app}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProfiles: state.allUsers,
    authentication: state.authentication
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(userActions.checkAuth())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
