import React, { useState } from "react";
import { useStoreValue } from "../app/Store";
import "./InputList.css";

const InputList = () => {
  const [input, setInput] = useState("");
  const [, dispatch] = useStoreValue();

  console.log(input);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: "ADD_TO_LIST",
      item: {
        name: input,
        done: false,
        id: Date.now(),
      },
    });
  };

  const handleInput = event => {
    setInput(event.target.value);
  };

  return (
    <div className="InputList">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} placeholder="Add todo list" />
        <button type="submit">Add List</button>
      </form>
    </div>
  );
};

export default InputList;
