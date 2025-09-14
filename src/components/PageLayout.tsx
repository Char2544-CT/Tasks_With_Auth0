import { Col, Container } from "react-bootstrap";
import NavBar from "./NavBar";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Col>
        <NavBar />
      </Col>
      <h1>Task Manager</h1>
      {children}
      <footer>{/* <NavBarButtons /> */}</footer>
    </Container>
  );
};

export default PageLayout;
