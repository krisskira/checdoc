import { FC } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

export const TitleBar: FC<Props> = ({ title }) => {
  return (
    <Navbar
      variant="dark"
      className="shadow"
      style={{ background: "linear-gradient(to bottom, #414141, #414141)" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="#" className="w-100">
          <div style={{ fontWeight: "normal", fontSize: 20 }}>
            {title}
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
