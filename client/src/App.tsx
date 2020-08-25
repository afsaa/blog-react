import React from "react";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Login from "./containers/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
