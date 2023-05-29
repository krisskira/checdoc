import { FC } from "react";
import { TemplatePage } from "../share/components/template/templatePage";
import { Col, Container, Row } from "react-bootstrap";
import { HomeVideoCard } from "../share/components/homeVideoCard";

export const HomePage: FC = () => {
  return (
    <TemplatePage title="Popular Titles">
      <Container className="py-4">
        <Row xs={{ cols: 1 }} sm={3} md={4} lg={12} className="justify-content-center justify-content-sm-start">
          <Col className="justify-content-center d-flex p-2">
            <HomeVideoCard link="/series" title="SERIES" descrition="Popular Series" />
          </Col>
          <Col className="justify-content-center d-flex p-2">
            <HomeVideoCard link="/movies"  title="MOVIES" descrition="Popular Movies" />
          </Col>
        </Row>
      </Container>
    </TemplatePage>
  );
};
