import { FC } from "react";
import { Card, Image, Nav } from "react-bootstrap";
import FilmBackGroundIcon from "../../../assets/images/placeholder.png";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  descrition: string;
  link: string;
}

export const HomeVideoCard: FC<Props> = ({ title, descrition, link }) => {
  return (
    <Nav.Item as="div" className="flex-column g-2">
      <Nav.Link as={Link} to={link}>
        <Card
          className="bg-dark text-white justify-content-center align-items-center"
          style={{ width: 150, height: 200 }}
        >
          <Card.Img style={{ width: 256 }} src={FilmBackGroundIcon} />
          <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
            <div>
              <Card.Title style={{ fontSize: 28, fontWeight: "normal" }}>
                {title}
              </Card.Title>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card.Text className="mt-1">{descrition}</Card.Text>
      </Nav.Link>
    </Nav.Item>
  );
};
