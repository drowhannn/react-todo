import React, { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const StateContext = ({ children }) => {
  //add our data for the state
  let initTodo;
  if (localStorage.getItem("todos"))
    initTodo = JSON.parse(localStorage.getItem("todos"));
  else initTodo = [];
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (name) => {
    if (name) {
      let todo = {
        id: Date.now(),
        name: name,
        completed: false,
      };
      setTodos([...todos, todo]);
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        completeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useStateContext = () => useContext(TodoContext);
