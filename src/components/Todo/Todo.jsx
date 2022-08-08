import React from "react";
import "./Todo.scss";

import { TiTick } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";
import { useStateContext } from "../../lib/context";

const Todo = ({ todo }) => {
  const { removeTodo, completeTodo } = useStateContext();
  return (
    <div
      className={`todo todo--${todo.completed ? "completed" : "incomplete"}`}
    >
      <div>{todo.name}</div>
      <button
        className="todo__button todo__button--completed"
        onClick={() => {
          completeTodo(todo.id);
        }}
      >
        <TiTick />
      </button>
      <button
        className="todo__button todo__button--delete"
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        <AiFillDelete />
      </button>
    </div>
  );
};

export default Todo;
