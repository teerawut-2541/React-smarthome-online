import React from "react";
import { Route, Switch } from "react-router-dom";
import Leftmenu from "../components/leftmenu/leftmenu";
import "./index.css";
import Loadable from "react-loadable";

const Home = Loadable({
  loader: () => import('./home/home.js'),
  loading: () => null
});

const Bedroom = Loadable({
  loader: () => import('./bedroom/bedroom.js'),
  loading: () => null
});

function index() {
  return (
    <div className="grid">
      <div className="grid-left-menu">
        <Leftmenu />
      </div>
      <div className="grid-main">
        <Switch>
          <Route exact path="/dashboard/home" component={Home} />
          <Route exact path="/dashboard/bedroom" component={Bedroom} />
        </Switch>
      </div>
    </div>
  );
}

export default index;
