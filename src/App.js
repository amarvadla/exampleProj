import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>

    </div>
  );
}

export default App;
