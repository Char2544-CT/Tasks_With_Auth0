import TaskComponent from "../task-logic/TaskComponent";
import NavBar from "./NavBar";
import logo from "../assets/150.gif";

const ViewTasks: React.FC = () => {
  return (
    <div>
      <img
        src={logo}
        alt="Logo"
        style={{ padding: "20px", borderRadius: "8px" }}
      />
      <NavBar />
      <h2>View/Delete/Manage Tasks</h2>
      <TaskComponent />
    </div>
  );
};

export default ViewTasks;
