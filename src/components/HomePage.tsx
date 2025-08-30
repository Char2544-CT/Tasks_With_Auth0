import { Col, Container } from "react-bootstrap";
import LoginButton from "../authorization/LoginButton";
import LogoutButton from "../authorization/LogoutButton";
import RegisterButton from "../authorization/RegisterButton";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Col>
        <h1>Welcome to Task Manager</h1>
        <>
          <LoginButton />
          <RegisterButton />
          <LogoutButton />
        </>
      </Col>
    </Container>
  );
};

export default HomePage;
