import React from "react";
import "./Header.scss";
import { useStateContext } from "../../lib/context";

const Header = () => {
  const { todos } = useStateContext();
  const activeTodosLength = todos.filter((todo) => !todo.completed).length;

  return (
    <header className="app__header">
      <h1>
        <div />
        {activeTodosLength === 0 ? "0" : activeTodosLength} Todos
      </h1>
    </header>
  );
};

export default Header;
