import React from "react";
import { AuthContext, IContext } from "./AuthContext";

export default function Profile(): React.ReactElement {
  return (
    <AuthContext.Consumer>
      {(value: IContext) => (
        <h1 style={{ color: "teal" }}>
          {" "}
          {!value.isAuth ? "Please log in" : "You are logged in"}
        </h1>
      )}
    </AuthContext.Consumer>
  );
}
