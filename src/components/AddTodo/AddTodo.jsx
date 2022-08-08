import "./AddTodo.scss";

import { useRef } from "react";

import { GrAdd } from "react-icons/gr";
import { useStateContext } from "../../lib/context";

const AddTodo = ({}) => {
  const inputElement = useRef();
  const { addTodo } = useStateContext();

  return (
    <form className="app__addTodo">
      <input type="text" ref={inputElement} />
      <button
        onClick={() => {
          addTodo(inputElement.current.value);
          inputElement.current.value = "";
        }}
      >
        <GrAdd />
      </button>
    </form>
  );
};

export default AddTodo;
