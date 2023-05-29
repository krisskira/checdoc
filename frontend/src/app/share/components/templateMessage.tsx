import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface TemplateMessageProp {
  isLoading?: boolean;
  hasError?: boolean;
}

export const TemplateMessage: FC<TemplateMessageProp> = ({
  hasError = false,
  isLoading = false,
}) => {
  return (
    <Container className="py-4">
      <Row xs={{ cols: 1 }}>
        <Col>
          {hasError && <span>Oops, something went wrong</span>}
          {isLoading && <span>Loading...</span>}
        </Col>
      </Row>
    </Container>
  );
};
