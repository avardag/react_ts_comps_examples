import React from "react";

export interface IContext {
  isAuth: Boolean;
  login: () => void;
}

// Context creation
export const AuthContext = React.createContext<IContext>({
  isAuth: false,
  login: () => {},
});
