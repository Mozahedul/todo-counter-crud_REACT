import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterInfo from "./components/CounterInfo";
import InputList from "./components/InputList";
import ShowTodo from "./components/ShowTodo";

function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <div className="App-Counter">
          <CounterInfo />
          <Counter />
        </div>
        <div className="App-Input">
          <ShowTodo />
          <InputList />
        </div>
      </div>
    </div>
  );
}

export default App;
