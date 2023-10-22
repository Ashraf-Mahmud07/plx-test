import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => "/products",
    }),
    getProductDetails: builder.query({
      query: (id) => `/products/${id}`
    })
  }),
});

export const { useGetPostQuery, useGetProductDetailsQuery } = baseApi;
