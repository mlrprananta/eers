import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Default } from "./pages/Default";
import PrivateRoute from "./components/PrivateRoute";
import AuthContext from "./AuthContext";

const App = () => {
  const currentToken = localStorage.getItem("token");
  const [token, setToken] = useState(
    currentToken ? JSON.parse(currentToken) : null
  );

  return (
    <Router>
      <AuthContext.Provider
        value={{
          token: token,
          setToken: (token: JSON) => {
            localStorage.setItem("token", JSON.stringify(token));
            setToken(token);
          },
        }}
      >
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path={"/callback"} />
            <PrivateRoute component={Default} />
          </Switch>
        </div>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
