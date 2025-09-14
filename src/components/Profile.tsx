//Where each user will see their individual tasks

import NavBar from "./NavBar";
import logo from "../assets/150.gif";

const Profile: React.FC = () => {
  return (
    <>
      <img
        src={logo}
        alt="Logo"
        style={{ padding: "20px", borderRadius: "8px" }}
      />
      <NavBar />
      <h1>User Profile</h1>
      {/* User-specific content goes here */}
    </>
  );
};

export default Profile;
