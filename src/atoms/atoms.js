import { atom, selector } from "recoil";

// TodoList State
export const todoListState = atom({
  key: "todoListState",
  default: [],
});

// Todo List Filter State
export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

// Filtered Todo List
export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

// Todo List Statistics
export const todoListStatsState = selector({
  key: "todoListStatesState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = todoList.filter((item) => !item.isComplete)
      .length;
    const percentCompleted =
      totalNum === 0 ? 0 : Math.round((totalCompletedNum / totalNum) * 100);

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
