import { FC, ReactNode, useState } from "react";
import { AppHeaderBar } from "./appHeaderBar";
import { TitleBar } from "./titleBar";
import { Footer } from "./footer";
import { Col, Container, Row } from "react-bootstrap";
import { TemplateMessage } from "../templateMessage";

interface Props {
  children: ReactNode;
  title: string;
  isLoading?: boolean;
  hasError?: boolean;
}

export const TemplatePage: FC<Props> = ({
  children,
  title,
  isLoading = false,
  hasError = false,
}) => {
  return (
    <Container
      fluid
      className="d-flex flex-column"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <AppHeaderBar />
      </Row>
      <Row>
        <TitleBar title={title} />
      </Row>
      <Row className="flex-fill">
        <Col>
          {!isLoading && !hasError ? (
            children
          ) : (
            <TemplateMessage isLoading={isLoading} hasError={hasError} />
          )}
        </Col>
      </Row>
      <Row className="align-items-end">
        <Footer />
      </Row>
    </Container>
  );
};
