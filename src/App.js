import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import Time from "./components/Time";

function App() {
  return (
    <>
      <div className="container">
        <div className=" App_div ">
          <Time />
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;
