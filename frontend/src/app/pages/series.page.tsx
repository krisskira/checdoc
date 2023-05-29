import * as React from "react";
import { FC } from "react";
import { TemplatePage } from "../share/components/template/templatePage";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { useLazyVideosQuery } from "../share/api/video.api";
import { VideoCard } from "../share/components/VideoCard";
import { Video } from "../share/interfaces/video.interface";
import { VideoModalInfo } from "../share/components/VideoModalInfo";
import { PaginationButton } from "../share/components/paginationButtons";

export const SeriesPage: FC = () => {
  const [videoSelected, setVideoSelected] = React.useState<Video>();
  const [getVideos, { isLoading, isError, data }] = useLazyVideosQuery();

  React.useEffect(() => {
    getVideos({
      limit: 10,
      offset: 0,
      programType: "serie",
    });
  }, [getVideos]);

  const onTogglePopup = (video?: Video) => {
    setVideoSelected(video);
  };

  const onTaPagination = (url: string) => {
    const params = new URLSearchParams(url);
    const limit = Number(params.get("limit"));
    const offset = Number(params.get("offset"));
    getVideos({
      limit,
      offset,
      programType: "serie",
    });
  };

  return (
    <TemplatePage
      isLoading={isLoading}
      hasError={isError}
      title="Popular Series"
    >
      <Container className="py-4">
        <PaginationButton
          onTaPagination={onTaPagination}
          next={data?.next}
          previous={data?.previous}
        />
        <Row
          xs={{ cols: 1 }}
          sm={3}
          md={4}
          lg={12}
          className="justify-content-center justify-content-sm-start"
        >
          {!!data &&
            data.results
              // .sort((a, b) => a.title.localeCompare(b.title))
              .map((video, index) => (
                <Col
                  key={`card-video-${index}`}
                  className="justify-content-center d-flex p-2"
                >
                  <VideoCard video={video} onSelect={onTogglePopup} />
                </Col>
              ))}
        </Row>
      </Container>

      <VideoModalInfo video={videoSelected} onCloseRequest={onTogglePopup} />
    </TemplatePage>
  );
};
