import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Default } from "./pages/Default";

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/login" children={Login} />
        <Route children={Default} />
      </Switch>
    </div>
  </Router>
);

export default App;
