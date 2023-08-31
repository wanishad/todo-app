"use client";
import "@/css/todo.css";
import React, { useEffect, useState } from "react";

const todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let todos = localStorage.getItem("todos");
    setTodos(JSON.parse(todos));
  }, []);

  const deleteTodo = (titile) => {
    let newTodos = todos.filter((item) => {
      return item.titile !== titile;
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };
  return (
    <>
      {todos.map((item) => {
        return (
          <div className="todo-list">
            <h1 id="titile" className="title">
              {item.titile}
            </h1>
            <h3 className="Desc">{item.Desc}</h3>
            <button
              className="btn"
              onClick={() => {
                deleteTodo(item.titile, item.Desc);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default todos;
