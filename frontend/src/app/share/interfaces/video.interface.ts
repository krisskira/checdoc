import { FormDataImage, PaginationRequestBody, PaginationRequestResponse } from "./request.interface";

export type VIDEO_PROGRAM_TYPE = "movie" | "serie"

export interface Video {
  description: string;
  releaseYear: number;
  title: string;
  programType: VIDEO_PROGRAM_TYPE;
  images: {
    "Poster Art": {
      url: string;
      width: number;
      height: number;
    };
  };
}

export interface VideoRequestBody extends PaginationRequestBody {
  programType?: VIDEO_PROGRAM_TYPE
}

export interface VideoRequestBodyToCreate {
  data: {
    description: string;
    releaseYear: number;
    title: string;
    programType: VIDEO_PROGRAM_TYPE;
  };
  image_url: FormDataImage;
}

export type VideoRequestResponse = PaginationRequestResponse<Video>; //| Video[];

