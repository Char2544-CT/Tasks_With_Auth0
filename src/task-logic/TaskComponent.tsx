import { useReducer, useState } from "react";
import taskReducer from "./TaskReducer";
import Task from "./Task";
import "./TaskComponent.css";

const TaskComponent: React.FC = () => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
    loading: false,
    error: null,
  });

  const [newTask, setNewTask] = useState<Task>({
    id: "",
    title: "",
    description: "",
    completed: false,
    priority: "low",
  });

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: newTask });
    setNewTask({
      id: "",
      title: "",
      description: "",
      completed: false,
      priority: "low",
    });
  };

  const removeTask = (id: string) => {
    dispatch({ type: "REMOVE_TASK", payload: id });
  };

  const updateTask = (updatedTask: Task) => {
    dispatch({ type: "UPDATE_TASK", payload: updatedTask });
  };

  return (
    <div>
      <h1>Task Management</h1>
      {/* Add Task Form */}
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) =>
            setNewTask({
              ...newTask,
              title: e.target.value,
              id: Date.now().toString(),
            })
          }
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <label htmlFor="priority-select">Priority:</label>
        <select
          id="priority-select"
          value={newTask.priority}
          onChange={(e) =>
            setNewTask({
              ...newTask,
              priority: e.target.value as Task["priority"],
            })
          }
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      {/* Loading/Error States */}
      {state.loading && <p>Loading...</p>}
      {state.error && <p className="task-error">{state.error}</p>}

      {/* Task List */}
      <ul>
        {state.tasks.map((task) => (
          <li
            key={task.id}
            className={`task-list-item${
              task.completed ? " task-completed" : ""
            }`}
          >
            <strong>{task.title}</strong> ({task.priority})<br />
            {task.description && (
              <span>
                {task.description}
                <br />
              </span>
            )}
            <button
              onClick={() =>
                updateTask({ ...task, completed: !task.completed })
              }
            >
              {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => removeTask(task.id)} className="remove-btn">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;
