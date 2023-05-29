import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BACKEND_HOST = "http://localhost:8000";
export const API_URL = BACKEND_HOST + "/api/v1";

export const CHECDOC_API = createApi({
  reducerPath: "CHECDOC_API",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: () => ({}),
  tagTypes: ["Video"],
});

export default CHECDOC_API;
