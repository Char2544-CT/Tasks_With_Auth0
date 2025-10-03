//App.tsx
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import ViewTasks from "./components/ViewTasks";
import EditTask from "./components/EditTask";
import CallbackPage from "./authorization/CallbackPage";

const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/view" element={<ViewTasks />} />
      <Route path="/edit/:taskId" element={<EditTask />} />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
};

export default App;
