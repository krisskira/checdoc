import React, { FC, useMemo, useState } from "react";
import { Video } from "../interfaces/video.interface";
import { BACKEND_HOST } from "../api";

interface Props {
  video: Video;
  onSelect?: (video: Video) => void;
}

const styleBase: React.CSSProperties = {
  width: 150,
  height: 200,
  borderWidth: 1,
  borderRadius: 4,
  borderColor: "black",
  borderStyle: "solid",
  boxSizing: "border-box",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  cursor: "pointer",
  transition: "border 0.3s ease-in-out",
};

const styleHover: React.CSSProperties = {
  borderColor: "white",
  borderWidth: 10,
  opacity: 0.5,
};

const styleNormal: React.CSSProperties = {
  opacity: 1,
};

export const VideoCard: FC<Props> = ({ video, onSelect }) => {
  const [IsHovered, setIsHovered] = useState(false);

  const styleOnChangeHover = useMemo(
    () => (IsHovered ? styleHover : styleNormal),
    [IsHovered]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlerOnClick = () => {
    onSelect?.(video);
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      className="d-flex flex-column"
      onClick={handlerOnClick}
      role="button"
    >
      <div
        style={{
          ...styleBase,
          ...styleOnChangeHover,
          backgroundImage: `url('${
            BACKEND_HOST + video.images["Poster Art"].url
          }')`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <span className="py-2">{video.title}</span>
    </div>
  );
};
