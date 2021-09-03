import React, { useState, useRef, useContext, useReducer } from "react";
import { AuthContext, IContext } from "./AuthContext";

function Hooks() {
  // /inferred
  const [opt, setOpt] = useState(0);
  //Explicitly setting the types
  const [number, setNumber] = useState<number | undefined>(undefined);
  const [colors, setColors] = useState<Array<string>>([]);
  //using interface
  interface IUSer {
    name: string;
    email: string;
    age?: number;
  }
  const [user, setUser] = useState<IUSer>({
    name: "Alex",
    email: "tes@gmail.ru",
  });
  //useRef
  const ref1 = useRef<HTMLElement>(null!); // ! -> non-null assertion operator.
  const ref2 = useRef<HTMLElement | null>(null);
  //useContext
  const authCont = useContext<IContext>(AuthContext);
  //useReducer
  interface IState {
    count: number;
  }
  type Action = { type: "increment" | "decrement" };

  const initialState: IState = { count: 0 };
  const counterReducer = ({ count }: IState, { type }: Action) => {
    switch (type) {
      case "increment":
        return { count: count + 1 };
      case "decrement":
        return { count: count - 1 };
      default:
        throw new Error();
    }
  };

  const [counterState, dispatch] = useReducer(counterReducer, { count: 0 });

  dispatch({ type: "increment" });
  dispatch({ type: "decrement" });

  return <div>Hej</div>;
}

export default Hooks;
