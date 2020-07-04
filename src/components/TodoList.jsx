import React, { Fragment } from "react";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { useRecoilValue } from "recoil";
import { todoListState } from "../atoms/atoms";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <Fragment>
      <TodoItemCreator />
      {todoList.map((todoItem, index) => (
        <TodoItem key={index} item={todoItem} />
      ))}
    </Fragment>
  );
};

export default TodoList;
