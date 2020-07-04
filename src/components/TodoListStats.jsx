import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../atoms/atoms";

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);
  return (
    <ul>
      <li>Total Items: {totalNum}</li>
      <li>Total Completed Items: {totalCompletedNum}</li>
      <li>Total Uncompleted Items: {totalUncompletedNum}</li>
      <li>Percent Completed: {percentCompleted}%</li>
    </ul>
  );
};

export default TodoListStats;
