import React from "react";
import { useStoreValue } from "../app/Store";
import "./CounterInfo.css";

const CounterInfo = () => {
  const [{ counter }] = useStoreValue();
  return (
    <div className="CounterInfo">
      <h2>{counter}</h2>
    </div>
  );
};

export default CounterInfo;
