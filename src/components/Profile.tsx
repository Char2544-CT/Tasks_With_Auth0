//Where each user will see their individual tasks

import NavBar from "./NavBar";

const Profile: React.FC = () => {
  return (
    <>
      <NavBar />
      <h1>User Profile</h1>
      {/* User-specific content goes here */}
    </>
  );
};

export default Profile;
