import React, { createContext, useReducer, useContext } from "react";
import taskReducer from "../task-logic/TaskReducer";
import TaskState from "../task-logic/TaskState";
import TaskComponentAction from "../task-logic/TaskComponentAction";

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

const TaskContext = createContext<{
  state: TaskState;
  dispatch: React.Dispatch<TaskComponentAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
