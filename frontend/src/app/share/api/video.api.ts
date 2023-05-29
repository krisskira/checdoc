import CHECDOC_API from ".";
import { VideoRequestBody } from "../interfaces/video.interface";
import {
  Video,
  VideoRequestBodyToCreate,
  VideoRequestResponse,
} from "../interfaces/video.interface";

const extendedApi = CHECDOC_API.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    videos: builder.query<VideoRequestResponse, VideoRequestBody | undefined>({
      providesTags: ["Video"],
      query: (params) => ({
        url: "video",
        params: { ...params, format: "json" },
      }),
    }),
    createVideo: builder.mutation<Video, VideoRequestBodyToCreate>({
      invalidatesTags: ["Video"],
      query: ({ data, image_url }) => {
        const formdata = new FormData();
        formdata.append("title", data.title);
        formdata.append("description", data.description);
        formdata.append("programType", data.programType);
        formdata.append("releaseYear", `${data.releaseYear}`);
        formdata.append("image_url", image_url.uri, image_url.fileName);
        return {
          url: "video",
          method: "POST",
          headers: {
            "Content-Type":
              // 'application/x-www-form-urlencoded'
              "multipart/form-data; boundary=someArbitraryUniqueString",
          },
          body: formdata,
        };
      },
    }),
  }),
});

export const { useCreateVideoMutation, useLazyVideosQuery, useVideosQuery } =
  extendedApi;
