import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Default } from "./pages/Default";

const App = () => (
  <Router>
    <Switch>
      <div className="App">
        <Route path="/login" children={Login} />
        <Route children={Default} />
      </div>
    </Switch>
  </Router>
);

export default App;
