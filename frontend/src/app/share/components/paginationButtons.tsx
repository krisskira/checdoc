import { FC } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  onTaPagination: (url: string) => void;
  next?: string;
  previous?: string;
}
export const PaginationButton: FC<Props> = ({
  onTaPagination,
  next,
  previous,
}) => {
  return (
    <>
      {(!!previous || !!next) && (
        <Row>
          <Col>
            <Nav>
              {previous && (
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to={"#"}
                    onClick={(e) => {
                      e.preventDefault();
                      onTaPagination(previous);
                    }}
                  >
                    Previous
                  </Nav.Link>
                </Nav.Item>
              )}
              {next && (
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to={"#"}
                    onClick={(e) => {
                      e.preventDefault();
                      onTaPagination(next ?? "");
                    }}
                  >
                    Next
                  </Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </Col>
        </Row>
      )}
    </>
  );
};
