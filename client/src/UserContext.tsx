import React from "react";

export const UserContext = React.createContext({
  user: {},
  setToken: (token: JSON) => {},
});
