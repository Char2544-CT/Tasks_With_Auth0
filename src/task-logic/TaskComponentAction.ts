import Task from "./Task";

type TaskComponentAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "REMOVE_TASK"; payload: string }
  | { type: "UPDATE_TASK"; payload: Task };

export default TaskComponentAction;
