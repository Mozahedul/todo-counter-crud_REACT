import React, { useState } from "react";
import { useStoreValue } from "../app/Store";
import "./InputList.css";

const InputList = () => {
  const [input, setInput] = useState("");
  const [, dispatch] = useStoreValue();

  console.log(input);

  const handleSubmit = (event) => {
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

  return (
    <div className="InputList">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Add List</button>
      </form>
    </div>
  );
};

export default InputList;
