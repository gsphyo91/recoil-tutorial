import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/atoms";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitAddTodoItem = (event) => {
    event.preventDefault();
    setTodoList((oldItem) => [
      ...oldItem,
      {
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmitAddTodoItem}>
        <input type="text" value={inputValue} onChange={onChangeInput} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoItemCreator;
