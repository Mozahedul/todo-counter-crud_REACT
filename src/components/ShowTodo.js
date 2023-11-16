import React, { useEffect } from "react";
import { useStoreValue } from "../app/Store";
import TodoData from "./TodoData";

const ShowTodo = () => {
  const [{ todoList }, dispatch] = useStoreValue();
  // const [state, setState] = useState();

  useEffect(() => {
    const tempData = localStorage.getItem("todoItem");
    const data = JSON.parse(tempData);
    if (data) {
      data.map(item =>
        dispatch({
          type: "ADD_TO_LIST",
          item: item,
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    const temp = JSON.stringify(todoList);
    localStorage.setItem("todoItem", temp);
  }, [todoList]);

  return (
    <div className="ShowTodo">
      <h3 style={{ marginTop: "10px" }}>Todo list</h3>
      {todoList.map(listItem => (
        <TodoData
          key={listItem.id}
          name={listItem.name}
          done={listItem.done}
          id={listItem.id}
        />
      ))}
    </div>
  );
};

export default ShowTodo;
