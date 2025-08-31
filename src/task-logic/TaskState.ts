import Task from "./Task";

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}
export default TaskState;
