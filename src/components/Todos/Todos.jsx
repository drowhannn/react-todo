import "./Todos.scss";
import { useState, useEffect } from "react";

import { Todo } from "../../components";
import { useStateContext } from "../../lib/context";

const Todos = () => {
  const { todos } = useStateContext();

  const [showActive, setShowActive] = useState(true);

  const [toShowTodos, setToShowTodos] = useState([]);

  useEffect(() => {
    if (showActive) {
      setToShowTodos(todos.filter((todo) => !todo.completed));
    } else {
      setToShowTodos(todos.filter((todo) => todo.completed).reverse());
    }
  }, [showActive, todos]);

  return (
    <div className="app__todos">
      <div className="app__todosFilters">
        <p>Show:</p>
        <p
          className={`app__todosFilter app__todosFilter--active ${
            showActive ? "selected" : "notSelected"
          }`}
          onClick={() => setShowActive(true)}
        >
          Active
        </p>
        <p
          className={`app__todosFilter app__todosFilter--completed ${
            showActive ? "notSelected" : "selected"
          }`}
          onClick={() => setShowActive(false)}
        >
          Completed
        </p>
      </div>
      {toShowTodos?.map((todo, index) => (
        <Todo key={`todo-${index}`} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
