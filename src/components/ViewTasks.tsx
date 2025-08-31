import TaskComponent from "../task-logic/TaskComponent";
import NavBar from "./NavBar";

const ViewTasks: React.FC = () => {
  return (
    <div>
      <NavBar />
      <h2>View Tasks</h2>
      <TaskComponent />
    </div>
  );
};

export default ViewTasks;
