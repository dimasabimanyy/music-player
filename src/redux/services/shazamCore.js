import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e4b97633e3msh7861438796a94c4p113ea9jsn6f632918b5d3",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: "https://shazam-core.p.rapidapi.com/v1/charts/world",
      prepareHeaders: (headers) => {
        headers.set("X-RapidApi-Key", "e4b97633e3msh7861438796a94c4p113ea9jsn6f632918b5d3");

        return headers;
      }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: '/charts/world' })
    })
});

export const {
    useGetTopChartsQuery
} = shazamCoreApi;