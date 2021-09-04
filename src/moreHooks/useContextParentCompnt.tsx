import React, { useContext, useState } from "react";
import UserContext, { UserState } from "./store";
import UseContextChildCompnt from "./useContextChildCompnt";

function UseContextParentCompnt() {
  const [user, setUser] = useState<UserState>({
    first: "Maga",
    last: "Chaga",
  });

  return (
    <UserContext.Provider value={user}>
      <h3>UseContext component</h3>
      <div>This is a useContext Parent component</div>
      <div>Another cool component</div>
      <UseContextChildCompnt />
    </UserContext.Provider>
  );
}

export default UseContextParentCompnt;
