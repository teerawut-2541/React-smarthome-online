import React,{useState} from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import { createBrowserHistory } from "history";
import "./App.css";

import ReactNotification from 'react-notifications-component'




const Login = Loadable({
  loader: () => import("./containers/account/login"),
  loading: () => null,
});

const LoginFaceID = Loadable({
  loader: () => import("./containers/account/loginFaceId"),
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

  // let token = localStorage.getItem("token");
  const [token, setstate] = useState(localStorage.getItem("token")?localStorage.getItem("token"):null)

  if(!token){
    history.push('/login')
  }

  return (
    <div className="container">
       <ReactNotification />
      <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/login-faceid" component={LoginFaceID} />
        <Route path="/register" component={Register} />
        {token ? (
      <Switch>
      <Route exact path="/" component={Index} />
            <Route exact path="/room/:id" component={Index} />
            
            </Switch>
        ) : (
          <Route path="/login" component={Login} />
        )}
      </Switch>
    </div>
  );
}

export default App;
