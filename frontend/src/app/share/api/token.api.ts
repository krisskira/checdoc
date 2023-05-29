import CHECDOC_API from ".";
import { TokenRequesResponse } from "../interfaces/toke.interface";
import { TokeRequestBody } from "../interfaces/toke.interface";

const extendedApi = CHECDOC_API.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    token: builder.mutation<TokenRequesResponse, TokeRequestBody>({
      query: (body) => ({
        url: "/token/",
        body,
      }),
    }),
  }),
});

export const { useTokenMutation } = extendedApi;
