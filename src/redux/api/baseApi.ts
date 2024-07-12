import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// https://mechanical-keyboard-shop-server.vercel.app/api/v1

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
  }),
  tagTypes: ["Products", "Product", "Cart", "Carts"],
  endpoints: () => ({}),
});
