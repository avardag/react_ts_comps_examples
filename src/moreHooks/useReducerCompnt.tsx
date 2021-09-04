import React from "react";

const initReducerState = { counter: 100 };

type ActionTypes =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number };

const reducer = (state: typeof initReducerState, action: ActionTypes) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload };
    case "DECREMENT":
      return { ...state, counter: state.counter - action.payload };
    default:
      throw new Error("Bad Action");
  }
};

function UseReducerCompnt() {
  const [state, dispatch] = React.useReducer(reducer, initReducerState);
  return (
    <div>
      <h3>useReducer Component</h3>
      {state.counter}
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "INCREMENT",
              payload: 10,
            })
          }
        >
          Increment
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "DECREMENT",
              payload: 5,
            })
          }
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default UseReducerCompnt;
