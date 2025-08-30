import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LogoutButton: React.FC = () => {
  const { logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  const handleReturnToProfile = () => {
    navigate("/profile");
  };

  if (isAuthenticated) {
    return (
      <>
        <Button onClick={handleLogout}>Log Out</Button>
        <Button onClick={handleReturnToProfile}>Return to Profile</Button>
      </>
    );
  }
  return null;
};

export default LogoutButton;
