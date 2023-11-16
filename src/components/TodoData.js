import React from "react";
import { useStoreValue } from "../app/Store";
import "./TodoData.css";

const TodoData = ({ name, done, id }) => {
  const [, dispatch] = useStoreValue();

  const removeHandle = () => {
    dispatch({
      type: "REMOVE_LIST",
      id: id,
    });
  };
  return (
    <div className="TodoData">
      <h3>{name}</h3>
      <button onClick={removeHandle} title="Remove List">
        x
      </button>
    </div>
  );
};

export default TodoData;
