import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Post from "./pages/Post";
import View from "./pages/View";
import Notfound from "./pages/notFound";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/view" component={View} />
        <Route path="/post" component={Post} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
