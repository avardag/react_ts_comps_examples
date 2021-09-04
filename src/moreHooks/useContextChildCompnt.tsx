import React from "react";
import UserContext, { UserState } from "./store";

function UseContextChildCompnt() {
  // const user = React.useContext<UserState>(UserContext);
  const user = React.useContext(UserContext);
  return <div>last name is : {user.last}</div>;
}

export default UseContextChildCompnt;
