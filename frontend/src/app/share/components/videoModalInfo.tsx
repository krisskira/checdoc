import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { Video } from "../interfaces/video.interface";
import { BACKEND_HOST } from "../api";
import { FC } from "react";

interface Props {
  video?: Video;
  onCloseRequest?: () => void;
}

export const VideoModalInfo: FC<Props> = ({ video, onCloseRequest }) => {
  return (
    <Modal
      backdrop="static"
      centered
      keyboard={false}
      show={!!video}
      onHide={() => onCloseRequest?.()}
    >
      <Modal.Header closeButton>
        <Modal.Title>{video?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Image
                    src={BACKEND_HOST + video?.images["Poster Art"].url}
                    width="180"
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <p>
                  <b>Year: </b>
                  <span>{video?.releaseYear}</span>
                  <br />
                  <b>Type: </b>
                  <span>{video?.programType.toUpperCase()}</span>
                </p>
              </Row>
              <Row>
                <span>{video?.description}</span>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onCloseRequest?.()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
