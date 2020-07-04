import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/atoms";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const onChangeTodoItemText = (event) => {
    const newList = [
      ...todoList.slice(0, index),
      {
        ...item,
        text: event.target.value,
      },
      ...todoList.slice(index + 1),
    ];
    setTodoList(newList);
  };

  const onToggleTodoItemCompletion = () => {
    const newList = [
      ...todoList.slice(0, index),
      {
        ...item,
        isComplete: !item.isComplete,
      },
      ...todoList.slice(index + 1),
    ];
    setTodoList(newList);
  };

  const onRemoveTodoItem = () => {
    const newList = [...todoList.slice(0, index), ...todoList.slice(index + 1)];
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={onChangeTodoItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={onToggleTodoItemCompletion}
      />
      <button onClick={onRemoveTodoItem}>X</button>
    </div>
  );
};

export default TodoItem;
