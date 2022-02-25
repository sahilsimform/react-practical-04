import React, { useState, useEffect } from "react";
import { FiCheckCircle, FiCircle } from "react-icons/fi";
import "./Todo.css";

const schedule = require("node-schedule");

const getLocalItems = () => {
  let list = localStorage.getItem("TodoList");
  if (list) {
    return JSON.parse(localStorage.getItem("TodoList"));
  } else {
    return [];
  }
};

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const [toggleBtn, setToggleBtn] = useState(false);

  const completeTodo = (id) => {
    let updatedTodos = items.map((elem) => {
      if (elem.id === id) {
        elem.isComplete = !elem.isComplete;
      }
      return elem;
    });
    setItems(updatedTodos);
  };

  const addItem = () => {
    if (!inputData) {
      alert("Please Enter a Data.");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updatedItems);
    setInputData("");
  };

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(items));
  }, [items]);

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  };

  schedule.scheduleJob("0 0 * * *", () => {
    setItems([]);
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addItem();
    } else if (event.key === "Escape") {
      setToggleBtn(false);
    }
  };

  return (
    <>
      <div className="container ">
        <div className="showItems">
          {items.map((elem) => {
            return (
              <div className="eachItem" key={elem.id}>
                <div className="row">
                  <div className="mt-2 col dis_main">
                    <span onDoubleClick={() => deleteItem(elem.id)}>
                      <h3
                        onClick={() => editItem(elem.id)}
                        className={
                          elem.isComplete ? "todo-row complete" : "todo-row"
                        }
                      >
                        {elem.name}
                      </h3>
                    </span>
                  </div>
                  <div className="col icon_btn">
                    <div>
                      {elem.isComplete ? (
                        <FiCheckCircle
                          key={elem.id}
                          className="icon checkIcon"
                          onClick={() => completeTodo(elem.id)}
                        />
                      ) : (
                        <FiCircle
                          key={elem.id}
                          className="icon"
                          onClick={() => completeTodo(elem.id)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="addItems mt-4">
          {toggleBtn ? (
            <>
              <div className="Input_Text">
                <input
                  type="text"
                  className="textArea"
                  placeholder="Add Items to Add to the Todo.."
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                  onKeyUp={handleKeyDown}
                />

                <button className="btnAdd" onClick={addItem}>
                  <i className="fas fa-check add-btn" title="Update Item">
                    Update/Add
                  </i>
                </button>
              </div>
            </>
          ) : (
            <div className="btn_div">
              <button
                onClick={() => setToggleBtn(true)}
                className="Add_btn_main"
              >
                <b>+</b>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Todo;
