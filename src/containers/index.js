import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Leftmenu from "../components/leftmenu/leftmenu";
import "./index.css";
import Loadable from "react-loadable";
import { useSelector, useDispatch } from "react-redux";
import { checkTokenAction } from "../redux/action/checkTokenAction";
import { useHistory } from "react-router-dom";

const Home = Loadable({
  loader: () => import("./home/home.js"),
  loading: () => null,
});

const Room = Loadable({
  loader: () => import("./room/room.js"),
  loading: () => null,
});

function Index() {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      dispatch(checkTokenAction());
    } else {
      history.push("/home");
    }
  }, []);

  return (
    <div className="grid">
      <div className="grid-left-menu">
        <Leftmenu />
      </div>
      <div className="grid-main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/room/:id" component={Room} />
        </Switch>
      </div>
    </div>
  );
}

export default Index;
