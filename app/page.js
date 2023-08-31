"use client";
import React, { useState } from "react";

const page = () => {
  const [todo, settodo] = useState({ titile: "", Desc: "" });

  const addTodo = () => {
    let todos = localStorage.getItem("todos")
    if (todos){
      let todosJson = JSON.parse(todos)
      if(todosJson.filter(value=>{ return value.titile==todo.titile}).length > 0){
        alert("Todo with this title already exists")
      }
      else{ 
        todosJson.push(todo)
        localStorage.setItem("todos", JSON.stringify(todosJson))
        alert("Todo has been added")
        settodo({titile: "", desc: ""})
      }
    }
    else{
      localStorage.setItem("todos", JSON.stringify([todo]))
    }}
  const onChange = (e) => {
    settodo({ ...todo, [e.target.name]: e.target.value });
    
  };
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-4 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add Todos
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/4 mx-auto">
            <div className=" flex-wrap -m-2">
              <div className="p-2 w-1/1">
                <div className="relative">
                  <label for="titile" className="leading-7 text-gray-600">
                    Todo titile
                  </label>
                  <input
                    onChange={onChange}
                    value={todo.titile}
                    type="text"
                    id="titile"
                    name="titile"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/1">
                <div className="relative">
                  <label for="Desc" className="leading-7 text-gray-600">
                    Description
                  </label>
                  <input
                    onChange={onChange}
                    value={todo.Desc}
                    type="Desc"
                    id="Desc"
                    name="Desc"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full"></div>
              <div className="p-2 w-full">
                <button
                  onClick= {() => {
                  addTodo(todo.titile, todo.Desc);
                  }}
    
                  className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Add Todo
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">Wanishadalambgp@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page
