import { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AppHeaderBar: FC = () => {
  return (
    <Navbar className="shadow" bg="primary" variant="dark" style={{ background: 'linear-gradient(to bottom, #0497ff, #006aff)', }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="w-100">
          <div style={{ fontWeight: "normal", fontSize: 24 }}>
            DEMO Streaming
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="flex-shrink-1">
          <Nav>
            <Nav.Link as={Link} to="login" className="mx-2 text-white">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="login" className="btn btn-dark text-nowrap mx-2 text-white">
              Start your free trial
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
