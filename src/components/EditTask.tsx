import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import Task from "../task-logic/Task";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/150.gif";

const EditTask: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const { state, dispatch } = useTaskContext();
  const task = state.tasks.find((t) => t.id === taskId);

  const [form, setForm] = useState<Task | undefined>(task);
  const navigate = useNavigate();

  if (!form) return <div>Task not found.</div>;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let newValue: string | boolean = value;
    if (type === "checkbox") {
      newValue = (e.target as HTMLInputElement).checked;
    }
    setForm(
      (prev) =>
        prev && {
          ...prev,
          [name]: newValue,
        }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form) dispatch({ type: "UPDATE_TASK", payload: form });
    navigate("/view");
  };

  return (
    <div>
      <img
        src={logo}
        alt="Logo"
        style={{ padding: "20px", borderRadius: "8px" }}
      />
      <form onSubmit={handleSubmit} className="task-form">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          placeholder="Task Title"
          title="Task Title"
        />
        <input
          name="description"
          value={form.description || ""}
          onChange={handleChange}
          placeholder="Task Description"
          title="Task Description"
        />
        <label htmlFor="priority-select">Priority:</label>
        <select
          id="priority-select"
          name="priority"
          value={form.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <label>
          Completed:
          <input
            type="checkbox"
            name="completed"
            checked={form.completed}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTask;
