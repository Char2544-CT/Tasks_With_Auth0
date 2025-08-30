import { Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar>
      <Nav>
        <Nav.Link href="/">Logout |</Nav.Link>
        {isAuthenticated && (
          <>
            <Nav.Link href="/view"> View Tasks |</Nav.Link>
            <Nav.Link href="/create"> Create Task |</Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
