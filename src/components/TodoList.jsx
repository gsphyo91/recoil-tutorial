import React, { Fragment } from "react";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../atoms/atoms";
import TodoListFilter from "./TodoListFilter";
import TodoListStats from "./TodoListStats";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <Fragment>
      <TodoListStats />
      <TodoListFilter />
      <TodoItemCreator />
      {todoList.map((todoItem, index) => (
        <TodoItem key={index} item={todoItem} />
      ))}
    </Fragment>
  );
};

export default TodoList;
