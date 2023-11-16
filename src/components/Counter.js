import React from "react";
import { useStoreValue } from "../app/Store";
import "./Counter.css";

const Counter = () => {
  const [{ counter }, dispatch] = useStoreValue();

  const increment = () => {
    dispatch({
      type: "ADD_NUMBER",
    });
  };

  const decrement = () => {
    if (counter < 1) {
      alert("The value should not be < 1");
      return true;
    }
    dispatch({
      type: "SUB_NUMBER",
    });
  };

  return (
    <div className="Counter">
      <button onClick={increment}>Add + </button>
      <button className="Counter-BtnSub" onClick={decrement}>
        Sub -{" "}
      </button>
    </div>
  );
};

export default Counter;
