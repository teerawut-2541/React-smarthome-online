import React from 'react'
import { Route } from 'react-router-dom'
import Login from './containers/account/login'
import Register from './containers/account/register'
import Home from './containers/home/home'
import './App.css';

function App() {
  return (
    <div className="container">
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
