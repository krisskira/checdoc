import { FC } from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MenuSeparator } from "../menuSeperator";
import FacebookIcon from "../../../../assets/images/social/facebook-white.svg";
import TwitterIcon from "../../../../assets/images/social/twitter-white.svg";
import InstagramIcon from "../../../../assets/images/social/instagram-white.svg";
import AppStoreIcon from "../../../../assets/images/store/app-store.svg";
import PlayStoreIcon from "../../../../assets/images/store/play-store.svg";
import WindowsStoreIcon from "../../../../assets/images/store/windows-store.svg";

export const Footer: FC = () => {
  return (
    <Container className="px-5 py-4 bg-dark">
      <Menu />
      <Row>
        <p
          className="px-3 text-muted justify-content-center justify-content-md-start d-flex"
          style={{ fontSize: 12 }}
        >
          Copy Right © 2016 DEMO Stresming All Right Reserved
        </p>
      </Row>
      <Row>
        <span style={{ height: 30 }} />
      </Row>
      <Row>
        <Col className="justify-content-between align-items-center d-flex flex-column flex-md-row">
          <div className="d-flex py-3">
            <Image src={FacebookIcon} width={24} height={24} />
            <Image src={TwitterIcon} width={24} height={24} className="mx-3" />
            <Image src={InstagramIcon} width={24} height={24} />
          </div>
          <div className="d-flex">
            <Image src={AppStoreIcon} height={32} />
            <Image src={PlayStoreIcon} height={32} className="mx-3" />
            <Image src={WindowsStoreIcon} height={32} />
          </div>
        </Col>
      </Row>
      <Row>
        <span style={{ height: 30 }} />
      </Row>
    </Container>
  );
};

const Menu = () => {
  const linksStyle = { fontSize: 12, color: "#ccd0cc" };
  return (
    <Row>
      <Nav
        className="justify-content-start align-items-center flex-column flex-md-row"
        variant="dark"
      >
        <Nav.Item>
          <Nav.Link style={linksStyle} as={Link} to="#">
            Home
          </Nav.Link>
        </Nav.Item>
        <MenuSeparator />
        <Nav.Item>
          <Nav.Link style={linksStyle} as={Link} to="#">
            Terms and Condictions
          </Nav.Link>
        </Nav.Item>
        <MenuSeparator />
        <Nav.Item>
          <Nav.Link style={linksStyle} as={Link} to="#">
            Privacy Policy
          </Nav.Link>
        </Nav.Item>
        <MenuSeparator />
        <Nav.Item>
          <Nav.Link style={linksStyle} as={Link} to="#">
            Colletion Statement
          </Nav.Link>
        </Nav.Item>
        <MenuSeparator />
        <Nav.Item>
          <Nav.Link style={linksStyle} as={Link} to="#">
            Help
          </Nav.Link>
        </Nav.Item>
        <MenuSeparator />
        <Nav.Item>
          <Nav.Link style={linksStyle} as={Link} to="#">
            Manage Account
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Row>
  );
};
