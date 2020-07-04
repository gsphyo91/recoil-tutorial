import React, { Fragment } from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atoms/atoms";

const TodoListFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const onChangeTodoListFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <Fragment>
      Filter:
      <select value={filter} onChange={onChangeTodoListFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </Fragment>
  );
};

export default TodoListFilter;
