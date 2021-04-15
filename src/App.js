import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import { createBrowserHistory } from "history";

import "./App.css";

const Login = Loadable({
  loader: () => import("./containers/account/login"),
  loading: () => null,
});

const Register = Loadable({
  loader: () => import("./containers/account/register"),
  loading: () => null,
});

const Index = Loadable({
  loader: () => import("./containers/index"),
  loading: () => null,
});



function App() {
  const history = createBrowserHistory();

  let token = localStorage.getItem("token");
  if(!token){
    history.push('login')
  }
  return (
    <div className="container">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {token ? (
          <div>
            <Route exact path="/" component={Index} />
            <Route exact path="/room/:id" component={Index} />
          </div>
        ) : (
          <Route path="/login" component={Login} />
        )}
      </Switch>
    </div>
  );
}

export default App;
