import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import "./App.css";

const Login = Loadable({
  loader: () => import('./containers/account/login'),
  loading: () => null
});

const Register = Loadable({
  loader: () => import('./containers/account/register'),
  loading: () => null
});

const Index = Loadable({
  loader: () => import('./containers/index'),
  loading: () => null
});


function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Index} />
        <Route exact path="/bedroom" component={Index} />

      </Switch>
    </div>
  );
}

export default App;
