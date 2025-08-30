//Save Registered user to session storage here... probably.

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

//This may be wrong- if so, try saving user to session storage upon successful registration
const RegisterButton: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleRegister = () => {
    loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  if (!isAuthenticated)
    return <Button onClick={handleRegister}>Register</Button>;
  return null;
};

export default RegisterButton;
