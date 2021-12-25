import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
const ReducerPractice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count:{state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>빼기-</button>
      <button onClick={() => dispatch({ type: "increment" })}>더하기+</button>
    </div>
  );
};

export default ReducerPractice;
