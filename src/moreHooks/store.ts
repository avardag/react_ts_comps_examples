import { createContext } from "react";

const initState = {
  first: "Alex",
  last: "Mega",
};

export type UserState = typeof initState;

const context = createContext<typeof initState>(initState);

export default context;
